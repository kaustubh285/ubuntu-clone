import "./App.css";
import Dock from "./components/Dock";
import Toolbar from "./components/Toolbar";

function App() {
  const setScreenBrightness = (brightnessLevel) => {};
  return (
    <div className='background'>
      <div>
        <Toolbar setScreenBrightness={setScreenBrightness} />
        <Dock screenBrightnessLevel={10} />
        {/* desktop icons */}
      </div>
    </div>
  );
}

export default App;
