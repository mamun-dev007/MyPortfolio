# Button Style Guide - Portfolio Website

## Standardized Button Colors and Styles

All buttons across the portfolio website now follow consistent color schemes and styling patterns for both light and dark modes.

### Primary Color Palette
- **Purple**: `#a855f7` (purple-500) to `#7c3aed` (purple-600)
- **Pink**: `#ec4899` (pink-500) to `#db2777` (pink-600)
- **Gradient**: `from-purple-600 to-pink-600`

### Button Variants

#### 1. Primary Button (Main CTA)
```css
/* Dark & Light Mode */
bg-gradient-to-r from-purple-600 to-pink-600 text-white 
hover:from-purple-700 hover:to-pink-700 
shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
```
**Usage**: Main call-to-action buttons, form submissions, primary actions

#### 2. Secondary Button (Outline)
```css
/* Dark Mode */
border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white

/* Light Mode */
border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white
```
**Usage**: Secondary actions, download buttons, alternative CTAs

#### 3. Filter Buttons (Active)
```css
/* Dark & Light Mode */
bg-gradient-to-r from-purple-500 to-pink-500 text-white (dark)
bg-gradient-to-r from-purple-600 to-pink-600 text-white (light)
shadow-lg shadow-purple-500/50
```
**Usage**: Active category filters, selected states

#### 4. Filter Buttons (Inactive)
```css
/* Dark Mode */
bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border-gray-700

/* Light Mode */
bg-white text-gray-600 hover:bg-gray-50 border-gray-200
```
**Usage**: Inactive category filters, unselected states

#### 5. Icon Buttons
```css
/* Dark Mode */
border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white

/* Light Mode */
border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white
```
**Usage**: Social media icons, action icons, circular buttons

#### 6. Navigation Links
```css
/* Active State */
bg-purple-600/80 text-white

/* Inactive State - Dark Mode */
text-white hover:text-purple-400

/* Inactive State - Light Mode */
text-gray-800 hover:text-purple-600
```
**Usage**: Navigation menu items, internal links

### Components Updated

#### ✅ Navbar
- Theme toggle button: Consistent purple border and hover states
- Hire Me button: Primary gradient style
- Navigation links: Consistent hover colors
- Mobile menu buttons: Standardized active/inactive states

#### ✅ Banner
- Download CV button: Secondary outline style
- Social media icons: Icon button style with consistent borders

#### ✅ Footer
- Newsletter subscribe button: Primary gradient style
- Social media icons: Icon button style
- Scroll to top button: Primary gradient style

#### ✅ All Modal Forms
- Submit buttons: Primary gradient style
- Input fields: Consistent focus states with purple-500 ring

#### ✅ Filter Systems
- Category filters: Active/inactive states with consistent colors
- All sections (Projects, Skills, Experience, Blog): Unified filter styling

#### ✅ Card Hover States
- All cards: Consistent purple border on hover
- Shadow effects: Unified purple glow effects

### Hover Effects
All buttons include consistent hover effects:
- **Scale**: `hover:scale-105` for buttons, `hover:scale-1.1` for icons
- **Shadows**: Purple-tinted shadows that intensify on hover
- **Color Transitions**: Smooth color changes with `transition-all duration-300`

### Accessibility
- All buttons maintain proper contrast ratios
- Focus states include visible purple ring indicators
- Hover states provide clear visual feedback
- Touch targets meet minimum size requirements (44px)

### Implementation
The standardized styles ensure:
1. **Visual Consistency**: All buttons follow the same color scheme
2. **Theme Compatibility**: Proper contrast in both light and dark modes
3. **User Experience**: Predictable interaction patterns
4. **Brand Identity**: Consistent purple/pink gradient branding
5. **Accessibility**: WCAG compliant color contrasts and focus states

All route buttons and interactive elements now share the same visual language, creating a cohesive and professional user experience across the entire portfolio website.