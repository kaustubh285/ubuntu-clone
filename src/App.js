import "./App.css";
import Desktop from "./components/Desktop";
import Dock from "./components/Dock";
import Toolbar from "./components/Toolbar";

function App() {
  const setScreenBrightness = (brightnessLevel) => {};
  return (
    <div className='background'>
      <div>
        <Toolbar setScreenBrightness={setScreenBrightness} />
        <Desktop className='flex-1' />
        {/* desktop icons */}
      </div>
    </div>
  );
}

export default App;
