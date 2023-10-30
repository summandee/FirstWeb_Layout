

export default function SideCircle(props:{text:string}) {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="rounded-full w-52 h-52 bg-blue-800 p-1">
                    <div className="relative h-48 w-48 ml-1 mt-1 rounded-full opacity-75 bg-gray-800 ">
                    <p className='text-white text-center absolute ml-10 mt-20'> {props.text} </p>
                    </div>
                </div>
            </div>
           
        </>
    )
}