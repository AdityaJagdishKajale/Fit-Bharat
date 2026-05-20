import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="shell">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <span className="brand-mark">FB</span>
          <span className="brand-copy">FitBharat Studio</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span>Overview</span>
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span>Food Search</span>
          </NavLink>
          <NavLink to="/scanner" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span>Scanner</span>
          </NavLink>
          <NavLink to="/history" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <span>History</span>
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Profile
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div>
            <p className="sidebar-label">Signed in as</p>
            <strong>{user?.name || 'User'}</strong>
          </div>
          <button className="button button-secondary" onClick={logout} type="button">
            Logout
          </button>
        </div>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
