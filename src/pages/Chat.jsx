import React, { useState , useEffect } from "react";
import axios from "axios";

export default function Chat() {

  const [message, setMessage] = useState('');

  const handleMessageSend = () => {
    // ارسال داده به آدرس مورد نظر با استفاده از Axios
    axios.post('https://jsonplaceholder.typicode.com/posts', { message })
      .then(response => {
        console.log('پاسخ دریافت شده:', response.data);
      })
      .catch(error => {
        console.error('خطا در ارسال پیام:', error);
        
      });
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => {
        const data = response.data;
        console.log(data);
        // data = people
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen bg-gray-200 rounded-lg w-full md:w-[60%] mx-auto">
        <h1 className="p-6 text-xl font-semibold text-color1">
            گفتگوی دو نفره
        </h1>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 items-start">
              <div className="flex items-center gap-2">
                <img
                  src="/img/photo1.avif"
                  alt="user"
                  width="40px"
                  className="rounded-full"
                />
                <span className="bg-blue-500 text-white rounded-l-lg rounded-br-lg px-4 py-2 max-w-sm ">
                  سلام، چطوری؟
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/img/photo1.avif"
                  alt="user"
                  width="40px"
                  className="rounded-full"
                />
                <span className="bg-blue-500 text-white rounded-l-lg rounded-br-lg px-4 py-2 max-w-sm ">
                  چطور می‌تونم به شما کمک کنم؟
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <div className="flex items-center gap-2">
                <span className="bg-gray-300  px-4 rounded-r-lg rounded-bl-lg py-2  max-w-sm self-end">
                  سلام، خوبم، مرسی. شما؟
                </span>
                <img
                  src="/img/download.jpg"
                  alt="user"
                  width="40px"
                  className="rounded-full"
                />
              </div>
              <div className="flex items-center gap-2">
              <span className="bg-gray-300  px-4 rounded-r-lg rounded-bl-lg py-2  max-w-sm self-end">
                من به دنبال راهنمایی در مورد یک پروژه هستم.
              </span>
                <img
                  src="/img/download.jpg"
                  alt="user"
                  width="40px"
                  className="rounded-full"
                />
              </div>
             
            </div>
            <div className=" p-4">
              <input
                type="text"
                placeholder="پیام خود را ارسال کنید"
                className="w-full rounded-lg border-gray-300 border p-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}        
              />
              <div className="flex items-end w-full justify-end">
                <button
                onClick={handleMessageSend}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2 rounded-lg mt-2">
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
