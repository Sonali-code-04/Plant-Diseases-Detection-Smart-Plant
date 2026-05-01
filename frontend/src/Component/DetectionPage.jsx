import React, {useRef, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {RefreshCw, Upload, ArrowLeft, CheckCircle, Loader2  } from "lucide-react";


export default function DetectionPage() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const[capturedImage,setCapturedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        startCamera() ;
        return () => stopCamera();
    },[]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true});
           videoRef.current.srcObject = stream;
          
          
        } catch (err) {
            console.error("Camera error:", err);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current?.srcObject;
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
    };

    const takePhoto = () => {
        const ctx = canvasRef.current.getContext('2d');
        canvasRef.current.width =  videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        ctx.drawImage(videoRef.current, 0 , 0);
        setCapturedImage(canvasRef.current.toDataURL('image/jpeg'));
        stopCamera();
   };

   const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event ) =>{
            setCapturedImage(event.target.result);
            stopCamera();
        };
    reader.readAsDataURL(file);  
     }
   };

   const handleAnalyze = async () => {
    console.log("Analyze clicked")
    setShowResult(true);
    setLoading(true);

    try{
      if (!capturedImage) {
        alert("Image still processing, wait a moment");
        setLoading(false);
        return;
    }
 
       const blob = await(await fetch(capturedImage)).blob();

       const file = new File([blob], "plant.jpg", {
        type: "image/jpeg",
       });
  
        const formData = new FormData();
        formData.append("image", file);
        
        const res = await fetch('http://localhost:5000/api/predict', {
            method: "POST",
            body: formData,
         });


        const data = await res.json();
         console.log("RESULT FROM BACKEND", data);
         
         if (data.success) {
              setResult(data.data);
         } else {
            alert (data.message);
         }

    } catch (error) {
        console.error("Analysis failed", error);
        alert("Backend connection failed. Make Sure app.py is running on port 5000!");
    } finally {
        setLoading(false);
    }
   };

   return(
        
        <div className="min-h-screen bg-[#002b1d] text-white flex flex-col  items-center p-6">

            
     <header className="w-full max-w-md flex items-center justify-between mb-8">
            <button onClick={() => navigate('/')} className="p-2 bg-white/10 rounded-full">
                <ArrowLeft size ={24} />
            </button>
            <h1 className="text-xl font-bold">Plant Scanner</h1>
            <div className="w-10"></div>
    </header>  

        <div className="relative w-full max-w-md md:w-1/2  aspect-square bg-black rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
        {!capturedImage ? (
            <>
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover"/>
            <div className="absolute inset-0 border-[40px] border-black/40 pointer-events-none" ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 border-2 border-yellow-500/50 border-dashed rounded-xl"></div>
            </>
        ) : (
            <img src={capturedImage} className="w-full h-full object-cover" alt='Catured'/>
        )}
        </div>

         {result ? (
            <div className="mt-8 w-full max-w-md bg-white/10 p-6 rounded-2xl border border-yellow-500/50 animate-in fade-in zoom-in">
                <h2 className="text-2xl font-bold text-yellow-500 mb-2">{result.disease}</h2>
                <p className="text-gray-300 mb-4">Confidence : {result.confidence}</p>
                <p className="text-sm bg-black/20 p-4 rounded-lg">{result.treatment}</p>
                <button onClick={() => window.location.reload()} className="mt-6 w-full py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all">Scan Another</button>
                </div>
        ) : (

        <div className="mt-10 flex flex-col items-center gap-6 w-full max-w-md">
            {!capturedImage ? (
                <div className="flex items-center gap-8">
                <button onClick={takePhoto} className="w-16 h-16 bg-yellow-500 rounded-full border-8 border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                    <div className="w-10 h-10 bg-white rounded-full"/>
                </button>

                <div className="relative">
                    <input type='file' id='file-up' className="hidden" onChange={handleFileUpload} />
                    <label htmlFor="file-up" className="cursor-pointer w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/30 transition-all border border-white/20">
                    <Upload size={24} /></label> 
                    </div>
                </div>
        ) : (
                <div className="flex gap-6 w-full max-w-4xl">
                    <button onClick={() => {setCapturedImage(null); startCamera();}} className="flex-1 bg-white/10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                        <RefreshCw size={20} /> Retake
                    </button>
                    <button onClick={handleAnalyze} disabled={loading} className="flex-1 bg-yellow-500 text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                    {loading ? <Loader2 className="animate-spin" /> : <> Analyze <CheckCircle size={20} /></>}   
                    </button>
                    </div>
            )}


            {showResult && (
                <div className="w-1/2 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-all duration-500">
                  {loading ? (
                    <p className="text-yellow-400">Analyzing...</p>
                  ) : result ? (
                    <>
                     <h2 className="text-2xl font-bold text-green-400">
                      Disease: {result.disease}
                     </h2>

                     <p className="mt-2 text-gray-300">
                        Confidence: {result.confidence || "N/A"}
                     </p>

                     <p className="mt-4 text-sm text-gray-200">
                        {result.treatment || "No treatment info"}
                     </p>
                     </>
                  ) : (
                    <p className="text-gray-400">No result yet</p>
                  )}
                </div>
            )}

        </div>
        
        )}

           <p className="text-gray-300 text-lg text-center mt-4 md:mt-12">
                Position the leaf within the frame and ensure good lighting for a better report.
            </p>
        <canvas ref = {canvasRef} className="hidden"/>
    </div>

);
}

