import React from 'react';
import styles from './profile.module.css';
import classNames from 'classnames';

import PropTypes from 'prop-types';

const getRandomColor = () => {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

export const ProfileItem = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;

    return (
        <div style={{ backgroundColor: getRandomColor() }}>
            <div className="description">
                <img src={avatar} alt="User avatar" className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul>
                <li className={styles.li}>
                    <span className="label">
                        Followers <br />
                    </span>
                    <span className="quantity">{followers}</span>
                </li>
                <li className={styles.li}>
                    <span className="label">
                        Views <br />
                    </span>
                    <span className="quantity whiteColor">{views}</span>
                </li>
                {/*styles.whiteColor*/}
                <li className={classNames(styles.li, { [styles.whiteColor]: false })}>
                    <span className="label">
                        Likes <br />
                    </span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    );
};

ProfileItem.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
    }).isRequired,
};
