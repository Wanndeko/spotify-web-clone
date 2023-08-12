import { AiFillCaretRight, AiOutlineHeart, AiOutlineSound } from 'react-icons/ai'
import { LiaRandomSolid } from 'react-icons/lia'
import { GiPreviousButton, GiNextButton } from 'react-icons/gi'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { BiRepeat } from 'react-icons/bi'
import { CgPlayButtonR } from 'react-icons/cg'
import { PiMicrophoneStageBold } from 'react-icons/pi'
import { FiList } from 'react-icons/fi'
import { MdOutlineDevices } from 'react-icons/md'
import Image from 'next/image';
function Footer() {
  return (
    <footer className='w-full h-24 flex justify-between items-center p-2'>

      <div className='flex items-center gap-4'>
        <Image
          src='/capa-sliknot.png'
          width={50}
          height={50}
          alt='capa-album' />
        <div className='flex flex-col'>
          <strong>Sulfur</strong>
          <span className='text-xs text-zinc-400'>spliknot</span>
        </div>
        <button>
          <AiOutlineHeart />
        </button>
        <button>
          <IoMdRemoveCircleOutline />
        </button>
      </div>

      <div>
        <div className='flex justify-around'>
          <button>
            <LiaRandomSolid />
          </button>
          <button>
            <GiPreviousButton />
          </button>
          <button className='w-7 h-7 flex items-center justify-center pl-0.5  text-xl  bg-green-700 rounded-full'>
            <AiFillCaretRight />
          </button>
          <button>
            <GiNextButton />
          </button>
          <button>
            <BiRepeat />
          </button>
        </div>
        <div className='flex'>
          <p>0:00</p>
          <input type='range' className='w-96' />
          <p>4:37</p>
        </div>
      </div>

      <div className='flex justify-center items-center gap-2'>

        <button><CgPlayButtonR /></button>
        <button><PiMicrophoneStageBold /></button>
        <button><FiList /></button>
        <button><MdOutlineDevices /></button>
        <button><AiOutlineSound /></button>
        <input type='range' />
      </div>
    </footer>
  );
}

export default Footer;