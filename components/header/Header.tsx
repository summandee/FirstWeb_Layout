import Link from 'next/link'
import Image from 'next/image'
import mainlogo from '/public/mainlogo.svg'

export default function Header() {
    return (
        <>
            <div className='flex justify-between items-center py-6 px-8'>
                <Link href="/">
                    <div className="fixed top-4 w-full">
                        <Image src={mainlogo} alt="logo" className='w-10' />
                    </div>
                </Link>
                <div>
                    <ul className=' flex gap-x-10 text-white ml-28'>
                        {/* <li className='text-lg'><Link href="/">Home</Link> </li> */}
                        <li className='text-[12px]'><Link href="/aboutus">About Us</Link> </li>
                        <li className='text-[12px]'><Link href="/moringa">Moringa</Link></li>
                        <li className='text-[12px]'><Link href="/thedrink">The Drink</Link></li>
                        <li className='text-[12px]'><Link href="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className=" flex justify-between items-center gap-x-8">
                <div className=" text-[12px] text-white">
                    De
                </div>
                <div className="text-[12px] text-white">
                    TRY NOW
                </div>

                <div className="bg-gray-300 rounded-full h-10 w-10 text-[12px] flex justify-center items-center">
                    Logo
                </div>
                </div>
            </div>
        </>


    )

}