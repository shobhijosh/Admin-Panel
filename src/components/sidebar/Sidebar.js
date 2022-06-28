import "./Sidebar.scss"
import { Link } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<div className="top">
				<span className="heading">Ecom_Admin</span>
			</div>

			<div className="center">
				<ul>
					<span className="labels">MAIN</span>
					<li className="item">
						<Link to='/'>
							<DashboardIcon className="icon" />
							<span className="spanList">Dashboard</span>
						</Link>
					</li>

					<p id="label2" className="labels">LISTS</p>
					<Link to='/users'>
						<li className="item">
							<PersonOutlineIcon className="icon" />
							<span className="spanList">Users</span>
						</li>
					</Link>
					<Link to='/products'>
						<li className="item">
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Products</span>
						</li>
					</Link>
					<Link to='/sellers'>
						<li className="item">
							<StoreMallDirectoryIcon className="icon" />
							<span className="spanList">Sellers</span>
						</li>
					</Link>
					<Link to='/earnings'>
						<li className="item">
							<PersonOutlineIcon className="icon" />
							<span className="spanList">Earnings</span>
						</li>
					</Link>
					<Link to='/orders'>
						<li className="item">
							<ShoppingBasketIcon className="icon" />
							<span className="spanList">Orders</span>
						</li>
					</Link>

					<p className="labels">MAIN</p>

					<Link to='/notification'>
						<li className="item">
							<NotificationsNoneIcon className="icon" />
							<span className="spanList">Notifications</span>
						</li>
					</Link>

					<Link to='/login'>
						<li className="item">
							<LogoutIcon className="icon" />
							<span className="spanList">Logout</span>
						</li>
					</Link>
				</ul>
			</div>

			{/* <div className="bottom">
				<div className="containerOne">

				</div>
				<div className="containerTwo">

				</div>
			</div> */}
		</div>
	);
}

export default Sidebar;