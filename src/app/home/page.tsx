import { Navbar } from "../components/Navbar";
import { Card } from "../components/cards/Card";

export default function Home(){
  return(
    <>
      <div className='bg-white-100 h-screen flex flex-col'>  
        <Navbar /> 
        <div className="w-full h-screen flex justify-center items-center ">
          <div className="bg-blue-200 w-[1000px] h-[600px] rounded-[24px] flex justify-center items-center flex-col gap-4 shadow-md shadow-slate-400">
            <div className='flex flex-col gap-2 items-center'>
              <p className='text-3xl font-bold tracking-wider font-raleway text-slate-900'>Escolher o tipo de receita</p>
              <hr className='w-[260px] border-slate-800 border-[3px] rounded-full'/>
            </div>

            <div className="mt-6">
              <Card />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}