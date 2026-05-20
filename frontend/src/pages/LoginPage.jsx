import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(form);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-panel hero-panel">
        <div className="hero-copy">
          <div className="hero-brand-lockup">
            <span>FB</span>
            <p>FitBharat</p>
          </div>
          <h1>
            Eat smart. Train steady.
            <span>Stay Bharat strong.</span>
          </h1>
          <p>
            A clean nutrition workspace for everyday Indian fitness: scan meals, track macros, and keep your daily rhythm visible.
          </p>
        </div>

      </section>

      <section className="auth-panel form-panel">
        <h2>Welcome back</h2>
        <p>Sign in to view today’s totals and meal history.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={handleChange} required />
          </label>
          {error ? <div className="error-box">{error}</div> : null}
          <button className="button button-primary" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <p className="auth-switch">
          Need an account? <Link to="/register">Register</Link>
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
