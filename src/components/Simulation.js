import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const simulation = [
    {
        title: 'The Sims 4', 
        image: `${process.env.PUBLIC_URL}/img/ts4.png`, 
        link: 'https://store.steampowered.com/app/1222670/The_Sims_4/'
    },
    {
        title: 'Stardew Vallew', 
        image: `${process.env.PUBLIC_URL}/img/stardew_valley.png`, 
        link: 'https://store.steampowered.com/app/413150/Stardew_Valley/'
    },
    {
        title: 'Project Zomboid', 
        image: `${process.env.PUBLIC_URL}/img/zomboid.jpg`, 
        link: 'https://store.steampowered.com/app/108600/Project_Zomboid/'
    },
    {
        title: 'House Flipper', 
        image: `${process.env.PUBLIC_URL}/img/house_flipper.jpg`, 
        link: 'https://store.steampowered.com/app/613100/House_Flipper/'
    },
    {
        title: 'Dayz', 
        image: `${process.env.PUBLIC_URL}/img/dayz.jpg`, 
        link: 'https://store.steampowered.com/app/221100/DayZ/'
    },
    {
        title: 'Sun Haven', 
        image: `${process.env.PUBLIC_URL}/img/sun_haven.jpg`, 
        link: 'https://store.steampowered.com/app/1432860/Sun_Haven/'
    },
    {
        title: 'Coral Island', 
        image: `${process.env.PUBLIC_URL}/img/coral_island.jpg`, 
        link: 'https://store.steampowered.com/app/1158160/Coral_Island/'
    },
    {
        title: 'Euro Truck Simulator 2', 
        image: `${process.env.PUBLIC_URL}/img/euro_truck.jpg`, 
        link: 'https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/'
    }
]

export const Simulation = () => {
    return (
        <>
            <div id='sim' className="flex flex-col gap-5">
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
                            }
                        }}
                    >
                        {simulation.map((game, index) => (
                            <SwiperSlide key={index}>
                                <a href={game.link} target="_blank" rel="noopener noreferrer">
                                    <img className="h-22 w-40 md:h-30 md:w-60 lg:h-40 lg:w-80 rounded-sm hover:border-2 hover:border-white" src={game.image} alt={game.title} />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}