import "./Navbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
    return (
        <div className="main">
            <div className="left">
                <input placeholder="Search.."></input>
                <SearchIcon style={{ color: '#fff' }} />
            </div>
            <div className="right">
                <div className="icon">
                    <DarkModeOutlinedIcon />

                </div>
                <div className="icon">
                    <NotificationsNoneIcon />
                    <div className="notificationNumber">
                        1
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;