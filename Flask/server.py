from flask import Flask, request, jsonify
from status import HTTP
import json

app = Flask(__name__)
port = 5020
gamepath = './data/games.json'

with open(gamepath, 'r') as f:
    data = json.load(f)

@app.route("/")
def getGames():
    with open(gamepath, 'r') as f:
        data = json.load(f)
    return data, HTTP.get('SUCCESS')

@app.route("/<id>")
def getGameByID(id):
    try:
        with open(gamepath, 'r') as f:
            data = json.load(f)
        if(int(id) <= len(data) - 1): 
            return data[int(id)], HTTP.get('SUCCESS')
        else : 
            return "Game not found!", HTTP.get('NO_CONTENT')
    except:
        return "Get by ID error", HTTP.get('SERVER_ERROR')

@app.route("/",methods=["POST"])
def addGame():
    try:
        recentGame = request.json
        filtered_data = [game for game in data 
                   if recentGame['title'] != game['title'] or recentGame['release'] != game['release']]
        if(len(filtered_data) == len(data)):
            dict_id = {"id" : len(data)}
            finalGame = {**dict_id,**recentGame}
            data.append(finalGame)

            with open(gamepath, 'w') as f:
                json.dump(data,f,indent=2)

            return data, HTTP.get('CREATED')
        return "Game already in server!", HTTP.get('BAD_REQUEST')
    except:
        return "POST error", HTTP.get('SERVER_ERROR')
    
@app.route("/<id>",methods=["DELETE"])
def deleteGame(id):
    try:
        filtered_data = [game for game in data if game['id'] != int(id)]
        if(len(filtered_data) != len(data)):
            with open(gamepath, 'w') as f:
                json.dump(filtered_data,f,indent=2)
            return filtered_data, HTTP.get('SUCCESS')
        return "Game not found", HTTP.get('NO_CONTENT')
    except:
        return "DELETE error", HTTP.get('SERVER_ERROR')

# Works if the python file is ran
if __name__ == '__main__':
    app.run(host="localhost",port=port, debug=True)