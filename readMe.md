Create an Express server with the following four endpoints. Be sure to include a server.js and a user-routes.js.

In user-routes.js, call the router object userRoute.

    - GET /users - sends a string that says "Getting all users from the database."

    - POST /users - logs the data that has been sent as well as sends a string that says "Added a new user to the database."

    - DELETE /users/:id - logs the deleted id as well as sends a string that says "Deleted a user from the database."

    - PUT /users/:id - logs the data and id that has been sent as well as sends a string that says "Updated a user from the database."