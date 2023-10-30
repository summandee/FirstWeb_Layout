import Paragraph3 from './Paragraph3'
import CircleText from './CircleText'


export default function ParagraphSection() {
    return (
        <>
            <div className='flex justify-between ml-60 mt-[90px]'>
                <div className='w-[40%] mt-28'>
                    <CircleText />
                </div>
                <div className='w-[50%] ml-56'>
                    < Paragraph3 />
                </div>
            </div>

        </>
    )
}