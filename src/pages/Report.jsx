import React, { useState , useEffect } from "react";
import { TbMessages } from "react-icons/tb";
import axios from "axios";

const people = [
  {
    id: 1,
    name: 1012,
    data: "1402/10/12",
    title: "خرید یک گرم طلای آب شده ",
    role: "رد شده",
    dic : "قیمت دلار، طلا و سکه در هفته‌های اخیر بسیار مورد توجه معامله‌گران قرار داشت. روند صعودی بازار‌های مالی در هفته‌های اخیر سرمایه‌گذاران خرد را روانه بازار کرد؛ با این حال، کاهش قیمت‌ها از هفته گذشته به این سو، بسیاری از خریداران را نقره‌داغ کرده است. مجتبی دیبا، کارشناس اقتصادی در گفتگو با تجارت‌نیوز به این سوا"
  },
  {
    id: 2,
    name: 1013,
    data: "1402/10/12",
    title: "خرید سکه یک گرمی ",
    role: "در انتظار",
    dic : "گزارش منتشر شده از سوی شورای جهانی طلا نشان می‌دهد که مجموع تقاضای جهانی برای این فلز گرانبها، با احتساب معاملات بورسی و غیر بورسی، در سال گذشته میلادی به ۴۸۹۹ تن رسید که بالاترین رقم در کل تاریخ محسوب می‌شود."
  },
  {
    id: 3,
    name: 1014,
    data: "1402/10/18",
    title: "فروش طلای آب شده ",
    role: "تایید شده",
    dic : "ئیس اتحادیه طلا و جواهر تهران از تشکیل کارگروه تخصصی طلا، جواهر، نقره و سکه اتحادیه‌های کشوری در جهت پیگیری مشکلات و مسائل این صنعت خبر داد."
  },
  {
    id: 4,
    name: 1015,
    data: "1402/10/12",
    title: "خرید نیم سکه ",
    role: "در انتظار",
    dic : "انتشار خبرهایی چون حراج شمش طلا در مرکز مبادلات ارزی و نیز ورود سکه‌های جدید و بدون تاریخ به بازار، آن هم همزمان با کاهش قیمت دلار، مسیر قیمتی طلا و سکه را نزولی کرد؛ به طوری که در دومین روز هفته جاری، سکه‌بازان با زیان ۸۵۳ هزار تومانی خرید طلا"
  },
  {
    id: 5,
    name: 1016,
    data: "1402/10/22",
    title: "فروش نیم سکه ",
    role: "رد شده",
    dic : "در شرایطی که ایالات متحده بزرگترین ذخایر طلا را دارد و چین نیز بیشترین تولید را در ۲۰۲۳ رقم زده، انتظار می رود تولید جهانی این فلز گرانبها در سال جاری میلادی به ۱۲۴ میلیون اونس برسد."
  },
  {
    id: 6,
    name: 1017,
    data: "1402/10/11",
    title: "شارژ  صد هزار تومانی کیف پول",
    role: "تایید شده",
    dic : "در پایان معاملات امروز نماد معاملاتی شرکت‌های فنرسازی زر خزر، زامیاد خزامیا، ارتباطات سیار ایران همراه، سرمایه گذاری پارس توشه وتوشه، کارخانجات تولیدی شیشه دارویی رازی کرازی، قند مرودشت قمرو متوقف خواهند"
  },
  {
    id: 7,
    name: 1018,
    data: "1402/10/10",
    title: "شارژ یک میلیونی کیف پول",
    role: "تایید شده",
    dic : "قیمت طلا و سکه در چهارمین روز هفته با رشد شارپی همراه شد. این افزایش قیمت، تمام قطعات سکه را چند پله بالاتر نشاند. رشد ۲۰۰ تومانی دلار، بازار طلا را با نوسانات ۲۰۰ تا یک میلیون تومانی همراه کرد."
  },
  {
    id: 8,
    name: 1019,
    data: "1402/10/02",
    title: "برداشت از کیف پول",
    role: "رد شده",
    dic : "همانطور که در تصویر مشاهده می‌کنید، جهت به‌دست‌آوردن گزارش دلخواه خود، می‌توانیم فاکتورهای فروش را بر اساس پارامترهای متعددی محدود کنیم. محدود کردن براساس نوع کالای فروخته‌شده، تاریخ فروش، تاریخ کنترل مجدد فاکتور فروش، نام مشتری، نام تنظیم‌کننده یا فروشنده‌ی فاکتور، کدناویژه و حرفی جواهرات فروخته‌شده و کد کالاهای فروش‌رفته از جمله محدودیت‌هایی است که در این گزارش وجود دارد. اگر برنامه‌ی شما از ویژگی مدیریت حساب‌های ارزی برخوردار باشد، امکان محدود کردن گزارش فروش براساس نوع ارز نیز وجود دارد."
  },
];

export default function Report() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleShowModal = (person) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPerson(null);
    setShowModal(false);
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
              گزارش ها
            </h1>
          </span>
          <p className="mt-2 text-sm text-gray-700">
            گزارش ها و وضعیت گزارش های خود را مشاهده کنید
          </p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-none"></div>
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
                      شماره گزارش
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
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-start font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.data}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
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
                        <span
                          onClick={() => handleShowModal(person)}
                          className="bg-color1 text-color3 px-2 py-1 rounded-lg cursor-pointer"
                        >
                          مشاهده
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                 
                   <div className="relative w-[90%] md:w-[60%]  rounded-xl py-5 px-10 h-80 bg-white shadow-lg shadow-slate-600" style={{minHeight:"500px"}}>
                   <p>{ <span className="absolute top-3 left-3 text-2xl cursor-pointer"
                      onClick={handleCloseModal}
                    >
                     &times;
                    </span>}</p>
                    <div className="flex items-center justify-between mt-10">
                   <h2 className="text-center p-2 text-xl font-semibold text-color2">{ selectedPerson.title}</h2>
                      <p className="text-color2">  {selectedPerson.data}</p>
                    </div>
                    <p className="text-right pt-4 text-sm text-color1"><span className="text-lg text-color2 font-semibold block">علت  {selectedPerson.role} :</span>{selectedPerson.dic}</p>
                    <span className="absolute bottom-3 left-3 text-sm py-1 px-3 bg-color1 text-color3 rounded-xl cursor-pointer"
                      onClick={handleCloseModal}
                    >
                     بستن
                    </span>
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
