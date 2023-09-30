import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
function AppList() {
  const [appList, setAppList] = useState([]);
  const [query, setQuery] = useState("");

  const listOfApps = [
    {
      name: "Chrome",
      img: "https://img.icons8.com/color/48/folder-invoices--v1.png",
    },
    {
      name: "Calculator",
      img: "https://img.icons8.com/color/48/folder-invoices--v1.png",
    },
    {
      name: "About",
      img: "https://img.icons8.com/color/48/folder-invoices--v1.png",
    },
    {
      name: "VS  Code",
      img: "icons/icon-vs-code.png",
    },
    {
      name: "Terminal",
      img: "icons/icon-terminal.png",
    },
    {
      name: "Spotify",
      img: "icons/icon-spotify.png",
    },
    {
      name: "Libre Charts",
      img: "icons/libreoffice-chatrs.png",
    },
    {
      name: "Libre Draw",
      img: "icons/libreoffice-draw.png",
    },
    {
      name: "Libre Impress",
      img: "icons/libreoffice-impress.png",
    },
    {
      name: "Libre Writer",
      img: "icons/libreoffice-writer.png",
    },
    {
      name: "Libre Base",
      img: "icons/libreoffice-base.png",
    },
    {
      name: "Trash",
      img: "icons/icon-trash.png",
    },
    {
      name: "Downloads",
      img: "https://img.icons8.com/color/48/folder-invoices--v1.png",
    },
    {
      name: "Documents",
      img: "https://img.icons8.com/color/48/folder-invoices--v1.png",
    },
    {
      name: "Projects",
      img: "https://img.icons8.com/color/48/folder-invoices--v1.png",
    },
  ];

  useEffect(() => {
    setAppList(listOfApps);
  }, []);

  useEffect(() => {
    if (query === "") {
      setAppList(listOfApps);
      return;
    }

    let newAppList = listOfApps.filter(({ name, img }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(newAppList);
    setAppList(newAppList);
  }, [query]);
  return (
    <div className='bg-dark p-5 h-full w-full flex flex-col'>
      {/* search box */}
      <div className='flex justify-center'>
        <div className='bg-white w-5/12 px-3 py-2 rounded-full text-black flex items-center'>
          <MagnifyingGlassIcon className='h-4 w-6 ' />
          <input
            type='text'
            className='flex-1 cursor-text border-none selection:border-none active:border-0'
            placeholder='Type to search'
            style={{
              zIndex: 99,
              border: "none",
              outline: 0,
            }}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          {query.length ? (
            <XMarkIcon
              className='h-4 w-6 cursor-pointer hover:bg-slate-100'
              style={{ zIndex: 99 }}
              onClick={() => {
                setQuery("");
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='my-7'></div>
      <div className='flex justify-center w-full h-full '>
        <div
          className='flex w-10/12 flex-wrap items-start justify-start'
          style={{
            height: "min-content",
          }}>
          {appList.map(({ name, img }) => (
            <div
              className='cursor-pointer w-28 h-24 launcher-folder-icon p-7 mr-5 hover:bg-zinc-400 flex flex-col justify-between'
              style={{
                zIndex: 999,
              }}>
              <img
                width='48'
                height='48'
                className=' cursor-pointer opacity-90 mb-3 max-h-14'
                src={img}
                alt='folder-invoices--v1'
              />
              <p className='text-sm cursor-pointer text-center'>{name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* flex list of apps */}
    </div>
  );
}

export default AppList;
