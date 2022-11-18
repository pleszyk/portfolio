import { HiOutlineExternalLink } from 'react-icons/hi'

function Travelern() {
  return (
<a
  href="https://www.szyk.io/weatherMap/index.html"
  className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat"
>
  <span
    className="absolute right-4 top-4 z-10 items-center rounded-full bg-[#e7ecef] p-2 text-s text-black"
  >
<HiOutlineExternalLink />
  </span>

  <div className="relative bg-black bg-opacity-20 pl-8 pb-3 pt-40 text-white">
    <h3 className="text-2xl font-bold">TravelERN</h3>

    <p className="text-sm">Built with Express, React <br/> & Node</p>
  </div>
</a>
  )
}
export default Travelern