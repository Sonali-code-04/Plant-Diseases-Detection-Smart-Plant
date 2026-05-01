import React, { useEffect }  from "react";
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
        img: img1
    },
    {
        name:'Mini Green',
        price:'$150',
        img: img13
    },
    {
        name:'Leaf Plant',
        price:'$170',
        img: img12
    },
    {
        name:'Pink Lily',
        price:'$300',
        img: img4
    },
    {
        name:'Cactus',
        price:'$100',
        img: img9
    },
    {
        name:'Mixed Leaf',
        price:'$2100',
        img: img6
    },
    {
        name:'Blue Lily',
        price:'$320',
        img: img2
    },
    {
        name:'Tulsi',
        price:'$120',
        img: img11
    },
    {
        name:'Little Petals',
        price:'$130',
        img: img10
    },
    {
        name:'Red Leaf',
        price:'$280',
        img: img8
    },
    {
        name:'Banni Plant',
        price:'$240',
        img: img7
    },
    {
        name:'Plant',
        price:'$290',
        img: img5
    },

];


     export default function Shop() {

      const navigate = useNavigate(); 
        useEffect(()=>{window.scrollTo(0, 0);}, []);
      

      return(
        <div className="min-h-screen bg-gray-100 p-6">


            <div className="flex justify-between it mb-6">
                <h1 className="text-2xl font-bold text-teal-700"><Leaf className='inline text-green-600' size={40} /> Planty</h1>
                   <input placeholder="Search here ......" className="rounded-full text-gray-600 w-1/2 pl-4 " />
                  <button onClick={() => navigate('/')} className="p-2 bg-white/10 rounded-full">
                <ArrowLeft size ={24} />
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

                <div className="flex md:flex-col gap-4">
                    <div className="bg-green-200 p-4 rounded-2xl flex justify-between gap-6">
                        <div>
                            <p className="font-semibold">Monstera</p>
                            <button className="text-sm mt-8 hover:text-gray-600">Shop Now</button>
                        </div>
                        <img src={img12} alt="plant" className="w-16 rounded-3xl" />
                    </div>

                    <div className="bg-green-700 text-white p-4 rounded-2xl flex justify-between">
                        <div>
                            <p className="font-semibold">Plant for Garden</p>
                            <button className="text-sm mt-2 hover:text-gray-800">Shop Now</button>
                        </div>
                        <img src={img5} alt="Plant" className="w-16 rounded-3xl" />
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                {["All", "Cactus", "Rose", "Lily", "Monstera"].map((cat) =>(
                    <button key={cat} className="px-4 py-2 bg-white rounded-full shadow">{cat}</button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((p, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition ">
                        <img src={p.img} alt="plant" className="h-40 mx-auto rounded-2xl"/>
                        <h3 className="mt-2 font-semibold text-center">{p.name}</h3>
                        <p className="text-gray-500 text-center">{p.price}</p>

                        <button className="mt-2 w-full bg-green-600 text-white py-1 rounded-full">Add</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
