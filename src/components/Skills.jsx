import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen text-gray-300 bg-[#082044]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-6'>// Check out some o</p>
    </div>

        {/* Container sm device */}
        <div className='lg:hidden sm:grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center'>

            {/* Grid item */}
            <div className='shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-20 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={ReactImg} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        React
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>
            {/* Grid item */}
            <div className='mt-3 shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-20 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={Tailwind} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        Tailwind
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>
            {/* Grid item */}
            <div className='mt-3 shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-20 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={Node} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        Node
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>


        </div>
    
        {/* Container */}
        <div className='hidden lg:grid lg:grid-cols-3 justify-center items-center w-[900px] h-[400px]'>

            {/* Grid item */}
            <div className='shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-5 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={HTML} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        HTML 5
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>

            {/* Grid item */}
            <div className='shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-5 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={CSS} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        CSS
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>

            {/* Grid item */}
            <div className='shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-5 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={JavaScript} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className=' opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        JavaScript
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>

            {/* Grid item */}
            <div className='shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-5 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={ReactImg} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        React
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>

            {/* Grid item */}
            <div className='shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-5 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={Node} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        Node
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>

            {/* Grid item */}
            <div className='shadow-2xl bg-gray-300 shadow-[#040c16] group  px-6 p-8 rounded-md flex justify-center items-center mx-5 group-hover:px-4 group-hover:py-6'>

                <div className='max-w-[1000px] flex justify-center items-center'>
                  <img className='w-[110px] h-[110px]' src={Tailwind} alt="html icon" />
                </div>
                {/* Hover effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-700'>
                    <span className='text-[#0a192f] text-2xl font-bold inline border-b-4 border-pink-600'>
                        Tailwind
                    </span>

                    <div className='pt-8 text-center'>
                        <a target='_blanck' href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        <button className=' text-[#0a192f] border-b-2 border-[#040c16] '>
                            
                              <p className='flex items-center'>
                                Docs <span className=''><HiArrowNarrowRight className='ml-2 text-pink-600 group-hover:rotate-90 duration-300' /></span>
                              </p>
                            
                          </button>     
                        </a>
               
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  );
};

export default Skills;