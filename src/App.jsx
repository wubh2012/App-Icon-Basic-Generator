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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        <header className="text-center py-4">
          <h1 className="text-3xl font-bold text-slate-800">应用图标生成器</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PreviewArea config={config} onExport={handleExport} canUndo={canUndo} canRedo={canRedo} undo={undo} redo={redo} />
          <ControlPanel config={config} onConfigChange={setConfig} />
        </div>
      </div>
    </div>
  );
}

export default App;
