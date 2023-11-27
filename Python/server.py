from flask import Flask
import json

app = Flask(__name__)
port = 5020

data = json.load(open('./data/games.json'))

@app.route("/")
def get():
    return data

# Works if the python file is ran
if __name__ == '__main__':
    app.run(host="localhost",port=port)