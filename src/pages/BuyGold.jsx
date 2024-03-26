import React, { useState, useEffect } from 'react';
import { BsBagPlus } from "react-icons/bs";
import { FaSellcast } from "react-icons/fa6";
import axios from 'axios';

export default function BuyGold() {
  const [selectedTab, setSelectedTab] = useState('buy'); 
  const [priceGold , setPriceGold] = useState(27962298);
  const [priceInput, setPriceInput] = useState('');
  const [gramInput, setGramInput] = useState('');
  const [gramSellInput, setGramSellInput] = useState('');
  const [priceSellInput, setPriceSellInput] = useState('');
  const [walletBalance, setWalletBalance] = useState(0);
  const [goldBalance, setGoldBalance] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => {
        const data = response.data;
        console.log(data);
        // setPriceGold(data.priceGold);
        // setWalletBalance(data.walletBalance);
        // setGoldBalance(data.goldBalance);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (gramSellInput !== '') {
      const price = parseFloat(gramSellInput);
      const gramValue = price * priceGold;
      setPriceSellInput(gramValue); 
    }
  }, [gramSellInput, priceGold]);

  useEffect(() => {
    if (priceInput !== '') {
      const price = parseFloat(priceInput);
      const gramValue = price / priceGold;
      setGramInput(gramValue); 
    }
  }, [priceInput, priceGold]);

  const handlePriceInputChange = (event) => {
    setPriceInput(event.target.value);
  };

  const handlePriceSellInputChange = (e) => {
    setGramSellInput(e.target.value);
  }

  const handleBuyButtonClick = () => {
    const postData = {
      priceInput,
      gramInput,
      walletBalance,
      goldBalance
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(response => {
        console.log('Post successful:', response.data);
        console.log(postData);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  const handleSellButtonClick = () => {
    const postData = {
      gramSellInput,
      priceSellInput,
      walletBalance,
      goldBalance
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(response => {
        console.log('Post successful:', response.data);
        console.log(postData);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };
  return (
    <div>
      <div className='w-[100%] md:w-[80%] lg:w-[60%] mx-auto mt-10 h-auto py-8 bg-color1 rounded-lg px-4 text-sm'>
        <div className='flex items-center justify-center gap-3'>
          <div
            className={`w-1/2 rounded-t-lg  border-b-4 border-green-500 text-center py-2 text-color3 cursor-pointer ${
              selectedTab === 'buy' ? 'font-semibold , bg-green-500' : ''
            }`}
            onClick={() => setSelectedTab('buy')}
          >
            خرید طلا
          </div>
          <div
            className={`w-1/2 rounded-t-lg  border-b-4 border-red-500 text-center py-2 text-color3 cursor-pointer ${
              selectedTab === 'sell' ? 'font-semibold , bg-red-500' : ''
            }`}
            onClick={() => setSelectedTab('sell')}
          >
            فروش طلا
          </div>
        </div>
        <div>
          {selectedTab === 'buy' && (
            <div>
              <div className='flex items-center justify-between text-color3 py-4'>
                <p className='flex gap-2 items-center'>
                  <span className='hidden md:block'>
                  <BsBagPlus />
                  </span>
                  <span>
                    خرید طلا
                  </span>
                </p>
                <p className='flex gap-2 items-center'>
                 <span className='hidden md:block'>
                  قیمت خرید :
                 </span>
                 <span className='text-green-500'>
                 {new Intl.NumberFormat('fa-IR').format(priceGold)}
                 </span>
                 <span>
                  تومان 
                 </span>

                </p>
              </div>
              <p className='text-color3 mt-6'>مبلغ را وارد کنید </p>
              <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">تومان</span>
            </div>
            <input
              type="text"
              dir="ltr"
              name="price"
              id="price"
              value={priceInput}
              onChange={handlePriceInputChange}
              className="block w-full rounded-md border-0 py-1.5 pl-16  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="000"
              aria-describedby="price-currency"
            />
            
               </div>
               <p className='text-color3 mt-6'>مقدار طلا را وارد کنید </p>
              <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">گرم</span>
            </div>
            <input
              type="text"
              dir="ltr"
              name="gram"
              id="gram"
              value={gramInput}
              readOnly
              className="block w-full rounded-md border-0 py-1.5 pl-16  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="000"
              aria-describedby="price-currency"
            />
            
               </div>
               <div className='mt-5'>
                 <p className='text-color3'>
                   <span>موجودی کیف طلا :</span>
                   <span className='px-2'>
                   {new Intl.NumberFormat('fa-IR').format(goldBalance)}
                   </span>
                   <span>گرم</span>
                 </p>
                </div>
               <div className='mt-5'>
                <p className='text-color3'>
                  <span>موجودی کیف پول :</span>
                  <span className='px-2'>
                  {new Intl.NumberFormat('fa-IR').format(walletBalance)}
                  </span>
                  <span>تومان</span>
                </p>
               </div>
               <div className='w-full mt-6'>
                <button
                onClick={handleBuyButtonClick}
                className='w-full py-3 text-color3 bg-green-500 rounded-lg'>خرید </button>
               </div>
            </div>
          )}
          {selectedTab === 'sell' && (
               <div>
               <div className='flex items-center justify-between text-color3 py-4'>
                 <p className='flex gap-2 items-center'>
                   <span className='hidden md:block'>
                   <FaSellcast />
                   </span>
                   <span>
                     فروش طلا
                   </span>
                 </p>
                 <p className='flex gap-2 items-center'>
                  <span className='hidden md:block'>
                   قیمت فروش :
                  </span>
                  <span className='text-green-500'>
                  {new Intl.NumberFormat('fa-IR').format(priceGold)}
                  </span>
                  <span>
                   تومان 
                  </span>
 
                 </p>
               </div>
               <p className='text-color3 mt-6'>مقدار را وارد کنید </p>
               <div className="relative mt-2 rounded-md shadow-sm">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
               <span className="text-gray-500 sm:text-sm">گرم</span>
             </div>
             <input
               type="text"
               dir="ltr"
               name="garmSell"
               id="garmSell"
               value={gramSellInput}
               onChange={handlePriceSellInputChange}
               className="block w-full rounded-md border-0 py-1.5 pl-16  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               placeholder="000"
               aria-describedby="price-currency"
             />
             
                </div>
                <p className='text-color3 mt-6'>مبلغ  را وارد کنید </p>
               <div className="relative mt-2 rounded-md shadow-sm">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
               <span className="text-gray-500 sm:text-sm">تومان</span>
             </div>
             <input
               type="text"
               dir="ltr"
               name="priceSell"
               id="priceSell"
               value={priceSellInput}
               readOnly
               className="block w-full rounded-md border-0 py-1.5 pl-16  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               placeholder="000"
               aria-describedby="price-currency"
             />
             
                </div>
                <div className='mt-5'>
                 <p className='text-color3'>
                   <span>موجودی کیف پول :</span>
                   <span className='px-2'>
                   {new Intl.NumberFormat('fa-IR').format(0)}
                   </span>
                   <span>تومان</span>
                 </p>
                </div>
                <div className='mt-5'>
                 <p className='text-color3'>
                   <span>موجودی کیف طلا :</span>
                   <span className='px-2'>
                   {new Intl.NumberFormat('fa-IR').format(0)}
                   </span>
                   <span>گرم</span>
                 </p>
                </div>
                <div className='w-full mt-6'>
                 <button 
                 onClick={handleSellButtonClick}
                 className='w-full py-3 text-color3 bg-red-500 rounded-lg'>فروش </button>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

