import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { MinusCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

function XtermTerminal() {
  const terminalRef = useRef(null);
  const [terminalWindow, setTerminalWindow] = useState();
  useEffect(() => {
    const terminal = new Terminal();
    setTerminalWindow(terminal);
    if (terminalRef === null) {
      setTimeout(() => {
        terminal.open(terminalRef.current);
      }, 1000);
    } else terminal.open(terminalRef.current);

    // terminal.focus(); // Add this line to set focus

    // You can interact with the terminal here
    terminal.write("Hello from xterm.js $ ");

    return () => {
      terminal.dispose(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <div className='ml-4 p-0 mt-3 xterm-terminal flex flex-col rounded-lg bg-slate-20 overflow-hidden w-7/12'>
      <div
        className=' flex text-white pr-4 p-2 justify-between'
        style={{
          backgroundColor: "#201f1f",
        }}>
        <div></div>
        <div>
          <p>Terminal</p>
        </div>
        <div className='flex float-right items-center'>
          <MinusCircleIcon
            className='h-4 w-6 text-yellow-600 opacity-80 hover:opacity-100 cursor-pointer'
            style={{ zIndex: 99 }}
          />
          {/* <MinusCircleIcon className='h-4 w-6 text-yellow-600' /> */}
          <XCircleIcon
            className='h-4 w-6 text-red-600 opacity-80 hover:opacity-100 cursor-pointer'
            style={{ zIndex: 99 }}
            onClick={() => {
              terminalWindow.dispose();
            }}
          />
        </div>
      </div>
      <div
        ref={terminalRef}
        className='  h-full'
        style={{
          backgroundColor: "rgb(44,0,30, 0.8) !important",
        }}
      />
    </div>
  );
}

export default XtermTerminal;
