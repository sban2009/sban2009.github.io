// Portfolio Configuration and Theme Management
class PortfolioApp {
	constructor() {
		this.config = null;
		this.currentTheme = this.getStoredTheme();
		this.init();
	}

	async init() {
		try {
			await this.loadConfig();
			this.initTheme();
			this.setupEventListeners();
			this.populateContent();
		} catch (error) {
			console.error('Failed to initialize portfolio:', error);
		}
	}

	async loadConfig() {
		try {
			const response = await fetch('./config.json');
			this.config = await response.json();
		} catch (error) {
			console.error('Failed to load configuration:', error);
			throw error;
		}
	}

	getStoredTheme() {
		return localStorage.getItem('portfolio-theme') || 'system';
	}

	setStoredTheme(theme) {
		localStorage.setItem('portfolio-theme', theme);
	}

	initTheme() {
		document.documentElement.setAttribute('data-theme', this.currentTheme);
		this.updateThemeToggle();
	}

	setupEventListeners() {
		// Theme toggle
		const themeToggle = document.querySelector('.theme-toggle');
		if (themeToggle) {
			themeToggle.addEventListener('click', () => this.toggleTheme());
		}

		// Mobile menu toggle
		const mobileToggle = document.querySelector('.mobile-menu-toggle');
		const mobileMenu = document.querySelector('.nav-links.mobile-menu');

		if (mobileToggle && mobileMenu) {
			mobileToggle.addEventListener('click', () => {
				mobileMenu.classList.toggle('active');
			});

			// Close mobile menu when clicking outside
			document.addEventListener('click', (e) => {
				if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
					mobileMenu.classList.remove('active');
				}
			});
		}

		// Smooth scrolling for navigation links
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const target = document.querySelector(this.getAttribute('href'));
				if (target) {
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					});
				}
			});
		});

		// Active navigation link highlighting
		window.addEventListener('scroll', () => this.updateActiveNavLink());

		// Add loading animation
		window.addEventListener('load', () => {
			document.body.style.opacity = '1';
		});
	}

	toggleTheme() {
		const themes = ['light', 'dark', 'system'];
		const currentIndex = themes.indexOf(this.currentTheme);
		const nextIndex = (currentIndex + 1) % themes.length;

		this.currentTheme = themes[nextIndex];
		this.setStoredTheme(this.currentTheme);

		document.documentElement.setAttribute('data-theme', this.currentTheme);
		this.updateThemeToggle();
	}

	updateThemeToggle() {
		const toggle = document.querySelector('.theme-toggle');
		if (!toggle) return;

		// Remove all theme classes
		toggle.classList.remove('light', 'dark', 'system');

		// Add current theme class
		toggle.classList.add(this.currentTheme);

		// Update ARIA label for accessibility
		const labels = {
			light: 'Switch to dark mode',
			dark: 'Switch to system mode',
			system: 'Switch to light mode',
		};
		toggle.setAttribute('aria-label', labels[this.currentTheme]);
	}

	updateActiveNavLink() {
		const sections = document.querySelectorAll('section[id]');
		const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

		let current = '';
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (scrollY >= sectionTop - 200) {
				current = section.getAttribute('id');
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove('active');
			if (link.getAttribute('href') === `#${current}`) {
				link.classList.add('active');
			}
		});
	}

	populateContent() {
		if (!this.config) return;

		// Update document title and meta
		this.updateDocumentMeta();

		// Update page content
		this.updateProfileSection();
		this.updateAboutSection();
		this.updateSkillsSection();
		this.updateProjectsSection();
		this.updateContactSection();
		this.updateFooter();
		this.updateNavigation();
		this.updateSocialLinks();
	}

	updateDocumentMeta() {
		document.title = this.config.siteInfo.title;

		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute('content', this.config.siteInfo.description);
		}
	}

	updateProfileSection() {
		const profileImg = document.querySelector('.profile-img');
		const heroTitle = document.querySelector('.hero h1');
		const heroSubtitle = document.querySelector('.hero .subtitle');
		const heroTagline = document.querySelector('.hero p:not(.subtitle)');

		if (profileImg) profileImg.src = this.config.profile.image;
		if (profileImg) profileImg.alt = this.config.profile.name;
		if (heroTitle) heroTitle.textContent = this.config.profile.name;
		if (heroSubtitle) heroSubtitle.textContent = this.config.profile.title;
		if (heroTagline) heroTagline.textContent = this.config.siteInfo.location + ' ' + this.config.siteInfo.tagline;
	}

	updateAboutSection() {
		const sectionTitle = document.querySelector('#about .section-title');
		const aboutTexts = document.querySelectorAll('#about .about-text');
		const quickFactsTitle = document.querySelector('#about h3');
		const quickFactsList = document.querySelector('#about ul');

		if (sectionTitle) sectionTitle.textContent = this.config.about.sectionTitle;

		aboutTexts.forEach((text, index) => {
			if (this.config.about.introduction[index]) {
				text.textContent = this.config.about.introduction[index];
			}
		});

		if (quickFactsTitle) quickFactsTitle.textContent = this.config.about.quickFacts.title;

		if (quickFactsList) {
			quickFactsList.innerHTML = this.config.about.quickFacts.facts
				.map(
					(fact) =>
						`<li style="margin-bottom: 10px;">
                    <i class="${fact.icon}" style="color: var(--primary-color); margin-right: 10px;"></i>
                    ${fact.text}
                </li>`
				)
				.join('');
		}
	}

	updateSkillsSection() {
		const sectionTitle = document.querySelector('#skills .section-title');
		const skillsGrid = document.querySelector('#skills .skills-grid');

		if (sectionTitle) sectionTitle.textContent = this.config.skills.sectionTitle;

		if (skillsGrid) {
			skillsGrid.innerHTML = this.config.skills.categories
				.map(
					(category) =>
						`<div class="skill-category">
                    <h3><i class="${category.icon}"></i> ${category.title}</h3>
                    <ul class="skill-list">
                        ${category.skills.map((skill) => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>`
				)
				.join('');
		}
	}

	updateProjectsSection() {
		const sectionTitle = document.querySelector('#projects .section-title');
		const projectsGrid = document.querySelector('#projects .projects-grid');
		const allProjectsLink = document.querySelector('#projects a[href*="github"]');

		if (sectionTitle) sectionTitle.textContent = this.config.projects.sectionTitle;

		if (projectsGrid) {
			projectsGrid.innerHTML = this.config.projects.featured
				.map(
					(project) =>
						`<div class="project-card">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                    <div class="project-body">
                        <div class="project-tech">
                            ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <p style="color: var(--text-secondary); margin-bottom: 20px;">
                            ${project.longDescription}
                        </p>
                        <div class="project-links">
                            <a href="${project.githubUrl}" target="_blank" class="project-link">
                                <i class="fab fa-github"></i> View Code
                            </a>
                            ${
								project.liveUrl
									? `<a href="${project.liveUrl}" target="_blank" class="project-link">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>`
									: ''
							}
                        </div>
                    </div>
                </div>`
				)
				.join('');
		}

		if (allProjectsLink) {
			allProjectsLink.href = this.config.projects.allProjectsUrl;
			allProjectsLink.innerHTML = `<i class="fab fa-github"></i> ${this.config.projects.allProjectsText}`;
		}
	}

	updateContactSection() {
		const sectionTitle = document.querySelector('#contact .section-title');
		const contactText = document.querySelector('#contact .contact-text');
		const contactLinks = document.querySelector('#contact .contact-links');

		if (sectionTitle) sectionTitle.textContent = this.config.contact.sectionTitle;
		if (contactText) contactText.textContent = this.config.contact.description;

		if (contactLinks) {
			contactLinks.innerHTML = this.config.contact.methods
				.map(
					(method) =>
						`<a href="${method.url}" class="contact-link" ${
							method.url.startsWith('http') ? 'target="_blank"' : ''
						}>
                    <i class="${method.icon}"></i> ${method.title}
                </a>`
				)
				.join('');
		}
	}

	updateFooter() {
		const copyright = document.querySelector('footer p:first-child');
		const sourceLink = document.querySelector('footer a');

		if (copyright) copyright.textContent = this.config.footer.copyright;

		if (sourceLink) {
			sourceLink.href = this.config.footer.sourceUrl;
			sourceLink.textContent = this.config.footer.sourceText;
		}
	}

	updateNavigation() {
		const navLinks = document.querySelectorAll('.nav-link');
		const navConfig = this.config.navigation;

		navLinks.forEach((link) => {
			const href = link.getAttribute('href');
			if (href === '#about') link.textContent = navConfig.about;
			else if (href === '#skills') link.textContent = navConfig.skills;
			else if (href === '#projects') link.textContent = navConfig.projects;
			else if (href === '#contact') link.textContent = navConfig.contact;
		});
	}

	updateSocialLinks() {
		const socialContainer = document.querySelector('.social-links');
		if (!socialContainer) return;

		socialContainer.innerHTML = this.config.socialLinks
			.map(
				(social) =>
					`<a href="${social.url}" target="_blank" title="${social.name}">
                <i class="${social.icon}"></i>
            </a>`
			)
			.join('');
	}
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	new PortfolioApp();
});

// API Integration functions (for future LinkedIn API usage)
class LinkedInAPI {
	constructor() {
		this.clientId = null; // To be set when LinkedIn API is implemented
		this.redirectUri = window.location.origin;
	}

	// Note: LinkedIn API has restrictions for personal use
	// This is a placeholder for when you get approved for API access
	async getProfile() {
		// LinkedIn's API requires special approval for profile data access
		// For now, manual updates through config.json are recommended
		console.log('LinkedIn API integration requires special approval');
		return null;
	}

	// GitHub API is public and can be used immediately
	async getGitHubProfile(username) {
		try {
			const response = await fetch(`https://api.github.com/users/${username}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('GitHub API error:', error);
			return null;
		}
	}

	async getGitHubRepos(username) {
		try {
			const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('GitHub repos API error:', error);
			return null;
		}
	}
}

// Auto-update GitHub data (optional)
async function updateGitHubData() {
	const api = new LinkedInAPI();
	const profile = await api.getGitHubProfile('sban2009');
	const repos = await api.getGitHubRepos('sban2009');

	if (profile) {
		console.log('GitHub profile data:', profile);
		// You can use this data to update the config.json or display dynamic content
	}

	if (repos) {
		console.log('GitHub repositories:', repos);
		// You can use this data to update project information
	}
}

// Uncomment the line below if you want to auto-fetch GitHub data
// updateGitHubData();
