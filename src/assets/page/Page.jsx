import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import images from "../../constants/image"
import { Developpeurs } from "../components/Developpeurs";
import { useEffect, useState } from "react";

export function Page(){
      const [showButton, setShowButton] = useState(false);
       useEffect(() => {
            const handleScroll = () => {
            setShowButton(window.scrollY > 100);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: "smooth",
            });
        };

    return(
        <>
            {/* Barre de Navigation */}
            <Nav />

            {/* Header */}
            <Header />

            <div id="a propos" className="py-7"></div>

           <div className="flex justify-center py-7">
                <div className="relative">
                    <h1 className="text-5xl font-bold text-gray-800 z-10 relative">
                        À propos
                    </h1>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-500 opacity-60 transform -rotate-1 mt-5"></div>
                </div>
            </div>

            <div className="flex justify-center gap-7 items-center px-4 flex-wrap">
                <div>
                    <img 
                        src={images.info}
                        alt=""
                        className="h-12"
                        width="48"
                        height="48"
                    />
                </div>
                <div className="max-w-3xl text-center">
                    <p className="text-slate-700 text-xl leading-relaxed bg-white/80 backdrop-blur-sm">
                        <span className="font-bold text-3xl italic text-slate-900 bg-gradient-to-r from-slate-500 to-slate-900 bg-clip-text text-transparent">
                            HackaRedis
                        </span> 
                        {" "}est un hackathon dédié aux étudiants passionnés de technologie, 
                        d'innovation et de collaboration. Pendant quelques jours
                        , les participants unissent leurs compétences pour concevoir des solutions 
                        numériques capables de transformer des réalités.  
                        <br />
                        Cet événement favorise l'esprit d'équipe, la créativité et la découverte 
                        de nouvelles approches technologiques tout en encourageant les jeunes à 
                        imaginer le futur numérique.
                    </p>
                </div>
            </div>

            <div id="initiateur" className="py-6"></div>

            <div className="flex justify-center py-5 mt-10">
                <div className="relative">
                    <h1 className="text-5xl font-bold text-gray-800 z-10 relative">
                    Initiateur
                    </h1>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-500 opacity-60 transform -rotate-1 mt-5"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-8 py-12 bg-white rounded-2xl">
  
                {/* Image */}
                <div className="flex justify-center">
                    <img 
                    src={images.delegue} 
                    alt="Touré Malick Ulrich" 
                    className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Texte */}
                <div className="text-center md:text-left max-w-2xl">
                    <h1 className="text-slate-900 font-extrabold italic text-4xl md:text-5xl mb-2">
                    Touré Malick Ulrich
                    </h1>
                    <h3 className="text-slate-600 text-lg italic mb-5">
                    Délégué de la Licence 3 Génie Informatique
                    </h3>
                    <p className="text-slate-700 text-base leading-relaxed">
                    Passionné par l’innovation technologique et le travail collaboratif, 
                    il incarne une nouvelle génération d’étudiants engagés dans la transformation numérique. 
                    À travers ses initiatives et son leadership, il œuvre à créer un environnement propice 
                    à la créativité, au partage des connaissances et au développement de projets à fort impact 
                    pour la communauté universitaire et au-delà.
                    </p>
                </div>

                </div>



            <div id="developpeurs" className="py-6"></div>

            <div className="flex justify-center py-4 mt-5">
                <div className="relative">
                    <h1 className="text-5xl font-bold text-gray-800 z-10 relative">
                    Developpeurs
                    </h1>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-500 opacity-60 transform -rotate-1 mt-5"></div>
                </div>
            </div>

            <h3 className="text-center text-2xl text-slate-900 mt-2 px-5">Les developpeurs ayant participés à la conception de <span className="text-4xl italic font-bold">HackaRedis</span> :</h3>
            <div className="py-5 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Lead Dev */}
                <div className="mb-16">
                    <p className="text-center text-slate-600 max-w-md mx-auto mb-8">
                        Notre développeur principal qui guide l'équipe technique
                    </p>
                    <div className="flex justify-center">
                        <Developpeurs 
                            image={images.cakpo}
                            chef="LEAD DEV"
                            nom="Judicael CAKPO"
                            fonction="Développeur Front-End"
                            niveau="Licence 3 Genie Informatique"
                            linkedin="https://www.linkedin.com/in/judicael-cakpo-6907b32a0"
                            whatsapp="0564624366"
                        />
                    </div>
                </div>
                
                {/* Section autres membres */}
                <div>
                    <h3 className="text-center text-3xl font-bold text-slate-800 mb-2">NOTRE ÉQUIPE</h3>
                    <p className="text-center text-slate-600 max-w-xl mx-auto mb-10">
                        Découvrez les autres developpeurs qui travaillent ensemble dans le domaine technique 
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <Developpeurs 
                            image={images.kohou}
                            nom="Eloge KOHOU"
                            fonction="Développeur Back-End"
                            niveau="Licence 3 Genie Informatique"
                            linkedin="https://www.linkedin.com/in/monneka-ange-eloge-kohou-143415327/"
                            whatsapp="0140834531"
                        />
                        <Developpeurs 
                            image={images.kouaho}
                            nom="David KOUAHO"
                            fonction="Développeur Front-End"
                            niveau="Licence 3 Genie Informatique"
                            linkedin="https://www.linkedin.com/in/david-kouaho"
                            whatsapp="0171136261"
                        />
                        <Developpeurs 
                            image={images.bamidele}
                            nom="Emmanuel BAMIDELE"
                            fonction="Développeur Front-End"
                            niveau="Licence 3 Genie Informatique"
                            linkedin="https://www.linkedin.com/in/emmanuel-bamidele-b63a49274/"
                            whatsapp="0140022693"
                        />
                        <Developpeurs 
                            image={images.guei}
                            nom="Henoc Guei"
                            fonction="Développeur Front & Designer"
                            niveau="Licence 3 Genie Informatique"
                            linkedin="https://www.linkedin.com/in/inf-junio-relysee/"
                            whatsapp="0564652757"
                        />
                        <Developpeurs 
                            image={images.brouzro}
                            nom="Marc-Aurel BROUZRO"
                            fonction="Développeur Front-End"
                            niveau="Licence 3 Genie Informatique"
                            linkedin="https://www.linkedin.com/in/marcaurel-brouzro-1852462ab/"
                            whatsapp="0152161769"
                        />
                        <Developpeurs 
                            image={images.ahossi}
                            nom="Emmanuel AHOSSI"
                            fonction="Testeur des plateformes"
                            niveau="Licence 3 Genie Informatique"
                            linkedin="https://www.linkedin.com/in/jean-emmanuel-ahossi-44132a26b/"
                            whatsapp="0704526437"
                        />
                    </div>
                </div>
            </div>
        </div>



        {showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-white text-slate-500 text-2xl font-bold border-2 border-slate-500 p-3 rounded-full shadow-md hover:bg-slate-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        )}


        <div id="contacts" className="py-6"></div>

            <div className="flex justify-center py-4 mt-5">
                <div className="relative">
                    <h1 className="text-5xl font-bold text-gray-800 z-10 relative">
                    Contacts
                    </h1>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-500 opacity-60 transform -rotate-1 mt-5"></div>
                </div>
            </div>

            <div className="flex justify-center py-10">
                <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-8 w-full max-w-4xl text-center hover:scale-[1.01] transition-all duration-500 cursor-pointer">
                
                    <p className="text-slate-500 text-lg mb-8">Plusieurs moyens de communication à votre disposition pour plus d'informations</p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/2250504126099"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg group min-h-[140px]"
                    >
                        <img src="https://img.icons8.com/?size=100&id=62855&format=png&color=FFFFFF" alt="" className="h-8"/>
                        <div>
                        <span className="font-semibold text-lg block">WhatsApp</span>
                        <span className="text-green-100 text-sm mt-1">+225 05 04 12 60 99</span>
                        </div>
                    </a>

                    {/* Téléphone */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer min-h-[140px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>
                        <span className="font-semibold text-lg block">Téléphone</span>
                        <span className="text-slate-300 text-sm mt-1">+225 07 77 77 11 67</span>
                        </div>
                    </div>

                    {/* Email */}
                    <a
                        href="mailto:ulrichtoure3650@gmail.com"
                        className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg group min-h-[140px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                        <div>
                        <span className="font-semibold text-lg block">Email</span>
                        <span className="text-blue-100 text-sm mt-1">ulrichtoure3650@gmail.com</span>
                        </div>
                    </a>
                    </div>

                    {/* Indicateur visuel */}
                    <div className="mt-8 flex justify-center items-center gap-3 text-slate-500 text-base">
                    <span>Disponible pour vos besoins et questions.</span>
                    </div>
                </div>
            </div>




        <footer className="p-5 text-white bg-slate-900 text-lg text-center">
            <h1>&copy; HackaRedis 2025, designed by <a href="https://www.linkedin.com/in/emmanuel-bamidele-b63a49274/" className="underline">Emmanuel Bamidélé</a></h1>
        </footer>

        </>
    )
}