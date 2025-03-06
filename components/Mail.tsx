import { CardSpotlight } from "./ui/card-spotlight";
import { Icon } from "./ui/evervault-card";

const Mail = () => {
  return (
    <>
      <div className="border border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[20rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
        {/* CARD  */}
        <CardSpotlight className="">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Contact Information
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
            
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Ensuring your account is properly secured helps protect your
            personal information and data.
          </p>
        </CardSpotlight>
      </div>
    </>
  );
};

export default Mail;
