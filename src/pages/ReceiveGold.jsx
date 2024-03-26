import React, { useState , useEffect } from "react";
import { IoBagOutline } from "react-icons/io5";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const products = [
  {
    id: 1,
    gram: 1,
    Weight: "متغیر",
    price: 1000000,
    cutie: 750,
    name: "طلای آب شده(بدون اجرت)",
    image: "/img/gold1.webp",
  },
  {
    id: 2,
    gram: 1,
    Weight: 1,
    price: 1200000,
    cutie: 750,
    name: "سکه یک گرمی",
    image: "/img/gold2.webp",
  },
  {
    id: 3,
    gram: 1,
    Weight: 1.5,
    price: 10000000,
    cutie: 750,
    name: "سکه یک نیم گرمی",
    image: "/img/gold3.webp",
  },
  {
    id: 4,
    gram: 1,
    Weight: 0.8,
    price: 8000000,
    cutie: 750,
    name: "سکه 800 سوتی",
    image: "/img/gold4.webp",
  },
  {
    id: 5,
    gram: 1,
    Weight: 0.5,
    price: 5000000,
    cutie: 750,
    name: "سکه 500 سوتی",
    image: "/img/gold5.webp",
  },
  {
    id: 6,
    gram: 1,
    Weight: 0.3,
    price: 3000000,
    cutie: 750,
    name: "سکه 300 سوتی",
    image: "/img/gold6.webp",
  },
  {
    id: 7,
    gram: 1,
    Weight: 0.025,
    price: 2000000,
    cutie: 750,
    name: "سکه 250 سوتی",
    image: "/img/gold7.webp",
  },
  {
    id: 8,
    gram: 1,
    Weight: 0.03,
    price: 1500000,
    cutie: 750,
    name: "سکه 100 سوتی",
    image: "/img/gold8.webp",
  },
  {
    id: 9,
    gram: 1,
    Weight: 0.07,
    price: 100000,
    cutie: 750,
    name: "سکه 70 سوتی",
    image: "/img/gold9.webp",
  },
  {
    id: 10,
    gram: 1,
    Weight: 250,
    price: 10000000,
    cutie: 750,
    name: "ربع سکه ",
    image: "/img/gold10.webp",
  },
  {
    id: 11,
    gram: 1,
    Weight: 100,
    price: 30000000,
    cutie: 750,
    name: "سکه تمام",
    image: "/img/gold11.webp",
  },
  {
    id: 12,
    gram: 1,
    Weight: 500,
    price: 19000000,
    cutie: 750,
    name: "نیم سکه ",
    image: "/img/gold12.webp",
  },
];

export default function ReceiveGold() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyProduct = () => {
  
    const productData = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      weight: selectedProduct.Weight,
      cutie: selectedProduct.cutie
    };

    
    axios.post('https://jsonplaceholder.typicode.com/posts', productData)
      .then(response => {
        console.log('پاسخ دریافت شده:', response.data);
        
      })
      .catch(error => {
        console.error('خطا در ارسال اطلاعات:', error);
        
      });
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
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
      <div className="border-r-8 border-yellow-400 bg-yellow-100 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <div className="mr-3">
            <p className="text-sm text-yellow-700">
              تحویل طلا به صورت حضوری و در شعبه اداری پارس زرگر صورت می‌گیرد. به
              علت محدودیت‌های ارسال پستی طلا و جواهر، امکان ارسال به صورت پستی
              یا پیک میسر نمی‌باشد.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-64 h-64 bg-gray-500 rounded-lg shadow-lg shadow-slate-600 overflow-hidden m-4"
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="flex text-sm items-center justify-between py-1 px-2 h-[65px]">
              <span className="text-color3 text-xl">{product.name}</span>
              <span
                onClick={() => handleOpenModal(product)}
                className="border-2 border-color2 text-xl py-1 px-4 text-color2 rounded-lg cursor-pointer"
              >
                <IoBagOutline />
              </span>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white w-[350px] p-4 rounded-lg">
           <div className="text-end">
           <button className="text-xl cursor-pointer"  onClick={handleCloseModal}><AiOutlineClose /></button>
           </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-color1"><span className="text-color2">{selectedProduct.name}</span></h2>
            <p className="text-lg mb-2 text-color1">قیمت:  <span className="text-color2">
            {new Intl.NumberFormat('fa-IR').format(selectedProduct.price)}
              </span>  تومان</p>
            <p className="text-lg mb-2 text-color1">وزن: <span className="text-color2">{selectedProduct.Weight}</span> گرم</p>
            <p className="text-sm mb-2 text-color1">عیار: <span className="text-color2">{selectedProduct.cutie}</span> </p>
          
           <div className="text-end">
           <button
              className="bg-color2 text-white py-2 px-4 rounded-lg"
              onClick={handleBuyProduct}
            >
              خرید
            </button>
           </div>
          </div>
        </div>
      )}
    </div>
  );
}
