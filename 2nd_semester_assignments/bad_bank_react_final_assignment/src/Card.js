import React from "react";

function Card(props){
    function classes() {
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-5 ' + bg + txt;
    }
    return (
      <div className={`cardContainer ${classes()}`}>
        <div className="card-header">{props.header}</div>
        <div className="card-body mb-2">
          {props.title && (<h5 className="card-title mb-4">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
        </div>
      </div>      
    );    
  }

  export default Card;