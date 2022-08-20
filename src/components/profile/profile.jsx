import React from 'react';

import userList from '../../assets/profile.json';

import { ProfileItem } from './profile-item';

const { username, tag, location, avatar, stats } = userList;

export const Profile = () => {
    return <ProfileItem username={username} tag={tag} location={location} avatar={avatar} stats={stats} />;
};
