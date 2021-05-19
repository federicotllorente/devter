const Avatar = ({ name, username, avatarURL, avatarWidth, avatarHeight }) => (
    <div className="avatar">
        <img
            src={avatarURL}
            alt={username ? `${username}'s profile picture` : 'Profile picture'}
            width={avatarWidth}
            height={avatarHeight}
        />
        {username && (
            <div>
                <h2>{name || username}</h2>
                <h3>@{username}</h3>
            </div>
        )}
    </div>
)

export default Avatar