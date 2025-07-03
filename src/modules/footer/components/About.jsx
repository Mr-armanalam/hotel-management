import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { HiHomeModern } from "react-icons/hi2";


const About = () => {
  return (
    <div className="flex-1/3">
      <div className="flex gap-x-3">
        <HiHomeModern className="text-5xl text-white" />
        <div className="">
          <h1 className="text-xl font-Playfair ">Hotelio</h1>
          <p className="text-xs text-stone-100/80">LUXURY HOTEL</p>
        </div>
      </div>

      <p className="my-8 text-white/90 text-justify ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum!
        Illum dolorem non sint ad vitae ipsum, voluptatum iusto earum dicta
        velit eius aperiam nobis tempore fuga impedit. Blanditiis!
      </p>

      <div className="flex">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook className="text-2xl mx-2" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareTwitter className="text-2xl mx-2" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram className="text-2xl mx-2" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandLinkedinFilled className="text-2xl mx-2" />
        </a>
      </div>
    </div>
  );
};

export default About;
