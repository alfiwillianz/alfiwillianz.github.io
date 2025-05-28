from flask import Flask, send_from_directory, abort
import os

app = Flask(__name__, static_folder=None, template_folder=None)

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    # First check if it's a direct file
    if os.path.isfile(path):
        return send_from_directory('.', path)
    
    # Then check if it's an HTML file (with or without .html extension)
    if os.path.isfile(f"{path}.html"):
        return send_from_directory('.', f"{path}.html")
    
    # Check if it's a directory containing index.html
    if os.path.isdir(path) and os.path.isfile(os.path.join(path, 'index.html')):
        return send_from_directory(path, 'index.html')
    
    # Fallback to 404
    if os.path.isfile('404.html'):
        return send_from_directory('.', '404.html'), 404
    else:
        abort(404)

# Add favicon handling
@app.route('/favicon.ico')
def favicon():
    return send_from_directory('.', 'favicon.ico')

if __name__ == '__main__':
    # Ensure we have at least an index.html file
    if not os.path.isfile('index.html'):
        with open('index.html', 'w') as f:
            f.write('''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My GitHub Pages Site</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>Welcome to My GitHub Pages Site</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <p>This is a GitHub Pages compatible site structure.</p>
    </main>
    <footer>
        <p>&copy; 2023 My GitHub Pages Site</p>
    </footer>
    <script src="assets/js/main.js"></script>
</body>
</html>''')
    
    # Ensure we have a 404 page
    if not os.path.isfile('404.html'):
        with open('404.html', 'w') as f:
            f.write('''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>404 - Page Not Found</h1>
    </header>
    <main>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/">Go back to homepage</a>
    </main>
    <footer>
        <p>&copy; 2023 My GitHub Pages Site</p>
    </footer>
</body>
</html>''')
    
    # Ensure assets directory structure exists
    os.makedirs('assets/css', exist_ok=True)
    os.makedirs('assets/js', exist_ok=True)
    os.makedirs('assets/img', exist_ok=True)
    
    # Create basic CSS if it doesn't exist
    if not os.path.isfile('assets/css/style.css'):
        with open('assets/css/style.css', 'w') as f:
            f.write('''body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #24292e;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header, footer {
    margin: 20px 0;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
}

nav ul li a {
    color: #0366d6;
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}''')
    
    # Create basic JS if it doesn't exist
    if not os.path.isfile('assets/js/main.js'):
        with open('assets/js/main.js', 'w') as f:
            f.write('''// Main JavaScript file
console.log('GitHub Pages site loaded!');''')
    
    # Run the app in debug mode for local development
    app.run(debug=True, host='0.0.0.0', port=5000)
