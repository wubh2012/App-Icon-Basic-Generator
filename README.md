# 应用图标生成器

一个快速、易用的网页应用，用于生成精美的应用图标。

## 功能特性

### ✨ 核心功能
- **圆角正方形容器**: 统一的圆角设计，可自定义圆角半径（0-30px）
- **多种尺寸预设**: 128×128, 96×96, 64×64, 48×48，支持自定义尺寸
- **丰富的色彩系统**: 8种预设高饱和度纯色 + 自定义Hex颜色选择器
- **内置图标库**: 10个精心设计的扁平化SVG图标（日历、表格、下载、消息等）
- **自定义图标**: 支持上传自定义SVG文件
- **图标样式**: 可调整图标颜色、大小比例（40%-90%）
- **文字标签**: 支持添加文字标签，可配置字号、颜色（仅用于预览）

### 🎨 交互体验
- **实时预览**: 所有参数调整立即显示效果
- **撤销/重做**: 支持操作历史记录（快捷键：Ctrl+Z / Ctrl+Y）
- **可视化操作**: 色板选择、滑块调整，减少手动输入
- **响应式设计**: 适配桌面和移动设备

### 📥 导出功能
- **PNG导出**: 高清透明背景PNG图片（2x分辨率）
- **SVG导出**: 矢量图，适合缩放
- **导出规则**: 导出的图标不包含文字标签

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

应用将在 http://localhost:5173/ 启动

### 构建生产版本
```bash
npm run build
```

构建后的文件位于 `dist/` 目录

### 预览生产构建
```bash
npm run preview
```

## 使用说明

### 1. 基础配置
1. 在左侧控制面板选择图标尺寸
2. 调整圆角半径滑块
3. 从色板中选择背景颜色，或输入自定义Hex值

### 2. 选择图标
- 从内置图标库中选择一个图标
- 或者上传自定义SVG文件

### 3. 自定义样式
- 调整图标大小比例
- 选择图标颜色

### 4. 添加文字标签（可选）
- 输入图标名称
- 调整字号和文字颜色
- 注意：文字标签仅用于预览，导出时不会包含

### 5. 导出
- 点击"导出PNG"或"导出SVG"按钮
- 图标将以文件形式下载到您的设备

## 技术栈

- **React 18** - UI框架
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **html2canvas** - PNG导出
- **file-saver** - 文件下载

## 项目结构

```
vibe_icon/
├── src/
│   ├── components/           # React组件
│   │   ├── IconCanvas.jsx   # 图标画布
│   │   ├── ControlPanel.jsx # 控制面板
│   │   ├── PreviewArea.jsx  # 预览区域
│   │   ├── SizeSelector.jsx # 尺寸选择器
│   │   ├── ColorPicker.jsx  # 颜色选择器
│   │   ├── IconSelector.jsx # 图标选择器
│   │   └── TextLabelConfig.jsx # 文字配置
│   ├── hooks/
│   │   └── useHistory.js    # 撤销/重做Hook
│   ├── utils/
│   │   └── export.js        # 导出工具函数
│   ├── assets/
│   │   └── icons/           # 内置SVG图标库
│   ├── styles/
│   │   └── index.css        # 全局样式
│   ├── App.jsx              # 主应用组件
│   └── main.jsx             # 应用入口
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 快捷键

- `Ctrl + Z` - 撤销
- `Ctrl + Y` / `Ctrl + Shift + Z` - 重做

## 开发说明

### 添加新图标到内置库

1. 将SVG文件放到 `src/assets/icons/` 目录
2. 在 `src/components/IconSelector.jsx` 中的 `BUILTIN_ICONS` 数组添加新图标配置

### 自定义预设颜色

在 `src/components/ColorPicker.jsx` 中的 `PRESET_COLORS` 数组修改颜色配置

### 自定义预设尺寸

在 `src/components/SizeSelector.jsx` 中的 `PRESET_SIZES` 数组修改尺寸配置

## 许可证

MIT
