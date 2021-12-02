import React, {useContext } from 'react';
import {MyContext} from "./MyContext";
import Card from "./Card";


function AllData() {
	const {users, depositArr, withdrawArr} = useContext(MyContext);
	let currentTime = new Date().toLocaleString();
	return (
		// we need Fragment, otherwise it returns an object
		<>  
			{users.map((user) => 
				<>
					<Card
						bgcolor="info"
						header="Your Accounts"
						body={
								<>  
									<h5 className="balance mb-3">Opened accounts:</h5>
									<div className="alldata">
										<h6>Creation date: {currentTime}</h6>
										<h6>Name: {user.name}</h6>
										<h6>Email address: {user.email}</h6>
										<h6>Password: {user.password}</h6>									
									</div>
								</>
							}
					/>
				</>
			)}

			{depositArr.map((amount) => 
				<>
					<Card
						bgcolor="info"
						header="Your Transactions"
						body={
								<>  
									<h5 className="balance mb-3">Deposit:</h5>
									<div className="alldata">
										<h6>Creation date: {currentTime}</h6>
										<h6>Amount: ${amount.depositAmount}</h6>
										<br/>
										<br/>
									</div>
								</>
							}
						/>
					</>
			)}

		{withdrawArr.map((value) => 
			<>
				<Card 
					bgcolor="info"
					header="Your Transactions"
					body={
							<>  
								<h5 className="balance mb-3">Withdraw:</h5>
								<div className="alldata">
									<h6>Creation date: {currentTime}</h6>
									<h6>Amount: ${value.withdrawAmount}</h6>
									<br/>
									<br/>										
								</div>
							</>
						}
					/>
				</>
			)}
		</>
	) //return
}; //function

	
export default AllData;



