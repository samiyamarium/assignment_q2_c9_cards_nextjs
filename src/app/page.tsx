import Image from 'next/image';
import logo from '../../public/logo.png'
export default function Home() {
  return (
    <div>
      <div className="flex rounded-none bg-blue-900  opacity-95 -hue-rotate-30 "> <div className= ' h-10 w-[15%] font-sans font-extrabold text-xl text-[#b9d8f3]  '><br/><Image  className='w-[40%] mx-6 ' src={logo} alt='logo'/></div><div className=" text-2xl font-bold  text-[#b9d8f3] pr-20 space-x-2"><br/>Tuition Free Education Program on Latest Technologies </div><div className='pr-5'><br/><ul className='flex pb-5 pt-3 list-none font-medium text-white text-xl items-center justify-around space-x-6'><li>Home</li><li>Apply</li><li>Jobs</li><li>Results</li><li>Courses</li></ul></div></div><br/><br/>
   <br/><br/>   
   <br/><div className='flex'><div className="mx-5  flex-1 w-1/2 h-96 rounded-md  text-white bg-[url('/new7.png')] bg-cover"></div><div className="  mx-5 flex-1 w-1/2 h-96 rounded-md bg-[url('/new8.png')] bg-cover"></div></div>
   <br/><div className='flex'><div className="mx-5 p-10 flex-1 w-60 h-96 rounded-md  text-white bg-[url('/new4.png')] bg-cover"></div><div className="   mx-5 flex-1 w-60 h-96 rounded-md bg-[url('/new5.png')] bg-cover"></div><div className= "mx-5 rounded-md flex-1 w-60 h-96 bg-[url('/new6.png')] bg-cover"></div></div>
   
    </div>
    
  );
}
{/*<div className=' rounded-md bg-gray-100 text-pink-700  outline-dashed outline-4 font-extrabold text-2xl font-serif text-center pl-4 '>CLASS 9 ASSIGNMENT <br/><br/> 2 cards in first row <br/><br/> 3 cards in second row</div> -->*/} 
     
