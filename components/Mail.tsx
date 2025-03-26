import { CardSpotlight } from "./ui/card-spotlight";
import { Icon } from "./ui/evervault-card";

const Mail = () => {
  return (
    <>
      <div className="flex-1 border border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[20rem]">
        <Icon className="absolute h-6 w-6 -top-1.5 -left-1.5 text-white z-10" />
        <Icon className="absolute h-6 w-6 -bottom-1.5 -left-1.5 text-white z-10" />
        <Icon className="absolute h-6 w-6 -top-1.5 -right-1.5  text-white z-10" />
        <Icon className="absolute h-6 w-6 -bottom-1.5 -right-1.5 text-white z-10" />
        {/* CARD  */}
        <CardSpotlight className="flex flex-col justify-center items-center w-full">
          <p className="text-2xl font-bold relative z-20 mt-2 text-white text-right w-full">
            Contact Information
          </p>
          <div className="mt-5 gap-2 flex flex-col text-white-100 items-end z-20 relative">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>mdparvajmosharof17@gmail.com</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Uttara, Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+880-1400139998</span>
            </p>
          </div>
        </CardSpotlight>
      </div>
    </>
  );
};

export default Mail;
