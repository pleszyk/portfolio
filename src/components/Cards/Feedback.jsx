import { HiOutlineExternalLink } from 'react-icons/hi';

function Feedback() {
  return (
    <a
      href='https://www.obbserve.com' target="_blank" rel="noopener noreferrer"
      className="relative block overflow-hidden rounded-xl bg-[url('assets/proj.png')] bg-cover bg-center bg-no-repeat"
    >
      <span className='absolute right-4 top-4 z-10 items-center rounded-full bg-[#e7ecef] p-2 text-s text-black'>
        <HiOutlineExternalLink />
      </span>

      <div className='relative bg-black bg-opacity-20 p-8 pt-40 text-white'>
        <h3 className='text-2xl font-bold'>Feeback App</h3>

        <p className='text-sm'>built with React</p>
      </div>
    </a>
  );
}
export default Feedback;
