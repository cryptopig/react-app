import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "California", "Nevada", "Michigan", "New Jersey"];

  const handleItemSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleItemSelect}
      />
    </div>
  );
}

export default App;
