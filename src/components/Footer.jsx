import React from 'react'

export const Footer = () => {
    return (
    <footer id='contact' className="footer items-center text-center border z-12 border-t-[#fff] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-center">
            <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/juan-albarran-1ba03528a/" target="_blank" rel="noopener noreferrer">
                    <div className="rounded-full border bg-transparent w-14 h-14 flex justify-center items-center hover:bg-gray-300 transition duration-300">
                        <img src="/svg/linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
                    </div>
                </a>
                <a href="https://www.instagram.com/juaan_xyz/" target="_blank" rel="noopener noreferrer">
                    <div className="rounded-full border bg-transparent w-14 h-14 flex justify-center items-center hover:bg-gray-300 transition duration-300">
                        <img src="/svg/instagram.svg" alt="Instagram" className="h-8 w-8" />
                    </div>
                </a>
                <a href="https://github.com/juanch00-A" target="_blank" rel="noopener noreferrer">
                    <div className="rounded-full border bg-transparent w-14 h-14 flex justify-center items-center hover:bg-gray-300 transition duration-300">
                        <img src="/svg/github.svg" alt="WhatsApp" className="h-8 w-8" />
                    </div>
                </a>
            </div>
        </div>
    </footer>
  )

}
