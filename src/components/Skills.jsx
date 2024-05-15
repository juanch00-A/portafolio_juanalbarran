import html from '../../public/svg/html.svg'
import css from '../../public/svg/css.svg'
import js from '../../public/svg/js.svg'
import ts from '../../public/svg/ts.svg'
import tailwind from '../../public/svg/tailwind.svg'
import react from '../../public/svg/react.svg'
import next from '../../public/svg/next.svg'
import git from '../../public/svg/git.svg'
import github from '../../public/svg/github.svg'
import astro from '../../public/svg/astro.svg'
import node from '../../public/svg/node.svg'
import express from '../../public/svg/express.svg'
import mongodb from '../../public/svg/mongodb.svg'
import bootstrap from '../../public/svg/bootstrap.svg'



const techs = [
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
        id: 3,
        src: js,
        title: "JavaScript",
        style: "shadow-yellow-500",
    },
    {
        id: 4,
        src: ts,
        title: "TypeScript",
        style: "shadow-blue-600",
    },
    {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
    },
    {
        id: 5,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-purple-400",
    },
    {
        id: 6,
        src: react,
        title: "React.Js",
        style: "shadow-blue-600",
    },
    {
        id: 7,
        src: next,
        title: "Next.Js",
        style: "shadow-white"
    },
    {
        id: 8,
        src: astro,
        title: "Astro",
        style: "shadow-pink-400",
    },
    {
        id: 9,
        src: git,
        title: "Git",
        style: "shadow-orange-400",
    },
    {
        id: 10,
        src: node,
        title: "Node.Js",
        style: "shadow-green-400",
    },
    {
        id: 11,
        src: mongodb,
        title: "MongoDB",
        style: "shadow-green-400",
    },
    
];

export const Skills = () => {

    

    return (
        <>

            <div
                name="Skills"
                className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center w-full h-full text-white" > 
            
                <div className='justify-center items-center text-center'>
                        <p className="text-4xl font-bold  p-2 inline">
                            Habilidades
                        </p>
                        <p className="py-6">
                            Estas son las tecnologias que uso!!!
                        </p>
                </div>
            
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-10 px-8 sm:px-0">
                    {techs.map(({ id, src, title, style }) => ( 
                        
                    <div
                        key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col justify-center items-center`} > 
                        <img src={src} alt="" className="bli w-20 h-20 object-cover mb-4" /> <p className="mt-4">{title}</p> 
                    </div> ))} 
                </div>
                
            </div>

            
            
        
        </>
)
}
