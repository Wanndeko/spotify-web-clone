import { GrHomeRounded } from 'react-icons/gr'
import { BsSearch } from 'react-icons/bs'
import { BiLibrary } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiSolidDownArrow } from 'react-icons/bi'
import Image from 'next/image'


function Aside() {
    return ( 
        <aside className="w-80">

        <navbar className="bg-zinc-900 w-full p-5 gap-5 flex flex-col rounded-xl mb-2" >
          <a href="#" className='flex items-center text-zinc-400 gap-5 font-semibold text-base hover:text-zinc-50 transition ease 0.5s'><GrHomeRounded className='text-2xl' />Home</a>
          <a href="#" className='flex items-center text-zinc-400 gap-5 font-semibold text-base hover:text-zinc-50 transition ease 0.5s'><BsSearch className='text-2xl' />Buscar</a>
        </navbar>

        <navbar className="bg-zinc-900 w-full p-5 gap-5 flex flex-col rounded-xl">
          <div className='flex items-center justify-between'>
            <button href='#' className='flex items-center text-zinc-400 font-semibold hover:text-zinc-50 transition ease 0.5s' ><BiLibrary className='text-2xl' />Sua Biblioteca</button>
            <div className='flex gap-5 text-2xl' >
              <button><GrClose className='rotate-45' /></button>
              <button><AiOutlineArrowRight /></button>
            </div>
          </div>

          <div className='flex gap-3  '>
            <button className='bg-zinc-700 px-3 rounded-2xl'>Playlists</button>
            <button className='bg-zinc-700 px-3 rounded-2xl'>Albuns</button>
            <button className='bg-zinc-700 px-3 rounded-2xl'>Artistas</button>
          </div>

          <div className='flex items-center justify-between'>
            <BsSearch/>
            <button className='flex items-center gap-2'>recentes<BiSolidDownArrow className='text-xs' /></button>
          </div>

          <div className='h-72 overflow-y-auto '>
            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>
            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>
            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>

            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>
            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>
            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>
            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>
            <div className='rounded-xl p-2 hover:bg-zinc-800'>
              <a href='#' className='flex'>
              <Image
              alt='capa-album'
              src='/capa-sliknot.png'
              width={55}
              height={55}
              className='mr-3 rounded-lg'
              />
              <div>
                <p>Minha Playlist</p>
                <p className='text-zinc-400'>playlist.150 musicas</p>
                </div>  
              </a>
              </div>

          </div>
        </navbar>
      </aside>
      

     );
}

export default Aside;