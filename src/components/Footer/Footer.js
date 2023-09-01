import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/solid";

function Footer({ admin }) {
  const router = useRouter();
  const gmailHandler = () => {
    window.open(
      "mailto:" +
      "piyushsati311999@gmail.com" +
      "?subject=" +
      " " +
      "&body=" +
      " ",
      "_self"
    );
  };
  return (
    <div className="bg-gray-800 py-8 px-6 text-gray-200  lg:text-base text-sm">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center lg:space-x-8 space-x-4">
            <Link href="/">
              <span className="cursor-pointer hover:text-white">Home</span>
            </Link>
            {!admin ? (
              <Link href="/orders">
                <span className="cursor-pointer hover:text-white">Orders</span>
              </Link>
            ) : (
              <></>
            )}
          </div>

        </div>

        <p className="mt-6 text-gray-200 text-center flex items-center flex-wrap justify-center">
          The content, images, design, and intellectual property on this website are protected by copyright laws. Any unauthorized use, reproduction, or distribution of materials from this site is strictly prohibited. This includes, but is not limited to, copying, modifying, or using any content for commercial or non-commercial purposes without prior written consent from the website.
        </p>
        <p>
        Copyright © 2022 Boutique website. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
