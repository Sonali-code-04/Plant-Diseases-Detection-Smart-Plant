import React, { useEffect, useState }  from "react";
import { Leaf , ArrowLeft} from "lucide-react";
import {useNavigate} from 'react-router-dom';
import img1 from './Assets/photos/img1.jpeg';
import img2 from './Assets/photos/img2.jpeg';
import img3 from './Assets/photos/img3.jpeg';
import img4 from './Assets/photos/img4.jpeg';
import img5 from './Assets/photos/img5.jpeg';
import img6 from './Assets/photos/img6.jpeg';
import img7 from './Assets/photos/img7.jpeg';
import img8 from './Assets/photos/img8.jpeg';
import img9 from './Assets/photos/img9.jpeg';
import img10 from './Assets/photos/img10.jpeg';
import img11 from './Assets/photos/img11.jpeg';
import img12 from './Assets/photos/img12.jpeg';
import img13 from './Assets/photos/img13.jpeg';

const products = [
    {
        name: "Peace Lily",
        price:"$200",
        category: "Lily",
        img: img1
    },
    {
        name:'Mini Green',
        price:'$150',
        category: "Monstera",
        img: img13
    },
    {
        name:'Leaf Plant',
        price:'$170',
        category: "Monstera",
        img: img12
    },
    {
        name:'Pink Lily',
        price:'$300',
        category: "Lily",
        img: img4
    },
    {
        name:'Cactus',
        price:'$100',
        category: "Cactus",
        img: img9
    },
    {
        name:'Mixed Leaf',
        price:'$2100',
        category: "Monstera",
        img: img6
    },
    {
        name:'Blue Lily',
        price:'$320',
        category: "Lily",
        img: img2
    },
    {
        name:'Tulsi',
        price:'$120',
        category:"Tulsi",
        img: img11
    },
    {
        name:'Little Petals',
        price:'$130',
        category: "Monstera",
        img: img10
    },
    {
        name:'Red Leaf',
        price:'$280',
        category: "Monstera",
        img: img8
    },
    {
        name:'Banni Plant',
        price:'$240',
        category:"Tulsi",
        img: img7
    },
    {
        name:'Plant',
        price:'$290',
        category: "Monstera",
        img: img5
    },

];


     export default function Shop() {

      const navigate = useNavigate(); 
        useEffect(()=>{window.scrollTo(0, 0);}, []);

        const [category, setCategory] = useState("All");
      

      return(
        <div className="min-h-screen bg-gray-100 p-6">


            <div className="flex items-center justify-between gap-4 mb-6 pt-1 w-full">
                <div className="flex items-center gap--1 flex-shrink-0">
                    <Leaf className="text-green-700" size={38}/>
                    <h1 className="text-2xl font-bold text-teal-700"> Planty</h1>
                </div>

                <input placeholder="Search here ...." className="flex-1 min-w-[120px] md:max-w-lg bg-white/50 rounded-full py-2 px-4 text-sm border border-gray-200 focus:outline-none" />
                <button onClick={() => navigate('/')} className="p-2 bg-white/10 rounded-full flex-shrink-0">
                    <ArrowLeft size={24} />
                </button>
            </div>
    
        
    

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                <div className="col-span-2 bg-[#e8dfd8] p-6 rounded-3xl flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            Plant for Interior Decoration
                        </h2>
                        <p className="mb-4">Start from $320</p>
                        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-slate-600">Shop Now</button>

                         </div>
                    <img src={img3} alt="" className="w-40 overflow-hidden rounded-3xl"/>
                </div>

                <div className="flex flex-row md:flex-col gap-3 ">
                    <div className="bg-green-200 p-4 md:p-2 rounded-2xl flex-1 min-w-0 flex justify-between items-center overflow-hidden">
                        <div>
                            <p className="font-semibold text-md sm:text-sm truncate">Monstera</p>
                            <button className="text-[10px] sm:text-sm mt-1 text-gray-600 underline">Shop Now</button>
                        </div>
                        <img src={img12} alt="Plant" className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-3xl flex-shrink-0" />
                    </div>

                    <div className="bg-green-700 text-white p-4 rounded-2xl flex-1 min-w-0 flex justify-between items-center overflow-hidden">
                        <div>
                            <p className="font-semibold text-xs sm:text-sm truncate">Plant for Garden</p>
                            <button className="text-[10px] sm:text-sm mt-1 text-white underline">Shop Now</button>
                        </div>
                        <img src={img5} alt="Plant" className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-3xl flex-shrink-0" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mb-6 overflow-x-auto">
                {["All", "Cactus", "Tulsi", "Lily", "Monstera"].map((cat) =>(
                    <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-full shadow transition-colors ${
                        category === cat
                        ? "bg-teal-600 text-white"
                        : "bg-white text-gray-700" }`}>{cat}</button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 min-h-screen items-start ">
                {products
                .filter((p) => category === "All" || p.category === category)
                .map((p, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition ">
                        <img src={p.img} alt="plant" className="h-32 md:40 mx-auto object-contain rounded-2xl"/>
                        <h3 className="mt-2 font-semibold text-center">{p.name}</h3>
                        <p className="text-gray-500 text-center">{p.price}</p>

                        <button className="mt-2 w-full bg-green-600 text-white py-1 rounded-full">Add</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
