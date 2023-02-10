import React, { useState } from "react";
import { BeakerIcon } from '@heroicons/react/24/solid'

export default function Navbar({ham}) {
  const [gameserver, setGameserver] = useState(false);
  const [company, setCompany] = useState(false);
  const [login, setLogin] = useState(false);
  

  return (
    <>
    <nav className="bg-[url('../public/bigimg.png')] bg-no-repeat	bg-cover font-['Poppins]">
      <div className="flex items-center flex-wrap text-[14px] justify-between w-[90%] mx-auto cursor-pointer">
        <div>
          <img
            className="w-[90px] h-[90px] object-contain cursor-pointer"
            src="./logo.png"
            alt=""
            srcset=""
          />
        </div>
        

        <div className={`absolute ${ham ? '' : 'hidden'} md:hidden left-0 top-0 bg-[#01A6F5] w-screen rounded-none h-screen z-10`}>
          <div className='h-screen  flex flex-col items-center justify-center'>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 gap-2">
          <div className="flex gap-x-2 relative">
            <span className='text-white font-["Poppins"] font-normal text-[14px]'>GAME SERVER</span>
            <img
              onClick={() => setGameserver(!gameserver)}
              className="text-black object-contain cursor-pointer"
              src="./arrow.png"
              alt=""
              srcset=""
            />
            {gameserver && (
              <div className="absolute bg-white rounded-lg mt-1 right-[-8px] top-[18px]">
                <div className="text-[9px] text-[#5A5B5B] flex flex-col gap-y-1 mt-1 cursor-pointer">
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain hidden group-hover:flex pr-1 h-6  "
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      RUST SERVER HOSTING
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain hidden group-hover:flex pr-1 h-6 w-32"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center whitespace-nowrap	 justify-center">
                      MINECRAFT SERVER HOSTING
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      DISCORD BOT HOSTING
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-x-2">
            <span className='text-white font-["Poppins"] font-normal text-[14px] cursor-pointer'>
              WEB HOSTING
            </span>
          </div>
          <div className="flex gap-x-2">
            <span className='text-white font-["Poppins"] font-normal text-[14px] cursor-pointer'>
              MORE HOSTING
            </span>
            <img
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex gap-x-2 relative">
            <span className='text-white font-["Poppins"] font-normal text-[14px] cursor-pointer'>
              COMPANY
            </span>
            <img
              onClick={() => setCompany(!company)}
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
            {company && (
              <div className="absolute bg-white z-50 rounded-lg mt-1 right-[-8px] top-[18px]">
                <div className="text-[9px] text-[#5A5B5B] z-50 flex flex-col gap-y-1 mt-1 cursor-pointer">
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain  pr-1 h-6  hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 1
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 2
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 3
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          </div>
          <div className='z-0 flex justify-between gap-x-12 mt-12'>
          <button className="border relative border-white flex items-center justify-center px-2 py-1 text-[14px] rounded-md	gap-x-2">
            <span className='text-white font-["Poppins"] font-normal text-[14px]'>LOGIN</span>
            <img
              onClick={() => setLogin(!login)}
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
            {login && (
              <div className="absolute bg-white rounded-lg mt-1 right-[-4px] top-[30px] whitespace-nowrap">
                <div className="text-[9px] text-[#5A5B5B] flex flex-col gap-y-1 mt-1 cursor-pointer">
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain  pr-1 h-6  hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 1
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 2
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 3
                    </p>
                  </div>
                </div>
              </div>
            )}
          </button>
          <button className="bg-[#13212E] flex items-center justify-center px-2 py-1 text-[14px] rounded-md	gap-x-2">
            <span className='text-white bg-[#13212E] font-["Poppins"] font-normal text-[14px]'>Get SUPPORT</span>
          </button>
          <button className="border-none flex items-center justify-center px-2 py-1 text-[14px] gap-x-2 rounded-full bg-[#13212E]">
            <img
              className="text-black object-contain  z-10"
              src="./basket.png"
              alt=""
              srcset=""
            />{" "}
          </button>
          </div>
          </div>
        </div>



        <div className="md:flex whitespace-nowrap hidden items-center gap-x-6 flex-wrap ml-8  md:ml-0 xl:mr-32  ">
          <div className="flex gap-x-2 relative">
            <span className='text-white font-["Poppins"] font-normal text-[14px]'>GAME SERVER</span>
            <img
              onClick={() => setGameserver(!gameserver)}
              className="text-black object-contain cursor-pointer"
              src="./arrow.png"
              alt=""
              srcset=""
            />
            {gameserver && (
              <div className="absolute bg-white whitespace-nowrap	 rounded-lg mt-1 right-[-8px] top-[18px]">
                <div className="text-[9px] text-[#5A5B5B] flex flex-col gap-y-1 mt-1 cursor-pointer">
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain hidden group-hover:flex pr-1 h-6 "
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center group-hover:flex justify-center pl-3">
                      RUST SERVER HOSTING
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain hidden group-hover:flex pr-1 h-6 w-32"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center whitespace-nowrap	justify-center">
                      MINECRAFT SERVER HOSTING
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      DISCORD BOT HOSTING
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-x-2">
            <span className='text-white font-["Poppins"] font-normal text-[14px] cursor-pointer'>
              WEB HOSTING
            </span>
          </div>
          <div className="flex gap-x-2">
            <span className='text-white font-["Poppins"] font-normal text-[14px] cursor-pointer'>
              MORE HOSTING
            </span>
            <img
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex gap-x-2 relative">
            <span className='text-white font-["Poppins"] font-normal text-[14px] cursor-pointer'>
              COMPANY
            </span>
            <img
              onClick={() => setCompany(!company)}
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
            {company && (
              <div className="absolute bg-white whitespace-nowrap	 rounded-lg mt-1 right-[-8px] top-[18px]">
                <div className="text-[9px] text-[#5A5B5B] flex flex-col gap-y-1 mt-1 cursor-pointer">
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain  pr-1 h-6  hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 1
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 2
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 3
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:flex hidden gap-x-5 ml-8 mt-4 mb-2 md:mb-0 lg:mt-0 md:ml-0">
          <button className="border relative border-white flex items-center justify-center px-2 py-1 text-[14px] rounded-md	gap-x-2">
            <span className='text-white font-["Poppins"] font-normal text-[14px]'>LOGIN</span>
            <img
              onClick={() => setLogin(!login)}
              className="text-black object-contain"
              src="./arrow.png"
              alt=""
              srcset=""
            />
            {login && (
              <div className="absolute bg-white whitespace-nowrap	 rounded-lg mt-1 right-[-4px] top-[30px] whitespace-nowrap">
                <div className="text-[9px] text-[#5A5B5B] flex flex-col gap-y-1 mt-1 cursor-pointer">
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain  pr-1 h-6  hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 1
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 2
                    </p>
                  </div>
                  <div className="group hover:bg-[#b4e1ff] flex gap-x-1 pr-2 py-1">
                    {" "}
                    <img
                      className="object-contain inline pr-1 h-6 hidden group-hover:flex"
                      src="./line.png"
                      alt=""
                      srcset=""
                    />{" "}
                    <p className="flex items-center justify-center pl-3">
                      OPTION 3
                    </p>
                  </div>
                </div>
              </div>
            )}
          </button>
          <button className="border bg-[#13212E] border-none flex items-center justify-center px-2 py-1 text-[14px] rounded-md	gap-x-2">
            <span className='text-white bg-[#13212E] font-["Poppins"] font-normal text-[14px]'>Get SUPPORT</span>
          </button>
          <button className="border-none flex items-center justify-center px-2 py-1 text-[14px] gap-x-2 rounded-full bg-[#13212E]">
            <img
              className="text-black object-contain"
              src="./basket.png"
              alt=""
              srcset=""
            />{" "}
          </button>
        </div>
      </div>

      <div className="space-y-3 w-[78%] mx-auto">
        <p className="font-['Radio Canada'] font-normal text-[44px] text-white  ">
          <span className="text-[#01A6F5] font-['Radio Canada'] font-normal text-[44px]">DISCORD BOT</span> SEARVER
        </p>
        <p className="text-[24px] text-white font-['Poppins'] font-normal text-[26px]">
          SERVERS FROM ONLY <span className="text-[#01A6F5] font-['Poppins'] font-normal text-[26px]">$1.0</span>
        </p>
        <p className="sm:w-[31rem] w-[25rem]  text-white font-['Poppins'] font-normal text-[16px]">
          Once you add Discord bots, you can use the bot commands right from
          your server. All of these best bots for Discord are free to use.
        </p>
        <div className="relative">
          <button className="text-white  bg-[#01A6F5] ml-1 mt-1 px-4 py-1 border border-none font-['Poppins'] font-normal text-[20px]">
            Order Now
          </button>
          <div className="absolute top-[0] left-[-6]  border border-t-white border-l-white border-r-0 border-b-0 w-[50px] h-[30px]"></div>
          <div className="absolute top-[16px] left-[95px]  border border-b-white border-r-white border-l-0 border-t-0 w-[50px] h-[30px]"></div>
        </div>
      </div>

      <div className="flex items-center gap-y-12 flex-col flex-wrap justify-around md:flex-row mx-12 mt-[89px] whitespace-nowrap">
        <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg pb-6">
          <p className="text-[16px] font-['Poppins'] font-normal text-white">MORE HOSTING-START AT</p>
          <p className="text-[11px] font-['Poppins'] font-normal text-white opacity-[0.67]">
            simply dummy text of the printing <br /> and typesetting industry
          </p>

          <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
            <span className="text-[11px] font-['Poppins'] font-normal text-white">1.0$</span>
            <p className="text-[11px] font-['Poppins'] font-normal text-white">Month</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg pb-6">
          <p className="text-[16px] font-['Poppins'] font-normal text-white">MORE HOSTING-START AT</p>
          <p className="text-[11px] font-['Poppins'] font-normal text-white opacity-[0.67]">
            simply dummy text of the printing <br /> and typesetting industry
          </p>

          <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
            <span className="text-[11px] font-['Poppins'] font-normal text-white">1.0$</span>
            <p className="text-[11px] font-['Poppins'] font-normal text-white">Month</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-7  md:mb-12 md:mt-[-37px] rounded-[1.5rem] border-b-[12px] ">
          <p className="text-[16px] font-['Poppins'] font-normal text-white">DISCORD BOT-START AT</p>
          <p className="text-[11px] font-['Poppins'] font-normal text-white opacity-[0.67]">
            simply dummy text of the printing <br /> and typesetting industry
          </p>

          <div className="flex flex-col border border-[#5A5B5B] bg-[#01A6F5] rounded-full w-[55px] h-[55px] items-center justify-center shadow-lg shadow-cyan-500/50  ">
            <span className="text-[11px] font-['Poppins'] font-normal text-white ">7.50$</span>
            <p className="text-[11px] font-['Poppins'] font-normal text-white">Month</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg pb-6">
          <p className="text-[16px] font-['Poppins'] font-normal text-white">MINECRAFT-START AT</p>
          <p className="text-[11px] font-['Poppins'] font-normal text-white opacity-[0.67]">
            simply dummy text of the printing <br /> and typesetting industry
          </p>

          <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
            <span className="text-[11px] font-['Poppins'] font-normal text-white">1.0$</span>
            <p className="text-[11px] font-['Poppins'] font-normal text-white">Month</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 bg-[#0F1923] border border-[#01A6F5] w-fit h-fit p-3 rounded-lg  pb-6">
          <p className="text-[16px] font-['Poppins'] font-normal text-white">RUST SERVER-START AT</p>
          <p className="text-[11px] font-['Poppins'] font-normal text-white opacity-[0.67]">
            simply dummy text of the printing <br /> and typesetting industry
          </p>

          <div className="flex flex-col border border-[#5A5B5B] bg-[#1C2B3F] rounded-full w-[55px] h-[55px] items-center justify-center ">
            <span className="text-[11px] text-white">1.0$</span>
            <p className="text-[11px] font-['Poppins'] font-normal text-white">Month</p>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
