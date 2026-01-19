import React, { useRef } from 'react';
import IconCanvas from './IconCanvas';

const PreviewArea = ({ config, onExport }) => {
  const canvasRef = useRef(null);

  const handleExport = (format) => {
    onExport(format, canvasRef.current);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-6">
      <h2 className="text-xl font-bold text-gray-800">实时预览</h2>

      <div className="flex flex-col items-center gap-4 p-8 bg-gray-50 rounded-lg">
        <IconCanvas
          ref={canvasRef}
          size={config.size}
          cornerRadius={config.cornerRadius}
          backgroundColor={config.backgroundColor}
          iconSvg={config.iconSvg}
          iconColor={config.iconColor}
          iconScale={config.iconScale}
        />

        {config.label && (
          <div
            className="text-center font-sans max-w-full px-2"
            style={{
              fontSize: `${config.fontSize}px`,
              color: config.textColor,
              maxWidth: `${config.size}px`,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {config.label}
          </div>
        )}
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={() => handleExport('png')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          导出 PNG
        </button>
        <button
          onClick={() => handleExport('svg')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          导出 SVG
        </button>
      </div>

      <div className="text-sm text-gray-500 text-center">
        提示: 导出时不包含文字标签
      </div>
    </div>
  );
};

export default PreviewArea;
