import  { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

 import UserBox from '../components/UserBox'
 const people = [
  {
    id: 211,
    time : "14:23",
    name: "علی شجاع",
    data: "1402/10/12",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
    
  },
  {
    id: 209,
    time : "14:23",
    name: " هانیه جعفری",
    data: "1402/10/12",
    currency :"تتر",
    type : "فروش",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"در صف"
    
  },
  {
    id: 212,
    time : "14:23",
    name: "سحر حسینی",
    data: "1402/10/12",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
    
  },
  {
    id: 213,
    time : "14:23",
    name: "فاطمه جعفری",
    data: "1402/10/18",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
    
  },
  {
    id: 214,
    time : "14:23",
    name: "محمد رسولی",
    data: "1402/10/12",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
    
  },
  {
    id: 215,
    time : "14:23",
    name: "امیر حسینی",
    data: "1402/10/22",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
    
  },
  {
    id: 612,
    time : "14:23",
    name: "نیما شاهرخی",
    data: "1402/10/11",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
   
  },
  {
    id: 347,
    time : "14:23",
    name: "نگار جواهریان",
    data: "1402/10/10",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
    
  },
  {
    id: 348,
    time : "14:23",
    name: "مبینا احمدی",
    data: "1402/10/02",
    currency :"تتر",
    type : "خرید",
    price : 100000,
    code : 12094,
    Wage :10000,
    status :"انجام شده"
    

  },
];

export default function Deposit() {

 

  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="block text-gray-700 text-lg font-bold mb-2 py-4 ">
          صورتحساب
        </h1>

        <CSVLink data={people} className="bg-green-500 px-5 py-2 text-white rounded-lg text-sm cursor-pointer">
            خروجی اکسل
        </CSVLink>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-1 p-1 border border-1 border-gray-400 rounded-lg">
        <div className="w-full md:w-1/2 flex gap-1">
      

          <UserBox  people={people}/>

         
          <select
            name="nameWallet"
            id="nameWallet"
            className="px-3 py-1.5 border border-gray-300 rounded w-1/3"
            
          >
            <option value="کیف پول ریالی POS">pos</option>
            <option value="4">چک</option>
            <option value="5">vip </option>
            <option value="2"> اینترنتی</option>
            <option value="3">حساب </option>
            <option value="6"> کارت</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 flex gap-1">
          <select
            name="transaction"
            id="transaction"
            className="px-3 py-1.5 border border-gray-300 rounded w-1/3"
           
          >
            <option value="1">واریزی</option>
            <option value="-1">برداشت</option>
            <option value="-1">تبدیل</option>
            <option value="0">همه</option>
          </select>
        
          <button
           
            className="px-1 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-1/3"
          >
            جستجو کردن
          </button>
          <button
            
            className="px-1 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-1/3"
          >
            پاک کردن فیلتر
          </button>
          <button
           
           className="px-1 py-2 bg-green-500 text-sm text-white rounded hover:bg-green-600 w-1/3"
         >
            مشاهده موجودی
         </button>
         
        </div>
      </div>
      
      <div className="hidden  mt-8 lg:flow-root">
        
        
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg ">
              <table className="min-w-full  divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-4 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      تاریخ
                    </th>

                    <th
                      scope="col"
                      className="py-4 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      ساعت
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      نام مشتری
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                        نام ارز
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                        نوع تراکنش
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                       مبلغ
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      کد رهگیری
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      کارمزد
                    </th>
                   
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map(person => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                           {person.data}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.time}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.currency}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.type}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {new Intl.NumberFormat('fa-IR').format(person.price)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">

                         {person.code}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {new Intl.NumberFormat('fa-IR').format(person.Wage)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        { person.status }
                      </td>
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>

      <div className="flex flex-wrap gap-3 lg:hidden w-full p-2 border border-1 mt-3 border-gray-400 rounded-lg">
      {people.map(person => (
                    <div key={person.id} className="flex w-full items-center justify-center flex-wrap border bg-gray-800 border-1 border-gray-500 rounded-lg p-3">
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                           <div>
                            تاریخ
                           </div>
                           <div className="text-green-500 mt-2">
                           {person.data}
                           </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                        <div>
                          ساعت
                        </div>
                        <div className="text-green-500 mt-2">
                        {person.time}
                        </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                        <div>
                          نام مشتری
                        </div>
                        <div className="text-green-500 mt-2">
                           {person.name}
                        </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                        <div>
                           نام ارز
                        </div>
                        <div className="text-green-500 mt-2">
                        {person.currency}
                        </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                      <div>
                           نام کیف پول
                        </div>
                        <div className="text-green-500 mt-2">
                      
                        {person.type}
                        </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                      <div>
                            مبلغ
                        </div>
                        <div className="text-green-500 mt-2">
                        {new Intl.NumberFormat('fa-IR').format(person.price)}
                        </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                      <div>
                            کد رهگیری
                        </div>
                        <div className="text-green-500 mt-2">
                         {person.code}
                        </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                      <div>
                            کارمزد
                        </div>
                        <div className="text-green-500 mt-2">
                        {new Intl.NumberFormat('fa-IR').format(person.Wage)}
                        </div>
                      </div>
                      <div className="whitespace-nowrap border border-1 border-gray-100 m-1 shadow-sm shadow-white rounded-lg px-3 py-4 text-sm  text-gray-100  text-center">
                      <div>
                           وضعیت 
                        </div>
                        <div className="text-green-500 mt-2">
                        { person.status }
                        </div>
                      </div>
                    
                    </div>
                  ))}
        </div>

    </div>
  );
}

