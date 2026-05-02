import {useState, useEffect} from 'react';
import axios from 'axios';
import {Droplets, Thermometer, Sun , Wind, Activity, Leaf,ArrowLeft} from 'lucide-react';
import Chart from './Chart';
import PlantImg from './Assets/plant.jpeg';
import {useNavigate} from 'react-router-dom';



const Card = ({title, value, icon: Icon, color}) => (
  <div className="bg-white p-5 rounded-2xl gap-4 shadow-lg border  border-gray-100 flex items-center space-x-4 bg-white/70 backdrop-blur-lg  hover:scale-105 hover:bg-slate-200 transition duration-300">
    <div className={`p-3 rounded-xl ${color}`}>
      <Icon className="text-white" size={24} />
    </div>

    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default function Dashboard({onBack}) {

   const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await axios.get('https://plant-diseases-detection-smart-plant.onrender.com/api/plant-data');
      setData(res.data);
      setLoading(false);
    }catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const handleWatering = async () => {
    await axios.post('https://plant-diseases-detection-smart-plant.onrender.com/api/water');
    alert("Watering sequence initiated !");
    fetchData();
  };

  useEffect(() =>{
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);



  if (loading) return <div className="h-screen flex flex-col items-center justify-center gap-4"> 
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
   <p className='text-lg font-medium'> Loading ...</p>
    </div>

    const chartData = [
      {time: "09:00", temp:22},
       {time: "10:00", temp:24},
        {time: "11:00", temp:26},
         {time: "12:00", temp:28},
          {time: "13:00", temp:27},
         
    ];

  return(
    <div>
        
         <div className="flex justify-between items-center bg-green-900 text-white p-5">
         <h1 className="text-2xl font-bold"><Leaf className='inline text-green-600' size={40} />  Smart Plant</h1>
        <button onClick={() => navigate('/')} className="p-2 bg-white/10 rounded-full">
                <ArrowLeft size ={24} />
            </button>

            </div>
    

      <div className='flex'>

      <div className='flex-1 min-h-screen p-6 bg-gradient-to-br from bg-green-50 to-gray-100'>

      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">PlantMonitor Pro</h1>
            <p className="text-gray-500">Real-time botanical analytics</p>
          </div>
          <button onClick={handleWatering}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2">
            <Droplets size={20}/> Water Plant
             </button>
        </header>


   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-evenly max-w-7xl mx-auto p-6"> 
              <img src={PlantImg} alt="plant" className= "w-full rounded-3xl max-w-md drop-shadow-2xl hover:scale-105 transition-transform"/>
              
              <div className='absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-4 border-white/50 shadow-2xl hover:scale-125 overflow-hidden backdrop-blur-sm'>
              <img src={PlantImg} alt='zoomed detail' className='absolute scale-[2.5] top-[50%] left-[10%] w-full h-full object-contain'/>
              </div>
          
  

       <div className="grid grid-cols-1 gap-6 mb-8">
          
           <Card title="Moisture" value={data.moisture} icon={Droplets} color="bg-blue-500" />
           <Card title="Temperature" value={data.temperature} icon={Thermometer} color="bg-orange-500" />
            <Card title="Humidity" value={data.humidity} icon={Wind} color="bg-indigo-500" />
             <Card title="Light Level" value={data.light} icon={Sun} color="bg-yellow-500"  />
            
        </div>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity className="text-green-500"/> Healthy Status
            </h2>

            <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${data.status === 'Healthy' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {data.status}
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Your plant is currently in <b>{data.light.toLowerCase()}</b> light conditions.
              The last watering session was recorded at <b>{data.last_watered}</b>.
            </p>
          </div>


          <div className='bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden'>
            <h2 className='text-lg font-semibold mb-4'> Smart Insights</h2>

            <div className='space-y-4 text-md'>
              <p>Water level is low - active recommended</p>
              <p>Temperature is stable</p>
              <p>Light exposure insufficient</p>
            </div>

            <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl'></div>
          </div>

    
          
          <div className='lg:col-span-2'>
        <Chart data={chartData}/>
        </div>

        
          <div className="bg-green-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center">
            <p className="text-green-300 uppercase tracking-widest text-xs font-bold mb-2">System Log</p>
            <p className="text-lg">All sensors operational</p>
            <div className="mt-4 w-full h-1 bg-green-800 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-green-400 animate-pulse"></div>
            </div>
          </div>

      


         </div> 
      </div>
    </div>
    </div>
    </div>
  );
}