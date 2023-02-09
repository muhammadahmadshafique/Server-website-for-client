import React from "react";

export default function FastServices() {
  return (
    <div className="bg-[#1B2A3D] font-['Poppins]">
      <div className="flex flex-col text-white items-center justify-center gap-y-2 py-8 pb-[33px]">
        <p className="text-[44px] md:w-[55%] w-[85%] flex flex-col text-white items-center justify-center mx-auto">
          FAST SERVERS
        </p>
        <p className="text-[21px] opacity-80 md:w-[55%] w-[85%] flex flex-col text-white items-center justify-center mx-auto">
          Whereever you are in the world,you can find a server right for you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-[80%] mx-auto justify-around">

        <div className='flex flex-col  items-center justify-center'>
           <img className='w-[380px] h-[380px] object-contain' src="./a.png" alt="" srcset="" />

        </div>
        <div className='text-[20px] flex flex-col  items-center justify-center gap-4 mb-4 '>
           <div className="bg-[#19354E] rounded-xl flex w-fit gap-x-2 items-center p-2">
            <img className="w-[24px] h-[24px] object-contain" src="/tick.png" alt="/tick.png" srcset="" />
            <p className="text-[19px] text-white">Wherever you are in the world,</p>
           </div>
           <div className="bg-[#19354E] rounded-xl flex w-fit gap-x-2 items-center p-2">
            <img className="w-[24px] h-[24px] object-contain" src="/tick.png" alt="/tick.png" srcset="" />
            <p className="text-[19px] text-white">Wherever you are in the world,</p>
           </div>
           <div className="bg-[#19354E] rounded-xl flex w-fit gap-x-2 items-center p-2">
            <img className="w-[24px] h-[24px] object-contain" src="/tick.png" alt="/tick.png" srcset="" />
            <p className="text-[19px] text-white">Wherever you are in the world,</p>
           </div>
           <div className="bg-[#19354E] rounded-xl flex w-fit gap-x-2 items-center p-2">
            <img className="w-[24px] h-[24px] object-contain" src="/tick.png" alt="/tick.png" srcset="" />
            <p className="text-[19px] text-white">Wherever you are in the world,</p>
           </div>
           <div className="bg-[#19354E] rounded-xl flex w-fit gap-x-2 items-center p-2">
            <img className="w-[24px] h-[24px] object-contain" src="/tick.png" alt="/tick.png" srcset="" />
            <p className="text-[19px] text-white">Wherever you are in the world,</p>
           </div>
           <div className="bg-[#19354E] rounded-xl flex w-fit gap-x-2 items-center p-2">
            <img className="w-[24px] h-[24px] object-contain" src="/tick.png" alt="/tick.png" srcset="" />
            <p className="text-[19px] text-white">Wherever you are in the world,</p>
           </div>
        </div>

      </div>
    </div>
  );
}
