import TextField from "./components/TextField";
import './App.css';

function App() {
  return (
    <section className="container">
      <h1>Weigh Out There</h1>

      <div className="textfield">
        <TextField placeholder="Enter your weight" />
      </div>

    </section>
  );
}

export default App;