import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav>
                <ul className="md:flex lg:flex bg-transparent gap-12">
                    <li className="visible md:hidden lg:hidden text-secundary absolute top-6 left-12" onClick={toggleMenu}> 
                        <AiOutlineMenu />
                    </li>    
                    <li>
                        <h1 className="pl-5 md:pl-0 lg:pl-0 pb-2 md:pb-0 lg:pb-0 text-xl md:text-4xl lg:text-4xl font-bebas text-secundary"> Gameflix </h1>
                    </li>
                    <li>
                        <ul>
                            <li className={`flex gap-2 md:gap-5 lg:gap-5 pt-0 md:pt-2 lg:pt-2 text-sm menu-items ${isOpen ? "flex-col open" : ""}`}>
                                <a href="#"> Início </a>
                                <a href="#"> Jogos </a>
                                <a href="#"> Bombando </a>
                                <a href="#"> Minha lista </a>
                            </li>
                        </ul>
                    </li>         
                </ul>
            </nav>
        </>
    )
}