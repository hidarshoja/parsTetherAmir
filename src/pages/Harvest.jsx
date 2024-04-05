import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

const people = [
  { id: 1, name: "سحر شجاع" },
  { id: 2, name: "بیتا شجاع" },
  { id: 3, name: "علی شجاع" },
  { id: 4, name: "بهمن بهمنی" },
  { id: 5, name: "سحر سحری" },
  { id: 6, name: "حیدر شجاع" },
  { id: 7, name: "حمید شجاع" },
  { id: 8, name: "سینا بهمنی" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function separateDigits(number) {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Harvest() {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [value, setValue] = useState('');

  function handleInputChange(event) {
    const inputValue = event.target.value;
    const separatedValue = separateDigits(inputValue.replace(/,/g, ''));
    setValue(separatedValue);
  }

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div>
      <div className="w-[95%] md:w-[80%] mx-auto">
        <div className="bg-gray-800 shadow-2xl rounded mt-10 px-8 pt-6 pb-8 mb-4">
          <h2 className="text-color2 text-3xl font-semibold">عملیات مالی</h2>
          <div className="flex items-center  gap-2 flex-wrap mt-8">
            <Combobox
              as="div"
              value={selectedPerson}
              onChange={setSelectedPerson}
            >
              <Combobox.Label className="block text-sm font-medium w-full leading-6 text-gray-100">
                نام مشتری
              </Combobox.Label>
              <div className="relative mt-2">
                <Combobox.Input
                  className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(person) => person?.name}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-2 pl-8 pr-4",
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900"
                          )
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span
                              className={classNames(
                                "block truncate",
                                selected && "font-semibold"
                              )}
                            >
                              {person.name}
                            </span>

                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                  active ? "text-white" : "text-indigo-600"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
            <div>
              <label
                htmlFor="account-number"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                یوزر آیدی
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  dir="ltr"
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="000000"
                />
              </div>
            </div>
            <div>
            <label
                htmlFor="account-number"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                 نام ارز
              </label>
              <div className="relative mt-2 w-full rounded-md shadow-sm">
              <select  name="currency"
              className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="currency">
                <option value="rial">ریال</option>
                <option value="tether">تتر</option>
                <option value="btc">BTC</option>
              </select>
              </div>
            </div>
            <div>
            <label
                htmlFor="account-number"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                  نوع تراکنش
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
              <select name="currency"
              className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="currency">
                <option value="rial">واریز</option>
                <option value="tether">برداشت</option>
              </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="account-number"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                 مبلغ
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  dir="ltr"
                  value={value}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="000000"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 gap-4">
            <div className="w-full md:w-1/2">
              <label htmlFor=""
               className="block text-sm font-medium leading-6 text-gray-100 rounded-lg"
              >توضیحات</label>
              <textarea name="" id="" cols="30" rows="10" className="w-full mt-3 rounded-md p-3"></textarea>
            </div>
            <div className="w-full md:w-1/2 mt-5 flex items-end justify-around">
              <button className="text-sm text-green-500 bg-white rounded-lg border border-1 border-green-500 px-5 py-1 hover:bg-green-700 hover:text-white">انصراف</button>
              <button
               className="text-sm text-green-500 bg-white rounded-lg border border-1 border-green-500 px-5 py-1 hover:bg-green-700 hover:text-white"
              >ثبت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
