import React from 'react';
import Image from 'next/image';
import { facebook, instagram, mainLogo, twitter } from '../../../public';
import NavLink from './NavLink';
import { navLinks } from '../_constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-6 flex flex-col items-center space-y-8">
      <Link href="/" className="w-30 flex justify-center">
          <Image
            src={mainLogo}
            alt="Logo"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </Link>

      <p className="text-center md:text-xl text-lg max-w-md text-gray-800 px-4 md:px-0">
      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي    
        </p>

      {/* Navigation Links */}
      <div className="flex justify-center mb-4">
        <ul className="flex flex-wrap justify-center space-x-reverse space-y-4 space-y-reverse ">
        {navLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-reverse space-x-8 ">
        <a href="#" className="text-black">
          <Image alt='instagaramIcon' src={instagram} />
        </a>
        <a href="#" className="text-black">
        <Image alt='twitterIcon' src={twitter} />
        </a>
        <a href="#" className="text-black">
          <Image alt='facebookIcon' src={facebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
