import React from "react";
import "./Summary.css";

function Summary(props) {
  console.log(props.data);
  return (
    <ul>
      {props.data.map((item, index) => {
        return (
          <li
            className={`${item.category} summary`}
            key={index}>
            <div className="summary-category">
              <img
                src={item.icon}
                alt={item.category}
              />
              <p>{item.category}</p>
            </div>
            <div className="summary-score">
              <p>{item.score}</p>
              <p>&nbsp;/ 100</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Summary;
