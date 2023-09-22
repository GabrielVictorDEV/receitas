import {AiOutlineUser} from 'react-icons/ai'
import {RiMenu5Fill} from 'react-icons/ri'

export function Navbar(){
  return (
    <div className="flex flex-row items-center justify-around bg-blue-300 h-[64px] top-0 w-full text-white-100">
      <div>
        <p className='text-slate-900'><RiMenu5Fill size="20px"/></p>
      </div>

      <div className='flex justify-between items-center flex-row gap-2'>
        <div className="rounded-full w-8 h-8 bg-white-100 flex justify-center items-center">
          <p className='text-slate-900'>?</p>
        </div>

        <div className="rounded-full w-10 h-10 bg-white-100 flex justify-center items-center">
          <p className='text-slate-900'><AiOutlineUser size="20px"/></p>
        </div>
      </div>
    </div>
  )
}