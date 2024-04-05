import { useState } from "react";

const tabs = ["آبان", "تبدیل", "باسلام", "نوتتیبکس"];

export default function Balance() {
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [inputValuePrice2, setInputValuePrice2] = useState("");
    const [selectedOption, setSelectedOption] = useState([]);

    const changeTab = (tabName) => {
        console.log(tabName);
        setCurrentTab(tabName);
      };

      const handleChangeAban = (event) => {
        setSelectedValue(event.target.value);
      };

      const handleChangeAban2 = (event) => {
        setSelectedValue2(event.target.value);
      };

      function handleChange2(event) {
        setInputValuePrice2(formatNumber(event.target.value));
      }

      const handleClick = async () => {
        let role = [];
        selectedOption.map((r) => {
          role.push(r.value);
        });
    
    
      };

  return (
    <div>
    <div className="w-[95%] md:w-[80%] mx-auto">
      <div className="bg-gray-800 shadow-2xl rounded mt-10 px-8 pt-6 pb-8 mb-4">
        <h2 className="block text-gray-100 text-lg font-semibold mb-2 py-4 mt-5">
            بالانس
          </h2>
          <div>
            <div className="flex border border-1 rounded-md p-1 border-gray-100 flex-wrap">
              {tabs.map((tabName) => (
                <div
                  key={tabName}
                  className={`p-3 m-1  text-color3 cursor-pointer rounded-md ${
                    currentTab === tabName ? "bg-green-400 !important" : ""
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
  </div>
  )
}
