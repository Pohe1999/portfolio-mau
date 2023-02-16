import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#082044] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/2b135768-3f66-408b-92fc-0a9643db2a05" className='flex flex-col max-w-[600px] w-full hover:border-2 duration-300 hover:px-1 rounded-lg border-[#0a192f] hover:border-pink-600'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form bellow or shoot me an email - mapogu99@gmail.com</p>
            </div>
            <input className='bg-[#e0e8ff] p-2 rounded-lg' type="text" placeholder='Name' name="name" id="" />
            <input className='my-4 p-2 bg-[#e0e8ff] rounded-lg' type="email" placeholder='Email' name="email" id="" />
            <textarea className='bg-[#e0e8ff] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white rounded-xl border-2 px-6 py-3 my-5 mx-auto hover:bg-pink-600 duration-700 hover:border-pink-300 flex items-center'>
                // Send me a Message!
            </button>
        </form>
    </div>
  )
}

export default Contact