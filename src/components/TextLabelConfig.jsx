import React from 'react';

const TextLabelConfig = ({ label, onLabelChange, fontSize, onFontSizeChange, textColor, onTextColorChange }) => {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">图标名称</label>
        <input
          type="text"
          value={label}
          onChange={(e) => onLabelChange(e.target.value)}
          placeholder="例如: 日程"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={20}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">字号</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            value={fontSize}
            onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
            min="12"
            max="24"
            className="flex-1"
          />
          <span className="text-sm text-gray-600 w-12">{fontSize}px</span>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">文字颜色</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={textColor}
            onChange={(e) => onTextColorChange(e.target.value)}
            className="h-8 w-16 border border-gray-300 rounded cursor-pointer"
          />
          <input
            type="text"
            value={textColor}
            onChange={(e) => onTextColorChange(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded flex-1 text-sm font-mono"
            placeholder="#333333"
          />
        </div>
      </div>
    </div>
  );
};

export default TextLabelConfig;
