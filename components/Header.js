import Avatar from './Avatar'

const Header = ({ currentPage }) => (
    <header>
        <Avatar
            avatarURL="https://avatars.githubusercontent.com/u/77794105?v=4"
            avatarWidth="45" avatarHeight="45"
        />
        <h2>{currentPage}</h2>
    </header>
)

export default Header