import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark flex flex-col gap-4 items-center justify-center w-screen h-[27rem]">
      <img
        src="/assets/company-logo-wh.svg"
        alt="SuU and Inc."
        className="w-[155px] h-[120px] mx-14"
      />
      <div className="flex gap-8">
        <Link className="base-text-white" href={"/#about"}>
          ABOUT
        </Link>
        <Link className="base-text-white" href={"/#contact"}>
          CONTACT
        </Link>
      </div>
      <span className="text-xs font-thin text-white">
        Copyright © 2023 SuU and Inc. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
