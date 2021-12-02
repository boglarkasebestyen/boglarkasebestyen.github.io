import React, {useContext} from "react";
import {MyContext} from "./MyContext";
import Card from "./Card";

function Deposit() {

  const {
    //state:
    depositAmount,
    balance,
    depositError,
    //functions:
    handleChange,
    submitDeposit,
    showHideSuccessMessage
  } = useContext(MyContext);

  return (
    <Card
        bgcolor="info"
        header="Deposit"
        body= { 
          <>  
						<h5 className="deposit mb-4">Skip extra trips to the bank and deposit your money online!</h5>
						<h6 className="deposit mb-4">Your current balance is: ${balance}</h6>
						<h6>The amount you wish to deposit:</h6>
						<input type="input" className="form-control" id="depositAmount" placeholder="Amount" onChange={handleChange}/>
						<div>
							<div className="error mb-3">{depositError}</div>
						</div>
						<br/>
						<button type="submit" disabled={!depositAmount} className="submitBtn btn btn-light" onClick={() => submitDeposit(depositAmount)}>Deposit</button>            
						{showHideSuccessMessage()}
					</>
        }  
    />
  )
}

export default Deposit;
