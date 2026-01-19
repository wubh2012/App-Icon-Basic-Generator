import React, { useEffect } from 'react';
import ControlPanel from './components/ControlPanel';
import PreviewArea from './components/PreviewArea';
import useHistory from './hooks/useHistory';
import { exportToPNG, exportToSVG } from './utils/export';

const DEFAULT_CONFIG = {
  size: 128,
  cornerRadius: 12,
  backgroundColor: '#2563eb',
  iconSvg: null,
  iconColor: '#ffffff',
  iconScale: 0.6,
  label: '',
  fontSize: 14,
  textColor: '#333333',
};

function App() {
  const { state: config, setState: setConfig, undo, redo, canUndo, canRedo } = useHistory(DEFAULT_CONFIG);

  // 加载默认图标（优先内置 SVG，失败则尝试 Font Awesome 日历图标作为回退）
  useEffect(() => {
    const loadDefaultIcon = async () => {
      try {
        // 尝试加载内置 SVG
        const response = await fetch('/src/assets/icons/calendar.svg');
        const svgContent = await response.text();
        setConfig({ ...config, iconSvg: svgContent });
        return;
      } catch (e) {
        console.warn('内置 SVG 加载失败，尝试 Font Awesome 作为回退');
      }
      try {
        const { getIconByName } = await import('./utils/fontAwesomeHelper.js');
        const iconDef = getIconByName('faCalendar');
        if (iconDef) {
          const { icon } = await import('@fortawesome/fontawesome-svg-core');
          const svgObj = icon(iconDef, { styles: { color: '#ffffff', 'font-size': '128px' } });
          setConfig({ ...config, iconSvg: svgObj.html[0] });
        }
      } catch (err) {
        console.error('Font Awesome 回退加载失败:', err);
      }
    };
    if (!config.iconSvg) {
      loadDefaultIcon();
    }
  }, []);

  const handleExport = (format, element) => {
    const filename = `${config.label || 'icon'}.${format}`;

    if (format === 'png') {
      exportToPNG(element, filename);
    } else if (format === 'svg') {
      exportToSVG(config, filename);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
      e.preventDefault();
      undo();
    } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
      e.preventDefault();
      redo();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">应用图标生成器</h1>
          <p className="text-gray-600">快速创建精美的应用图标</p>
        </header>

        <div className="flex gap-4 mb-4 justify-center">
          <button
            onClick={undo}
            disabled={!canUndo}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              canUndo
                ? 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            ← 撤销
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              canRedo
                ? 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            重做 →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ControlPanel config={config} onConfigChange={setConfig} />
          <PreviewArea config={config} onExport={handleExport} />
        </div>

        <footer className="text-center mt-8 text-sm text-gray-600">
          提示: 使用 Ctrl+Z / Ctrl+Y 快捷键进行撤销/重做
        </footer>
      </div>
    </div>
  );
}

export default App;
