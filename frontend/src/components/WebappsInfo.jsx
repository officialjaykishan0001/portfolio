import React from 'react'

const WebappsInfo = () => {
    return (
        <div className='px-6 w-full lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] max-w-[100%]'>
            <div className='flex justify-between sm:flex-nowrap flex-wrap'>
                <div className='flex items-center '>
                    <h1 className='text-[#D4D4D4] hover:text-[#EBE3AC] cursor-pointer text-[14px]'>
                       <a href="https://github.com/officialjaykishan0001/JAX-AI">Jaxai</a>
                    </h1>
                    <p className='text-[14px]'> &nbsp; - taste your curiosity, ask questions, etc</p>
                </div>
                <p className='text-[14px] '>50 users</p>
            </div>
            <div className='flex justify-between mt-3 sm:flex-nowrap flex-wrap '>
                <div className='flex items-center '>
                    <h1 className='text-[#D4D4D4] hover:text-[#EBE3AC] cursor-pointer text-[14px]'>
                        <a href="https://github.com/officialjaykishan0001/Reflecto">Reflecto</a> 
                    </h1>
                    <p className='text-[14px]'> &nbsp; - save & organise your journal like a pro</p>
                </div>
                <p className='text-[14px] '>50 users</p>
            </div>
            <div className='flex justify-between mt-3 sm:flex-nowrap flex-wrap'>
                <div className='flex items-center '>
                    <h1 className='text-[#D4D4D4] hover:text-[#EBE3AC] cursor-pointer text-[14px]'>
                       <a href="https://github.com/officialjaykishan0001/appster">Appster</a> 
                    </h1>
                    <p className='text-[14px]'> &nbsp; - make available your apps to the world, appsterize</p>
                </div>
                <p className='text-[14px] '>20 users</p>
            </div>
            <div className='flex justify-between mt-3 sm:flex-nowrap flex-wrap'>
                <div className='flex items-center '>
                    <h1 className='text-[#D4D4D4] hover:text-[#EBE3AC] cursor-pointer text-[14px]'>
                        <a href="https://github.com/officialjaykishan0001/tunewave">TuneWave</a> 
                    </h1>
                    <p className='text-[14px]'> &nbsp; - feel your emotions, flow through seemless music</p>
                </div>
                <p className='text-[14px] '>20 users</p>
            </div>
        </div>
    )
}

export default WebappsInfo