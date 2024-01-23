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
        title: 'Resident Evil', 
        image: `${process.env.PUBLIC_URL}/img/resident_evil.jpg`, 
        link: 'https://store.steampowered.com/app/1196590/Resident_Evil_Village/'
    },
    {
        title: 'V_Rising', 
        image: `${process.env.PUBLIC_URL}/img/v_rising.jpg`, 
        link: 'https://store.steampowered.com/app/1604030/V_Rising/'
    }
];

export const TopGames = () => {
    return (
        <>
            <div className="flex flex-col gap-5">
                <h2 className="text-xl"> Em alta </h2>
                <div>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={5}
                        navigation={true} 
                        modules={[Navigation]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {topGames.map((game, index) => (
                            <SwiperSlide key={index}>
                                <a href={game.link} target="_blank">
                                    <img className="h-10 w-24 md:h-24 md:w-48 lg:h-40 lg:w-80 rounded-sm hover:border-2 hover:border-white" src={game.image} alt={game.title} />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}