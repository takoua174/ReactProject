//props is an object paased down as a parameter for our fonction ExpenseItem
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";
//states are values that their changes should reflect to react
//hook must be used inside a component function and shouldn't be called within nested functions, starts with use
function ExpenseItem(props) {
  useState(props.title);
  const handleClick = () => {
    console.log("clicked !!!");
    props.title = "clicking successful";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={() => handleClick}>clicked !!!!!!</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
