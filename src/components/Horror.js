import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const horror = [
    {
        title: 'Dead by Daylight', 
        image: `${process.env.PUBLIC_URL}/img/dbd.jpg`, 
        link: 'https://store.steampowered.com/app/381210/Dead_by_Daylight/'
    },
    {
        title: 'Phasmophobia', 
        image: `${process.env.PUBLIC_URL}/img/phasmophobia.jpg`, 
        link: 'https://store.steampowered.com/app/739630/Phasmophobia/'
    },
    {
        title: 'Omori', 
        image: `${process.env.PUBLIC_URL}/img/omori.jpg`, 
        link: 'https://store.steampowered.com/app/1150690/OMORI/'
    },
    {
        title: 'Elden Ring', 
        image: `${process.env.PUBLIC_URL}/img/elden_ring.jpg`, 
        link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
    },
    {
        title: 'V_Rising', 
        image: `${process.env.PUBLIC_URL}/img/v_rising.jpg`, 
        link: 'https://store.steampowered.com/app/1604030/V_Rising/'
    },
    {
        title: 'Resident Evil', 
        image: `${process.env.PUBLIC_URL}/img/resident_evil.jpg`, 
        link: 'https://store.steampowered.com/app/1196590/Resident_Evil_Village/'
    },
    {
        title: 'Dying Light', 
        image: `${process.env.PUBLIC_URL}/img/dying_light.jpg`, 
        link: 'https://store.steampowered.com/app/239140/Dying_Light/'
    },
    {
        title: 'Hunt', 
        image: `${process.env.PUBLIC_URL}/img/hunt.jpg`, 
        link: 'https://store.steampowered.com/app/594650/Hunt_Showdown/'
    }
]

export const Horror = () => {
    return (
        <>
           <div id='horror' className="flex flex-col gap-5">
                <h2 className="text-xl"> Terror </h2>
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
                                slidesPerView: 2,
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
                        {horror.map((game, index) => (
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