import { useState } from "react";
// import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import TabsComponent from "../components/TabsComponent";
// import Select from 'react-select';
import { useNavigate, useLocation } from "react-router-dom";
// import axiosClient from "../axios-client";
// import { errorMessage, successMessage } from "../utils/Toastiy";
// import { ToastContainer } from "react-toastify";

const tabs = ["آبان", "تبدیل", "باسلام", "نوتتیبکس"];

export default function Customer() {
  const [inputValuePrice, setInputValuePrice] = useState("");
  const [inputValuePrice2, setInputValuePrice2] = useState("");
  const [value2, setValue2] = useState(null);
  const [formAssets, setFormAssets] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const person = location.state;
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const handleChangeAban = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeAban2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const changeTab = (tabName) => {
    setCurrentTab(tabName);
  };

  function formatNumber(input) {
    const number = input.replace(/\D/g, "");
    const formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber;
  }

  function handleChange(event) {
    setInputValuePrice(formatNumber(event.target.value));
  }

  function handleChange2(event) {
    setInputValuePrice2(formatNumber(event.target.value));
  }
  const [checkboxes, setCheckboxes] = useState({
    ریال: false,
    تتر: false,
    BTC: false,
    ETH: false,
    SOL: false,
    DAI: false,
    GOLD: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxes({
      ...checkboxes,
      [name]: !checkboxes[name],
    });
  };
  console.log("trueKeys", formAssets);

  const handleClick = async () => {
    let role = [];
    selectedOption.map((r) => {
      role.push(r.value);
    });

    try {
      const formData = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastName").value,
        customer_name: document.getElementById("customer").value,
        password: document.getElementById("password").value,
        status: 100,
        mobile: document.getElementById("Mobile").value,
        national_code: document.getElementById("code").value,
        terminal_id: document.getElementById("terminalID").value,
        email: "",
        birth_date: changeFormatDate(value2.toDate()), // مقدار DatePicker برای تاریخ تولد
        pos_bank: document.getElementsByName("payment_method")[0].value, // مقدار select برای نام بانک
        register_date: reverseDate(), // مقدار DatePicker برای تاریخ عضویت
        assets: formAssets,
        roles: role, // مقادیر چک باکس‌ها
      };
      console.log(formData);

      const response = await axiosClient.post("/admin/users", formData);

      console.log("Response:", response.data);
      successMessage("عملیات با موفقیت انجام شد");
      setTimeout(() => {
        navigate("/registerUsers");
      }, 3100);
      navigate("/registerUsers");
    } catch (error) {
      console.error("Error:", error);
      errorMessage(error.response.data.message);
    }
  };
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <div>
      <div className="w-[95%] md:w-[80%] mx-auto">
        <div className="bg-gray-800 shadow-2xl rounded mt-10 px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-100 text-lg font-bold mb-2 py-4 ">
            تعریف مشتری{" "}
          </h2>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="name"
              >
                نام
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="نام خود را وارد کنید"
                value={person?.name}
              />
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                نام خانوادگی
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="نام خانوادگی خود را وارد کنید"
                value={person?.lastName}
              />
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="Mobile"
              >
                شماره موبایل
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Mobile"
                type="text"
                placeholder="شماره تماس خود را وارد کنید"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="code"
              >
                کدملی
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                type="text"
                placeholder="کد ملی کاربر"
              />
            </div>

            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="password"
              >
                کلمه عبور
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="کلمه عبور"
              />
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-100 text-sm font-semibold mb-2"
                htmlFor="customer"
              >
                تکرار رمز عبور
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="customer"
                type="text"
                placeholder="کلمه عبور"
              />
            </div>
          </div>
          <h2 className="block text-gray-100 text-lg font-semibold mb-2 py-4 ">
            اعتبار کاربر
          </h2>
          <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
            <div className="mb-4 w-full lg:w-1/5">
              <label
                className="block text-gray-100 text-sm font-semibold mb-2"
                htmlFor="Rial"
              >
                اعتبار ریالی
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Rial"
                type="text"
                dir="ltr"
                value={inputValuePrice}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-full lg:w-1/5">
              <label
                className="block text-gray-100 text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                اعتبار تتر
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                dir="ltr"
                value={person?.lastName}
              />
            </div>
            <div className="mb-4 w-full lg:w-1/5">
              <label
                className="block text-gray-100 text-sm font-semibold mb-2"
                htmlFor="Mobile"
              >
                اعتبار BTC
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Mobile"
                type="text"
                dir="ltr"
                placeholder=""
              />
            </div>
            <div className="mb-4 w-full lg:w-1/5">
              <label
                className="block text-gray-100 text-sm font-semibold mb-2"
                htmlFor="Mobile"
              >
                اعتبار ETH
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Mobile"
                type="text"
                placeholder=""
                dir="ltr"
              />
            </div>
            <div className="mb-4 w-full lg:w-1/5">
              <label
                className="block text-gray-100 text-sm font-semibold mb-2"
                htmlFor="Mobile"
              >
                اعتبار SOL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Mobile"
                type="text"
                placeholder=""
                dir="ltr"
              />
            </div>
          </div>
          <div>
            <h2 className="block text-gray-100 text-lg font-semibold mb-2 py-4 mt-8">
              رمز ارزها فعال
            </h2>
            <div className="flex items-center justify-start flex-wrap gap-x-16 gap-y-5 text-white">
              {Object.entries(checkboxes).map(([name, checked]) => (
                <div
                  key={name}
                  className="flex gap-2 items-center justify-center"
                >
                  <input
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={() => handleCheckboxChange(name)}
                  />

                  <label htmlFor={name}>{name}</label>
                </div>
              ))}
            </div>
          </div>
          <h2 className="block text-gray-100 text-lg font-bold mb-2 py-4 mt-5">
            روش اطلاع رسانی
          </h2>
          <div className="flex gap-3 items-center text-gray-100">
            <div>
              <label for="sms" className="px-1">
                پیامک
              </label>
              <input type="checkbox" id="sms" name="sms" />
            </div>
            <div>
              <label for="email" className="px-1">
                ایمیل
              </label>
              <input type="checkbox" id="email" name="email" />
            </div>
            <div>
              <label for="notification" className="px-1">
                نوتیفیکیشن
              </label>
              <input type="checkbox" id="notification" name="notification" />
            </div>
          </div>
          <h2 className="block text-gray-100 text-lg font-semibold mb-2 py-4 mt-5">
            کارمزدها (به درصد)
          </h2>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <div className="mb-4 w-full md:w-1/4">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="buy"
              >
                خرید
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="buy"
                type="text"
                dir="ltr"
              />
            </div>
            <div className="mb-4 w-full md:w-1/4">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="sell"
              >
                فروش
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sell"
                type="text"
                dir="ltr"
              />
            </div>
            <div className="mb-4 w-full md:w-1/4">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="deposit"
              >
                واریز
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="deposit"
                type="text"
                dir="ltr"
              />
            </div>
            <div className="mb-4 w-full md:w-1/4">
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="harvest"
              >
                برداشت
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="harvest"
                type="text"
                dir="ltr"
              />
            </div>
          </div>
          <h2 className="block text-gray-100 text-lg font-semibold mb-2 py-4 mt-5">
            بالانس
          </h2>
          <div>
            <div className="flex">
              {tabs.map((tabName) => (
                <div
                  key={tabName}
                  className={`p-3 m-1 bg-green-900 text-color3 cursor-pointer rounded-md ${
                    currentTab === tabName ? "bg-green-400" : ""
                  }`}
                  onClick={() => changeTab(tabName)}
                >
                  {tabName}
                </div>
              ))}
            </div>
            <div className="mt-6">
              {currentTab === "آبان" && (
                <div className="w-full">
                  <h2 className="block text-gray-100 text-base font-semibold mb-2 py-4 mt-5">
                    اعمال تغییرات برای آبان
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع ارز
                      </p>
                      <select
                        value={selectedValue}
                        onChange={handleChangeAban}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">ریال</option>
                        <option value="2">تتر</option>
                        <option value="3">btc</option>
                        <option value="4">eth</option>
                        <option value="5">sol</option>
                        <option value="6">dai</option>
                        <option value="7">gold</option>
                      </select>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع سند
                      </p>
                      <select
                        value={selectedValue2}
                        onChange={handleChangeAban2}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">برداشت</option>
                        <option value="2">خرید</option>
                        <option value="3">فروش</option>
                        <option value="4">واریز</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        کد رهگیری
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="code"
                        type="text"
                        dir="ltr"
                      />
                    </div>

                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        مبلغ
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="text"
                        dir="ltr"
                        value={inputValuePrice2}
                        onChange={handleChange2}
                      />
                    </div>
                  </div>
                </div>
              )}
              {currentTab === "تبدیل" && (
                <div className="w-full">
                  <h2 className="block text-gray-100 text-base font-semibold mb-2 py-4 mt-5">
                    اعمال تغییرات برای تبدیل
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع ارز
                      </p>
                      <select
                        value={selectedValue}
                        onChange={handleChangeAban}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">ریال</option>
                        <option value="2">تتر</option>
                        <option value="3">btc</option>
                        <option value="4">eth</option>
                        <option value="5">sol</option>
                        <option value="6">dai</option>
                        <option value="7">gold</option>
                      </select>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع سند
                      </p>
                      <select
                        value={selectedValue2}
                        onChange={handleChangeAban2}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">برداشت</option>
                        <option value="2">خرید</option>
                        <option value="3">فروش</option>
                        <option value="4">واریز</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        کد رهگیری
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="code"
                        type="text"
                        dir="ltr"
                      />
                    </div>

                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        مبلغ
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="text"
                        dir="ltr"
                        value={inputValuePrice2}
                        onChange={handleChange2}
                      />
                    </div>
                  </div>
                </div>
              )}
              {currentTab === "باسلام" && (
                <div className="w-full">
                  <h2 className="block text-gray-100 text-base font-semibold mb-2 py-4 mt-5">
                    اعمال تغییرات برای باسلام
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع ارز
                      </p>
                      <select
                        value={selectedValue}
                        onChange={handleChangeAban}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">ریال</option>
                        <option value="2">تتر</option>
                        <option value="3">btc</option>
                        <option value="4">eth</option>
                        <option value="5">sol</option>
                        <option value="6">dai</option>
                        <option value="7">gold</option>
                      </select>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع سند
                      </p>
                      <select
                        value={selectedValue2}
                        onChange={handleChangeAban2}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">برداشت</option>
                        <option value="2">خرید</option>
                        <option value="3">فروش</option>
                        <option value="4">واریز</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        کد رهگیری
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="code"
                        type="text"
                        dir="ltr"
                      />
                    </div>

                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        مبلغ
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="text"
                        dir="ltr"
                        value={inputValuePrice2}
                        onChange={handleChange2}
                      />
                    </div>
                  </div>
                </div>
              )}
              {currentTab === "نوتتیبکس" && (
                <div className="w-full ">
                  <h2 className="block text-gray-100 text-base font-semibold mb-2 py-4 mt-5">
                    اعمال تغییرات برای نوتتیبکس
                  </h2>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع ارز
                      </p>
                      <select
                        value={selectedValue}
                        onChange={handleChangeAban}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">ریال</option>
                        <option value="2">تتر</option>
                        <option value="3">btc</option>
                        <option value="4">eth</option>
                        <option value="5">sol</option>
                        <option value="6">dai</option>
                        <option value="7">gold</option>
                      </select>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        نوع سند
                      </p>
                      <select
                        value={selectedValue2}
                        onChange={handleChangeAban2}
                        className="w-full px-2 py-1 rounded-lg"
                      >
                        <option value="1">برداشت</option>
                        <option value="2">خرید</option>
                        <option value="3">فروش</option>
                        <option value="4">واریز</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-2">
                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        کد رهگیری
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="code"
                        type="text"
                        dir="ltr"
                      />
                    </div>

                    <div className="w-full lg:w-1/2">
                      <p className="py-2 text-color3 font-semibold text-sm">
                        مبلغ
                      </p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="text"
                        dir="ltr"
                        value={inputValuePrice2}
                        onChange={handleChange2}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex gap-2 mt-5">
              <button className="flex items-center justify-center w-1/2 bg-red-500 rounded-lg py-1 text-color3 hover:bg-red-700">
                انصراف
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center justify-center w-1/2 bg-green-500 rounded-lg py-1 text-color3  hover:bg-green-700"
              >
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        /> */}
    </div>
  );
}
