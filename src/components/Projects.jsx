



const PortfolioSection = () => {
  const projects = [
    {
      title: 'Landing de Tesla',
      description: 'Este proyecto es un clon de la página de Tesla, diseñado para replicar la apariencia y funcionalidad del sitio oficial. Utilizamos Astro para optimizar el rendimiento y Tailwind para el diseño y la estilización.',
      image: '/img/tesla.jpg',
      link: 'https://landing-de-tesla.netlify.app/',
    },

    {
      title: 'Paleta de colores',
      description: 'Este proyecto es una aplicación web para explorar paletas de colores creada con React y CSS. Consumí una API para obtener paletas de colores y personalicé la apariencia utilizando CSS.',
      image: '/img/paleta.png',
      link: 'https://palettepop-colors.netlify.app/'
    },

    {
      title: 'Pokedex',
      description: 'Este proyecto es una aplicación web para explorar Pokémon creada con React y CSS. Consumí la API de Pokémon para obtener información sobre los Pokémon, incluyendo sus detalles y estadísticas. Utilicé CSS para personalizar la apariencia de los componentes.',
      image: '/img/pikachu-pokedex.jpeg',
      link: 'https://pokedex-portafolio.netlify.app/'
    },

    {
      title: 'Sistema solar',
      description: 'Este proyecto es una representación interactiva del sistema solar. Utilicé HTML para estructurar la página, CSS para dar estilo a los elementos y JavaScript para animar los planetas y sus órbitas. ',
      image: '/img/sistema-solar.jpeg',
      link: 'https://sistema-solar-animacion.netlify.app/'
    },

    {
      title: 'Blog de noticias',
      description: 'Este proyecto es un blog de noticias creado con React y Tailwind. Los usuarios pueden explorar artículos relevantes en un formato moderno y atractivo. ',
      image: '/img/blog.jpeg',
      link: 'https://blog-de-noticias-tecnologicas.netlify.app/'
    },

    {
      title: 'Juego de memoria',
      description: 'Este proyecto es un juego de memoria creado con React y Tailwind. Los jugadores pueden explorar visualmente las cartas, voltearlas para encontrar parejas.',
      image: '/img/juego-memoria.jpeg',
      link: 'https://juego-de-memoria-portafolio.netlify.app/'
    },
    
  ];

  return (
    <section id='projects' className="py-40">
      <div className="container mx-auto border-white">
        <h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md p-6 transform transition duration-500 ease-in-out hover:scale-105 bg-[#100824]"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="bli w-full h-40 object-cover mb-4 rounded-lg "
                />
              </a>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection;



