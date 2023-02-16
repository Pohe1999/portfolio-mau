import React from 'react'
import cotizadorPres from '../assets/cotizadorPres.png'
import realState from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#082044]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

        
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid item */}
                <div style={{ backgroundImage: `url(${cotizadorPres})` }} className='opacity-100 content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 duration-700'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://sparkling-clafoutis-cb2eef.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-gray-300 border-2 hover:border-gray-300'>Link</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-gray-300 border-2 hover:border-gray-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid item */}
                <div style={{ backgroundImage: `url(${realState})` }} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 duration-700'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-gray-300 border-2 hover:border-gray-300'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-gray-300 border-2 hover:border-gray-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid item */}
                <div style={{ backgroundImage: `url(${cotizadorPres})` }} className='content-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 duration-700'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-gray-300 border-2 hover:border-gray-300'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-700 hover:text-gray-300 border-2 hover:border-gray-300'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work