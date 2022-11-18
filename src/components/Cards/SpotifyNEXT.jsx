import { HiOutlineExternalLink } from 'react-icons/hi'

function SpotifyNEXT() {
  return (
<a
  href="/" target="_blank" rel="noopener noreferrer"
  className="relative block overflow-hidden rounded-xl bg-[url('assets/spotify.png')] bg-cover bg-center bg-no-repeat"
>
  <span
    className="absolute right-4 top-4 z-10 items-center rounded-full bg-[#e7ecef] p-2 text-s text-black"
  >
<HiOutlineExternalLink />
  </span>

  <div className="relative bg-black bg-opacity-20 pl-8 pb-3 pt-40 text-white">
    <h3 className="text-2xl font-bold">SpotifyNEXT</h3>

    <p className="text-sm">Built with Next.js <br/> & TaiwindCSS</p>
  </div>
</a>
  )
}
export default SpotifyNEXT