# FitBharat

A modern MERN stack wellness application that helps users track their daily nutrition and fitness goals. Track calories, macronutrients, and wellness metrics with barcode scanning and smart food search.

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

## Environment Setup

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
cd backend && npm install
cd ../frontend && npm install
```

**Start Backend API:**
```bash
cd backend && npm run dev
```

**Start Frontend (in another terminal):**
```bash
cd frontend && npm run dev
```

The app will be available at `http://localhost:5173`

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
