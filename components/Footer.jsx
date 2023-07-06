import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-10 align-self-end backdrop-blur-sm  text-grayBase border-t-2 border-gold shadow">
      <div className="w-full p-3">
        <div className="flex items-center justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <span className="self-center font-bold text-lg bg-gradient-to-l from-gold to-yellow-500 bg-clip-text text-transparent text-gold whitespace-nowrap">
              ShuffleX
            </span>
          </a>
          <span className="block text-sm sm:text-center">
            Created by
            <a
              href="https://www.instagram.com/tanmayok/"
              className="hover:text-gold ml-1"
            >
              Tanmay Patil
            </a>
          </span>
          <ul className="flex flex-wrap gap-2 items-center text-sm font-medium text-gray-300">
            <li>
              <a href="https://www.linkedin.com/in/tanmaypatil25/" className="">
                <AiFillLinkedin size={24} className="hover:text-gold " />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tanmayok/" className="">
                <AiFillInstagram size={24} className="hover:text-gold" />
              </a>
            </li>
            <li>
              <a href="https://github.com/datanok" className="">
                <AiFillGithub size={24} className="hover:text-gold" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
