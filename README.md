# Interview Scheduler Project

With the Interview Scheduler application, a student can create, edit and delete interview appointments.

## Products

### PC screen capture

![PC](/images/pc.png)

### Mobile screen capture

![Mobile](/images/mobile.png)

## Setup

### macOS Monterey

1. [Create](https://github.com/lighthouse-labs/scheduler/) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.
5. Go to <http://localhost:8000/> in your browser.

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

## Server application

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

1. [Create](https://github.com/lighthouse-labs/scheduler-api) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. [Creating The DB](#creating-the-db)
5. Start the web server using the `npm start` command. The app will be served at <http://localhost:8001/>.
6. Go to <http://localhost:8001/> in your browser.

### Creating The DB

Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command `CREATE DATABASE scheduler_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=development
PGDATABASE=scheduler_development
PGPASSWORD=development
PGPORT=5432
```

## Dependencies

- React
- Node 12.22.7
- Webpack
- Babel
- Axios
- WebSockets
- Axios
- Webpack Dev Server
- Jest
- Testing Library
- Cypress

## Design

- Storybook
