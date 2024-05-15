import '../Style/Hero.css'

export const HeroSection = () => {
    return (
<section id='home' className="container py-20 lg:py-16">
  <div className="grid grid-cols-1 lg:grid-cols-12">

    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center lg:items-start">
      <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold text-center lg:text-left">
        Hola, Soy Juan <span className='text-[#C24CE9]'>Desarrollador Frontend</span> 
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center lg:text-left">
      Especializado en el desarrollo de aplicaciones web únicas y personalizadas. 🚀
      </p>
      <div className="flex justify-center lg:justify-start">
        <a href="mailto:albarrantovarjuan@gmail.com">
          <button className="btn">
          Contrátame aquí
          </button>
        </a>
        
        <a href="/cv_juan_albarran.pdf" download='CV' >
            <button   className="btn ml-4">
              Descargar CV
            </button>
        </a>
        
      </div>
    </div>

    <div className="col-span-12 lg:col-span-6 flex justify-center mt-8 lg:mt-0">
      <div className="max-w-[400px] lg:max-w-full">
        <div className="content  w-full h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[430px] lg:h-[430px] relative">
          <img
            src="/img/hero-2.png"
            alt="hero image"
            className="bli w-full h-full object-cover "
          />
        </div>
      </div>
    </div>

  </div>
</section>
    )
} 

