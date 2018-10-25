import json

from flask import Flask, render_template, request

from model import articles_op as db

app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/get_articles')
def get_articles():
    recs = db.get_articles()
    return json.dumps(recs)

@app.route('/add_article', methods=["POST"])
def add_article():
    db.add_article(request.get_json())
    return json.dumps({"success": "True"})

@app.route('/up_vote/<int:id>', methods=["PUT"])
def up_vote(id):
    db.up_vote(id)
    return json.dumps({"success": "True"})

if __name__ == '__main__':
    app.run(debug=True)