import dplogo from '/public/dp-logo.svg'
import Image from 'next/image'


const Developed = () => {
    return (
        <>
        <hr className="h-px my-8 bg-gray-100 border-0 dark:bg-gray-500"/>
        <div className='flex  items-center  px-32 text-white gap-4 pb-7'>
            <div className="w-full flex items-center ">
             <p className='text-[12px] mr-3'>Design & Developed By</p>
                <Image src={dplogo} alt="logo" className='w-5 h-5' />
            </div>
            <div className='w-80'>   
            <p className='text-[12px] -mr-3 '>© Copyright 2023.All Rights Reserved </p>
            </div>

           
        </div>
        </>
    )
}

export default Developed
