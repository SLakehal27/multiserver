# Multiserver
---
A repository containing the same server remade in multiple programming languages!
For now, these are the technologies used : 
[![Programming languages](https://skillicons.dev/icons?i=js,express)](https://skillicons.dev)

## Server
---
For this project, the server contains a list of games that can be viewed, added, deleted or modified.

For all servers, the port used is : 5020.
## Requests : 
---
- **GET** : You can view a game by id or all of them. ["/", "/:id"]
- **POST** : A game is added using the body of the request. ["/"]
- **DELETE** : A game is removed depending on the id. ["/:id"]
- **PATCH** : A game is modified depending on the title and the release date of the game. ["/"]
