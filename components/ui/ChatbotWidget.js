'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi there! I\'m your ScentSutra assistant. How can I help you today?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response after a small delay
    setTimeout(() => {
      let botResponse;
      
      // Simple response logic - in a real app, this would connect to an AI service
      if (inputValue.toLowerCase().includes('order') && inputValue.toLowerCase().includes('status')) {
        botResponse = { 
          role: 'bot', 
          text: 'You can check your order status by going to the Orders page and entering your order ID. Can I help with anything else?' 
        };
      } else if (inputValue.toLowerCase().includes('recommend') || inputValue.toLowerCase().includes('suggestion')) {
        botResponse = { 
          role: 'bot', 
          text: 'Based on our best sellers, I would recommend trying our "Midnight Serenade" which is a dupe for "Black Opium". Would you like me to show you more details?' 
        };
      } else {
        botResponse = { 
          role: 'bot', 
          text: 'Thank you for your message. How else can I assist you with your perfume selection today?' 
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  
  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-accent text-primary rounded-full p-4 shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <FiMessageSquare className="w-6 h-6" />
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between bg-primary text-secondary p-4 rounded-t-lg">
              <h3 className="font-playfair text-lg">ScentSutra Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary hover:text-accent transition"
                aria-label="Close chat"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    message.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-accent text-primary'
                        : 'bg-gray-200 text-primary'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="input-field"
                  aria-label="Type your message"
                />
                <button
                  type="submit"
                  className="ml-2 p-2 bg-accent text-primary rounded-full"
                  aria-label="Send message"
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}