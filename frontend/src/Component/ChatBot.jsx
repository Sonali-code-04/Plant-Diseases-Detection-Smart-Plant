import React, { useState } from "react";
import {Send, X, Bot} from 'lucide-react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input,  setInput] = useState("");
    const [messages, setMessages] = useState([
        {text: "Ask me anything about plant diseases!", sender:"bot"}
    ]);

    const sendMessage = async() => {
        if (!input.trim()) return;

        const newMessages = [...messages, {text: input, sender:"user"}];
        setMessages(newMessages);
        setInput("");

        try{
            const response = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: input}),
            });
            const data = await response.json();
            setMessages([...newMessages,{text: data.reply, sender: "bot"}]);
        } catch (error) {
            setMessages([...newMessages, {text: "Error connected to server.", sender: "bot" }]);
        }
            
        };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {!isOpen &&(
                <button onClick={() => setIsOpen (true)} className="bg-green-600 p-4 rounded-full text-white shadow-lg hover:bg-green-700 transition">
                    <Bot size={28} />
                </button>
            )}

            {isOpen && (
                <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">
                    <div className="bg-green-700 p-4 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                            <span className="font-semibold">Plant Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                    </div>

                    <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                    msg.sender === 'user' ? 'bg-green-600 text-white rounded-tr-none' : 'bg-white text-gray-800 shadow-sm border rounded-tl-none'
                                }`}>
                                {msg.text}
                            </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t bg-white flex gap-2">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask about plant problems..." 
                        className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-green-500" />

                        <button onClick={sendMessage} className="bg-green-600 white-black p-2 rounded-full hover:bg-green-700">
                            <Send size={18} />
                        </button>
                        </div>
                     </div>
          )}
        </div>
  );
};

export default ChatBot;