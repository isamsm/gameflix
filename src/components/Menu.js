import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className={`px-12 py-4 fixed top-0 bg-primary w-full z-10 ${isOpen ? "menu w-auto" : ""}`}>
                <ul className="md:flex lg:flex gap-12">
                    <div className={`${isOpen ? "px-12 py-4" : ""}`}>
                        <li className="visible md:hidden lg:hidden text-5xl text-secundary absolute" onClick={toggleMenu}> 
                            <AiOutlineMenu />
                        </li>    
                        <li>
                            <h1 className="pl-16 md:pl-0 lg:pl-0 pb-2 md:pb-0 lg:pb-0 text-5xl md:text-3xl lg:text-3xl font-bebas text-secundary"> Gameflix </h1>
                        </li>                
                    </div>
                    <li>
                        <ul>
                            <li className={`flex gap-2 md:gap-5 lg:gap-5 pt-0 md:pt-2 lg:pt-2 text-xl md:text-sm lg:text-sm menu-items ${isOpen ? "flex-col open pl-12 pt-5" : ""}`}>
                                <a href="#main" className="hover:underline"> Início </a>
                                <a href="#list" className="hover:underline"> Minha Lista </a>
                                <a href="#top" className="hover:underline"> Bombando </a>
                                <a href="#sim" className="hover:underline"> Simulação </a>
                                <a href="#horror" className="hover:underline"> Terror </a>
                            </li>
                        </ul>
                    </li>         
                </ul>
            </nav>
        </>
    )
}