import { Link } from 'react-router-dom';

import ellie from '../assets/profiles/ellie.webp'
import gerald from '../assets/profiles/gerald.webp'
import max from '../assets/profiles/max.webp'

export const Principal = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h2 className="text-2xl md:text-5xl lg:text-5xl pb-11"> Quem está jogando? </h2>
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 text-third">
        <div className="flex flex-col text-center gap-5 hover:text-white">
          <Link to="/home">
            <img src={ellie} className="h-20 md:h-44 lg:h-44 rounded-md hover:border-2 hover:border-white" alt='Icone Ellie Williams'/>
          </Link>
          <span> Jogador 1 </span>
        </div>
        <div className="flex flex-col text-center gap-5 hover:text-white">
          <Link to="/home">
              <img src={gerald} className="h-20 md:h-44 lg:h-44 rounded-md hover:border-2 hover:border-white" alt='Icone Gerald de Rivia'/>
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
        <p className="bg-primary border-2 border-third h-11 w-52 flex justify-center items-center text-bold text-third hover:border-2 hover:border-white hover:text-white text-lg">
            Gerenciar jogadores
        </p>
      </div>
    </div>
  );
}