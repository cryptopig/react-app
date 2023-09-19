function ListGroup() {
  let states = ["New York", "California", "Nevada", "Michigan", "New Jersey"];
  // states = [];

  const message = states.length === 0 && <p>No states found!</p>;
  // in React, if an expression is "true && a", it'll return a. If it's "false && b", it'll return false.

  return (
    // <> tells react to wrap the two elements in one "fragement", bypassing an error we would get since React functions can only output one element
    // (either h1 or list, not both).
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {states.map((states, index) => (
          <li
            className="list-group-item"
            key={states}
            onClick={() => console.log(states, index)}
          >
            {states}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
