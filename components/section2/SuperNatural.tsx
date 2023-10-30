import ParaTop from './ParaTop'
import Paragraph from './Paragraph'
export default function SuperNatural() {
    return (
        <>
            <ParaTop />
            <div className='text-9xl ml-[120px] tracking-1 mt-8 text-white'>
                <p>SUPER</p>
                <p className="font-['Open_Sans']">NATURAL</p>
                <p>POWER</p>
            </div>
            <Paragraph
                text=" Poseidon's Beverages AG in Switzerland created a revolutionary energy drink
          with the addition of the Moringa Oleifera Tree, which is sold on 
          beverage market in Switzerland, and soon worldwide."
            />
            <Paragraph
                text="As the owner of the POSEIDON'S brand,
           we offer a high-quality energy drink product in
           the versions of Poseidons Moringa Energy Drink ORIGINAL
            and Poseidon's Moringa Energy Drink LOW SUGAR on the market." />
        </>
    )
}