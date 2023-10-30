const Paragraph = (props:{text:string}) =>{
    return(
        <>
        <p className='text-slate-400 text-left w-72 text-normal ml-[270px] mt-[90px]'>
        {props.text}
        </p>
        </>
    )
}
export default Paragraph;