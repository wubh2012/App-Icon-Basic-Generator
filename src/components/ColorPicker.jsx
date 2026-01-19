import React from 'react';

const PRESET_COLORS = [
  { name: '深蓝色', value: '#2563eb' },
  { name: '浅蓝色', value: '#3b82f6' },
  { name: '橙色', value: '#f97316' },
  { name: '粉红色', value: '#ec4899' },
  { name: '绿色', value: '#10b981' },
  { name: '紫色', value: '#8b5cf6' },
  { name: '红色', value: '#ef4444' },
  { name: '黄色', value: '#eab308' },
];

const ColorPicker = ({ color, onColorChange, label = "背景颜色" }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="grid grid-cols-4 gap-2">
        {PRESET_COLORS.map((preset) => (
          <button
            key={preset.value}
            onClick={() => onColorChange(preset.value)}
            className={`w-full h-10 rounded border-2 transition-all ${
              color === preset.value ? 'border-gray-900 scale-105' : 'border-gray-300'
            }`}
            style={{ backgroundColor: preset.value }}
            title={preset.name}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">自定义:</span>
        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="h-8 w-16 border border-gray-300 rounded cursor-pointer"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded flex-1 text-sm font-mono"
          placeholder="#000000"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
