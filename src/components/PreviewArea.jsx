import React, { useRef } from 'react';
import IconCanvas from './IconCanvas';

const PreviewArea = ({ config, onExport, onReset, canUndo, canRedo, undo, redo }) => {
  const canvasRef = useRef(null);

  const handleExport = (format) => {
    onExport(format, canvasRef.current);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4 p-12 bg-slate-50 rounded-xl w-full">
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

        <div className="flex gap-3 items-center">
          <button
            onClick={undo}
            disabled={!canUndo}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              canUndo
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                : 'bg-slate-50 text-slate-300 cursor-not-allowed'
            }`}
          >
            ← 撤销
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              canRedo
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                : 'bg-slate-50 text-slate-300 cursor-not-allowed'
            }`}
          >
            重做 →
          </button>
          <button
            onClick={onReset}
            className="px-3 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-sm transition-colors"
          >
            🔄 重置
          </button>
          <div className="w-px h-6 bg-slate-200"></div>
          <button
            onClick={() => handleExport('png')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
          >
            导出 PNG
          </button>
          <button
            onClick={() => handleExport('svg')}
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
          >
            导出 SVG
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewArea;
