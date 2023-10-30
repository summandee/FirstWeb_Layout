import Image from "next/image"

export const BgImage = () =>{
    return (
        <div className="fixed top-0 w-full h-screen flex justify-center items-center">
         <div className="w-[30%] opacity-[.46]">
             <Image src="/head-final.png" width={380} height={380} alt="TopImage"/>
         </div>
        </div>
    )
}
