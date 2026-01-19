import React, { forwardRef } from 'react';

const IconCanvas = forwardRef(({
  size = 128,
  cornerRadius = 12,
  backgroundColor = '#2563eb',
  iconSvg = null,
  iconColor = '#ffffff',
  iconScale = 0.6
}, ref) => {
  return (
    <div
      ref={ref}
      className="inline-flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${cornerRadius}px`,
        backgroundColor: backgroundColor,
      }}
    >
      {iconSvg && (
        <div
          className="flex items-center justify-center"
          style={{
            width: `${size * iconScale}px`,
            height: `${size * iconScale}px`,
            color: iconColor,
          }}
          dangerouslySetInnerHTML={{ __html: iconSvg }}
        />
      )}
    </div>
  );
});

IconCanvas.displayName = 'IconCanvas';

export default IconCanvas;
