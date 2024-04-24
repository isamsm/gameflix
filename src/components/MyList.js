import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const myList = [
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
        title: 'Grand Theft Auto V', 
        image: `${process.env.PUBLIC_URL}/img/gta.jpg`, 
        link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
    },
    {
        title: 'The Witcher', 
        image: `${process.env.PUBLIC_URL}/img/the_witcher.jpg`, 
        link: 'https://store.steampowered.com/bundle/727/The_Witcher_Trilogy/'
    }
];

export const MyList = () => {
    return (
        <>
            <div id='list' className="flex flex-col gap-5">
                <h2 className="text-xl"> Minha lista </h2>
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
                        {myList.map((game, index) => (
                            <SwiperSlide key={index}>
                                <a href={game.link} target="_blank" draggable>
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