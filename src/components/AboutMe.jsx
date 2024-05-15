
const AboutMe = () => {
  const personalImageAlt = 'Juan Albarran';

  return (
    <section id="about"  className="flex flex-col py-40 items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="[&>p]:mb-4  dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
      
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> 
      <img src="/svg/invader.svg" alt="invader" />
        Sobre mí
      </h2>
        <p>
          Soy Juan Albarran un profesional del desarrollo web frontend. Destaco por mi habilidad para colaborar en equipos de trabajo de manera efectiva y por mi capacidad para adaptarme a diferentes entornos laborales. Mi compromiso se   centra en mantener estándares de calidad elevados, mediante la redacción de código claro, legible y eficiente. Asimismo, tengo un firme interés en continuar ampliando mis conocimientos y dominar nuevas tecnologías en constante evolución.
          
        </p>
        
        <p>
          Mi educación se ha formado gracias a distintas plataformas, como YouTube, freeCodeCamp y OpenBootcamp, entre otros.   Quiero hacer énfasis en la plataforma CódigoFacilito, donde tuve la oportunidad de obtener certificaciones en tecnologías como React, JavaScript, TypeScript y Git. Sin embargo, mi aprendizaje no se detiene ahí. Cada día sigo adquiriendo nuevos conocimientos para convertirme en un gran desarrollador en el futuro.
        </p>

        <p>
          ¡Unámonos y trabajemos juntos en proyectos apasionantes! Estoy ansioso por colaborar contigo y ¡crear software   asombroso   en equipo! No dudes en contactarme y comencemos esta emocionante aventura juntos. 🚀
        </p>

      </div>

      <img
        width="200"
        height="200"
        src="/img/hero-2.png"
        alt={personalImageAlt}
        className="bli order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
      />
    </section>
  );
};

export default AboutMe;