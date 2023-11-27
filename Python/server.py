from flask import Flask
import json

app = Flask(__name__)
port = 5020

data = json.load(open('./data/games.json'))

@app.route("/")
def getGame():
    return data, 200

@app.route("/<id>")
def getGameByID(id):
    try:
        if(int(id) <= len(data) - 1): 
            return data[int(id)], 200
        else : 
            return "Game not found!", 404
    except:
        return "Server error", 500

# Works if the python file is ran
if __name__ == '__main__':
    app.run(host="localhost",port=port)