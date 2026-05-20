import { useEffect, useState } from 'react';
import { api } from '../services/api';

const MealHistoryPage = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMeals = async () => {
    setLoading(true);
    try {
      const response = await api.getMealHistory();
      setMeals(response.meals || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const handleDelete = async (id) => {
    await api.deleteMeal(id);
    loadMeals();
  };

  return (
    <div className="page-stack">
      <section className="panel page-hero history-hero">
        <p className="eyebrow">Food timeline</p>
        <h1>Meal history</h1>
        <p>Review every saved meal by date, meal type, and macro footprint.</p>
      </section>

      <section className="panel">
        {loading ? (
          <p className="empty-state">Loading meal history...</p>
        ) : meals.length === 0 ? (
          <div className="empty-state empty-card">
            <strong>No history yet.</strong>
            <p>Your saved meals will appear here as a clean timeline.</p>
          </div>
        ) : (
          <div className="meal-list">
            {meals.map((meal) => (
              <article className="meal-item" key={meal._id}>
                <div>
                  <strong>{meal.foodName}</strong>
                  <p>{meal.mealType} · {meal.quantity}{meal.servingUnit} · {new Date(meal.date).toLocaleString()}</p>
                </div>
                <div className="meal-macros">
                  <span>{Math.round(meal.calories)} kcal</span>
                  <span>{Math.round(meal.protein)}g protein</span>
                </div>
                <button className="button button-ghost" type="button" onClick={() => handleDelete(meal._id)}>
                  Delete
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MealHistoryPage;
