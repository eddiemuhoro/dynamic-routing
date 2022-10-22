import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const All = () => {
	// const users = [
	// 	{ name: "Apple", id: 1 },
	// 	{ name: "Google", id: 2 },
	// 	{ name: "Microsoft", id: 3 },
	// 	{ name: "Adobe", id: 4 },
	// ];

	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await axios("http://localhost:3001/comments");
			console.log("RES", res.data);
			setUsers(res.data);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>Dynamic Routing</h1>
			{users.map((user) => {
				return (
					<div key={user.id}>
						Click on the id to see the details :
						{/* <NavLink to={"/user/" + user.id + "/" + user.name}> */}
						<NavLink to={"user/" + user.id}> {user.id}</NavLink>
					</div>
				);
			})}
		</div>
	);
};

export default All;