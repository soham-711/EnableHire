import React, { useState } from 'react';
import { FaVideo, FaMicrophone, FaPaperclip } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { ReactMediaRecorder } from 'react-media-recorder';

const SignLanguageChat = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [voiceMessage, setVoiceMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
console.log(isRecording);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setVideoFile(file);
  };

  const handleSendMessage = () => {
    if (message || voiceMessage || videoFile) {
      const newMessage = { sender: 'User', message: message || voiceMessage || 'Video sent' };
      setChatHistory([...chatHistory, newMessage]);
      setMessage('');
      setVoiceMessage('');
      setVideoFile(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-purple-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
        
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
          🦾 Sign Language Chat
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Use Sign Language or Voice to chat with our intelligent assistant.
        </p>

        {/* Chat History */}
        <div className="h-80 overflow-y-scroll bg-gray-100 rounded-xl p-4 mb-8">
          {chatHistory.length === 0 ? (
            <p className="text-center text-gray-400">Start a conversation...</p>
          ) : (
            chatHistory.map((chat, index) => (
              <div key={index} className={`mb-4 ${chat.sender === 'User' ? 'text-right' : 'text-left'}`}>
                <div className="text-sm font-medium text-gray-600">{chat.sender}</div>
                <div className={`p-3 rounded-xl inline-block max-w-xs mt-1 ${chat.sender === 'User' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  {chat.message}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Section */}
        <div className="flex items-center space-x-4">
          {/* Video Upload */}
          <label htmlFor="signLangVideo" className="cursor-pointer p-3 bg-purple-100 hover:bg-purple-200 rounded-xl shadow-md text-purple-600">
            <FaVideo className="text-xl" />
          </label>
          <input
            type="file"
            id="signLangVideo"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          
          {/* Message Input */}
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message || voiceMessage} // Show voice message if available
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Microphone Button for Voice Input */}
          <ReactMediaRecorder
            audio
            onStop={(blobUrl, blob) => {
              // Transcribe and update the message with the recorded audio
              const reader = new FileReader();
              reader.onloadend = () => {
                setVoiceMessage(reader.result);
              };
              reader.readAsDataURL(blob);
            }}
            render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    if (status === 'stopped') {
                      setIsRecording(true);
                      startRecording();
                    } else {
                      setIsRecording(false);
                      stopRecording();
                    }
                  }}
                  className={`p-3 rounded-xl ${status === 'stopped' ? 'bg-green-600' : 'bg-red-500'} text-white`}
                >
                  <FaMicrophone className="text-xl" />
                </button>
                {mediaBlobUrl && (
                  <audio src={mediaBlobUrl} controls className="ml-4" />
                )}
              </div>
            )}
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            className="p-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700"
          >
            <IoSend className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageChat;
