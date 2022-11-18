
function Card() {
  return (
<a
  href="https://www.szyk.io/weatherMap/index.html"
  className="relative block overflow-hidden rounded-xl bg-[#6096BA] bg-cover bg-center bg-no-repeat"
>
  <span
    className="absolute right-4 top-4 z-10 items-center rounded-full bg-[#e7ecef] p-2 text-xs text-black"
  >
    <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              ></path>
            </svg>
  </span>

  <div className="relative bg-black bg-opacity-20 p-8 pt-40 text-white">
    <h3 className="text-2xl font-bold">Project</h3>

    <p className="text-sm">description</p>
  </div>
</a>

  )
}
export default Card