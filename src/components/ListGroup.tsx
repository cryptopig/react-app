import { useState } from "react";

function ListGroup() {
  let usStates = ["New York", "California", "Nevada", "Michigan", "New Jersey"];

  let selectedIndex = 0;

  const message = usStates.length === 0 && <p>No usStates found!</p>;

  const arr = useState(-1);
  arr[1];
  arr[0];
  // in React, if an expression is "true && a", it'll return a. If it's "false && b", it'll return false.

  // HandleClick is called an "event handler" beacuse it handles the click event.

  return (
    // <> tells react to wrap the two elements in one "fragement", bypassing an error we would get since React functions can only output one element
    // (either h1 or list, not both).
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {usStates.map((usStates, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={usStates}
            onClick={() => (selectedIndex = index)}
          >
            {usStates}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
