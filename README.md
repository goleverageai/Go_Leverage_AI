# GoLeverage.AI Website

A modern, responsive 5-page website for GoLeverage.AI featuring business solutions, agentic AI, and real estate services.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Futuristic design with smooth animations and transitions
- **Interactive Elements**: Tabs, forms, hover effects, and scroll animations
- **Color Scheme**: Professional palette using #ff0000, #ff00ed, #0038ff, white, and black
- **Cross-browser Compatible**: Works on all modern browsers

## Pages

1. **Home** (`index.html`) - Hero section, services overview, testimonials, pricing
2. **Business Solutions** (`business-solutions.html`) - Detailed business services
3. **Agentic AI** (`agentic-ai.html`) - AI solutions and autonomous agents
4. **Real Estate** (`real-estate.html`) - Property-focused AI solutions
5. **Contact** (`contact.html`) - Contact form and company information

## File Structure

```
goleverage-website/
├── index.html              # Home page
├── business-solutions.html # Business solutions page
├── agentic-ai.html         # Agentic AI page
├── real-estate.html        # Real estate page
├── contact.html            # Contact page
├── styles.css              # Master CSS file
├── assets/                 # Asset directory
│   ├── LightsOnStaffing_Logo.webp
│   ├── Steven_Glynns.jpeg
│   ├── LI-In-Bug.png
│   └── LightsOnStaffing_Home.jpg
└── README.md               # This file
```

## Assets Required

Please add the following assets to the `assets/` directory:

- `LightsOnStaffing_Logo.webp` - Company logo
- `Steven_Glynns.jpeg` - CEO headshot
- `LI-In-Bug.png` - LinkedIn icon
- `LightsOnStaffing_Home.jpg` - Hero background image

## Local Development

1. Clone or download the website files
2. Add the required assets to the `assets/` directory
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open `http://localhost:8000` in your browser

## GitHub Pages Deployment

### Method 1: Direct Upload

1. Create a new repository on GitHub
2. Upload all website files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://username.github.io/repository-name`

### Method 2: Git Commands

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/username/repository-name.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

## Customization

### Colors
The color scheme is defined in CSS variables at the top of `styles.css`:
```css
:root {
    --primary-red: #ff0000;
    --primary-magenta: #ff00ed;
    --primary-blue: #0038ff;
    --white: #ffffff;
    --black: #000000;
}
```

### Fonts
The website uses system fonts for maximum compatibility:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Responsive Breakpoints
- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1024px and above
- Large Desktop: 1400px and above

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized CSS with minimal external dependencies
- Efficient animations using CSS transforms
- Responsive images and layouts
- Minimal JavaScript for enhanced performance

## Contact

For questions or support regarding this website, please contact GoLeverage.AI through the contact form or at info@goleverage.ai.

