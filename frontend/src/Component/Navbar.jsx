import{Menu, Leaf, LayoutDashboard, Activity, Settings, X, ArrowLeft} from "lucide-react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


export default function Navbar(){
    const [open, setOpen] = useState(false);
      const navigate = useNavigate(); 

    return (
        <>
        <div className="flex justify-between items-center bg-green-900 text-white p-5">

            <h1 className="text-2xl font-bold"><Leaf className='inline' size={40} />  Smart Plant</h1>
              <input placeholder="Search here ......" className="rounded-full text-gray-600 w-1/2 pl-4 " />

                <button onClick={() => navigate('/')} className="p-2 bg-white/10 rounded-full">
                <ArrowLeft size ={24} />
            </button>

           
        </div>

        {open && (
            <div className="fixed insert-0 bg-black/40 z-50 ">
                <div className="h-screen w-64 bg-green-900 text-white flex flex-col p-5 ">
                    <button onClick={()=> setOpen(false)}>Close <X  className="inline"/></button>

                          <nav className="flex flex-col gap-4">

                              <button onClick={() => navigate('/')} className="p-2 bg-white/10 rounded-full">
                <ArrowLeft size ={24} />
            </button>
                <button className='flex items-center gap-2 hover:bg-green-700 p-2 rounded-lg'>
                    <LayoutDashboard/> Dashboard
                </button>

                <button className='flex items-center gap-2 hover:bg-green-700 p-2 rounded-lg'>
                    <Activity/> Activity
                </button>

                <button className='flex items-center gap-2 hover:bg-green-700 p-2 rounded-lg'>
                    <Settings/> Settings
                </button>
            </nav>
                </div>
            </div>
        )}
        </>
    );
}