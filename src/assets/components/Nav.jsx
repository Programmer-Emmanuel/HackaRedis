import { useState } from "react";
import images from "../../constants/image"

export function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <nav className="bg-slate-900 backdrop-blur-md border-b-2 border-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo et nom */}
                        <a href="">
                            <div className="flex justify-center items-center gap-3 group cursor-pointer">
                                <img 
                                    src={images.logo} 
                                    alt="HackaRedis Logo" 
                                    className="rounded-full h-12"
                                />
                                <h1 className="text-white text-2xl font-bold italic">
                                    HackaRedis
                                </h1>
                            </div>
                        </a>

                        {/* Navigation Desktop */}
                        <div className="hidden md:block">
                            <ul className="flex gap-8 font-semibold text-lg">
                                {['À propos', 'Initiateur', 'Developpeurs', 'Contacts'].map((item, index) => (
                                    <li key={item}>
                                        <a 
                                            href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                            className="text-white hover:text-white transition-all duration-300 relative group"
                                        >
                                            {item}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white transition-all duration-300 group-hover:w-full"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Bouton Menu Mobile */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-300 hover:text-white p-2 rounded-lg transition-colors duration-200"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center gap-1">
                                    <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                    <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Menu Mobile */}
                    <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="py-4 border-t border-slate-700">
                            <ul className="flex flex-col gap-4 font-semibold">
                                {['À propos', 'Initiateur', 'Developpeurs', 'Contacts'].map((item, index) => (
                                    <li key={item}>
                                        <a 
                                            href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                            className="block text-slate-300 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}