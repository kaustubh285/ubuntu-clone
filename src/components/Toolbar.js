import React, { useEffect, useRef, useState } from "react";
import "./toolbar.css";
import moment from "moment";

import {
  PowerIcon,
  SpeakerWaveIcon,
  SunIcon,
  NoSymbolIcon,
  WifiIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Popover, Slider, Stack } from "@mui/material";

function Toolbar({ setScreenBrightness }) {
  const [anchorEl, setAnchorEl] = React.useState();
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
    setScreenBrightness(newValue);
  };
  const handleSoundChange = (event, newValue) => {
    setSoundValue(newValue);
  };

  useEffect(() => {
    setCurrentTime(moment().format("MMM DD HH:mm"));
  }, []);

  return (
    <div className='toolbar bg-darker' style={{ zIndex: "4" }}>
      <div className='toolbar__body mx-3 text-sm '>
        <div className='toolbar__body--left py-1'>Activities</div>
        <div className='toolbar__body--center py-1'>
          <p>{currentTime}</p>
        </div>
        <div
          className='toolbar__body--right flex py-1'
          style={{
            borderBottom: anchorEl ? "1px solid red" : "",
          }}
          aria-describedby={id}
          variant='contained'
          onClick={handleClick}>
          <SunIcon className='flex-1 h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
          <SpeakerWaveIcon className='h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
          <img
            width='50'
            height='50'
            className='h-4 w-4 ml-1 opacity-70 cursor-pointer hover:opacity-100'
            src='https://img.icons8.com/ios-filled/50/ffffff/battery-.png'
            alt='battery-'
          />
          <ChevronDownIcon className='h-4 w-6 text-white-100 cursor-pointer hover:text-white' />
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
          <div className=' w-72 p-3 px-4 bg-darker flex flex-col justify-between items-center'>
            {/* brightness slider */}
            <div className='w-full  my-0 '>
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
            <div className='w-full my-0 mb-3'>
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

            {/* divider */}
            <div className='border border-gray-900 w-3/4 mb-3'></div>

            {/* wifi name */}
            <div className='w-full my-0 mb-3  flex items-center justify-between'>
              <div className='flex  items-center'>
                <WifiIcon className='h-4 w-6 mr-6 text-white ' />

                <p className='text-gray-400 text-sm'>This LAN is my LAN</p>
              </div>
              <ChevronRightIcon className=' h-4 w-6 ml-3 text-white cursor-pointer' />
            </div>

            {/* bluetooth */}
            <div className='w-full my-0 mb-3 flex items-center justify-between'>
              <div className='flex  items-center'>
                <img
                  width='64'
                  height='64'
                  className='h-6 w-6 mr-6 '
                  src='https://img.icons8.com/wired/64/ffffff/bluetooth-2.png'
                  alt='bluetooth-2'
                />
                <p className='text-gray-400 text-sm'>Off</p>
              </div>
              <ChevronRightIcon className=' h-4 w-6 ml-3 text-white cursor-pointer' />
            </div>

            {/* bluetooth */}
            <div className='w-full my-0 mb-3 flex items-center justify-between'>
              <div className='flex  items-center'>
                <img
                  width='64'
                  height='64'
                  className='h-6 w-6 mr-6'
                  src='https://img.icons8.com/badges/48/ffffff/battery.png'
                  // src='https://img.icons8.com/wired/64/ffffff/bluetooth-2.png'
                  alt='bluetooth-2'
                />
                <p className='text-gray-400 text-sm'>1.12 Remaining (64%)</p>
              </div>
              <ChevronRightIcon className=' h-4 w-6 ml-1 text-white cursor-pointer' />
            </div>

            {/* divider */}
            <div className='border border-gray-900 w-3/4 mb-3'></div>

            {/* setting */}
            <div className='w-full my-0 mb-3 flex items-center justify-between'>
              <div className='flex  items-center'>
                <img
                  width='64'
                  height='64'
                  className='h-5 w-5 ml-1 mr-6'
                  src='https://img.icons8.com/ios/50/ffffff/settings--v1.png'
                  alt='bluetooth-2'
                />
                <p className='text-white text-sm'>Settings</p>
              </div>
              <ChevronRightIcon className=' h-4 w-6 ml-3 text-white cursor-pointer' />
            </div>

            {/* lock */}
            <div className='w-full my-0 mb-3 flex items-center justify-between'>
              <div className='flex  items-center'>
                <img
                  width='64'
                  height='64'
                  className='h-5 w-4 ml-1 mr-7'
                  src='https://img.icons8.com/ios-glyphs/30/ffffff/lock--v1.png'
                  // src='https://img.icons8.com/wired/64/ffffff/bluetooth-2.png'
                  alt='bluetooth-2'
                />
                <p className='text-white text-sm'>Lock</p>
              </div>
              <ChevronRightIcon className=' h-4 w-6 ml-1 text-white cursor-pointer' />
            </div>

            {/* Power */}
            <div className='w-full my-0 mb-3  flex items-center justify-between'>
              <div className='flex  items-center'>
                <PowerIcon className='h-4 w-6 mr-6 text-white ' />
                <p className='text-white text-sm'>Power off / Log Out</p>
              </div>
              <ChevronRightIcon className=' h-4 w-6 ml-3 text-white cursor-pointer' />
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Toolbar;
