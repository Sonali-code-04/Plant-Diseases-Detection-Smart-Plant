import React  from 'react';
import {useNavigate} from 'react-router-dom';
import {Camera, Upload, FileText, TreePalm, Bot} from 'lucide-react';
import LeafImg from './Assets/Leaf.jpeg';
import ChatBot from './ChatBot';
import dash from './Assets/dash.jpeg';
import plantshop from './Assets/plantshop.jpeg';
import {Link} from 'react-router-dom'

const PlantAIDiseaseDetection = () =>{
    const navigate = useNavigate();


    return(
        <div className='min-h-screen bg-[#002b1d] text-white font-sans'>

            <nav className='absolute top-0 left-0 w-full p-6 flex items-center gap-2 z-20'>
                <div className='bg-green-700 rounded-full p-1'>
                    <div className='w-6 h-6 bg-[#002b1d] rounded-full'>
                          <TreePalm  className='text-green-500'/>
                    </div>
                </div>
                <span className='text-2xl font-bold'> Plant AI</span>
                 
            </nav>
               
            <header className='relative h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden'>
            <div className='absolute inset-0 z-0 opacity-40 bg-cover bg-center'
            style={{backgroundImage: `url(${LeafImg})`}}/>
           
           <div className='relative z-10'>
            <h1 className='text-4xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight'>
                Try our AI Powered <br/> Disease Detection
            </h1>
            <button onClick={() => navigate('/detect')} className='bg-yellow-600 text-green-950 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors'>
                Try Now
            </button>
           </div>
            </header>

            <section className='py-20 px-4 bg-[#003d29] flex flex-col items-center'>
                <h2 className='text-3xl font-semibold text-center mb-16 underline decoration-yellow-500 underline-offset-8'>
                    How it works ?
                </h2>

                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center'>
                   
                    <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 hover:bg-white/40'>
                        <Camera className='w-8 h-8' />
                        </div>
                        <h3 className='font-bold mb-2'>Click a Pic</h3>
                        <p className='text-sm text-gray-300'>Take a Picture of your plant leaf</p>
                    </div> 

                      <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 hover:bg-white/40'>
                        <Upload className='w-8 h-8' />
                        </div>
                        <h3 className='font-bold mb-2'>Upload on Plant AI</h3>
                        <p className='text-sm text-gray-300'>Visit Plant AI on your device and click on<br/> Try Now to upload your picture</p>
                    </div> 

                        <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 hover:bg-white/40'>
                        <FileText className='w-8 h-8' />
                        </div>
                        <h3 className='font-bold mb-2'>Get Analyzed Report</h3>
                        <p className='text-sm text-gray-300'>Plant AI will analyze your plant and will<br/> display a detailed report for you</p>
                    </div> 

                        <div className='flex flex-col items-center'>
                        <div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 hover:bg-white/40'>
                        <Bot className='w-8 h-8' />
                        </div>
                        <h3 className='font-bold mb-2'>Chat with AI</h3>
                        <p className='text-sm text-gray-300'>Ask Plant AI questions about care,<br/> diseases, and treatments for your plant</p>
                    </div> 

                </div>
            </section>


               <div className= 'grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-8  max-w-6xl mx-auto text-center'>
               
                <div className=' bg-emerald-900 glass rounded-2xl overflow-hidden shadow-lg h-full hover:scale-105 transition duration-300 '>
                   
                    <div className='h-64 overflow-hidden'>
                        <img src={dash} alt='plant' className='w-full h-full object-cover hover:scale-110 transition duration-500'/>
                     </div>
                    <div className='p-5 flex flex-col justify-between flex-grow'>
                        <h1 className='font-semibold text-center mb-4 text-yellow-400 text-lg'>Know Your Plant Status</h1>
                        
                        <Link to='/Dashboard' className='mt-auto px-12 bg-green-600 text-white w-fit mx-auto text-md font-bold py-3 rounded-full hover:bg-green-700 transition duration-300'>Check Now</Link>
                    </div>
                       </div>
                      <div className=' bg-emerald-900 glass rounded-2xl overflow-hidden shadow-lg h-full hover:scale-105 transition duration-300 '>
                      <div className='h-64 overflow-hidden'>
                        <img src={plantshop} alt='plant' className='w-full h-full object-cover hover:scale-110 transition duration-500' />
                    </div>
                    <div className='p-5 flex flex-col justify-between flex-grow' >
                        <h1 className='font-semibold text-center mb-4 text-yellow-400 text-lg'>Shop Indoor Plants</h1>

                        <Link to="/Shop" className='mt-auto px-12 bg-green-600 text-white w-fit mx-auto text-md font-bold py-3 rounded-full hover:bg-green-700 transition duration-300'>Shop Now</Link>
                    </div>
                </div>
                </div>
            
            <ChatBot/>
         </div>
    );
};

export default PlantAIDiseaseDetection;