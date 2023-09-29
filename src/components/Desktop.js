import React, { useEffect, useState } from "react";
import Dock from "./Dock";
import Draggable from "react-draggable";
import AppList from "./AppList";

function Desktop({ blackLayerVisibility, iconsVisibility }) {
  let disabled = false;

  const [showLauncher, setShowLauncher] = useState(true);

  return (
    <div className='desktop flex w-full'>
      <div
        className='absolute top-6 left-0 right-0 bottom-0'
        style={{
          backgroundColor: "#000000",
          opacity: blackLayerVisibility,
        }}></div>
      <Dock
        screenBrightnessLevel={10}
        blackLayerVisibility={blackLayerVisibility}
        iconsVisibility={iconsVisibility}
        setShowLauncher={setShowLauncher}
        showLauncher={showLauncher}
      />

      <div
        className='flex-1 text-white w-fit static '
        style={{ opacity: iconsVisibility }}>
        {showLauncher ? (
          <AppList />
        ) : (
          <div className='p-3 w-full h-full'>
            <Draggable disabled={disabled} bounds='parent'>
              <div
                style={{ paddingLeft: 60, paddingTop: 20 }}
                className='w-fit'>
                <div className='cursor-move folder-icon'>
                  <div
                    style={{
                      background:
                        'url("https://img.icons8.com/color/48/folder-invoices--v1.png")',
                    }}
                    className=' h-10 w-12 my-1 opacity-80  object-contain'
                    src=''
                    alt='folder-invoices--v1'
                  />
                  <h3>Documents</h3>
                </div>
              </div>
            </Draggable>

            <Draggable disabled={disabled} bounds='parent'>
              <div
                style={{ paddingLeft: 60, paddingTop: 20 }}
                className='w-fit'>
                <div className=' cursor-move folder-icon'>
                  <div
                    style={{
                      background:
                        'url("https://img.icons8.com/color/48/folder-invoices--v1.png")',
                    }}
                    className=' h-10 w-12 my-1 opacity-80  object-contain'
                    src=''
                    alt='folder-invoices--v1'
                  />
                  <h3>Downloads</h3>
                </div>
              </div>
            </Draggable>
          </div>
        )}
      </div>
    </div>
  );
}

export default Desktop;
