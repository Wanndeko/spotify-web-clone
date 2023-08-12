import {AiOutlineLeft, AiOutlineRight, AiFillCaretRight} from 'react-icons/ai'
import { PiUsersFour } from 'react-icons/pi'
import { RxAvatar } from 'react-icons/rx'
import Image from 'next/image';
function Main() {
    return ( 
        <main className="w-screen h-max p-7 bg-gradient-to-b from-indigo-900 rounded-xl overflow-y-auto">
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <button><AiOutlineLeft className=' bg-zinc-900/90 rounded-full text-3xl' /></button>
            <button><AiOutlineRight className=' bg-zinc-900/50 rounded-full text-3xl' /></button>
          </div>
          <div className='flex gap-2'>
            <button><PiUsersFour className=' bg-zinc-900 rounded-full text-3xl' /></button>
            <button><RxAvatar className=' bg-zinc-900 rounded-full text-3xl' /></button>
          </div>
        </div>
        <h1 className='mt-4 text-3xl font-bold'>Boa tarde</h1>

        <div className='grid grid-cols-3 gap-4 mt-4 w-full '>

          <a href='#' className='group flex items-center gap-4 relative bg-indigo-700/40 rounded-md overflow-auto'>
            <Image
              src='/capa-sliknot.png'
              width={65}
              height={65}
              alt='capa-album' />
            <p>
              Album name
            </p>
            <button className='w-10 h-10 flex items-center justify-center pl-0.5 absolute right-2 text-xl  bg-green-700 rounded-full invisible group-hover:visible'>
              <AiFillCaretRight />
            </button>
          </a>
          <a href='#' className='group flex items-center gap-4 relative bg-indigo-700/40 rounded-md overflow-auto'>
            <Image
              src='/capa-sliknot.png'
              width={65}
              height={65}
              alt='capa-album' />
            <p>
              Album name
            </p>
            <button className='w-10 h-10 flex items-center justify-center pl-0.5 absolute right-2 text-xl  bg-green-700 rounded-full invisible group-hover:visible'>
              <AiFillCaretRight />
            </button>
          </a>
          <a href='#' className='group flex items-center gap-4 relative bg-indigo-700/40 rounded-md overflow-auto'>
            <Image
              src='/capa-sliknot.png'
              width={65}
              height={65}
              alt='capa-album' />
            <p>
              Album name
            </p>
            <button className='w-10 h-10 flex items-center justify-center pl-0.5 absolute right-2 text-xl  bg-green-700 rounded-full invisible group-hover:visible'>
              <AiFillCaretRight />
            </button>
          </a>
          <a href='#' className='group flex items-center gap-4 relative bg-indigo-700/40 rounded-md overflow-auto'>
            <Image
              src='/capa-sliknot.png'
              width={65}
              height={65}
              alt='capa-album' />
            <p>
              Album name
            </p>
            <button className='w-10 h-10 flex items-center justify-center pl-0.5 absolute right-2 text-xl  bg-green-700 rounded-full invisible group-hover:visible'>
              <AiFillCaretRight />
            </button>
          </a>
          <a href='#' className='group flex items-center gap-4 relative bg-indigo-700/40 rounded-md overflow-auto'>
            <Image
              src='/capa-sliknot.png'
              width={65}
              height={65}
              alt='capa-album' />
            <p>
              Album name
            </p>
            <button className='w-10 h-10 flex items-center justify-center pl-0.5 absolute right-2 text-xl  bg-green-700 rounded-full invisible group-hover:visible'>
              <AiFillCaretRight />
            </button>
          </a>
          <a href='#' className='group flex items-center gap-4 relative bg-indigo-700/40 rounded-md overflow-auto'>
            <Image
              src='/capa-sliknot.png'
              width={65}
              height={65}
              alt='capa-album' />
            <p>
              Album name
            </p>
            <button className='w-10 h-10 flex items-center justify-center pl-0.5 absolute right-2 text-xl  bg-green-700 rounded-full invisible group-hover:visible'>
              <AiFillCaretRight />
            </button>
          </a>


        </div>
        <div className='flex items-baseline justify-between p-1 mt-5'>
          <p className='text-2xl font-bold'>Seus mixes mais ouvidos</p>
          <p className='font-bold'>Mostrar tudo</p>
        </div>
        <div>
          <div className='grid grid-cols-4 justify-center items-center gap-6 h-52 '>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 w-40 h-max overflow-hidden bg-slate-700 p-3 rounded-lg '>
              <Image
                src='/capa-sliknot.png'
                width={150}
                height={150}
                alt='capa-album' />
              <p>Mix Rock</p>
              <span>spliknot,ledzepplin,P.O.D</span>
            </div>
          </div>
        </div>
      </main>
     );
}

export default Main;