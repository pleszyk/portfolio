import Logo from '../assets/logo2.png';
import { TiWaves } from 'react-icons/ti';

function Nav() {
  return (
    <nav
      aria-label='Site Nav'
      className='mx-auto flex max-w-7xl items-center justify-between p-4'
    >
      {/* <TiWaves className='text-4xl text-[#a1b3be]'/> */}
      <a
        href='/'
        className='inline-flex h-12 w-12 items-center justify-center rounded-lg'
      >
        <span className='sr-only'>Logo</span>
        <img className='w-12' src={Logo} alt="" />
      </a>

      <ul className='flex items-center gap-2 text-sm font-medium text-gray-500'>
        <li>
          <a className='rounded-lg hover:animate-pulse px-3 py-2' href='/'>
            Home
          </a>
        </li>

        <li>
          <a className='rounded-lg hover:animate-pulse px-3 py-2' href='/'>
            Projects
          </a>
        </li>

        <li>
          <a className='rounded-lg hover:animate-pulse px-3 py-2' href='/'>
            About
          </a>
        </li>

        {/* <li>
          <a
            className='inline-flex items-center rounded-lg px-3 py-2'
            href=''
            target='_blank'
          >
            External
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='ml-1.5 h-4 w-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              ></path>
            </svg>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
export default Nav;
