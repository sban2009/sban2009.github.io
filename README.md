# Personal Portfolio Website

A modern, responsive portfolio website with dark mode support and JSON-based configuration for easy content management.

## 🌟 Key Features

### ✅ **Dark Mode Support**

- **Smart Theme Detection**: Automatically detects user's system preference
- **Three Theme Modes**: Light, Dark, and System (follows OS setting)
- **Persistent Settings**: Remembers user's theme choice across sessions
- **Smooth Transitions**: All theme changes are animated for better UX

### ✅ **Mobile-First Responsive Design**

- **Mobile Navigation**: Collapsible hamburger menu for small screens
- **Touch-Friendly**: Optimized button sizes and interactions
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Performance Optimized**: Fast loading on mobile devices

### ✅ **JSON-Based Configuration**

- **Single Source of Truth**: All content managed through `config.json`
- **Easy Updates**: Change text, links, and content without touching HTML
- **API Integration Ready**: Structure supports future LinkedIn/GitHub API integration
- **Maintainable**: Clean separation of content and presentation

### ✅ **Multi-Page Architecture**

- **Home Page**: Hero section with skills and featured projects
- **About Page**: Detailed personal story and timeline
- **Projects Page**: Filterable project showcase with GitHub stats
- **Blog Page**: Article listings with Medium integration
- **Contact Page**: Contact form and social media links

## 🎨 Design System

### Theme Colors

- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#64748b` (Slate)  
- **Accent**: `#0ea5e9` (Sky Blue)
- **Dark Mode**: Automatic color scheme inversion with proper contrast

### Font System

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

## 📱 Mobile Optimization Features

- **Touch-Optimized**: 44px minimum touch targets
- **Readable Typography**: Proper font sizes for mobile reading
- **Performance**: Optimized images and minimal JavaScript
- **Navigation**: Easy-to-use mobile menu system
- **Accessibility**: ARIA labels and keyboard navigation support

## 🔧 Technical Implementation

### Theme System

```javascript
// Automatic system preference detection
const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Three-state theme toggle: light → dark → system → light
toggleTheme() {
    const themes = ['light', 'dark', 'system'];
    // Cycles through all theme options
}
```

### JSON Configuration Structure

```json
{
  "siteInfo": { "title", "description", "author", "location", "tagline" },
  "profile": { "name", "title", "image", "email", "currentCompany" },
  "navigation": { "home", "about", "skills", "projects", "contact" },
  "socialLinks": [{ "name", "url", "icon" }],
  "about": { "sectionTitle", "introduction", "quickFacts" },
  "skills": { "sectionTitle", "categories": [{ "title", "icon", "skills" }] },
  "projects": { "sectionTitle", "featured": [{ "title", "description", "technologies", "githubUrl" }] },
  "contact": { "sectionTitle", "description", "methods" },
  "footer": { "copyright", "sourceText", "sourceUrl" },
  "theme": { "defaultMode", "enableDarkMode" }
}
```

## 🚀 Getting Started

### Quick Setup

1. **Clone or download** the repository
2. **Edit `config.json`** to customize your content
3. **Replace profile image** with your own
4. **Deploy** to GitHub Pages, Netlify, or any hosting provider

### Customizing Content

All content can be modified through the `config.json` file:

```bash
# Edit your information
nano config.json

# Update profile image
# Replace the image URL in config.json or use local image
```

## 📄 Page Structure

### index.html - Landing Page

- Hero section with profile
- Skills overview  
- Featured projects
- Contact links
- Smooth scrolling navigation

### about.html - About Page

- Detailed personal story
- Professional timeline
- Skills and interests
- Philosophy and values

### projects.html - Projects Showcase

- Filterable project grid
- Detailed project cards
- GitHub statistics
- Technology tags
- Project status badges

### blog.html - Blog Page

- Article listings
- Medium integration
- Technical writing
- Thought leadership

### contact.html - Contact Page

- Contact form
- Social media links
- Professional networks
- Location/availability

## 🎯 API Integration Options

### LinkedIn API (Requires Approval)

LinkedIn's API requires special approval for profile data access. For most personal portfolios, manual updates through `config.json` are recommended.

### GitHub API (Ready to Use)

The portfolio includes GitHub API integration for dynamic data:

```javascript
// Auto-fetch GitHub repositories
async function updateGitHubData() {
    const profile = await api.getGitHubProfile('sban2009');
    const repos = await api.getGitHubRepos('sban2009');
    // Update display with fresh data
}
```

## 🔄 Theme Implementation

### CSS Variables

```css
:root {
  --primary-color: #2563eb;
  --bg-primary: #ffffff;
  /* Light mode defaults */
}

:root[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  /* Dark mode overrides */
}

@media (prefers-color-scheme: dark) {
  :root[data-theme="system"] {
    /* System dark mode */
  }
}
```

### JavaScript Theme Control

```javascript
// Theme detection and management
class PortfolioApp {
    constructor() {
        this.currentTheme = this.getStoredTheme() || 'system';
        this.initTheme();
    }
    
    toggleTheme() {
        const themes = ['light', 'dark', 'system'];
        const currentIndex = themes.indexOf(this.currentTheme);
        this.currentTheme = themes[(currentIndex + 1) % themes.length];
        // Apply theme and save preference
    }
}
```

## 🛠️ Features Implemented

- ✅ **Dark Mode Switcher**: System preference detection with manual override
- ✅ **Mobile-Friendly**: Responsive design with touch optimization
- ✅ **External CSS**: All styles moved to `styles.css`
- ✅ **JSON Configuration**: Single-point content management
- ✅ **Multi-Page Support**: Navigation between different sections
- ✅ **Theme Persistence**: Remembers user preference
- ✅ **Accessibility**: ARIA labels and keyboard navigation
- ✅ **Performance**: Optimized loading and animations

## 📊 File Structure

```text
/Personal-Portfolio/
├── index.html          # Main landing page
├── about.html           # Detailed about page
├── projects.html        # Projects showcase
├── blog.html           # Blog/articles page
├── contact.html        # Contact information
├── styles.css          # All CSS styles
├── scripts.js          # JavaScript functionality
├── config.json         # Content configuration
└── README.md           # This documentation
```

## 🔧 Customization Guide

### Adding New Projects

Edit `config.json`:

```json
{
  "projects": {
    "featured": [
      {
        "title": "Your New Project",
        "description": "Brief description",
        "longDescription": "Detailed explanation",
        "technologies": ["Tech1", "Tech2"],
        "githubUrl": "https://github.com/username/repo",
        "liveUrl": "https://your-demo.com",
        "status": "active"
      }
    ]
  }
}
```

### Updating Colors

Modify CSS variables in `styles.css`:

```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
}
```

### Adding Social Links

Update `config.json`:

```json
{
  "socialLinks": [
    {
      "name": "Platform Name",
      "url": "https://platform.com/username",
      "icon": "fab fa-platform-icon"
    }
  ]
}
```

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `username.github.io/repository-name`

### Netlify

1. Connect repository to Netlify
2. Deploy automatically on git push
3. Custom domain support available

### Vercel

1. Import project from GitHub
2. Automatic deployments
3. Edge network optimization

## 📱 Mobile Optimization Details

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Touch Targets

- Minimum 44px touch target size
- Proper spacing between interactive elements
- Optimized for thumb navigation

### Performance

- Optimized images with proper sizing
- Minimal JavaScript for core functionality
- CSS-based animations for smooth performance
- Progressive enhancement approach

## 🎨 Design Principles

### Accessibility First

- High contrast ratios in all themes
- Keyboard navigation support
- Screen reader friendly markup
- Focus indicators for interactive elements

### Performance Focused

- Mobile-first CSS approach
- Minimal dependencies
- Optimized asset loading
- Smooth 60fps animations

### Maintainable Code

- Clean separation of concerns
- Well-documented configuration
- Consistent naming conventions
- Modular CSS architecture

---

Built with ❤️ using modern web technologies. Feel free to use this template for your own portfolio!

## 📁 Project Structure

```
/Personal-Portfolio/
├── index.html          # Main landing page
├── about.html           # Detailed about page
├── projects.html        # Projects showcase
├── blog.html           # Blog/articles page
├── contact.html        # Contact information
├── styles.css          # Shared CSS styles
├── scripts.js          # Shared JavaScript
├── assets/             # Images, documents, etc.
│   ├── images/
│   ├── docs/
│   └── icons/
└── README.md           # This documentation
```

## 🎨 Design System

### Color Palette

- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#64748b` (Slate)
- **Accent**: `#0ea5e9` (Sky Blue)
- **Text Primary**: `#1e293b` (Dark Slate)
- **Text Secondary**: `#64748b` (Slate)
- **Background**: `#ffffff` / `#f8fafc` (White/Gray)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components

- Responsive navigation
- Button variants (primary, secondary, outline)
- Cards with hover effects
- Timeline component
- Filter system
- Status badges

## 📄 Page Descriptions

### 1. **index.html** - Landing Page

- Hero section with profile
- Skills overview
- Featured projects
- Contact links
- Smooth scrolling navigation

### 2. **about.html** - About Page

- Detailed personal story
- Professional timeline
- Skills and interests
- Philosophy and values

### 3. **projects.html** - Projects Showcase

- Filterable project grid
- Detailed project cards
- GitHub statistics
- Technology tags
- Project status badges

### 4. **blog.html** (To be created)

- Article listings
- Medium integration
- Technical writing
- Thought leadership

### 5. **contact.html** (To be created)

- Contact form
- Social media links
- Professional networks
- Location/availability

## 🔧 Features

### Navigation

- Sticky navigation bar
- Active page highlighting
- Mobile-responsive menu
- Smooth scroll links

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Breakpoints: 768px, 1024px
- Touch-friendly interactions

### Performance

- Optimized images
- Minimal dependencies
- Fast loading times
- SEO-friendly structure

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- High contrast ratios

## 🚀 Getting Started

### Prerequisites

- Modern web browser
- Text editor (VS Code recommended)
- Basic HTML/CSS/JS knowledge

### Setup

1. Clone or download the portfolio files
2. Open `index.html` in your browser
3. Customize content in HTML files
4. Modify styles in `styles.css`
5. Add your projects and information

### Customization

1. **Update Personal Information**
   - Edit name, bio, and contact details
   - Replace profile images
   - Update social media links

2. **Add Projects**
   - Edit `projects.html`
   - Add new project cards
   - Update GitHub links
   - Include project images

3. **Modify Styling**
   - Edit CSS variables in `styles.css`
   - Change color scheme
   - Adjust typography and spacing

4. **Add Content**
   - Create additional pages
   - Add blog posts
   - Include case studies

## 📱 Mobile Optimization

### Key Features

- Responsive navigation menu
- Touch-optimized buttons
- Readable typography
- Optimized images
- Fast loading times

### Testing

- Test on multiple devices
- Check navigation usability
- Verify content readability
- Ensure touch targets are adequate

## 🔍 SEO Optimization

### Implemented Features

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Structured data markup
- Fast loading times
- Mobile-friendly design

### Best Practices

- Unique page titles
- Descriptive URLs
- Alt text for images
- Internal linking
- Regular content updates

## 🌐 Deployment Options

### GitHub Pages

1. Create GitHub repository
2. Upload files to repository
3. Enable GitHub Pages in settings
4. Access via `username.github.io/repository-name`

### Netlify

1. Connect GitHub repository
2. Set build settings (if needed)
3. Deploy automatically on git push
4. Custom domain support

### Vercel

1. Import GitHub repository
2. Automatic deployments
3. Performance optimizations
4. Analytics included

### Traditional Hosting

1. Upload files via FTP
2. Configure domain settings
3. Set up SSL certificate
4. Regular backups

## 🔄 Maintenance

### Regular Updates

- Update project information
- Add new skills and experience
- Refresh testimonials
- Update contact information

### Performance Monitoring

- Check loading speeds
- Monitor broken links
- Update dependencies
- Optimize images

### Analytics

- Set up Google Analytics
- Monitor page views
- Track user engagement
- Analyze traffic sources

## 🎯 Future Enhancements

### Planned Features

- Blog integration with CMS
- Contact form with backend
- Project case studies
- Interactive skills chart
- Dark mode toggle
- Animation improvements

### Technical Improvements

- Progressive Web App (PWA)
- Service worker for offline access
- Image lazy loading
- Critical CSS inlining
- JavaScript bundling

## 📊 Analytics & Tracking

### Recommended Tools

- Google Analytics 4
- Google Search Console
- Hotjar (heatmaps)
- PageSpeed Insights

### Key Metrics

- Page load times
- Bounce rate
- Session duration
- Mobile usability
- Search rankings

## 🛠️ Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths
   - Verify image formats
   - Ensure proper permissions

2. **Styles not applying**
   - Check CSS file path
   - Verify CSS syntax
   - Clear browser cache

3. **Mobile layout issues**
   - Test responsive breakpoints
   - Check viewport meta tag
   - Verify touch interactions

### Getting Help

- Check browser console for errors
- Validate HTML/CSS
- Test in multiple browsers
- Review responsive design

## 📚 Resources

### Documentation

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [A11y Project](https://www.a11yproject.com/)

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Can I Use](https://caniuse.com/)
- [Responsive Design Checker](https://responsivedesignchecker.com/)

### Design Inspiration

- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [Awwwards](https://www.awwwards.com/)

---

## 📝 License

This portfolio template is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests to improve this portfolio template.

---

**Created by Spandan Banerjee** | [GitHub](https://github.com/sban2009) | [LinkedIn](https://www.linkedin.com/in/sban2009/)
