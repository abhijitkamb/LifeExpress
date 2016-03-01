# LifeExpress

During development:

1) Set mongdb credentials in main.js

2) When making changes to src/app.js, run the following in a terminal in the backgroud. This translates the JSX syntax to pure Javascript located in static/app.js that index.html renders.

babel --presets react src --watch --out-dir static

3) To start the server

node main.js


Design and Architecture



