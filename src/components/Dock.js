import React, { useState } from "react";
import "./dock.css";

function Dock({
  screenBrightnessLevel,
  blackLayerVisibility,
  iconsVisibility,
  setShowLauncher,
  showLauncher,
}) {
  return (
    <div className='dock '>
      <div
        className='dock__apps flex flex-col w-8/12 ml-3 items-center h-full pb-8'
        style={{ opacity: iconsVisibility }}>
        <div className='flex-1'>
          {/* Chrome  */}
          <div className='folder-icon text-white'>
            <div className='chrome-img-dock h-9 w-9 opacity-90 hover:opacity-90' />
            {/* <p className='text-sm cursor-pointer'>Chrome</p> */}
          </div>

          <div className='folder-icon text-white'>
            <div className='gedit-img-dock h-10 w-9 my-3 cursor-pointer opacity-90 hover:opacity-90' />
            {/* <p className='text-sm cursor-pointer'>Gedit</p> */}
          </div>

          <div className='folder-icon text-white'>
            <img
              width='48'
              height='48'
              className=' cursor-pointer opacity-90 hover:opacity-90'
              src='https://img.icons8.com/color/48/folder-invoices--v1.png'
              alt='folder-invoices--v1'
            />
            {/* <p className='text-sm cursor-pointer'>Project</p> */}
          </div>

          <div className='folder-icon text-white'>
            <img
              width='48'
              height='48'
              className=' cursor-pointer opacity-90 hover:opacity-90'
              src='https://img.icons8.com/color/48/folder-invoices--v1.png'
              alt='folder-invoices--v1'
            />
            {/* <p className='text-sm cursor-pointer'>files</p> */}
          </div>
        </div>
        <div
          className='flex-none cursor-pointer p-2 folder-icon'
          style={{ padding: "20%" }}
          onClick={() => {
            setShowLauncher(!showLauncher);
          }}>
          <img
            width='32'
            height='32'
            src='https://img.icons8.com/metro/26/ffffff/thumbnails.png'
            alt='thumbnails--v1'
          />
        </div>
        {/* <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-90 hover:opacity-90' />
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-90 hover:opacity-90' /> */}
      </div>
    </div>
  );
}

export default Dock;
