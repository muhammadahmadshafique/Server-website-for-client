import React from 'react'

export default function Card() {
  return (
    <div>
        <div>
          <div className=" flex flex-col items-center">
            <div className="border text-white  border-[#01A6F5] mt-[-1.35rem] bg-[#13212E] absolute rounded-3xl w-fit p-1 px-5">
              Rust Hosting
            </div>
            <div className="border border-[#01A6F5] rounded-[32px] w-[230px] text-white px-6 py-4 pt-8 pb-2">
              <div className="flex flex-col items-center justify-center">
                <p className="text-[30px] font-bold">FREE Trial</p>
                <p className="text-[13px]">FREE / 24 Hour</p>
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
                  <p className="text-[13px] text-white">Memory</p>
                </div>
                <p>5GB</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img
                    className="w-[20px] h-[20px] object-contain"
                    src="/dd.png"
                    alt="/tick.png"
                    srcset=""
                  />
                  <p className="text-[13px] text-white">SLOTS</p>
                </div>
                <p>Unlimited</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img
                    className="w-[20px] h-[20px] object-contain"
                    src="/dd.png"
                    alt="/tick.png"
                    srcset=""
                  />
                  <p className="text-[13px] text-white">NVME SSD</p>
                </div>
                <p>20GB</p>
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
