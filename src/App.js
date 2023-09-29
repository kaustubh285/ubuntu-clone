import { useEffect, useState } from "react";
import "./App.css";
import Desktop from "./components/Desktop";
import Dock from "./components/Dock";
import Toolbar from "./components/Toolbar";

function App() {
  const [brightnessValue, setBrightnessValue] = useState(10);
  const [iconsVisibility, setIconsVisibility] = useState(1);
  const [blackLayerVisibility, setBlackLayerVisibility] = useState(0);
  useEffect(() => {
    setIconsVisibility(brightnessValue / 10);
    setBlackLayerVisibility(1 - brightnessValue / 10);
  }, [brightnessValue]);

  return (
    <div className='background'>
      <div>
        <Toolbar
          setBrightnessValue={setBrightnessValue}
          brightnessValue={brightnessValue}
        />
        <Desktop
          className='flex-1'
          blackLayerVisibility={blackLayerVisibility}
          iconsVisibility={iconsVisibility}
        />
        {/* desktop icons */}
      </div>
    </div>
  );
}

export default App;
