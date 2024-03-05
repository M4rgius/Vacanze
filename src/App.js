import Title from "./components/Title"
import Holiday from "./components/Holiday"
import './App.css';

function App() {
  return (
    <section className="section-center">
      <div className="container">
        <Title text={"Le nostre vacanze"}/>
        <Holiday/>
      </div>
    </section>
  );
}

export default App;
