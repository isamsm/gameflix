import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { Menu } from './components/Menu';
import { MyList } from "./components/MyList";
import { TopGames } from "./components/TopGames";
import { Simulation } from "./components/Simulation";
import { Horror } from "./components/Horror";

export const Gameflix = () => {
    return (
    <div className='font-helvetica text-white'>
        <div>
            <Menu />
        </div>
        <div id="main" className="bg-game bg-cover h-screen">
            <div className="flex flex-col h-full -mt-12 justify-center items-start gap-5 px-12">
                <h1 className="text-xl md:text-5xl lg:text-5xl"> Elden Ring </h1>
                <div className="w-full md:w-1/2 lg:w-1/2">
                    <p> Em Elden Ring, o jogador incorpora um Maculado, guerreiro guiado pela força da Graça para portar o poder do Anel Prístino e torna-se um Lorde Prístino. A trama tem como cenário as Terras Intermédias, um local governado pela Rainha Marika. </p>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                    <a href="https://store.steampowered.com/app/1245620/ELDEN_RING/" target="_blank">
                        <button className="flex bg-white items-center justify-center rounded-sm gap-2 h-11 w-36 text-primary md:text-lg lg:text-lg hover:scale-110"> <FaPlay />  Jogar </button>
                    </a>
                    <a href="https://store.steampowered.com/app/1245620/ELDEN_RING/" target="_blank">
                        <button className="flex bg-third items-center justify-center rounded-sm gap-2 h-11 w-56 text-white md:text-lg lg:text-lg hover:scale-110"> <FiInfo /> Mais informações </button>
                    </a>
                </div>
            </div>
        </div>
        <div className="bg-primary pb-5 px-12 pt-5">
            <div className="flex flex-col gap-5 md:-mt-32 lg:-mt-32">
                <MyList />
                <TopGames />
                <Simulation />
                <Horror />
            </div>
        </div>
    </div>
    )
}