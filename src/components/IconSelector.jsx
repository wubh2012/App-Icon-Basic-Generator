import { useState } from 'react';
import { ICON_CATEGORIES } from '../config/fontAwesomeIcons.js';
import { iconToSvg, getIconByName } from '../utils/fontAwesomeHelper.js';

// 导入所有内置图标
const BUILTIN_ICONS = [
  { name: '日历', path: '/src/assets/icons/calendar.svg' },
  { name: '收集表', path: '/src/assets/icons/table.svg' },
  { name: '下载', path: '/src/assets/icons/download.svg' },
  { name: '消息', path: '/src/assets/icons/message.svg' },
  { name: '培训', path: '/src/assets/icons/training.svg' },
  { name: '勾选', path: '/src/assets/icons/check.svg' },
  { name: '设置', path: '/src/assets/icons/settings.svg' },
  { name: '信息', path: '/src/assets/icons/info.svg' },
  { name: '星星', path: '/src/assets/icons/star.svg' },
  { name: '喜欢', path: '/src/assets/icons/heart.svg' },
];

const IconSelector = ({ onIconSelect, onCustomIconUpload }) => {
  const [tab, setTab] = useState('builtin'); // 'builtin' | 'fontawesome' | 'custom'
  const [customName, setCustomName] = useState('');

  const [icons] = useState(BUILTIN_ICONS);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const svgContent = event.target?.result;
        onCustomIconUpload(svgContent);
      };
      reader.readAsText(file);
    }
  };

  const loadIcon = async (path) => {
    try {
      const response = await fetch(path);
      const svgContent = await response.text();
      onIconSelect(svgContent);
    } catch (error) {
      console.error('Failed to load icon:', error);
    }
  };

  const handleFontAwesomeClick = (iconDef) => {
    const svg = iconToSvg(iconDef, '#ffffff');
    onIconSelect(svg);
  };

  const handleCustomAdd = () => {
    if (!customName) return;
    const iconDef = getIconByName(customName);
    if (iconDef) {
      const svg = iconToSvg(iconDef, '#ffffff');
      onIconSelect(svg);
      setCustomName('');
    } else {
      alert('未找到该图标，请在 Font Awesome 官网查找并输入正确名称');
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        <button
          className={`px-3 py-1 rounded ${tab === 'builtin' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-white text-gray-700 border border-gray-200'}`}
          onClick={() => setTab('builtin')}
        >
          内置 SVG
        </button>
        <button
          className={`px-3 py-1 rounded ${tab === 'fontawesome' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-white text-gray-700 border border-gray-200'}`}
          onClick={() => setTab('fontawesome')}
        >
          Font Awesome 精选
        </button>
        <button
          className={`px-3 py-1 rounded ${tab === 'custom' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-white text-gray-700 border border-gray-200'}`}
          onClick={() => setTab('custom')}
        >
          自定义 FA 图标
        </button>
      </div>

      {tab === 'builtin' && (
        <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded">
          {icons.map((icon) => (
            <button
              key={icon.name}
              onClick={() => loadIcon(icon.path)}
              className="p-3 border border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50 transition-all flex flex-col items-center gap-1"
              title={icon.name}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={icon.path} alt={icon.name} className="w-full h-full" />
              </div>
              <span className="text-xs text-gray-600 truncate w-full text-center">{icon.name}</span>
            </button>
          ))}
        </div>
      )}

      {tab === 'fontawesome' && (
        <div className="space-y-4">
          {ICON_CATEGORIES.map((cat) => (
            <div key={cat.key} className="space-y-2">
              <div className="font-semibold text-sm text-gray-700">{cat.name}</div>
              <div className="grid grid-cols-6 gap-2">
                {cat.icons?.map((iconItem, idx) => {
                  if (!iconItem || !iconItem.iconDef) return null;
                  const svg = iconToSvg(iconItem.iconDef, '#333');
                  return (
                    <button
                      key={idx}
                      onClick={() => handleFontAwesomeClick(iconItem.iconDef)}
                      className="p-2 border border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50"
                      title={iconItem.name}
                    >
                      <span dangerouslySetInnerHTML={{ __html: svg }} />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'custom' && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">自定义 Font Awesome 图标</label>
          <div className="flex items-center gap-2">
            <input
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="输入图标名，如 rocket"
              className="flex-1 border rounded px-2 py-1"
            />
            <button onClick={handleCustomAdd} className="px-3 py-1 bg-blue-500 text-white rounded">添加</button>
          </div>
          <div className="text-sm text-gray-500">提示：引导用户访问 fontawesome.com/icons 查找图标名</div>
        </div>
      )}

      <div className="pt-2">
        <label className="block">
          <span className="text-sm text-gray-600">上传自定义 SVG:</span>
          <input
            type="file"
            accept=".svg,image/svg+xml"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 mt-1
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-medium
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
};

export default IconSelector;
