import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const topGames = [
    {
        title: 'Elden Ring', 
        image: `${process.env.PUBLIC_URL}/img/elden_ring.jpg`, 
        link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
    },
    {
        title: 'Devil May Cry 5', 
        image: `${process.env.PUBLIC_URL}/img/dmc5.png`, 
        link: 'https://store.steampowered.com/app/601150/Devil_May_Cry_5/'
    },
    {
        title: 'CounterStrike Global Offensive', 
        image: `${process.env.PUBLIC_URL}/img/cs.jpeg`, 
        link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
    },
    {
        title: 'Grand Theft Auto V', 
        image: `${process.env.PUBLIC_URL}/img/gta.jpg`, 
        link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
    },
    {
        title: 'Resident Evil', 
        image: `${process.env.PUBLIC_URL}/img/resident_evil.jpg`, 
        link: 'https://store.steampowered.com/app/1196590/Resident_Evil_Village/'
    },
    {
        title: 'Dota 2', 
        image: `${process.env.PUBLIC_URL}/img/dota.jpg`, 
        link: 'https://store.steampowered.com/app/570/Dota_2/'
    },
    {
        title: 'V_Rising', 
        image: `${process.env.PUBLIC_URL}/img/v_rising.jpg`, 
        link: 'https://store.steampowered.com/app/1604030/V_Rising/'
    },
    {
        title: 'PalWorld', 
        image: `${process.env.PUBLIC_URL}/img/palworld.jpg`, 
        link: 'https://store.steampowered.com/app/1623730/Palworld/'
    }
];

export const TopGames = () => {
    return (
        <>
            <div id='top' className="flex flex-col gap-5">
                <h2 className="text-xl"> Em alta </h2>
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
                        {topGames.map((game, index) => (
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