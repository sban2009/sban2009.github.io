# Personal Portfolio Website

A modern, responsive portfolio website with dark mode support and JSON-based configuration for easy content management.

## 🔧 Technical Implementation

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

## 🎯 Future Enhancements

### Planned Features

- Blog integration with CMS
- Contact form with backend
- Project case studies
- Interactive skills chart
- Animation improvements

### Technical Improvements

- Progressive Web App (PWA)
- Service worker for offline access
- Image lazy loading
- Critical CSS inlining
- JavaScript bundling

---

## 📝 License

This portfolio template is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

---

**Created by Spandan Banerjee** | [GitHub](https://github.com/sban2009) | [LinkedIn](https://www.linkedin.com/in/sban2009/)
