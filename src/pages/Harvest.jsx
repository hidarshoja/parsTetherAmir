import React, { useState, useEffect } from "react";
import { MdOutlinePriceChange } from "react-icons/md";
import { FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { changeId } from "../features/user/userSlice";

import axios from "axios";

export default function Harvest() {
  const [inputValue, setInputValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [formattedAccountNumber, setFormattedAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [cardInfo, setCardInfo] = useState([]);
  const [state, setState] = useState(false);
  const user_id = useSelector(state => state.user.id)

  const bankNumbers = {
    "6037-99": { name: "بانک ملی ایران", icon: "/img/melei.jpg" },
    "6063-73": { name: "بانک قرض الحسنه مهر", icon: "/img/gharz.png" },
    "6037-70": { name: "بانک کشاورزی", icon: "/img/keshavarzi.jpg" },
    "6037-69": { name: "بانک صادرات", icon: "/img/saderat.png" },
    "6273-53": { name: "بانک تجارت", icon: "/img/tejarat.jpg" },
    "6104-33": { name: "بانک ملت", icon: "/img/melat.png" },
    "5894-63": { name: "بانک رفاه", icon: "/img/refa.png" },
    "6280-23": { name: "بانک مسکن", icon: "/img/maskan.png" },
    "5892-10": { name: "بانک سپه", icon: "/img/sepae.png" },
    "6277-60": { name: "پست بانک", icon: "/img/post.jpg" },
    "5054-16": { name: "باگردشگری", icon: "/img/gardeshgari.jpg" },
    "6274-88": { name: "بانک کارآفرین", icon: "/img/kar.png" },

    "6393-47": { name: "بانک اقتصاد نوین", icon: "/img/kar.png" },
    // دیگر شماره‌ها و نام‌های بانک مورد نظر را اضافه کنید
  };

  useEffect(() => {
    // ارسال اطلاعات به بک‌اند به‌طور خودکار هربار که cardInfo تغییر می‌کند
    if (cardInfo.length > 0) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", cardInfo)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    }
  }, [cardInfo]);

  const checkBankName = (inputValue) => {
    const firstSixDigits = inputValue.substring(0, 7);
    const bank = bankNumbers[firstSixDigits]
      ? bankNumbers[firstSixDigits].name
      : null;

    if (bank) {
      setBankName(bank);
    } else {
      setBankName("");
    }
  };

  const formatCardNumber = (inputValue) => {

    let formatted = inputValue.replace(/\D/g, "");

   
    formatted = formatted.replace(/(\d{4})(?=\d)/g, "$1-");

    return formatted;
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatCardNumber(inputValue);
    setAccountNumber(formattedValue);
    setFormattedAccountNumber(formattedValue);
    if (inputValue.length >= 6) {
      checkBankName(formattedValue);
    } else {
      setBankName("");
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddValue = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleDeposit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        harvest: inputValue,
      })
      .then((response) => {
        alert("شما به درگاه بانک رفته‌اید!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const handleSaveAndSend = () => {
    if (formattedAccountNumber && bankName) {
      const firstSixDigits = formattedAccountNumber.substring(0, 7);

      if (bankNumbers[firstSixDigits]) {
        const newCardInfo = {
          accountNumber: formattedAccountNumber,
          bankName: bankName,
          icon: bankNumbers[firstSixDigits].icon,
        };

        // اضافه کردن مقدار جدید به آرایه cardInfo
        cardInfo.push(newCardInfo);

        axios
          .post("https://jsonplaceholder.typicode.com/posts", cardInfo)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error sending data:", error);
          });
      } else {
        alert("بانک متناظر با شماره کارت یافت نشد.");
      }
    } else {
      alert("لطفاً اطلاعات کامل را وارد کنید.");
    }
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <div className="w-[95%] md:w-[60%] mx-auto">
        <h2 className="text-color2 text-3xl font-semibold">برداشت وجه</h2>
        <div className="w-full min-h-[500px] mt-5 rounded-lg bg-color1 p-6 flex flex-col gap-2   shadow-md shadow-color1">
          <div className="flex items-center justify-between text-color3 text-xl font-serif">
            <h3>مبلغ خود را وارد کنید :</h3>
            <span className="text-3xl">
              <MdOutlinePriceChange />
            </span>
          </div>
          <div>
            <div className="relative mt-5 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">تومان</span>
              </div>
              <input
                type="text"
                dir="ltr"
                name="price"
                id="price"
                value={inputValue}
                readOnly
                className="block w-full rounded-md border-0 py-3 pl-16  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="000"
                aria-describedby="price-currency"
              />
            </div>
            <div>
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => handleAddValue(100000)}
                  className="w-full h-12 bg-gray-900 text-red-600 rounded-lg border-2 border-red-700"
                >
                  + {new Intl.NumberFormat("fa-IR").format(100000)} تومان
                </button>
                <button
                  onClick={() => handleAddValue(500000)}
                  className="w-full h-12 bg-gray-900 text-red-600 rounded-lg border-2 border-red-700"
                >
                  + {new Intl.NumberFormat("fa-IR").format(500000)} تومان
                </button>
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => handleAddValue(1000000)}
                  className="w-full h-12 bg-gray-900 text-red-600 rounded-lg border-2 border-red-700"
                >
                  + {new Intl.NumberFormat("fa-IR").format(1000000)} تومان
                </button>
                <button
                  onClick={() => handleAddValue(5000000)}
                  className="w-full h-12 bg-gray-900 text-red-600 rounded-lg border-2 border-red-700"
                >
                  + {new Intl.NumberFormat("fa-IR").format(5000000)} تومان
                </button>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <p className="flex gap-2 items-center">
                  <span className="text-yellow-500">
                    <FiAlertOctagon />
                  </span>
                  <span className="text-color3">
                    برداشت وجه به غیر روزهای تعطیل فقط بین ساعت های 9 تا 14
                    امکان پذیر است.
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className="text-red-600">
                    <FiAlertTriangle />
                  </span>
                  <span className="text-color3">
                    برداشت باید از حساب خودتان که در سامانه ثبت شده است باشد .
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <span className="text-red-600">
                    <FiAlertTriangle />
                  </span>
                  <span className="text-color3">
                    شماره تماس یا ایمیل خود را در محل برداشت وارد نماید .
                  </span>
                </p>
              </div>
              <div className="w-full h-auto mt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-color3 text-base">کارت های من :</p>
                  </div>

                  <div>
                    <p
                      onClick={handleShowModal}
                      className="flex items-center gap-2 text-color2 cursor-pointer"
                    >
                      <span className="text-sm">افزودن کارت</span>
                      <span>
                        <CiCreditCard1 size={36} />
                      </span>
                    </p>
                  </div>
                </div>
              {/* <p>{user_id}</p> */}
                {state && cardInfo.length > 0 && (
                  <div>
                    {cardInfo.map((item, index) => (
                      <div key={index} className="mt-5">
                        <div className="flex items-center justify-between py-1 px-3 rounded-full bg-white">
                          <div className="flex gap-2 items-center justify-center">
                            <img
                              src={item.icon}
                              alt={item.bankName}
                              width="50px"
                              height="50px"
                              className="rounded-full"
                            />
                            <p className="text-color1">{item.bankName}</p>
                          </div>
                          <div>
                            <p className="text-color1">{item.accountNumber}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                { cardInfo.length === 0 && (
                  <p className="text-red-600 text-center">
                    کارتی در سامانه ثبت نشده است.
                  </p>
                )}
              </div>
              <div className="mt-5">
                <button
                  onClick={handleDeposit}
                  className="w-full h-12  text-color3 rounded-lg bg-red-600 hover:bg-red-800"
                >
                  برداشت وجه
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="relative w-[80%] md:w-[40%]  rounded-xl py-2 px-10 h-80 bg-white shadow-lg shadow-slate-600"
            style={{ minHeight: "500px" }}
          >
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
            <div className="flex items-center justify-between mt-10">
              <h2 className="text-center p-2 text-xl font-semibold text-color2">
                افزودن کارت بانکی
              </h2>
            </div>
            <div className="p-3 bg-slate-900 rounded-3xl mt-5">
              <p className="flex gap-2 items-center">
                <span className="text-yellow-600">
                  <FiAlertTriangle size={20} />
                </span>
                <span className="text-color3">
                  مالکیت کارت باید با نام خودتان باشد !
                </span>
              </p>
            </div>
            <div className="mt-5">
              <label
                htmlFor="account-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                شماره کارت
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  dir="ltr"
                  type="text"
                  name="account-number"
                  id="account-number"
                  className="block w-full rounded-md border-0 py-3 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0000-0000-0000-0000"
                  value={formattedAccountNumber}
                  onChange={handleInputChange}
                  maxLength={19}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <CiCreditCard1
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="bank-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام بانک(اختیاری)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="bank-name"
                  id="bank-name"
                  className="block  w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="نام بانک را وارد کنید "
                  value={bankName}
                  readOnly
                />
              </div>
            </div>
            <div className="mt-14 flex items-center justify-end gap-2">
              <span
                className=" text-sm py-1 px-3 bg-yellow-600 text-color3 rounded-xl cursor-pointer"
                onClick={handleCloseModal}
              >
                انصراف
              </span>
              <span
                onClick={handleSaveAndSend}
                className="text-sm py-1 px-3 bg-green-600 text-color3 rounded-xl cursor-pointer"
              >
                ذخیره و ارسال
              </span>
            </div>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
}
