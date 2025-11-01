import images from "../../constants/image"

export function Header() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-5 px-6 md:px-12">

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={images.population} 
            alt="HackaRedis" 
            className="w-80 md:w-96 drop-shadow-lg"
          />
        </div>

        {/* Texte */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold italic bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent drop-shadow-sm">
            HackaRedis
          </h1>
          <h3 className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Innover, collaborer et créer des solutions technologiques innovantes, 
            en <span className="text-orange-400 font-semibold">quelques jours</span> d’intensité, de créativité et de passion.
          </h3>

          <a 
            href="https://hackaredis.vercel.app"
            className="inline-block mt-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Participer à l’hackathon
          </a>
        </div>

      </div>
    </section>
  );
}
