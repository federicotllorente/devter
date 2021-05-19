import Avatar from './Avatar'
import HomeIcon from './Icons/HomeIcon'
import SearchIcon from './Icons/SearchIcon'
import NotificationsIcon from './Icons/NotificationsIcon'
import InboxIcon from './Icons/InboxIcon'

const Devit = ({ name, username, avatar, message }) => {
    const buttonIconsSize = 16
    return(
        <div className="devit">
            <Avatar
                name={name}
                username={username}
                avatarURL={avatar}
                avatarWidth="45" avatarHeight="45"
            />
            <p>{message}</p>
            <div className="devit__buttons">
                <button>
                    <HomeIcon width={buttonIconsSize} height={buttonIconsSize} />
                </button>
                <button>
                    <SearchIcon width={buttonIconsSize} height={buttonIconsSize} />
                </button>
                <button>
                    <NotificationsIcon width={buttonIconsSize} height={buttonIconsSize} />
                </button>
                <button>
                    <InboxIcon width={buttonIconsSize} height={buttonIconsSize} />
                </button>
            </div>
        </div>
    )
}

export default Devit