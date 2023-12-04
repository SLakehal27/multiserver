# Multiserver
A repository containing the same Rest API remade in multiple programming languages!  
For now, these are the technologies used : 

[![Programming languages](https://skillicons.dev/icons?i=js,express,py,flask,java,spring)](https://skillicons.dev)

## Server
For this project, the server contains a list of games that can be viewed, added, deleted or modified.

For all servers, the port used is : 5020.
## Requests : 
- **GET** : You can view a game by id or all of them. ["/games", "/games/:id"]
- **POST** : A game is added using the request body. ["/games"]
- **DELETE** : A game is removed depending on the id in the request body. ["/games/:id"]
- **PATCH** : A game is modified depending on the title and the release date of the game in the request body. ["/games/"]
