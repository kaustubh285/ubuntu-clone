import "./App.css";
import Dock from "./components/Dock";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className='background'>
      <div>
        <Toolbar />
        <Dock />
        {/* desktop icons */}
      </div>
    </div>
  );
}

export default App;
