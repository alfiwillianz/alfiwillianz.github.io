from flask import Flask, render_template, send_from_directory, abort
import os

app = Flask(__name__, template_folder='./', static_folder='static')

@app.route('/')
def index():
    return send_from_directory('./', 'index.html')

@app.route('/about')
def about():
    try:
        return send_from_directory('./', 'about.html')
    except:
        abort(404)

@app.route('/project')
def project():
    try:
        return send_from_directory('./', 'project.html')
    except:
        abort(404)

@app.route('/achievements')
def achievements():
    try:
        return send_from_directory('./', 'achievements.html')
    except:
        abort(404)

@app.route('/blog')
def blog():
    try:
        return send_from_directory('./', 'blog.html')
    except:
        abort(404)

@app.route('/blog/posts/<post_name>')
def blog_post(post_name):
    try:
        return send_from_directory('./blog/posts', f"{post_name}")
    except:
        abort(404)

@app.errorhandler(404)
def page_not_found(e):
    return send_from_directory('./', '404.html'), 404

@app.route('/<path:path>')
def static_files(path):
    try:
        return send_from_directory('./', path)
    except:
        abort(404)

if __name__ == '__main__':
    # Create blog directories if they don't exist
    os.makedirs('blog/posts', exist_ok=True)
    print("Server running at http://localhost:5000")
    print("Press Ctrl+C to quit")
    app.run(debug=True, host='0.0.0.0', port=5000)
