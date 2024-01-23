import { Menu } from "./components/Menu"

export const MenuPage = () => {
    return (
        <div data-aos="zoom-in" className='bg-primary text-white'>
            <div className="h-screen flex flex-col items-center justify-center">
                <Menu />
            </div>
        </div>
    )
}