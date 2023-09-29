import React from "react";
import Dock from "./Dock";
import Draggable from "react-draggable";

function Desktop() {
  let disabled = false;
  return (
    <div className='desktop flex w-full'>
      <Dock screenBrightnessLevel={10} />
      <div className='flex-1 text-white w-fit static p-5 '>
        <Draggable disabled={disabled} bounds='parent'>
          <div style={{ paddingLeft: 60, paddingTop: 20 }} className='w-fit'>
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
          <div style={{ paddingLeft: 60, paddingTop: 20 }} className='w-fit'>
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
    </div>
  );
}

export default Desktop;
