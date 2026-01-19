import React, { useState } from 'react';

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

const IconSelector = ({ selectedIcon, onIconSelect, onCustomIconUpload }) => {
  const [icons, setIcons] = useState(BUILTIN_ICONS);

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

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">选择图标</label>
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
