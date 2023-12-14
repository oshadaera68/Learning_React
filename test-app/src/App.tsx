import "./App.css";

function App() {
  const age = 12;
  if (age >= 18) {
    return <h1>Eligiable</h1>;
  }
  return <h1>Student</h1>;
}

export default App;
