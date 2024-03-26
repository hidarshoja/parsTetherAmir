
import {  Link } from "react-router-dom";


export default function BoxDashboard({id , title, price , price2 , balance }) {

 




  
  return (
    <div className="w-full lg:w-auto px-3 mt-5 lg:mt-0 flex items-center justify-center gap-5 flex-wrap">
        <div
          className="w-full flex flex-col shadow-xl  justify-between p-4 md:w-[450px] h-[250px] rounded-lg bg-gray-700"
        >
          <div className="flex items-center justify-between">
            <p className="text-green-500 text-center text-lg w-full">{title}</p>
      
          </div>
          <div className=" flex flex-col gap-2">
            <p className="flex items-center justify-between gap-2">
              <span className="text-color3">میزان خرید :</span>
              <span className="text-green-500">
                {new Intl.NumberFormat("fa-IR").format(price)}
              <span className="text-color3 px-2">ریال</span>
              </span>
            </p>
            <p className="flex items-center justify-between gap-2">
              <span className="text-color3">میزان فروش :</span>
              <span className="text-green-500">
                {new Intl.NumberFormat("fa-IR").format(price2)}
              <span className="text-color3 px-2">ریال</span>
              </span>
            </p>
            <p className="flex items-center justify-between gap-2">
              <span className="text-color3"> بالانس :</span>
              <span className="text-green-500">
                {new Intl.NumberFormat("fa-IR").format(balance)}
              <span className="text-color3 px-2">ریال</span>
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
       
            <Link to={''} className="flex flex-col items-center justify-between w-full h-auto p-2 bg-green-300 rounded-lg cursor-pointer">
            
              <span className="text-green-950 text-sm mt-2">جزییات</span>
            </Link>
            
          </div>
        </div>
      
    </div>
  );
}
