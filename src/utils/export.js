import html2canvas from 'html2canvas';

export const exportToPNG = async (element, filename = 'icon.png') => {
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 2, // 高清导出
    });

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
    });
  } catch (error) {
    console.error('PNG export failed:', error);
    alert('导出失败，请重试');
  }
};

export const exportToSVG = (config, filename = 'icon.svg') => {
  const { size, cornerRadius, backgroundColor, iconSvg, iconColor, iconScale } = config;

  const iconSize = size * iconScale;
  const iconOffset = (size - iconSize) / 2;

  // 处理iconSvg，替换fill颜色
  let processedIcon = iconSvg || '';
  processedIcon = processedIcon.replace(/fill="[^"]*"/g, `fill="${iconColor}"`);
  processedIcon = processedIcon.replace(/currentColor/g, iconColor);

  // 提取SVG路径内容
  const pathMatch = processedIcon.match(/<svg[^>]*>(.*?)<\/svg>/s);
  const pathContent = pathMatch ? pathMatch[1] : '';

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="${backgroundColor}"/>
  <g transform="translate(${iconOffset}, ${iconOffset}) scale(${iconScale})">
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${iconColor}">
      ${pathContent}
    </svg>
  </g>
</svg>`;

  const blob = new Blob([svgContent], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};
