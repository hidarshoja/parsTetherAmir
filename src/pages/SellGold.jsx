import React, { useState , useEffect } from "react";
import { TbMessages } from "react-icons/tb";
import { LiaPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import axios from "axios";

const people = [
  {
    id: 1,
    name: 1012,
    title: "1402/10/12",
    email: "نحوه خرید طلا چگونه است ...",
    role: "رد شده",
  },
  {
    id: 2,
    name: 1013,
    title: "1402/10/12",
    email: "نحوه فروش طلا چگونه است ...",
    role: "در انتظار",
  },
  {
    id: 3,
    name: 1014,
    title: "1402/10/18",
    email: "نحوه ثبت نام  چگونه است ...",
    role: "تایید شده",
  },
  {
    id: 4,
    name: 1015,
    title: "1402/10/12",
    email: "نحوه دریافت طلا چگونه است ...",
    role: "در انتظار",
  },
  {
    id: 5,
    name: 1016,
    title: "1402/10/22",
    email: "نحوه پرداخت طلا چگونه است ...",
    role: "رد شده",
  },
  {
    id: 6,
    name: 1017,
    title: "1402/10/11",
    email: "نحوه مشاهده تیکت  چگونه است ...",
    role: "تایید شده",
  },
  {
    id: 7,
    name: 1018,
    title: "1402/10/10",
    email: "نحوه خروج از سایت طلا چگونه است ...",
    role: "تایید شده",
  },
  {
    id: 8,
    name: 1019,
    title: "1402/10/02",
    email: "نحوه معامله گروهی طلا چگونه است ...",
    role: "رد شده",
  },
];

export default function Ticket() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
              تیکت ها
            </h1>
          </span>
          <p className="mt-2 text-sm text-gray-700">
            تیکت ها و وضعیت تیکت های خود را مشاهده کنید
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="flex items-center rounded-md bg-yellow-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <LiaPlusSolid className="text-xl" />
            <span className="mr-2" onClick={() => handleShowModal()}>
              تیکت جدید{" "}
            </span>
          </button>
        </div>
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
                      شماره تیکت
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-start text-sm font-semibold text-gray-900"
                    >
                      تاریخ
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-start text-sm font-semibold text-gray-900"
                    >
                      موضوع
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
                      #
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-start font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                          style={{
                            padding: "0.2rem",
                            borderRadius: "0.5rem",
                            backgroundColor:
                              person.role === "رد شده"
                                ? "#EF4444"
                                : person.role === "در انتظار"
                                ? "#FBBF24"
                                : person.role === "تایید شده"
                                ? "#10B981"
                                : "#6B7280",
                            color: "#fff",
                          }}
                        >
                          {person.role}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Link to="/ticket/chat">
                          <span className="bg-color1 text-color3 px-2 py-1 rounded-lg cursor-pointer">
                            مشاهده
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showModal && (
                <div
                  className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="relative w-[90%] md:w-[40%] rounded-xl py-5 px-10 min-h-[420px] bg-gray-500 shadow-lg shadow-slate-600">
                    <p>
                      {
                        <span
                          className="absolute top-3 left-3 text-2xl cursor-pointer"
                          onClick={handleCloseModal}
                        >
                          &times;
                        </span>
                      }
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <h2 className="text-center p-2 text-xl font-semibold text-color2">
                        تیکت جدید
                      </h2>
                    </div>
                    <div>
                      <p className="text-right py-3 text-sm text-color1">
                        عنوان تیکت
                      </p>
                      <input
                        type="text"
                        placeholder="عنوان تیکت را وارد نمایید ."
                        className="px-3 py-2 rounded-lg text-sm w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="mt-3">
                      <p className="text-right py-3 text-sm text-color1">
                        متن تیکت
                      </p>
                      <textarea
                        placeholder="متن تیکت را وارد نمایید ."
                        className="px-3 py-2 rounded-lg text-sm w-full resize-none text-right"
                        style={{ direction: "rtl" ,  height: "140px"  }}
                        value={content}
                       onChange={(e) => setContent(e.target.value)}
                      />
                    </div>

                    <div className="absolute bottom-3 left-10">
                      <span 
                      onClick={handleFormSubmit}
                      className="block text-sm py-1 px-8 bg-color1 text-color3 rounded-xl cursor-pointer">
                        ارسال
                      </span>
                    </div>
                  </div>
                </div>
                // </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
