import { Thermometer } from "lucide-react";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid , ResponsiveContainer} from "recharts";

export default function Chart ({data})  {
    return(
        <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4"><Thermometer className="inline text-orange-500"/> Temperature Trend</h2>

            <ResponsiveContainer width="100%" height={250} >
                <LineChart data={data}  margin={{top: 10, right: 20, left: 10, bottom: 10}} >
                    <CartesianGrid strokeDasharray="2 8" vertical={false}/>
                    <XAxis dataKey="time" tickMargin={10}/>
                    <YAxis domain={[0, 40]} width={30} />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="#22c55e" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}