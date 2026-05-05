// Props (Properties) are used to pass data from one component to another component.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Rahul" />;
}

export default App;
// Output:
// Hello, Rahul