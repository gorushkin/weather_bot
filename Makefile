start-dev:
	NODE_ENV=development node index.js

start:
	npx nodemon -r dotenv/config app/index.js