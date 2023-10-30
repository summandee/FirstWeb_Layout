import Image from "next/image"
import SideCircle from "./SideCircle";


const CenterImage = () => {
  return (
    <section>
      <div className='flex justify-between items-center '>
        <div className='pl-20'>
          <SideCircle text="Buy Orignal" />
        </div>
        <div className=" w-full h-screen flex justify-center items-center mt-24">
          <div className="w-[60%] ">
            <Image src='/pepsi-models.png' width={680} height={380} alt="PepsiCan" />
          </div>
        </div>
        <div className='pr-20'>
          <SideCircle text="Buy Low Sugar" />
      </div>
      </div>
    </section>
  )
}

export default CenterImage;
