import React from 'react';

const PRESET_SIZES = [
  { label: '128×128', value: 128 },
  { label: '96×96', value: 96 },
  { label: '64×64', value: 64 },
  { label: '48×48', value: 48 },
];

const SizeSelector = ({ size, onSizeChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">图标尺寸</label>
      <div className="flex gap-2 flex-wrap">
        {PRESET_SIZES.map((preset) => (
          <button
            key={preset.value}
            onClick={() => onSizeChange(preset.value)}
            className={`px-3 py-1.5 rounded border text-sm ${
              size === preset.value
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">自定义:</span>
        <input
          type="number"
          value={size}
          onChange={(e) => onSizeChange(parseInt(e.target.value) || 128)}
          className="px-2 py-1 border border-gray-300 rounded w-20 text-sm"
          min="32"
          max="512"
        />
        <span className="text-sm text-gray-600">px</span>
      </div>
    </div>
  );
};

export default SizeSelector;
