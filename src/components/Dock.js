import React, { useState } from "react";
import "./dock.css";

function Dock({ screenBrightnessLevel }) {
  const [opacity, setOpacity] = useState(0);

  return (
    <div className='dock static'>
      <div
        className='absolute top-6 left-0 -right-2/4 bottom-0'
        style={{
          width: "65px",
          backgroundColor: "#000000",
          opacity: 0,
        }}></div>
      <div
        className='dock__apps flex flex-col w-8/12 mx-2 items-center'
        style={{ opacity: 1 }}>
        {/* Chrome  */}
        <div className='folder-icon text-white'>
          <div className='chrome-img-dock h-9 w-9 opacity-90 hover:opacity-90' />
          <p className='text-sm cursor-pointer'>Chrome</p>
        </div>

        <div className='folder-icon text-white'>
          <div className='gedit-img-dock h-10 w-9 my-3 cursor-pointer opacity-90 hover:opacity-90' />
          <p className='text-sm cursor-pointer'>Gedit</p>
        </div>

        <div className='folder-icon text-white'>
          <img
            width='48'
            height='48'
            className=' cursor-pointer opacity-90 hover:opacity-90'
            src='https://img.icons8.com/color/48/folder-invoices--v1.png'
            alt='folder-invoices--v1'
          />
          <p className='text-sm cursor-pointer'>Project</p>
        </div>

        <div className='folder-icon text-white'>
          <img
            width='48'
            height='48'
            className=' cursor-pointer opacity-90 hover:opacity-90'
            src='https://img.icons8.com/color/48/folder-invoices--v1.png'
            alt='folder-invoices--v1'
          />
          <p className='text-sm cursor-pointer'>New</p>
        </div>
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-90 hover:opacity-90' />
        <div className='chrome-img-dock h-9 w-9 my-3 cursor-pointer opacity-90 hover:opacity-90' />
      </div>
    </div>
  );
}

export default Dock;
