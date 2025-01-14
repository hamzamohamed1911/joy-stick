import React from "react";
import Image from "next/image";
import { headPhone, mouseImg, truckIcon } from "../../../../../public";

const orderData = [
  {
    id: "000085752257",
    products: [
      {
        name: "سماعة رأس",
        price: 379.0,
        image: headPhone,
        description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء",
      },
      {
        name: "ماوس آبل",
        price: 379.0,
        image: mouseImg,
        description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء",
      },
    ],
    totalPrice: 1429.0,
    paymentMethod: "بطاقة ائتمان",
    paymentTime: "10:00 صباحًا",
    transactionStatus: "تمت العملية بنجاح",
    status: "تم التسليم",
    date: "9-يناير-2024",
  },
  {
    id: "000085752258",
    products: [
      {
        name: "سماعة رأس",
        price: 50,
        image: headPhone,
        description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء",
      },
      {
        name: " ماوس آبل",
        price: 150,
        image: mouseImg,
        description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء",
      },
    ],
    totalPrice: 200,
    paymentMethod: "نقدي",
    paymentTime: "11:00 صباحًا",
    transactionStatus: "تمت العملية بنجاح",
    status: "تم التسليم",
    date: "9-يناير-2024",
  },
  {
    id: "000085752259",
    products: [
      {
        name: "سماعة رأس",
        price: 200,
        image: headPhone,
        description: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء",
      },
    ],
    totalPrice: 200,
    paymentMethod: "تحويل مصرفي",
    paymentTime: "12:00 مساءً",
    transactionStatus: "تمت العملية بنجاح",
    status: "تم التسليم",
    date: "9-يناير-2024",
  },
];

const OrderDetail = ({ params }) => {
  const { id } = params;

  const order = orderData.find((order) => order.id === id);

  if (!order) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="flex flex-col   h-full">
      <div className=" border-[1px] border-[#E4E7E9] border-solid  md:text-lg text-md h-full  w-full">
        <div className="border-b-[1px] border-solid border-[#E4E7E9] py-4 px-6 items-center flex ">
          <h1 className=" font-semibold">تفاصيل الطلب - {order.id}</h1>
        </div>

        <div className="max-w-6xl px-6">
          <div className="flex items-center w-full h-4 bg-[#FAFAFA] rounded-full relative md:my-20 my-14">
            <div
              className="bg-primary h-full rounded-full"
              style={{ width: "30%" }}
            ></div>

            <Image
              src={truckIcon}
              alt="Truck Icon"
              className="absolute -top-11"
              style={{ left: "70%", transform: "translateX(-50%)" }}
              width={80}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2  md:my-20 my-14">
            <h2 className="text-sm font-medium text-[#474747] ">
              اجمالي الدفع
            </h2>
            <span className="text-3xl font-medium ">
              {order.totalPrice} جنيه
            </span>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-6 ">
            <div>
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex md:flex-row flex-col items-center mb-4 p-3 border border-[#EDEDED] rounded-lg   gap-3 md:h-44 h-auto"
                >
                  <div className="bg-[#F2FAFA] p-4 flex  justify-center items-center  h-36 md:w-36 w-full rounded-lg ">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      className="mr-3 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col h-full w-full p-2">
                    <div className="flex-grow  space-y-2">
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-sm font-medium text-[#737791]">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-lg text-black font-medium">
                      {product.price} جنيه
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="gap-4 flex-col flex">
              <div className="text-xl font-medium  p-3 rounded-lg gap-2 border border-[#EDEDED]">
                <label className="text-sm text-[#707070]"> رقم الطلب </label>
                <h2 className="text-gray-800 text-lg">{order.id}</h2>
              </div>

              <div className="text-xl font-medium  p-3 rounded-lg gap-2 border border-[#EDEDED]">
                <label className="text-sm text-[#707070]"> طريقة الدفع</label>
                <h2 className="text-gray-800 text-lg">{order.paymentMethod}</h2>
              </div>

              <div className="text-xl font-medium  p-3 rounded-lg gap-2 border border-[#EDEDED]">
                <label className="text-sm text-[#707070]"> وقت الدفع</label>
                <h2 className="text-gray-800 text-lg">{order.paymentTime}</h2>
              </div>

              <div className="text-xl font-medium  p-3 rounded-lg gap-2 border border-[#EDEDED]">
                <label className="text-sm text-[#707070]"> حالة العملية</label>
                <h2 className="text-gray-800 text-lg">{order.paymentTime}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;
