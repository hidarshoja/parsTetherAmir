import React, { useState } from 'react';
import axios from 'axios';

import { CiUser } from "react-icons/ci";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personalInfo");
 
  const [formData, setFormData] = useState({
    firstName: '',
    nationalCode: '',
    Mobile: '',
    Phone: '',
    email: '',
    State: '',
    City: '',
    postal: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
  
    const postData = {
      formData,
      bankInfo: {
        bankName: e.target.elements['bank-name'].value,
        accountNumber: e.target.elements['account-number'].value,
        numberCard: e.target.elements['number-card'].value,
        shabaNumber: e.target.elements['Shaba-number'].value
      }
    };
  
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(response => {
        console.log('پاسخ دریافت شده:', response.data);
      })
      .catch(error => {
        console.error('خطا در ارسال اطلاعات:', error);
      });
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('userData', JSON.stringify(formData));
  
    // اضافه کردن تصاویر به FormData
    Object.values(selectedFiles).forEach(file => {
      if (file) {
        formDataToSend.append('images', file);
      }
    });
  
    axios.post('https://jsonplaceholder.typicode.com/posts', formDataToSend)
      .then(response => {
        console.log('پاسخ دریافت شده:', response.data);
      })
      .catch(error => {
        console.error('خطا در ارسال اطلاعات:', error);
      });
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then(response => {
        console.log('پاسخ دریافت شده:', response.data);
       
      })
      .catch(error => {
        console.error('خطا در ارسال اطلاعات:', error);
      
      });
  };

  const [selectedFiles, setSelectedFiles] = useState({
    nationalCardFront: null,
    personalPhoto: null,
    nationalCardBack: null,
    identityVerification: null,
  });

  const handleFileChange = (event, fileType) => {
    setSelectedFiles({
      ...selectedFiles,
      [fileType]: event.target.files[0],
    });
  };

  const fileTypes = [
    {
      key: "nationalCardFront",
      label: "تصویر کارت ملی (رو کارت * اجباری)",
      description: "حجم عکس حداکثر 3 مگابایت بیشتر نباشد.",
      btn :"تصویر کارت ملی"
    },
    {
      key: "personalPhoto",
      label: "عکس شخصی (اختیاری)",
      description: "حجم عکس حداکثر 3 مگابایت بیشتر نباشد.",
      btn : "عکس شخصی"
    },
    {
      key: "nationalCardBack",
      label: "تصویر کارت ملی (پشت کارت * اجباری)",
      description: "حجم عکس حداکثر 3 مگابایت بیشتر نباشد.",
      btn : "پشت کارت ملی"
    },
    {
      key: "identityVerification",
      label: "احراز هویت (اجباری)",
      description: "حجم عکس حداکثر 3 مگابایت بیشتر نباشد.",
      btn : "احراز هویت"
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center border-2 rounded-lg p-4">
        <div className="sm:flex-auto">
          <span className="flex gap-2 items-center">
            <CiUser className="text-2xl" />
            <h1 className="text-base font-semibold leading-6 text-gray-800">
              {" "}
              پرفایل کاربری
            </h1>
          </span>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none">
          <CiUser className="text-2xl" />
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <div className="bg-white p-3">
                <nav className="-mb-px flex gap-2" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab("personalInfo")}
                    className={`${
                      activeTab === "personalInfo"
                        ? "border-yellow-500 text-yellow-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    مشخصات حقیقی
                  </button>
                  <button
                    onClick={() => setActiveTab("bankInfo")}
                    className={`${
                      activeTab === "bankInfo"
                        ? "border-yellow-500 text-yellow-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    مشخصات بانکی
                  </button>
                  <button
                    onClick={() => setActiveTab("identityDocs")}
                    className={`${
                      activeTab === "identityDocs"
                        ? "border-yellow-500 text-yellow-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    مدارک هویتی
                  </button>
                </nav>
              </div>
              <div className="px-4 py-5 sm:px-6">
                <div
                  className={`${
                    activeTab !== "personalInfo" ? "hidden" : "block"
                  }`}
                >
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row w-full gap-3">
                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          نام و نام خانوادگی *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                           name="firstName"
                            id="first-name"
                            onChange={handleChange}
                            value={formData.firstName}
                            
                            className="block pr-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="nationalCode"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          کدملی *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="nationalCode"
                            id="nationalCode"
                            onChange={handleChange}
                            value={formData.nationalCode}
                            dir='ltr'
                            className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="Mobile"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          شماره موبایل *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="Mobile"
                            id="Mobile"
                            onChange={handleChange}
                            value={formData.Mobile}
                            dir='ltr'
                            className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full gap-3 mt-5">
                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="Phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          تلفن
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="Phone"
                            id="Phone"
                            onChange={handleChange}
                            value={formData.Phone}
                            dir='ltr'
                            className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ایمیل *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            value={formData.email}
                            dir='ltr'
                            className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="State"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          استان *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="State"
                            id="State"
                            onChange={handleChange}
                            value={formData.State}
                            
                            className="block pr-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full gap-3 mt-5">
                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="City"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          شهر *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="City"
                            id="City"
                            onChange={handleChange}
                            value={formData.City}
                            
                            className="block pr-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="postal"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          کدپستی *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="postal"
                            id="postal"
                            onChange={handleChange}
                            value={formData.postal}
                            dir='ltr'
                            className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          آدرس *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            onChange={handleChange}
                            value={formData.address}
                            
                            className="block pr-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        ذخیره اطلاعات
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className={`${activeTab !== "bankInfo" ? "hidden" : "block"}`}
                >
                  <form onSubmit={handleSubmit2}>
                    <div className="flex flex-col lg:flex-row w-full gap-3">
                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="bank-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          نام بانک *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="bank-name"
                            id="bank-name"
                            
                            
                            className="block pr-2 w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="account-number"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          شماره حساب *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="account-number"
                            id="account-number"
                            dir='ltr'
                          
                            className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full gap-3 mt-5">
                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="number-card"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          شماره کارت
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="number-card"
                            id="number-card"
                            dir='ltr'
                           
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <label
                          htmlFor="Shaba-number"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          شماره شبا *
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="Shaba-number"
                            id="Shaba-number"
                            dir='ltr'
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        ذخیره اطلاعات
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className={`${
                    activeTab !== "identityDocs" ? "hidden" : "block"
                  }`}
                >
                  <form onSubmit={handleSubmit3}>

                  <div className="flex flex-wrap gap-3 items-center justify-center">
                    <div className="flex items-center justify-center gap-3 flex-wrap ">
                      {fileTypes.map((fileType) => (
                        <div
                          key={fileType.key}
                          className="border-dashed border-2 border-gray-600 p-3 rounded-lg min-h-72 flex items-center justify-between flex-col gap-3"
                        >
                          {selectedFiles[fileType.key] ? (
                            <img
                              src={URL.createObjectURL(
                                selectedFiles[fileType.key]
                              )}
                              alt={`عکس ${fileType.label}`}
                              className="mx-auto h-48 w-48"
                            />
                          ) : (
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                vectorEffect="non-scaling-stroke"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                              />
                            </svg>
                          )}
                          <h3 className="mt-2 text-sm font-semibold text-gray-900">
                            {fileType.label}
                          </h3>
                          <p className="mt-1 text-[12px] text-gray-500">
                            {fileType.description}
                          </p>
                          <div>
                            <input
                              id={`${fileType.key}-input`}
                              type="file"
                              style={{ display: "none" }}
                              onChange={(event) =>
                                handleFileChange(event, fileType.key)
                              }
                            />
                            <button
                              className="bg-color1 text-sm text-color3 py-1 px-2 rounded-lg"
                              onClick={() =>
                                document
                                  .getElementById(`${fileType.key}-input`)
                                  .click()
                              }
                            >
                              دانلود {fileType.btn}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        ذخیره اطلاعات
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
