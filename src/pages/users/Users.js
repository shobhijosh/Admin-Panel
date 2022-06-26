
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

import "./Users.scss";
const User = () => {
	return (
		<div className="main">
			<Sidebar />
			<div className="box">
				<Navbar />
				<div>
					<h1 className="heading_users">Users
					</h1>
				</div>
				<Datatable />
			</div>
		</div>
	);
}
export default User;