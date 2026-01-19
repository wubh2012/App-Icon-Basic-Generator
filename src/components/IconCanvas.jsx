import { forwardRef } from 'react';

const IconCanvas = forwardRef(({
  size = 128,
  cornerRadius = 12,
  backgroundColor = '#2563eb',
  iconSvg = null,
  iconColor = '#ffffff',
  iconScale = 0.6
}, ref) => {
  // Extract viewBox from original SVG
  const viewBoxMatch = iconSvg?.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 512 512';

  // Extract inner SVG content
  const innerContent = iconSvg?.replace(/<\/?svg[^>]*>/g, '') || '';

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
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox={viewBox}
            fill={iconColor}
            dangerouslySetInnerHTML={{ __html: innerContent }}
          />
        </div>
      )}
    </div>
  );
});

IconCanvas.displayName = 'IconCanvas';

export default IconCanvas;
