import MovingText from 'react-moving-text'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#082044] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pt-4 px-4'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>About</p>
                </div>
            </div>
            <div></div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                <div className='sm:text-right text-4xl font-bold'>
                    <p className=''> 
                        Hi, I'm Mauricio, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                        laboriosam deserunt pariatur assumenda qui, dolores sapiente so
                        luta rem fuga doloremque obcaecati veniam suscipit eos iure nam
                        laboriosam deserunt pariatur assumenda qui, dolores sapiente so
                        luta rem fuga doloremque obcaecati.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About