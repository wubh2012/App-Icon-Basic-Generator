# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vibe Icon is a React-based web application for generating custom application icons. Users can create icons with customizable backgrounds, sizes, corner radius, and choose from built-in SVG icons, Font Awesome icons, or upload custom SVGs. The app supports real-time preview, undo/redo functionality, and exports to PNG or SVG formats.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production (output to dist/)
npm run build

# Preview production build
npm run preview
```

## Architecture

### State Management
- **useHistory Hook** (`src/hooks/useHistory.js`): Custom hook implementing undo/redo functionality with a 50-item history limit. Manages state with refs to track history array and current index.
- **App.jsx**: Root component maintains all configuration state via `useHistory` hook and passes down via props (no Context API or Redux).

### Component Structure
- **App.jsx**: Root component managing global state, keyboard shortcuts (Ctrl+Z/Y), and orchestrating ControlPanel + PreviewArea
- **ControlPanel.jsx**: Left panel aggregating all configuration components (size, color, icon, text)
- **PreviewArea.jsx**: Right panel displaying live preview and export buttons
- **IconCanvas.jsx**: Renders the actual icon preview with background, icon, and optional text label
- Sub-components: SizeSelector, ColorPicker, IconSelector, TextLabelConfig

### Icon System
Three icon sources are supported:
1. **Built-in SVG icons**: Located in `src/assets/icons/`, loaded via fetch
2. **Font Awesome icons**: Configured in `src/config/fontAwesomeIcons.js`, converted to SVG strings via `fontAwesomeHelper.js`
3. **Custom uploads**: User-provided SVG files

Icon data flows as SVG strings through the `iconSvg` config property.

### Export System (`src/utils/export.js`)
- **PNG Export**: Uses html2canvas to capture IconCanvas DOM element at 2x scale
- **SVG Export**: Programmatically constructs SVG XML with rect background + transformed icon group
- Text labels are excluded from exports (preview-only feature)

### Configuration Object
The main config object structure:
```javascript
{
  size: number,           // Icon dimensions (128, 96, 64, 48, or custom)
  cornerRadius: number,   // 0-30px
  backgroundColor: string, // Hex color
  iconSvg: string,        // SVG content as string
  iconColor: string,      // Hex color for icon fill
  iconScale: number,      // 0.4-0.9 (icon size relative to container)
  label: string,          // Text label (preview only)
  fontSize: number,       // Label font size
  textColor: string       // Label color
}
```

## Key Implementation Details

### Adding Built-in Icons
1. Place SVG file in `src/assets/icons/`
2. Add entry to `BUILTIN_ICONS` array in `src/components/IconSelector.jsx`:
   ```javascript
   { name: 'Icon Name', path: '/src/assets/icons/filename.svg' }
   ```

### Modifying Preset Colors
Edit `PRESET_COLORS` array in `src/components/ColorPicker.jsx`:
```javascript
{ name: 'Color Name', value: '#hexcode' }
```

### Modifying Preset Sizes
Edit `PRESET_SIZES` array in `src/components/SizeSelector.jsx`

### Font Awesome Integration
- Icons are imported from `@fortawesome/free-solid-svg-icons` and `@fortawesome/free-brands-svg-icons`
- `fontAwesomeHelper.js` provides `iconToSvg()` to convert icon definitions to SVG strings
- `fontAwesomeIcons.js` defines curated icon categories displayed in the UI

## Tech Stack
- React 18 with Vite
- Tailwind CSS for styling
- html2canvas for PNG export
- Font Awesome for icon library
- No state management libraries (uses React hooks only)
