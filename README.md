# semiqolonn.github.io

Personal portfolio website for semiqolonn, hosted on GitHub Pages.

## Overview

This is a personal portfolio website built with HTML, CSS, and JavaScript, designed to showcase projects, achievements, and contact information. The site features a clean, responsive design with a dark mode interface.

## Features

- Responsive design that works well on mobile, tablet, and desktop devices
- Clean dark mode interface
- Project showcase section
- Achievements section
- About me page with contact links
- Custom 404 page for handling broken links

## Project Structure

```
semiqolonn.github.io/
├── index.html           # Homepage
├── about.html           # About me page
├── project.html         # Projects showcase page
├── achievements.html    # Achievements and awards page
├── 404.html             # Error page for handling missing routes
├── static/              # Static assets directory
│   ├── styles.css       # Main stylesheet
│   └── script.js        # JavaScript functionality
├── app.py               # Flask app for local development
├── CNAME                # Custom domain configuration
└── README.md            # This documentation file
```

## Running Locally

The repository includes a Flask application that allows you to test the website locally before pushing changes to GitHub Pages.

### Prerequisites

- Python 3.6 or higher
- Flask

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/semiqolonn/semiqolonn.github.io.git
   cd semiqolonn.github.io
   ```

2. Install Flask if you don't have it already:
   ```
   pip install flask
   ```

3. Run the development server:
   ```
   python app.py
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Deployment

This website is designed to be hosted on GitHub Pages. When you push changes to the main branch of the GitHub repository, the changes will automatically be deployed to the live site.

The `CNAME` file configures the custom domain `semiqolonn.is-a.dev`.

## Theme Support

The website features a theme toggle that allows users to switch between light and dark modes. The user's preference is saved to localStorage and will be remembered when they return to the site.

The theme also respects the user's system preference by default if no explicit choice has been made.

## Browser Compatibility

The website is designed to work with modern browsers including:
- Chrome/Edge (latest versions)
- Firefox (latest version)
- Safari (latest version)
- Mobile browsers (iOS Safari, Android Chrome)

## License

All rights reserved. This code is not open source.

## Contact

For questions or feedback, reach out through any of the contact methods listed on the About page.
