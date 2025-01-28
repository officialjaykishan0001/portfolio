import React from 'react'

const FunInfo = () => {
    return (
        <div className='px-6 w-full max-w-[50%]'>
            <div className='flex justify-between'>
                <div className='flex items-center '>
                    <h1 className='text-[#D4D4D4] hover:text-[#EBE3AC] cursor-pointer'>Jaxai </h1>
                    <p className='text-[14px]'> &nbsp; - taste your curiosity, ask questions, etc</p>
                </div>
                <p className='text-[14px] '>50 users</p>
            </div>
            <div className='flex justify-between mt-3'>
                <div className='flex items-center '>
                    <h1 className='text-[#D4D4D4] hover:text-[#EBE3AC] cursor-pointer'>Reflecto </h1>
                    <p className='text-[14px]'> &nbsp; - save & organise your journal like a pro</p>
                </div>
                <p className='text-[14px] '>50 users</p>
            </div>
        </div>
    )
}

export default FunInfo
