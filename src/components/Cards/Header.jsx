import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiGithubFull } from 'react-icons/di';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

function Header() {
  return (
    <a className="relative block overflow-hidden rounded-xl bg-[url('assets/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <a
        href='https://github.com/pleszyk'
        target='_blank'
        rel='noopener noreferrer'
        className='absolute left-4 bottom-4 z-10 items-center rounded-full bg-[#e7ecef] p-2 text-2xl text-black'
      >
        <DiGithubFull />
      </a>
      <a
        href='https://www.linkedin.com/in/szyk/'
        target='_blank'
        rel='noopener noreferrer'
        className='absolute left-16 bottom-4 z-10 items-center rounded-full bg-[#e7ecef] p-2 text-2xl text-black'
      >
        <AiFillLinkedin />
      </a>
      <div className='relative bg-black bg-opacity-20 p-8 pb-28 text-white'>
        <h3 className='text-5xl rounded-lg font-bold'>Paul Leszyk</h3>
        <p className='text-lg'>B.Sc Computer Science</p>
        <p className='text-sm'>HTML, CSS, Javascript, React & Node.js</p>
        <div className='flex'>
          <SiHtml5 />
          <SiCss3 className='ml-2'/>
          <SiJavascript className='ml-2'/>
          <SiReact className='ml-2'/>
          <SiNodedotjs className='ml-2'/>
          <SiExpress className='ml-2'/>
          <SiMongodb className='ml-2'/>
        </div>
      </div>
    </a>
  );
}
export default Header;
