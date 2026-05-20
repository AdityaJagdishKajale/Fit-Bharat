# FitBharat

A modern MERN stack wellness application that helps users track their daily nutrition and fitness goals. Track calories, macronutrients, and wellness metrics with barcode scanning and smart food search.

FitBharat is built for quick everyday meal logging. Users can register, search foods, scan packaged product barcodes, save meals by type, and review daily totals from a clean React dashboard backed by an Express and MongoDB API.

## Features
- 🔐 Secure JWT authentication
- 📱 Barcode scanning with Open Food Facts API
- 🔍 Smart food search via USDA FoodData Central
- 📊 Real-time meal logging with nutrition metrics
- 📈 Daily dashboard with nutrition summary
- 📋 Meal history and trending analytics
- 👤 Personalized profile and goals

## Project Structure
- `backend/` - Express.js API with MongoDB integration
- `frontend/` - Modern React UI with Vite bundler
- `backend/services/` - Food lookup and nutrition data helpers
- `frontend/src/pages/` - App screens for dashboard, search, scanner, history, auth, and profile

## Environment Setup

Copy the example environment files before running the app:

```bash
copy backend\.env.example backend\.env
copy frontend\.env.example frontend\.env
```

### `backend/.env`
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fitbharat
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
FOODDATA_CENTRAL_API_KEY=your_usda_api_key
```

### `frontend/.env`
```
VITE_API_URL=http://localhost:5000
```

## Installation & Running

```bash
# Install all dependencies
npm install
```

**Start Backend API:**
```bash
npm run dev:backend
```

**Start Frontend (in another terminal):**
```bash
npm run dev:frontend
```

The app will be available at `http://localhost:5173`

## Development Notes
- Keep `.env` files local. They are ignored by Git.
- The frontend proxies API requests to `http://localhost:5000` during development.
- Food search uses USDA FoodData Central when an API key is configured.
- Barcode lookup uses Open Food Facts data for packaged foods.

## API Endpoints
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - User login
- `GET /api/food/search?query=...` - Search foods
- `GET /api/food/barcode/:barcode` - Barcode lookup
- `POST /api/meals` - Log a meal
- `GET /api/meals/today` - Get today's meals
- `GET /api/meals/history` - Meal history
- `DELETE /api/meals/:id` - Delete meal entry

## Technologies
- **Frontend:** React 19, Vite, React Router, html5-qrcode
- **Backend:** Express.js, MongoDB, Mongoose, JWT
- **APIs:** Open Food Facts, USDA FoodData Central
