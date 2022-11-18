import Card from './Card';
import Header from './Cards/Header';
import Footer from './Cards/Footer';
import Feedback from './Cards/Feedback'
import WeatherMap from './Cards/WeatherMap';
import Tracker from './Cards/Tracker';
import Travelern from './Cards/Travelern';
import MernShop from './Cards/MernShop';
import SpotifyNEXT from './Cards/SpotifyNEXT';

function Body() {
  return (
    <>
      <div className='max-w-5xl mx-auto place-items-center  grid gap-1 grid-cols-2 px-1'>
        <div className='w-full col-span-2 p-1'>
          <Header />
        </div>
        <div className='w-full p-1'>
          <WeatherMap />
        </div>
        <div className='w-full p-1'>
          <Feedback />
        </div>
        <div className='w-full p-1'>
          <Tracker />
        </div>
        <div className='w-full p-1'>
        <SpotifyNEXT />
        </div>
        <div className='w-full p-1'>
          <MernShop />
        </div>
        <div className='w-full p-1'>
          <Travelern />
        </div>
        {/* <div className='w-full p-1'>
          <Card />
        </div>
        <div className='w-full p-1'>
          <Footer />
        </div> */}
      </div>
    </>
  );
}
export default Body;
