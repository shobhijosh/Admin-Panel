import "./Notification.css";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"


const Notification=()=>{
	return (
		<div className="notification_main">
			<Sidebar/>
			<div className="box">
				<Navbar/>
				<div>
					<div className="main_cont">
						<h3>Create Push Notification</h3>
						<hr/>

						<div className="content">
							<label>Title</label>
							<input type="text" placeHolder="Title for the notification"/>
							<label className="second_label" >Message</label>
							<input type="text" placeHolder="Message for the notification"/>
							<button>
								SEND
							</button>
							
						</div>
					</div>
				</div>
			</div>

		</div>);
}

export default Notification;