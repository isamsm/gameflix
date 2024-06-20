import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import ts4 from '../assets/games/ts4.webp'
import stardew_valley from '../assets/games/stardew_valley.webp'
import zomboid from '../assets/games/zomboid.webp'
import house_flipper from '../assets/games/house_flipper.webp'
import dayz from '../assets/games/dayz.webp'
import sun_haven from '../assets/games/sun_haven.webp'
import coral_island from '../assets/games/coral_island.webp'
import euro_truck from '../assets/games/euro_truck.webp'

const simulation = [
  {
    title: 'The Sims 4',
    image: ts4,
    link: 'https://store.steampowered.com/app/1222670/The_Sims_4/',
  },
  {
    title: 'Stardew Vallew',
    image: stardew_valley,
    link: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
  },
  {
    title: 'Project Zomboid',
    image: zomboid,
    link: 'https://store.steampowered.com/app/108600/Project_Zomboid/',
  },
  {
    title: 'House Flipper',
    image: house_flipper,
    link: 'https://store.steampowered.com/app/613100/House_Flipper/',
  },
  {
    title: 'Dayz',
    image: dayz,
    link: 'https://store.steampowered.com/app/221100/DayZ/',
  },
  {
    title: 'Sun Haven',
    image: sun_haven,
    link: 'https://store.steampowered.com/app/1432860/Sun_Haven/',
  },
  {
    title: 'Coral Island',
    image: coral_island,
    link: 'https://store.steampowered.com/app/1158160/Coral_Island/',
  },
  {
    title: 'Euro Truck Simulator 2',
    image: euro_truck,
    link: 'https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/',
  },
]

export const Simulation = () => {
  return (
    <>
      <div id="sim" className="flex flex-col gap-5">
        <h2 className="text-xl"> Simulação </h2>
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              425: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              580: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              750: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
          >
            {simulation.map((game, index) => (
              <SwiperSlide key={index}>
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-22 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 rounded-sm hover:border-2 hover:border-white"
                    src={game.image}
                    alt={game.title}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
