const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-10 self-end backdrop-blur-sm  text-grayBase border-t-2 border-gold shadow">
      <div className="w-full mx-auto p-4 ">
        <div className="flex items-center justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <span className="self-center text-2xl text-gold font-semibold whitespace-nowrap">
              Shuffler
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300">
            <li>
              <a
                href="https://www.instagram.com/tanmayok/"
                className="mr-4 hover:underline md:mr-6"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tanmayok/"
                className="mr-4 hover:underline md:mr-6 text-gray-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <span className="block text-sm text-gold sm:text-center">
          © Created by
          <a
            href="https://www.instagram.com/tanmayok/"
            className="hover:underline"
          >
            Tanmay Patil
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
