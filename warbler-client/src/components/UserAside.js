import React from 'react';
import DefaultProfileImage from '../images/default-profile-image.jpg';

const UserAside = ({username, profileImageUrl})  => (
  <aside className="col-sm-2">
    <div>
      <div>
        <img src={profileImageUrl || DefaultProfileImage} alt={username} width="200" height="200"/>
      </div>
    </div>
  </aside>
)

export default UserAside;