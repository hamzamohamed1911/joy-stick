const OTPForm = ({ onNewPasswordOpen }) => {
  return (
    <form className="md:min-w-[380px] w-[300px]">
      <h2 className="text-lg font-medium mb-4 border-b-2 flex justify-center py-3 text-center">
        رمز التأكيد
      </h2>
      <div className="p-[20px]">
        <div className="my-2">
          <label className="block mb-3 font-medium text-sm">
            يرجى ادخال رمز التأكيد المرسل للبريد الالكتروني
          </label>

          <div className="">
            <label className="block mb-3 font-medium text-sm">
              رمز التأكيد
            </label>
            <div className="flex justify-center gap-3">
              <input
                type="text"
                maxLength={1}
                className="md:w-12 md:h-12 h-8 w-8 text-lg text-center border border-gray-300 focus:border-primary focus:border-2 outline-none rounded-md"
              />
              <input
                type="text"
                maxLength={1}
                className="md:w-12 md:h-12 h-8 w-8 text-lg text-center border border-gray-300 focus:border-primary focus:border-2 outline-none rounded-md"
              />
              <input
                type="text"
                maxLength={1}
                className="md:w-12 md:h-12 h-8 w-8 text-lg text-center border border-gray-300 focus:border-primary focus:border-2 outline-none rounded-md"
              />
              <input
                type="text"
                maxLength={1}
                className="md:w-12 md:h-12 h-8 w-8 text-lg text-center border border-gray-300 focus:border-primary focus:border-2 outline-none rounded-md"
              />
              <input
                type="text"
                maxLength={1}
                className="md:w-12 md:h-12 h-8 w-8 text-lg text-center border border-gray-300 focus:border-primary focus:border-2 outline-none rounded-md"
              />
              <input
                type="text"
                maxLength={1}
                className="md:w-12 md:h-12 h-8 w-8 text-lg text-center border border-gray-300 focus:border-primary focus:border-2 outline-none rounded-md"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onNewPasswordOpen}
          className="w-full text-center py-3 my-4 bg-primary text-white rounded-lg"
        >
          تأكيد
        </button>
      </div>
    </form>
  );
};

export default OTPForm;
