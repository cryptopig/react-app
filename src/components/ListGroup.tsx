import { useState } from "react";

// interfaces are arguments for functions, and are immutable (read only)
interface ListGroupProp {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// template for a ListGroup in the website
function ListGroup({ items, heading, onSelectItem }: ListGroupProp) {
  // using {} to seperate elements is called "destructuring", which can make code simpler.
  const message = items.length === 0 && <p>No usStates found!</p>;

  const [selectedIndex, setSelectedIndex] = useState(-1); // useState is an array
  // arr[0]; variable (selectedIndex)
  // arr[1]; updater function
  // in React, if an expression is "true && a", it'll return a. If it's "false && b", it'll return false.

  // HandleClick is called an "event handler" beacuse it handles the click event.

  return (
    // <> tells react to wrap the two elements in one "fragement", bypassing an error we would get since React functions can only output one element
    // (either h1 or list, not both).
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
