import Link from 'next/link'

import HomeIcon from './Icons/HomeIcon'
import SearchIcon from './Icons/SearchIcon'
import NotificationsIcon from './Icons/NotificationsIcon'
import InboxIcon from './Icons/InboxIcon'

const NavBar = ({ currentPage }) => {
    const iconSize = 25;
    return (
        <nav>
            <Link href="/">
                {currentPage === 'Home' ? (
                    <a className="current_page">
                        <HomeIcon width={iconSize} height={iconSize} />
                    </a>
                ) : (
                    <a><HomeIcon width={iconSize} height={iconSize} /></a>
                )}
            </Link>
            <Link href="/search">
                {currentPage === 'Search' ? (
                    <a className="current_page">
                        <SearchIcon width={iconSize} height={iconSize} />
                    </a>
                ) : (
                    <a><SearchIcon width={iconSize} height={iconSize} /></a>
                )}
            </Link>
            <Link href="/notifications">
                {currentPage === 'Notifications' ? (
                    <a className="current_page">
                        <NotificationsIcon width={iconSize} height={iconSize} />
                    </a>
                ) : (
                    <a><NotificationsIcon width={iconSize} height={iconSize} /></a>
                )}
            </Link>
            <Link href="/inbox">
                {currentPage === 'Inbox' ? (
                    <a className="current_page">
                        <InboxIcon width={iconSize} height={iconSize} />
                    </a>
                ) : (
                    <a><InboxIcon width={iconSize} height={iconSize} /></a>
                )}
            </Link>
        </nav>
    )
}

export default NavBar