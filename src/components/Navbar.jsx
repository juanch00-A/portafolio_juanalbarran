import { useState } from "react";
import NavLink from "./NavLink";
import { MenuOverlay } from "./MenuOverlay";


const navLinks = [
    {
        title: "Inicio",
        path: "#home",
        
    },
    {
        title: "Proyectos",
        path: "#projects",
    },
    {
        title: "Sobre mí",
        path: "#about",
    },
    {
        title: "Contacto",
        path: "#contact",
    },
];

export const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
    <>
        <nav id="navbar" className="fixed mx-auto  top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 ">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-4 ">
                <a href='#home' className='text-10xl md:text-5xl text-white font-semibold'>
                    <img src="/svg/invader.svg" alt="" />
                </a>

                <div className="mobile-menu block md:hidden">
                <button 
                    onClick={() => setNavbarOpen(navbarOpen => !navbarOpen)}
                    className="flex items-center px-3 py-2 bg-white border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" >
                    
                </button>
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    </>
)
}
