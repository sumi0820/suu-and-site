import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const logo = (
    <Image
      src="/assets/company-logo.svg"
      alt="SuU and Inc."
      width={102}
      height={80}
    />
  );
  return (
    <section className="flex justify-between items-center mt-8 top-0 z-50 sticky opacity-80 bg-white px-8 pt-4">
      <Link href={"/"}> {logo}</Link>
      <div className="flex gap-8">
        <Link className="link-text" href={"/#about"}>ABOUT</Link>
        <Link className="link-text" href={"/#contact"}>CONTACT</Link>
      </div>
    </section>
  );
};

export default Header;
