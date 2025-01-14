"use client";
import Image from "next/image";
import { useState } from "react";
import {
  CardIcon,
  closeBtn,
  Hamburger,
  LoginIcon,
  mainLogo,
} from "../../../public";
import NavLink from "./NavLink";
import { navLinks } from "../_constants";
import Link from "next/link";
import CustomModal from "./CustomModal";
import LoginForm from "../_auth/LoginForm";
import RegisterForm from "../_auth/RegisterForm";
import ForgotPasswordForm from "../_auth/ForgotPasswordForm";
import OTPForm from "../_auth/OTPForm";
import NewPasswordForm from "../_auth/NewPasswordForm";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [otpOpen, setOtpOpen] = useState(false);
  const [newPasswordOpen, setNewPasswordOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOtpOpen = () => {
    setForgotOpen(false);
    setOtpOpen(true);
  };

  const handleForgotOpen = () => {
    setOpen(false);
    setForgotOpen(true);
  };
  const handleNewPasswordOpen = () => {
    setOtpOpen(false);
    setNewPasswordOpen(true);
  };
  const handleReSignin = () => {
    setNewPasswordOpen(false);

    setOpen(true);
  };
  const handleForgotClose = () => setForgotOpen(false);
  const handleOtpClose = () => setOtpOpen(false);
  const handleTabChange = (tab) => setActiveTab(tab);
  const handleNewPasswordClose = () => setNewPasswordOpen(false);
  const router = useRouter();

  return (
    <nav className="shadow-[#EEEEEE80] shadow-md p-4 ">
      <div className=" lg:min-w-sc2een-2xl w-full container mx-auto flex justify-between items-center">
        <Link href="/" className="w-30 hidden lg:flex">
          <Image
            src={mainLogo}
            alt="Logo"
            width={64}
            height={64}
            className="w-full"
          />
        </Link>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none w-30">
            <Image
              width={50}
              height={50}
              className="w-full"
              alt="Hamburger Logo"
              src={Hamburger}
            />
          </button>
        </div>
        {/* Navbar Links */}
        <ul className="hidden lg:flex lg:gap-4 md:gap-2 gap-1 justify-center">
          {navLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </ul>

        <div className="flex  items-center gap-2 ">
          <button
            onClick={() => router.push("/shopping-cart")}
            className="relative h-10"
          >
            <Image
              width={50}
              height={50}
              className="w-full"
              alt="Cart Logo"
              src={CardIcon}
            />
            <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 bg-primary text-white text-center rounded-full text-xs">
              {5} 
            </span>
          </button>

          <button onClick={handleOpen} className="h-10">
            <Image
              width={50}
              height={50}
              className="w-full"
              alt="Logout Logo"
              src={LoginIcon}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 lg:hidden z-20  bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed lg:hidden top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <div className="w-28 ">
            <Image
              src={mainLogo}
              alt="Logo"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            <div className="w-8">
              <Image
                src={closeBtn}
                alt="Logo"
                width={20}
                height={20}
                className="w-full"
              />
            </div>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </ul>
      </div>
      <div>
        {/* the login and regiester */}
        <CustomModal open={open} onClose={handleClose}>
          <div className="flex w-full justify-between border-b border-gray-300 rounded-lg mb-2 text-lg font-semibold">
            <button
              onClick={() => handleTabChange("login")}
              className={`px-4 py-3 w-1/2 ${
                activeTab === "login"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              تسجيل دخول
            </button>
            <div className="border-l border-gray-300"></div> {/* Divider */}
            <button
              onClick={() => handleTabChange("register")}
              className={`px-4 py-3 w-1/2 ${
                activeTab === "register"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              انشاء حساب
            </button>
          </div>

          {/* Content for Login Tab */}
          {activeTab === "login" && (
            <LoginForm onForgotPassword={handleForgotOpen} />
          )}

          {/* Content for Register Tab */}
          {activeTab === "register" && <RegisterForm />}
        </CustomModal>

        {/* Forgot Password Modal */}
        <CustomModal open={forgotOpen} onClose={handleForgotClose}>
          <ForgotPasswordForm onOtpOpen={handleOtpOpen} />
        </CustomModal>

        {/* OTP Modal */}
        <CustomModal open={otpOpen} onClose={handleOtpClose}>
          <OTPForm onNewPasswordOpen={handleNewPasswordOpen} />
        </CustomModal>

        {/* New Password Modal */}
        <CustomModal open={newPasswordOpen} onClose={handleNewPasswordClose}>
          <NewPasswordForm onOpenLoginModal={handleReSignin} />
        </CustomModal>
      </div>
    </nav>
  );
}
