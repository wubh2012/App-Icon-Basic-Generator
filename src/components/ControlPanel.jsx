import React, { useState } from 'react';
import SizeSelector from './SizeSelector';
import ColorPicker from './ColorPicker';
import IconSelector from './IconSelector';
import TextLabelConfig from './TextLabelConfig';

const Section = ({ id, title, children, isExpanded, onToggle }) => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className="w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-left"
      >
        <span className="font-medium text-slate-700">{title}</span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="p-4 space-y-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const ControlPanel = ({ config, onConfigChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    icon: true,
    advanced: false,
    label: false
  });

  const updateConfig = (key, value) => {
    onConfigChange({ ...config, [key]: value });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-3 max-h-[calc(100vh-12rem)] overflow-y-auto">
      <Section id="basic" title="基础设置" isExpanded={expandedSections.basic} onToggle={toggleSection}>
        <SizeSelector
          size={config.size}
          onSizeChange={(value) => updateConfig('size', value)}
        />

        <ColorPicker
          color={config.backgroundColor}
          onColorChange={(value) => updateConfig('backgroundColor', value)}
          label="背景颜色"
        />
      </Section>

      <Section id="icon" title="图标设置" isExpanded={expandedSections.icon} onToggle={toggleSection}>
        <IconSelector
          selectedIcon={config.iconSvg}
          onIconSelect={(svg) => updateConfig('iconSvg', svg)}
          onCustomIconUpload={(svg) => updateConfig('iconSvg', svg)}
        />

        <ColorPicker
          color={config.iconColor}
          onColorChange={(value) => updateConfig('iconColor', value)}
          label="图标颜色"
        />
      </Section>

      <Section id="advanced" title="高级设置" isExpanded={expandedSections.advanced} onToggle={toggleSection}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">圆角半径</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              value={config.cornerRadius}
              onChange={(e) => updateConfig('cornerRadius', parseInt(e.target.value))}
              min="0"
              max="30"
              className="flex-1"
            />
            <span className="text-sm text-slate-600 w-12">{config.cornerRadius}px</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">图标大小</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              value={config.iconScale * 100}
              onChange={(e) => updateConfig('iconScale', parseInt(e.target.value) / 100)}
              min="40"
              max="90"
              className="flex-1"
            />
            <span className="text-sm text-slate-600 w-12">{Math.round(config.iconScale * 100)}%</span>
          </div>
        </div>
      </Section>

      <Section id="label" title="文字标签（仅预览）" isExpanded={expandedSections.label} onToggle={toggleSection}>
        <TextLabelConfig
          label={config.label}
          onLabelChange={(value) => updateConfig('label', value)}
          fontSize={config.fontSize}
          onFontSizeChange={(value) => updateConfig('fontSize', value)}
          textColor={config.textColor}
          onTextColorChange={(value) => updateConfig('textColor', value)}
        />
      </Section>
    </div>
  );
};

export default ControlPanel;
