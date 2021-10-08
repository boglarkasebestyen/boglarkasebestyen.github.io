import React from "react";
import "./index.css"

const ATMDeposit = ({onChange, isDeposit}) => {
    const choice = ["Deposit", "Cash Back"];
  return (
    <div class="atm">
      <label className="label huge">
        <h3>{choice[Number(!isDeposit)]}</h3> 
        <input type="number" onChange={onChange}></input>
        <input type="submit" className="btn btn-info m-1" value="Submit"></input>  
      </label>
    </div>
  );
};

// this will simulate the bank
// keeps track of the total amount of money
// renamed it from "Account"
const App = () => {
//   let transactionState = 0; ////how much money we're trying to withdraw or deposit
  let deposit = 0; 
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState}`;
  console.log("account rendered");

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    // transactionState = Number(event.target.value); 
    deposit = Number(event.target.value); 
  };

const handleSubmit = event => {
    let newTotal = isDeposit ? totalState + deposit: totalState - deposit;
    setTotalState(newTotal);
    event.preventDefault();
}
  return(
    <form onSubmit={handleSubmit}>
    <div class="atm2">
        <h2 id="total">{status}</h2>
        <button type="button" className="btn btn-info m-1" onClick={()=>setIsDeposit(true)}>Deposit</button>
        <button type="button" className="btn btn-info m-1" onClick={()=>setIsDeposit(false)}>Cashback</button>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>Deposit</ATMDeposit>
      </div>
    </form>
  );
};


export default App;
