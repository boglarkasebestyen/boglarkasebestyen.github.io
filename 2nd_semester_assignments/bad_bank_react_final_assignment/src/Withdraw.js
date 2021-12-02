import React, {useContext} from "react";
import {MyContext} from "./MyContext";
import Card from "./Card";


function Withdraw() {
  const {
    //state:
    balance,
    //functions:
    withdrawAmount,
    withdrawHandleChange,
    withdrawError,
    submitWithdrawal,
    showHideSuccessMessageWithdraw
  } = useContext(MyContext);

  return (
    <Card
			bgcolor="info"
			header="Withdraw"
			body={
				<>  
					<h5 className="deposit mb-4">Skip extra trips to the bank and withdraw your money online!</h5>
					<h6 className="balance mb-4">Your current balance is: ${balance}</h6>
					<h6>The amount you wish to withdraw:</h6>
					<input type="input" className="form-control" id="email" placeholder="Amount" onChange={withdrawHandleChange}/>
					<div>
						<div className="error mb-3">{withdrawError}</div>
					</div>
					<br/>
					<button type="submit" disabled={!withdrawAmount} className="submitBtn btn btn-light" onClick={() => submitWithdrawal(withdrawAmount)}>Withdraw</button>
					{showHideSuccessMessageWithdraw()}
				</>
      }
    />
  )
}

export default Withdraw;
