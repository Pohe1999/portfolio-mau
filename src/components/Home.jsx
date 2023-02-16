import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import MovingText from 'react-moving-text'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#082044]'>

        {/* Container */}
        <div name='hero' className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-pink-600 font-extralight px-9 text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold px-9 text-gray-300'>Mauricio Portillo</h1>
            <h2 className='text-3xl sm:text-7xl font-bold px-7 text-[#8892b0]'>
            <MovingText type="typewriter" duration='9000ms' 
              dataText={[
              "I'm a Front-end Dev",
              "Welcome",
              "Bienvenido . . ."
            ]} />
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] px-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
               tenetur! Expedita quasi magni sunt consectetur doloribus dign
               issimos repellendus eum, deleniti nostrum in impedit itaque dolore officia omnis dolorem quisquam a.
            </p>
            <div className='px-9'>
                <button className='group text-white border-2 px-4 py-1 rounded flex items-center hover:bg-pink-600 hover:border-pink-300'>
                  <Link to="work" smooth={true} duration={500}>
                    <p className='flex items-center'>
                    View Work <span className=''><HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300' /></span>
                    </p>
                  </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home