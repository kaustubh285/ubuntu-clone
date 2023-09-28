import React, { useEffect, useRef, useState } from "react";
import "./toolbar.css";
import moment from "moment";

import {
  PowerIcon,
  SpeakerWaveIcon,
  SunIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/solid";
import { Popover, Slider, Stack } from "@mui/material";
function Toolbar() {
  const [anchorEl, setAnchorEl] = React.useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [brightnessValue, setBrightnessValue] = React.useState(30);
  const [soundValue, setSoundValue] = React.useState(30);

  // OPEN AND CLOSE THE POPOVER
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleBrightnessChange = (event, newValue) => {
    setBrightnessValue(newValue);
  };
  const handleSoundChange = (event, newValue) => {
    setSoundValue(newValue);
  };

  useEffect(() => {
    setCurrentTime(moment().format("MMM DD HH:mm"));
  }, []);

  return (
    <div className='toolbar bg-darker'>
      <div className='toolbar__body mx-3 text-sm py-1'>
        <div className='toolbar__body--left'>Activities</div>
        <div className='toolbar__body--center'>
          <p>{currentTime}</p>
        </div>
        <div
          className='toolbar__body--right flex'
          aria-describedby={id}
          variant='contained'
          onClick={handleClick}>
          <SunIcon className='flex-1 h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
          <SpeakerWaveIcon className='h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
          <PowerIcon className='h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
        </div>
      </div>

      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          className='m-3'>
          {/* brightness slider */}
          <div className='w-52 px-2 my-0 bg-darker'>
            <div className='flex items-center content-between'>
              <SunIcon className='h-4 w-6 mr-3 text-white' />
              <Slider
                className='text-white'
                size='small'
                aria-label='Brightness'
                value={brightnessValue}
                onChange={handleBrightnessChange}
              />
            </div>
          </div>

          {/* sound slider */}
          <div className='w-52 px-2 my-0 bg-darker'>
            <div className='flex items-center content-between'>
              <SpeakerWaveIcon className='h-4 w-6 mr-3 text-white' />
              <Slider
                className='text-white'
                size='small'
                aria-label='Volume'
                value={soundValue}
                onChange={handleSoundChange}
              />
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Toolbar;
