import React from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
type FooterProps = {
  title: string;
};

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <>
      <div className=" text-white  bg-gradient-to-b from-[#13376E]  to-[#111928] ">
        <div className=" border-b border-[#8899A8] py-16 max-w-[82%] mx-auto  ">
          <h2 className="font-bold leading-9 text-center text-[40px]  text-white mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-white text-center mb-10">
            There is many variations of pasages of lorem ipsum available <br />
            but the majority have suffered alternation in some form.
          </p>

          <div className="mt-6 flex w-min mx-auto flex-col items-center justify-center gap-3 w-max sm:flex-row sm:items-end bg-[#1562D633] rounded-lg  p-5 ">
            <input
              placeholder="Enter your email"
              className=" px-4 py-2 border rounded-md sm:max-w-md focus:border-blue-500 focus:ring-blue-500"
              type="email"
            />
            <input
              placeholder="Enter your Phone No."
              className=" px-4 py-2 border rounded-md sm:max-w-md focus:border-blue-500 focus:ring-blue-500"
              type="email"
            />
            <Button title={"Submit"} className="!m-0" />
          </div>
        </div>
      </div>
      <div className=" bg-dark-blue [&>*]:text-white ">
        <div className="max-w-[82%] w-full py-[119px] mx-auto  flex gap-20 ">
          <div className="flex flex-col gap-5">
            <img src={logo} width={170} className=" object-contain"></img>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit amet
              voluptatem totam rem aperiam.
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="inline mr-1"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>{" "}
              +012 3456 789 89
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-semibold text-lg mb-[35px]">Resources</span>
            <ul className="flex flex-col gap-3 w-max">
              <li>Get Themes</li>
              <li>Our Products</li>
              <li>User Strategy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-semibold text-lg mb-[35px]">Company</span>
            <ul className="flex flex-col gap-3 w-max">
              <li>About Us</li>
              <li>Contact &amp; Support</li>
              <li>Success History</li>
              <li>Setting &amp; Privacy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-semibold text-lg mb-[35px]">Quick Links</span>
            <ul className="flex flex-col gap-3 w-max">
              <li>Premium Support</li>
              <li>Our Services</li>
              <li>Know Our Team</li>
              <li>Download App</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-semibold text-lg mb-[35px]">
              Follow Us On
            </span>
            <div className="flex space-x-4 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <span className="pt-[25px] text-[#637381]">© 2024 Ollkom</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
