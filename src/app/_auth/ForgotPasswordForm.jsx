
const ForgotPasswordForm = ({ onOtpOpen }) => {
  return (
    <form className=" md:min-w-[380px] w-[300px]">
      <h2 className="text-lg font-medium mb-4 border-b-2 flex justify-center py-3 text-center">
        استعادة كلمة المرور
      </h2>
      <div className="md:p-[18px] p-[14px]">
        <div className="my-2 ">
          <label className="block mb-3 font-medium text-sm">
            يرجى اختيار رقم الهاتف أو البريد الالكتروني لارسال رمز التأكيد
          </label>

          <div className="p-2">
            <div className="gap-2 items-center flex mb-3">
              <input
                type="checkbox"
                className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[3px] border-gray-300 checked:border-primary  focus:outline-none"
              />
              <label className="font-semibold">01********55</label>
            </div>
            <div className="gap-2 items-center flex">
              <input
                type="checkbox"
                className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[3px] border-gray-300 checked:border-primary  focus:outline-none"
              />
              <label className="font-semibold">Rana@example.com</label>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOtpOpen} 
          className="w-full text-center py-3 my-2 bg-primary text-white rounded-lg"
        >
          اختر
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
