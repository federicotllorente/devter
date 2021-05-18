const Avatar = ({ userName, avatarURL, avatarWidth, avatarHeight }) => (
    <div className="avatar">
        <img
            src={avatarURL}
            alt={`${userName}'s profile picture`}
            width={avatarWidth}
            height={avatarHeight}
        />
        {userName && (<h2>{userName}</h2>)}
    </div>
)

export default Avatar