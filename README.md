# CSRGO DSA Platform

A comprehensive Java DSA learning platform built with Hugo, featuring:

- 🎯 **10+ DSA Problems** with detailed solutions
- 📚 **Learning Paths** for structured learning
- 💼 **Interview Mode** with timed challenges
- 🎨 **Beautiful UI** with light/dark themes
- 📱 **Fully Responsive** design
- 🚀 **Fast & Static** - powered by Hugo
- ✏️ **Easy Content Management** with Netlify CMS

## Features

### Problems
- Search and filter by difficulty, topic, and data structure
- Detailed problem statements with examples and constraints
- Java code templates
- Company tags

### Learning Paths
- Curated problem sets organized by topic
- Progress tracking
- Difficulty-based progression

### Interview Mode
- Random problem selection
- Timed challenges
- Company-specific preparation
- Mock interview sessions

## Tech Stack

- **Framework**: Hugo (Static Site Generator)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide Icons (CDN)
- **CMS**: Netlify CMS
- **Hosting**: GitHub Pages
- **Domain**: dsa.csrgo.com

## Local Development

### Prerequisites
- Hugo Extended (v0.121.0 or later)

### Running Locally

```bash
# Clone the repository
git clone <your-repo-url>
cd dsa

# Start Hugo server
hugo server -D

# Open http://localhost:1313
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Custom Domain Setup

1. Add a CNAME record in your DNS:
   ```
   CNAME: dsa -> <your-github-username>.github.io
   ```

2. Enable GitHub Pages in repository settings
3. Set custom domain to `dsa.csrgo.com`
4. Enable HTTPS

## Content Management

### Using Netlify CMS

1. Navigate to `/admin/` on your deployed site
2. Authenticate with GitHub
3. Create and edit problems directly from the CMS

### Manual Content Creation

```bash
# Create a new problem
hugo new problems/problem-name.md

# Edit the file in content/problems/problem-name.md
```

## Project Structure

```
dsa/
├── .github/
│   └── workflows/
│       └── hugo.yml          # GitHub Actions deployment
├── archetypes/
│   └── problems.md           # Problem template
├── content/
│   ├── problems/             # Problem content files
│   ├── paths/                # Learning paths
│   └── interview/            # Interview mode content
├── layouts/
│   ├── _default/
│   │   └── baseof.html       # Base template
│   ├── partials/
│   │   ├── header.html       # Header with theme toggle
│   │   └── footer.html       # Footer
│   ├── problems/
│   │   ├── list.html         # Problems listing
│   │   └── single.html       # Single problem page
│   ├── paths/
│   │   └── list.html         # Learning paths page
│   ├── interview/
│   │   └── single.html       # Interview mode page
│   └── index.html            # Home page
├── static/
│   ├── admin/
│   │   ├── config.yml        # Netlify CMS config
│   │   └── index.html        # CMS entry point
│   ├── logo.png
│   ├── favicon.ico
│   └── CNAME                 # Custom domain
└── hugo.toml                 # Hugo configuration
```

## Color Palette

The platform uses a vibrant orange/coral gradient color scheme:

- Primary: `#FF6B35`
- Secondary: `#FF8C42`
- Accent: `#FF9F66`
- Dark Background: `#0A0E27`
- Light Background: `#F8F9FA`

## License

All rights reserved © CSRGO DSA

## Support

For issues or questions, please open an issue on GitHub.
