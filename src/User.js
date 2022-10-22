import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import axios from "axios";

// import { withRouter } from "react-router-dom";

const User = (props) => {
	const params = useParams();
	const [users, setUsers] = useState({});
	console.log(params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`/comments/${params.id}`
			);
			console.log("INDI", res.data);
			setUsers(res.data);
		}

		// setTimeout(() => {
		fetchData();
		// }, 2000);
	}, []);
	return (
		<div style={{ width: "80%", margin: "0 auto" }}>
			{/* <h1>User Number {props.match.params.id}</h1> */}
			<div
				style={{
					margin: "20px",
					marginRight: "auto",
					borderRadius: "20px",
					border: "2px solid #000",
					// backgroundColor: "red",
					// color: "white",
					width: "50%",
					padding: "10px",
				}}
			>
				<h1>Post Id : {users.postId ? users.postId : "Loading . . . . "}</h1>
			</div>
			<div
				style={{
					margin: "20px",
					marginLeft: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					// backgroundColor: "green",
					// color: "white",
					width: "50%",
					padding: "10px",
				}}
			>
				<h1>Unique Id : {users.id ? users.id : "Loading . . . ."}</h1>
			</div>
			{/* <h1>
				User Name :{" "}
				{params.name ? params.name : '"The route is changed for now"'}
			</h1> */}
			<div
				style={{
					margin: "20px",
					margint: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					// backgroundColor: "red",
					// color: "white",
					width: "50%",
					padding: "10px",
				}}
			>
				<h2>Email : {users.email ? users.email : "Loading . . . ."}</h2>
			</div>
			<div
				style={{
					margin: "20px",
					marginLeft: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					// backgroundColor: "green",
					// color: "white",
					width: "50%",
					padding: "10px",
				}}
			>
				<h2>Title : {users.name ? users.name : "Loading . . . ."}</h2>
			</div>
			<div
				style={{
					margin: "20px",
					marginRight: "auto",
					border: "2px solid #000",
					borderRadius: "20px",
					// backgroundColor: "red",
					// color: "white",
					width: "50%",
					padding: "10px",
				}}
			>
				<h2>Body : {users.body ? users.body : "Loading . . . ."}</h2>
			</div>
			{/* <h1>User Name {props.match.params.name}</h1> */}
		</div>
	);
};

// export default withRouter(User);
export default User;