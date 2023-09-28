import React, { useEffect, useState } from "react";
import "./toolbar.css";
import moment from "moment";

import {
  PowerIcon,
  SpeakerWaveIcon,
  SunIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";
function Toolbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(moment().format("MMM DD HH:mm"));
  }, []);
  return (
    <div className='toolbar'>
      <div className='toolbar__body mx-3 text-sm py-1'>
        <div className='toolbar__body--left'>Activities</div>
        <div className='toolbar__body--center'>
          {/* time */}
          <p>{currentTime}</p>
          {/* notification */}
        </div>
        <div className='toolbar__body--right flex'>
          {/* bluetooth */}
          {/* speaker */}
          {/* brightness */}
          <SunIcon className='flex-1 h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
          <SpeakerWaveIcon className='h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
          <PowerIcon className='h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
