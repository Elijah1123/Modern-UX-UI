

function Navbar(){
    return <nav className="fixed top-o w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                <div>
               
                <div>
                    <img src="./logo.png" alt="CoderFlow" className="w-15 h-15" sm:w-8 sm:h-8 />
                
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    <span className="text-white" >Code </span>
                    <span className="text-blue-400">Flow</span>
                </span>
            </div>
            </div>
        </div>
    </nav>
}

export default Navbar