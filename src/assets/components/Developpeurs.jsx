export function Developpeurs({ image, nom, fonction, niveau, chef }) {
    return (
        <div className="relative rounded-xl bg-white shadow-lg p-6 w-80 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            {chef && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-slate-500 to-slate-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {chef}
                    </span>
                </div>
            )}
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <img 
                        src={image} 
                        alt={nom}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover group-hover:border-blue-200 transition-colors duration-300"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-800">{nom}</h2>
                    <p className="text-slate-600 text-sm mt-1">{niveau}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-gradient-to-r from-slate-400 to-slate-900 text-white rounded-full text-sm font-medium shadow-sm">
                        {fonction}
                    </span>
                </div>
            </div>
        </div>
    )
}