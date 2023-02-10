import React from 'react'

export default function Card({trial,time,ra,rb,rc,main}) {
  return (
    <div>
        <div>
          <div className=" flex flex-col items-center">
            <div className="border text-white font-['Radio Canada'] font-normal text-[21px]  border-[#01A6F5] mt-[-1.35rem] bg-[#13212E] absolute rounded-3xl w-fit p-1 px-5">
              {main}
            </div>
            <div className="border border-[#01A6F5] rounded-[32px] w-[230px] text-white px-6 py-4 pt-8 pb-2">
              <div className="flex flex-col items-center justify-center">
                <p className="font-['Radio Canada'] font-normal text-[37px] font-bold">FREE Trial</p>
                <p className="text-[13px]">{trial}</p>
              </div>
              <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-between mt-4 ">
                <div className="flex items-center gap-x-2">
                  <img
                    className="w-[20px] h-[20px] object-contain"
                    src="/dd.png"
                    alt="/tick.png"
                    srcset=""
                  />
                  <p className="font-['Radio Canada'] font-normal text-[14px] text-white">Memory</p>
                </div>
                <p className="font-['Radio Canada'] font-normal text-[14px]">{ra}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img
                    className="w-[20px] h-[20px] object-contain"
                    src="/dd.png"
                    alt="/tick.png"
                    srcset=""
                  />
                  <p className="font-['Radio Canada'] font-normal text-[14px] text-white">SLOTS</p>
                </div>
                <p className="font-['Radio Canada'] font-normal text-[14px]">{rb}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img
                    className="w-[20px] h-[20px] object-contain"
                    src="/dd.png"
                    alt="/tick.png"
                    srcset=""
                  />
                  <p className="font-['Radio Canada'] font-normal text-[14px] text-white">NVME SSD</p>
                </div>
                <p className="font-['Radio Canada'] font-normal text-[14px]">{rc}</p>
              </div>
              </div>
              <button class="bg-[#01A6F5] hover:bg-blue-500 text-white text-[12px] py-1 px-12 whitespace-nowrap flex items-center justify-center w-full my-4 rounded-full">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
