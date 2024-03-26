import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  HomeIcon,
  XMarkIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CiUser } from "react-icons/ci";
import { BsTicket } from "react-icons/bs";
import { MdEventRepeat, MdPriceChange } from "react-icons/md";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Harvest from "./pages/Harvest";
import BuyGold from "./pages/BuyGold";
import Ticket from "./pages/SellGold";
import Report from "./pages/Report";
import ReceiveGold from "./pages/ReceiveGold";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Login from "./pages/login/page";
import Customer from "./pages/Customer";

const navigation = [
  { name: "پیشخوان", href: "/", icon: HomeIcon, current: false },
  { name: "تعریف مشتری", href: "/Customer", icon: HomeIcon, current: false },
  { name: "موجودی ", href: "/harvest", icon: CreditCardIcon, current: false },
  {
    name: "قیمت",
    href: "/buyGold",
    icon: MdPriceChange,
    current: false,
  },

  { name: "پرفایل", href: "/profile", icon: CiUser, current: false },
  {
    name: "حسابداری ",
    // href: "/ticket",
    icon: ScaleIcon,
    current: false,
    children: [
      { name: "واریز", href: "/buyGold" },
      { name: "برداشت", href: "/harvest" },
      { name: "افزودن کارت", href: "/dedposit" },
    ],
  },
];

// اتمام صفحات دقالت
const userNavigation = [
  { name: "پرفایل", href: "/profile" },
  { name: "ورود", href: "/login" },
  { name: "خروج", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  //const currentPath = window.location.pathname;

  return (
    <>
      <div>
        {location.pathname !== "/Login" && (
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative mr-0 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-[82%] top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                      <div className="flex h-16 shrink-0 items-center">
                        <img
                          className="h-8 w-auto"
                          src="/img/bit.png"
                          alt="Your Company"
                        />
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                              
                                <li key={item.name}>
                                  {!item.children ? (
                                    <Link
                                      to={item.href}
                                      className={classNames(
                                        item.current
                                          ? "bg-gray-50"
                                          : "hover:bg-gray-50 hover:text-gray-700",
                                        "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-100"
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  ) : (
                                    <Disclosure as="div" dir="ltr">
                                      {({ open }) => (
                                        <>
                                          <Disclosure.Button
                                            className={classNames(
                                              item.current
                                                ? "bg-gray-50"
                                                : "hover:bg-gray-50 hover:text-gray-700",
                                              "flex items-center justify-end w-full  rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-100"
                                            )}
                                          >
                                            <ChevronRightIcon
                                              className={classNames(
                                                open
                                                  ? "rotate-90 text-gray-500"
                                                  : "text-gray-400 rotate-180",
                                                "h-5 w-5 shrink-0"
                                              )}
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Disclosure.Button>
                                          <Disclosure.Panel
                                            as="ul"
                                            className="mt-1 px-2"
                                          >
                                            {item.children.map((subItem) => (
                                              <li key={subItem.name}>
                                                <Disclosure.Button
                                                  as="a"
                                                  href={subItem.href}
                                                  className={classNames(
                                                    subItem.current
                                                      ? "bg-gray-50"
                                                      : "hover:bg-gray-50 hover:text-gray-700",
                                                    "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-100"
                                                  )}
                                                >
                                                  {subItem.name}
                                                </Disclosure.Button>
                                              </li>
                                            ))}
                                          </Disclosure.Panel>
                                        </>
                                      )}
                                    </Disclosure>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li></li>
               
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        )}

        {location.pathname !== "/Login" && (
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
              <div className="flex h-20 shrink-0 items-center mt-3 justify-between">
                {/* <img
                  className="h-20 w-auto mr-[-30px]"
                  src="/img/bit.png"
                  alt="Your Company"
                /> */}
                <h3 className="text-2xl text-color2">پارس تتر</h3>
              </div>

              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                     
                        <li key={item.name}>
                        {!item.children ? (
                          <NavLink
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-50"
                                : "hover:bg-gray-50 hover:text-gray-700",
                              "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-100"
                            )}
                          >
                            {item.name}
                          </NavLink>
                        ) : (
                          <Disclosure as="div" dir="ltr">
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50"
                                      : "hover:bg-gray-50 hover:text-gray-700",
                                    "flex justify-end items-center w-full  rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-100"
                                  )}
                                >
                                  <ChevronRightIcon
                                    className={classNames(
                                      open
                                        ? "rotate-90 text-gray-500"
                                        : "text-gray-400 rotate-180",
                                      "h-5 w-5 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name} 
                                </Disclosure.Button>
                                <Disclosure.Panel
                                  as="ul"
                                  className="mt-1 px-2"
                                >
                                  {item.children.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Disclosure.Button
                                        as="a"
                                        href={subItem.href}
                                        className={classNames(
                                          subItem.current
                                            ? "bg-gray-50"
                                            : "hover:bg-gray-50 hover:text-gray-700",
                                          "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-100"
                                        )}
                                        
                                      >
                                        
                                        {subItem.name}
                                      </Disclosure.Button>
                                    </li>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        )}
                      </li>
                      ))}
                    </ul>
                  </li>
                  <li></li>
                 
                </ul>
              </nav>
            </div>
          </div>
        )}
        <div className="lg:pr-72">
          {location.pathname !== "/Login" && (
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-100 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="h-6 w-px bg-gray-900/10 lg:hidden"
                aria-hidden="true"
              />

              <div className="flex flex-1 gap-x-4 justify-end lg:gap-x-6">
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-100 hover:text-green-600"
                  >
                    <span className="sr-only">پیام ها </span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                    aria-hidden="true"
                  />

                  <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="/img/download.jpg"
                        alt=""
                      />
                      <span className="hidden lg:flex lg:items-center text-gray-100 hover:text-green-600">
                        <span
                          className="mr-4 text-sm leading-6"
                          aria-hidden="true"
                        >
                           زهرا اسماعیلی
                        </span>
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5  "
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.href}
                                className={classNames(
                                  active ? "bg-gray-50" : "",
                                  "block px-3 py-1 text-sm leading-6 text-gray-900"
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          )}

          <div>
            <main className="py-10">
              <div>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/harvest" element={<Harvest />} />
                  <Route path="/buyGold" element={<BuyGold />} />
                  <Route path="/ticket" element={<Ticket />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/receive-gold" element={<ReceiveGold />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/ticket/chat" element={<Chat />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/Customer" element={<Customer />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
