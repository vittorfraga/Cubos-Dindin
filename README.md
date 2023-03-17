# Cubos Dindin - in Progress!!

### Refactoring the 3rd module project from Cubos Academy using `typescript`

Link to the original project with `javascript`: https://github.com/vittorfraga/T09M03

### To run the project, follow the steps below:

1. Install the project dependencies using the following command:

   - npm install

2. Create a .env file at the root of the project with the necessary environment variables. An example can be found in the .env.example file.

3. Run the following command to start the server in development mode:

   - npm run dev

This command will start the server using ts-node-dev, which will transpile the `Typescript` code to `Javascript` at runtime, allowing you to make changes to the code and have the server automatically restart.

4. To run TypeORM migrations, use the following command:

   - npm run typeorm `<command>`

Replace `<command>` with the TypeORM command you wish to execute, for example migration:run .

5. To run the automated tests, use the following command:

   - npm test

This will run the tests using `Jest`.

With these steps, you should be able to successfully run the project. Remember to configure the environment variables correctly for the project to function properly.
