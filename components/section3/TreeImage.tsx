import Image from "next/image"
import treeImage from '/public/head-final.png'

export const TreeImage = () =>{
    return (
        <div className="fixed  w-full h-screen flex justify-center items-center">
         <div className="w-[30%] opacity-[.46]">
             <Image src={treeImage} width={380} height={380} alt="TreeImage"/>
         </div>
        </div>
    )
}
