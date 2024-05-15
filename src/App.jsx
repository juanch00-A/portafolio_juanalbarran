import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import  Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import { Footer } from './components/Footer'



export const App = () => {
    return (
    <>
    
        <main className='flex min-h-screen flex-col bg-gradient-radial bg-radial-gradient '>
            <Navbar/>
            <div className='container mt-24 mx-auto px-12 py-4 '>
            <HeroSection />
            <Projects/>
            <Skills/>
            <AboutMe/>
            </div>
            
            <Footer/>
        </main>   

    </>
    
)
}
