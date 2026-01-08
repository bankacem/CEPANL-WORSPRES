import React from 'react';
import { User } from '../types';

interface AdminCMSProps {
  currentUser: User | null;
  onLogin: (user: User) => void;
  onLogout: () => void;
  onViewSite: () => void;
}

export const AdminCMS: React.FC<AdminCMSProps> = ({ currentUser, onLogin, onLogout, onViewSite }) => {
  return (
    <div>
      <h1>Admin CMS</h1>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.name}</p>
          <button onClick={onLogout}>Logout</button>
          <button onClick={onViewSite}>View Site</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={() => onLogin({ id: '1', name: 'Admin', email: 'admin@example.com' })}>Login</button>
        </div>
      )}
    </div>
  );
};
