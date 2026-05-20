# Project Structure

FitBharat is organized as a MERN workspace with separate backend and frontend apps.

## Root

- `package.json` - npm workspace scripts for running backend and frontend.
- `package-lock.json` - locked dependency tree for reproducible installs.
- `.gitignore` - excludes local dependencies, build output, logs, and environment files.
- `README.md` - setup, feature, API, and technology overview.

## Backend

- `backend/server.js` - Express app entry point, middleware setup, routes, and database connection.
- `backend/config/db.js` - MongoDB connection helper.
- `backend/controllers/` - request handlers for authentication, food lookup, and meals.
- `backend/middleware/` - authentication middleware for protected API routes.
- `backend/models/` - Mongoose schemas for users and meals.
- `backend/routes/` - Express route definitions grouped by API area.
- `backend/services/` - nutrition lookup logic for USDA FoodData Central and Open Food Facts.
- `backend/.env.example` - backend environment variable template.

## Frontend

- `frontend/index.html` - Vite HTML entry point.
- `frontend/vite.config.js` - Vite and API proxy configuration.
- `frontend/src/main.jsx` - React app bootstrap.
- `frontend/src/App.jsx` - route configuration.
- `frontend/src/context/` - authentication state and session helpers.
- `frontend/src/services/` - API client wrapper.
- `frontend/src/components/` - reusable layout, route guard, scanner, and nutrition summary components.
- `frontend/src/pages/` - screen-level pages for login, register, dashboard, search, scanner, meal confirmation, history, and profile.
- `frontend/src/styles.css` - shared application styling.
- `frontend/.env.example` - frontend environment variable template.

## Ignored Local Files

These are intentionally not committed:

- `node_modules/`
- `frontend/dist/`
- `.env` and `.env.local`
- `*.log`
- `coverage/`
