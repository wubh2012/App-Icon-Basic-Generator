import React from 'react';
import SizeSelector from './SizeSelector';
import ColorPicker from './ColorPicker';
import IconSelector from './IconSelector';
import TextLabelConfig from './TextLabelConfig';

const ControlPanel = ({ config, onConfigChange }) => {
  const updateConfig = (key, value) => {
    onConfigChange({ ...config, [key]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6 overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-800">配置面板</h2>

      <SizeSelector
        size={config.size}
        onSizeChange={(value) => updateConfig('size', value)}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">圆角半径</label>
        <div className="flex items-center gap-3">
          <input
            type="range"
            value={config.cornerRadius}
            onChange={(e) => updateConfig('cornerRadius', parseInt(e.target.value))}
            min="0"
            max="30"
            className="flex-1"
          />
          <span className="text-sm text-gray-600 w-12">{config.cornerRadius}px</span>
        </div>
      </div>

      <ColorPicker
        color={config.backgroundColor}
        onColorChange={(value) => updateConfig('backgroundColor', value)}
        label="背景颜色"
      />

      <IconSelector
        selectedIcon={config.iconSvg}
        onIconSelect={(svg) => updateConfig('iconSvg', svg)}
        onCustomIconUpload={(svg) => updateConfig('iconSvg', svg)}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">图标大小</label>
        <div className="flex items-center gap-3">
          <input
            type="range"
            value={config.iconScale * 100}
            onChange={(e) => updateConfig('iconScale', parseInt(e.target.value) / 100)}
            min="40"
            max="90"
            className="flex-1"
          />
          <span className="text-sm text-gray-600 w-12">{Math.round(config.iconScale * 100)}%</span>
        </div>
      </div>

      <ColorPicker
        color={config.iconColor}
        onColorChange={(value) => updateConfig('iconColor', value)}
        label="图标颜色"
      />

      <hr className="border-gray-200" />

      <TextLabelConfig
        label={config.label}
        onLabelChange={(value) => updateConfig('label', value)}
        fontSize={config.fontSize}
        onFontSizeChange={(value) => updateConfig('fontSize', value)}
        textColor={config.textColor}
        onTextColorChange={(value) => updateConfig('textColor', value)}
      />
    </div>
  );
};

export default ControlPanel;
