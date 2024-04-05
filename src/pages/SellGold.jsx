import  { useState , useEffect } from "react";
import { TbMessages } from "react-icons/tb";

import { Link } from "react-router-dom";
import axios from "axios";

const people = [
  {
    id: 211,
    name: "علی شجاع",
    title: "1402/10/12",
    email: "نحوه خرید طلا چگونه است ...",
    role:  "نمایش",
  },
  {
    id: 212,
    name: "سحر حسینی",
    title: "1402/10/12",
    email: "نحوه فروش طلا چگونه است ...",
    role:  "نمایش",
  },
  {
    id: 213,
    name: "فاطمه جعفری",
    title: "1402/10/18",
    email: "نحوه ثبت نام  چگونه است ...",
    role:  "نمایش",
  },
  {
    id: 214,
    name: "محمد رسولی",
    title: "1402/10/12",
    email: "نحوه دریافت طلا چگونه است ...",
    role:  "نمایش",
  },
  {
    id: 215,
    name: "امیر حسینی",
    title: "1402/10/22",
    email: "نحوه پرداخت طلا چگونه است ...",
    role:  "نمایش",
  },
  {
    id: 612,
    name: "نیما شاهرخی",
    title: "1402/10/11",
    email: "نحوه مشاهده تیکت  چگونه است ...",
    role:  "نمایش",
  },
  {
    id: 347,
    name: "نگار جواهریان",
    title: "1402/10/10",
    email: "نحوه خروج از سایت طلا چگونه است ...",
    role:  "نمایش",
  },
  {
    id: 348,
    name: "مینا احمدی",
    title: "1402/10/02",
    email: "نحوه معامله گروهی طلا چگونه است ...",
    role: "نمایش",
  },
];

export default function Ticket() {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');



  const handleFormSubmit = () => {
    const postData = {
      title,
      content
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(response => {
        console.log('Log:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
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
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-2 rounded-lg p-4">
        <div className="sm:flex-auto">
          <span className="flex gap-2 items-center">
            <TbMessages className="text-2xl" />
            <h1 className="text-base font-semibold leading-6 text-gray-800">
               حد اعتباری
            </h1>
          </span>
        
        </div>
        <p className="mt-2 text-sm text-gray-700">
             حد اعتباری و وضعیت کاربران  را مشاهده کنید
          </p>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-start text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                       نام مشتری
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-start text-sm font-semibold text-gray-900"
                    >
                      تاریخ عضویت
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-start text-sm font-semibold text-gray-900"
                    >
                      یوز آیدی
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-start text-sm font-semibold text-gray-900"
                    >
                      حد اعتباری
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-start text-sm font-semibold text-gray-900"
                    >
                      وضعیت
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-start text-sm font-semibold text-gray-900"
                    >
                      ویرایش
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-start font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-100">
                        <span
                          style={{
                            padding: "0.2rem",
                            borderRadius: "0.5rem",
                            backgroundColor: "#10B981",
                          
                          }}
                        >
                          {person.role}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <select name="" id="" className="w-16 rounded-md border border-1 border-gray-400">
                          <option value="1">فعال</option>
                          <option value="2">غیرفعال</option>
                          <option value="3">نمایش</option>
                        </select>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Link to="/harvest">
                          <span className="bg-color1 text-color3 px-2 py-1 rounded-lg cursor-pointer">
                            ویرایش
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
