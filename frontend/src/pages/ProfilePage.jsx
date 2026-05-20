import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="page-stack">
      <section className="panel page-hero profile-hero">
        <p className="eyebrow">Account details</p>
        <h1>Profile</h1>
        <p>Personal details that keep your nutrition workspace tuned to you.</p>
      </section>

      <section className="panel profile-grid">
        <article className="profile-card">
          <span>Name</span>
          <strong>{user?.name || 'N/A'}</strong>
        </article>
        <article className="profile-card">
          <span>Email</span>
          <strong>{user?.email || 'N/A'}</strong>
        </article>
        <article className="profile-card">
          <span>Age</span>
          <strong>{user?.age ?? 'N/A'}</strong>
        </article>
        <article className="profile-card">
          <span>Weight</span>
          <strong>{user?.weight ?? 'N/A'}</strong>
        </article>
        <article className="profile-card profile-card-wide">
          <span>Goal</span>
          <strong>{user?.goal || 'Maintain weight'}</strong>
        </article>
      </section>
    </div>
  );
};

export default ProfilePage;
