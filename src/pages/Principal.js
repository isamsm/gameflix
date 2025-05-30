import { Link } from 'react-router-dom';

import ellie from '../assets/profiles/ellie.webp'
import clementine from '../assets/profiles/clementine.webp'
import max from '../assets/profiles/max.webp'

export const Principal = () => {
  return (
    <main className="h-screen bg-primary text-white">
      <section className="max-w-[1280px] mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl md:text-5xl lg:text-5xl pb-11"> Quem está jogando? </h1>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 text-third">
          <div className="flex flex-col text-center gap-5 hover:text-white">
            <Link to="/home">
              <img src={ellie} className="h-20 md:h-44 lg:h-44 rounded-md hover:border-2 hover:border-white" alt='Icone Ellie Williams'/>
            </Link>
            <span> Jogador 1 </span>
          </div>
          <div className="flex flex-col text-center gap-5 hover:text-white">
            <Link to="/home">
                <img src={clementine} className="h-20 md:h-44 lg:h-44 rounded-md hover:border-2 hover:border-white" alt='Icone clementine de Rivia'/>
            </Link>
            <span> Jogador 2 </span>
          </div>
          <div className="flex flex-col text-center gap-5 hover:text-white">
            <Link to="/home">
                <img src={max} className="h-20 md:h-44 lg:h-44 rounded-md hover:border-2 hover:border-white" alt='Icone Max Caulfield'/>
            </Link>
            <span> Jogador 3 </span>
          </div>
        </div>
        <div className="flex pt-12">
          <Link to="/home" className="bg-primary border-2 border-third h-11 w-52 flex justify-center items-center text-bold text-third hover:border-2 hover:border-white hover:text-white text-lg cursor-pointer">
              Gerenciar jogadores
          </Link>
        </div>
      </section>
     
    </main>
  );
}