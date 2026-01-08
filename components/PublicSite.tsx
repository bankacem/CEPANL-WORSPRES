import React from 'react';

interface PublicSiteProps {
  onEnterAdmin: () => void;
}

export const PublicSite: React.FC<PublicSiteProps> = ({ onEnterAdmin }) => {
  return (
    <div>
      <h1>Public Site</h1>
      <button onClick={onEnterAdmin}>Enter Admin</button>
    </div>
  );
};
