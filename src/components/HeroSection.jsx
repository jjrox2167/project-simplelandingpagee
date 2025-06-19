import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:tex-7xl text-center tracking-wide">
            VirtualR build tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                for developers
            </span>    
        </h1>
        <p>
            <span className="text-lg sm:text-xl lg:text-2xl text-gray-400">
                Build, test, and deploy your applications with ease.
            </span>
        </p>
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto text-center">
            Our platform streamlines your workflow, letting you focus more on innovation and less on infrastructure. Whether you're building a side project or scaling a product, we've got you covered.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-2
            rounded-md'>
                Sign Up for Free    
            </a>
            <a href="#" className='py-3 px-4 mx-2 rounded-md border'>
                Documentation
            </a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video 
                autoPlay 
                loop 
                muted 
                className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video 
                autoPlay 
                loop 
                muted 
                className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
            >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    );
};

export default HeroSection
