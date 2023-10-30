import Link from 'next/link'
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';

const FooterForm = () => {
    return (
        <>
            <div className='flex justify-start items-center px-10 text-white mt-24'>
                <div className='flex flex-col  px-24'>
                    <p className='p-4 tracking-widest'>CONTACT FORM</p>
                    <form  className='flex flex-col'>
                    <input type='text' name='' placeholder='Enter Your Name Here' className='p-4 bg-transparent '/>
                    <input type='text' name='' placeholder='Enter Your Email Here' className='p-4 bg-transparent'/>
                    <input type='text' name='' placeholder="Ex:I'would Like To Contact You" className='p-4 bg-transparent'/>
                    <input type="submit" value="Submit" className='bg-slate-700 px-6 w-32 py-2 rounded-2xl'/>

                    </form>
                </div>
                <div className='ml-24 p-8'>
                    <p className='p-4 tracking-widest'>CONTACT INFORMATION</p>
                    <p className='p-4'>Phone: <span className='pl-12'>+41 79 851 64 79 </span></p>
                    <p className='p-4'>Email: <span className='pl-12'>poseidons@poseidons.eu</span></p>
                    <p className='p-4'>Address: <span className='pl-12'>Kaiserstuhlerstrasse 29b CH-8187 Weiach</span></p>
                    <p className='p-4 tracking-widest  font-semibold'>WE ARE SOCIAL</p>
                    <div className='p-4 flex justify-start gap-6 '>
                        <Link href={'/facebook'}><BsFacebook/></Link>
                        <Link href={'/instagram'}><BsInstagram/></Link>
                        <Link href={'/youtube'}><BsYoutube/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterForm
