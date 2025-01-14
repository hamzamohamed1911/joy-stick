"use client"
import Image from "next/image";
import { add, deleteIcon, headPhone, minus, mouseImg } from "../../../public";
import FavouriteProducts from "../components/FavouriteProducts";
import { useRouter } from "next/navigation";
export const Favourite = [
  {
    id: 1,
    imageSrc: headPhone,
    title: "سماعة رأس",
    description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
    price: "379.00",
  },
  {
    id: 2,
    imageSrc: mouseImg,
    title: "سماعة رأس",
    description: "ميكروفون احترافي لتسجيل الصوت بجودة فائقة",
    price: "1000.00",
  },
];

const ShoppingCart = () => {
  const router =  useRouter()
const handleSubmit = (e)=> {
  e.preventDefault()
  router.push('/shopping-cart/confirm-request')
}
  return (
    <section className=" w-full container mx-auto  flex flex-col px-4">
            <form onSubmit={handleSubmit}>

      <div className="w-full flex lg:flex-row flex-col justify-between px-6">
        {/* Product List */}

   <div className="xl:max-w-[700px] lg:max-w-[500px] w-full">
          {Favourite.map((product) => (
            <div
              key={product.id}
              className="p-4 mb-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="bg-Secondary flex w-full justify-center items-center rounded-xl col-span-12 md:col-span-3">
                <Image width={160} src={product.imageSrc} alt="favorite item" />
              </div>
              <div className="col-span-12 md:col-span-9 space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-lg md:text-2xl">سماعة رأس</h2>
                  <div className="w-8 cursor-pointer">
                    <Image src={deleteIcon} alt="Delete Icon" className="w-7" />
                  </div>
                </div>
                <p className="text-[#737791] max-w-72">
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-black text-xl font-semibold">
                    {product.price} جنيه
                  </h2>
                  <div className="flex gap-3 items-center">
                    <button>
                      <Image src={minus} alt="Minus Icon" className="w-7" />
                    </button>
                    <span className="font-bold text-xl">8</span>
                    <button>
                      <Image src={add} alt="Add Icon" className="w-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Section */}
        <div className="xl:max-w-[400px] lg:max-w-[350px] w-full">
          <h1 className="text-2xl font-medium">كود الخصم</h1>
          <input
            placeholder="ادخل كود الخصم"
            className="my-4 focus:border-primary px-5 py-3 text-sm border bg-[#FBFBFB] border-[#8686861A] text-gray-800 shadow-sm focus:outline-none rounded-[8px] w-full"
            type="text"
          />
          <div className="text-[#A6A798] flex justify-between font-semibold text-lg my-4">
            <span>السعر ({Favourite.length} قطع):</span>
            <span>
              {Favourite.reduce(
                (total, item) => total + Number(item.price),
                0
              )}
              جنيه
            </span>
          </div>
          <button className="w-full text-center py-3 my-2 bg-primary text-white rounded-lg">
            استكمال عملية الشراء
          </button>
        </div>

      </div>
      </form>

      <FavouriteProducts title="المنتجات المفضلة" />

    </section>
  );
};

export default ShoppingCart;
