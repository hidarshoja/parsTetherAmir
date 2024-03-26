import React, { useState, useEffect } from "react";
import { MdVerifiedUser } from "react-icons/md";
import ChartComponent from "../components/ChartComponent";
import axios from "axios";
import BoxDashbord from "../components/boxDashboard";

export default function Dashboard() {
  let cryptoWallets = [
    {
      id: 1,
      title: "آبان",
      price: 1800000,
      price2: 1200000,
      balance: 300,
    },
    {
      id: 2,
      title: "تبدیل",
      price: 1100000,
      price2: 1900000,
      balance: 800,
    },
    {
      id: 3,
      title: "با سلام",
      price: 1100000,
      price2: 9000000,
      balance: 400,
    },
    {
      id: 4,
      title: " نوبیتکس",
      price: 1100000,
      price2: 1700000,
      balance: 700,
    },
  ];
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <div>
        <div className="w-full  bg-gray-700 py-3 px-3 text-yellow-200 flex items-center justify-between gap-3">
          <span className="text-color3 flex items-center justify-center gap-2">
            <span>
              <MdVerifiedUser size={24} />
            </span>
            <span className="text-sm">
              برای واریز، خرید رمز‌ارز و استفاده از سایر خدمات بیت لند باید
              فرایند احراز هویت را انجام دهید.
            </span>
          </span>
          <span className="px-3 py-1 rounded-lg border-2 text-color3 hover:bg-color2 border-color2 block text-sm cursor-pointer">
            احراز هویت کمتر از 5 دقیقه
          </span>
        </div>

        <div className="flex items-center justify-center  mt-10 flex-wrap gap-3">
          {cryptoWallets.map((item) => (
            <BoxDashbord
              key={item.id}
              title={item.title}
              price={item.price}
              id={item.id}
              price2={item.price2}
              balance={item.balance}
            />
          ))}
        </div>
        <div>
          <div className="flex items-center justify-center mt-10 px-3">
            <div className="w-full flex flex-col shadow-xl  justify-between p-4 md:w-[450px] h-[250px] rounded-lg bg-gray-700">
              <div className="flex items-center justify-between">
                <p className="text-green-500 text-center text-lg w-full">سود</p>
              </div>
              <div className=" flex flex-col gap-2">
                <p className="flex items-center justify-between gap-2">
                  <span className="text-color3"> مانده :</span>
                  <span className="text-green-500">
                    {new Intl.NumberFormat("fa-IR").format(10000)}
                    <span className="text-color3 px-2">ریال</span>
                  </span>
                </p>
                <p className="flex items-center justify-between gap-2">
                  <span className="text-color3">میزان کل خرید :</span>
                  <span className="text-green-500">
                    {new Intl.NumberFormat("fa-IR").format(10000)}
                    <span className="text-color3 px-2">ریال</span>
                  </span>
                </p>
                <p className="flex items-center justify-between gap-2">
                  <span className="text-color3"> میزان کل فروش :</span>
                  <span className="text-green-500">
                    {new Intl.NumberFormat("fa-IR").format(300000)}
                    <span className="text-color3 px-2">ریال</span>
                  </span>
                </p>
                <p className="flex items-center justify-between gap-2">
                  <span className="text-color3"> میزان  سود :</span>
                  <span className="text-green-500">
                    {new Intl.NumberFormat("fa-IR").format(300000)}
                    <span className="text-color3 px-2">ریال</span>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-green-950 text-sm mt-2 flex flex-col items-center justify-between w-full h-auto p-2 bg-green-300 rounded-lg cursor-pointer">جزییات</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <ChartComponent />
      </div>
    </div>
  );
}
