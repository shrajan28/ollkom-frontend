import React, { useState } from "react";
import Button from "../Components/Button";
import ButtonWhite from "../Components/ButtonWhite";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  BeakerIcon,
  GlobeAltIcon,
  BookOpenIcon,
  CodeBracketIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Card from "../Components/Card";

type SubscriptionProps = {
  title: any;
};

const Subscription: React.FC<SubscriptionProps> = ({ title }) => {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);

  return (
    <div className="!text-black">
      <div className="space-y-8">
        <div className="bg-gradient-to-b from-dark-blue via-light-blue to-white ">
          <div className=" p-6 sm:p-10 lg:p-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold leading-9 text-center sm:text-3xl lg:text-4xl text-white">
              Start for free, then enjoy <br /> SR15/month for 3 months
            </h2>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-end">
              <input
                placeholder="Enter your email"
                className=" px-4 py-2 border rounded-md sm:max-w-md focus:border-blue-500 focus:ring-blue-500"
                type="email"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                <Button title={"Submit"} />
              </button>
            </div>
            <p className="mt-2 text-sm text-center text-white">
              By entering your email, you agree to receive marketing emails from
              Ollkorn
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <Button title={"Pay Monthly"} />
              <div className="w-1/4">
                <ButtonWhite title={"Pay Yearly (10% Off)"} />
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
              <div
                className="rounded-lg border text-card-foreground bg-[#f3f4f6] shadow-lg"
                data-v0-t="card"
              >
                <div className="space-y-1.5 p-6 flex flex-col ">
                  <div className="flex  justify-between mt-3">
                    <div className="whitespace-nowrap  font-bold   text-blue-600">
                      Basic
                    </div>
                    <div className="bg-blue-600 border rounded-full px-2 text-white font-semibold">
                      Most Popular
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-1 text-2xl font-bold">
                    SR199 <span className="text-sm text-gray-600">/ year</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Perfect for using in a personal website or a client project.
                  </p>
                </div>
                <div className="p-6 mt-3 space-y-1 text-sm">
                  <p>1 User</p>
                  <p>All UI components</p>
                  <p>Lifetime access</p>
                  <p>Free updates</p>
                  <p>Use on 1 (one) project</p>
                  <p>3 Months support</p>
                </div>
                <div className="flex  p-6 mt-4 justify-center">
                  <ButtonWhite title={"Choose Personal"} />
                </div>
              </div>
              <div
                className="rounded-lg border text-card-foreground bg-white shadow-lg"
                data-v0-t="card"
              >
                <div className="space-y-1.5 p-6 flex flex-col ">
                  <div className="flex  justify-between mt-3">
                    <div className="whitespace-nowrap  font-bold   text-blue-600">
                      SME
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-1 text-2xl font-bold">
                    SR199 <span className="text-sm text-gray-600">/ year</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Perfect for using in a personal website or a client project.
                  </p>
                </div>
                <div className="p-6 mt-3 space-y-1 text-sm">
                  <p>1 User</p>
                  <p>All UI components</p>
                  <p>Lifetime access</p>
                  <p>Free updates</p>
                  <p>Use on 1 (one) project</p>
                  <p>3 Months support</p>
                </div>
                <div className="flex  p-6 mt-4 justify-center w-full">
                  <Button title={"Try For Free"} />
                </div>
              </div>
              <div
                className="rounded-lg border text-card-foreground bg-white shadow-lg"
                data-v0-t="card"
              >
                <div className="space-y-1.5 p-6 flex flex-col ">
                  <div className="flex  justify-between mt-3">
                    <div className="whitespace-nowrap  font-bold   text-blue-600">
                      Advanced
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-1 text-2xl font-bold">
                    SR199 <span className="text-sm text-gray-600">/ year</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Perfect for using in a personal website or a client project.
                  </p>
                </div>
                <div className="p-6 mt-3 space-y-1 text-sm">
                  <p>1 User</p>
                  <p>All UI components</p>
                  <p>Lifetime access</p>
                  <p>Free updates</p>
                  <p>Use on 1 (one) project</p>
                  <p>3 Months support</p>
                </div>
                <div className="flex  p-6 mt-4 justify-center">
                  <ButtonWhite title={"Choose Personal"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold leading-9  sm:text-3xl lg:text-4xl text-black">
              Enjoy These Features on <br /> all of the AbovePlan
            </h2>
            <p className="text-sm m-2">
              There is many variations of pasages of lorem ipsum available{" "}
              <br />
              but the majority have suffered alternation in some form.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 justify-items-center pb-16 max-w-5xl mx-auto ">
            <Card
              icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  "
              }
              className={"bg-white"}
            />
            <Card
              icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  "
              }
              className={"bg-white"}
            />
            <Card
              icon={<BookOpenIcon className="h-[50px] w-[50px] p-1 " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  "
              }
              className={"bg-white"}
            />
            <Card
              icon={<CodeBracketIcon className="h-[50px] w-[50px] p-1 " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom "
              }
              className={"bg-white"}
            />
            <Card
              icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  "
              }
              className={"bg-white"}
            />
            <Card
              icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  "
              }
              className={"bg-white"}
            />
          </div>

          <div className="pb-10">
            <h2 className="text-2xl font-bold leading-9 text-center  sm:text-3xl lg:text-4xl text-black mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className=" rounded-lg overflow-hidden shadow-lg p-6 space-y-4  bg-white">
                <div className="flex gap-5">
                  <div
                    className="bg-blue-200 w-5 h-5 "
                    onClick={() => setArrow1(!arrow1)}
                  >
                    {arrow1 ? (
                      <ChevronUpIcon className="h-[25px] w-[30px] p-1 pr-3 pb-2" />
                    ) : (
                      <ChevronDownIcon className="h-[25px] w-[30px] p-1 pr-3 pb-2" />
                    )}
                  </div>
                  <div className="font-bold">
                    Are There any Transaction Fee ?
                  </div>
                </div>
                {arrow1 ? (
                  <div>
                    We dejoy working with disignig for whom ,We dejoy working
                    with disignig for whom disignig for whom ,We dejoy working
                    with disignig for whom
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className=" rounded-lg overflow-hidden shadow-lg p-6 space-y-4   bg-white">
                <div className="flex gap-5">
                  <div
                    className="bg-blue-200 w-5 h-5 "
                    onClick={() => setArrow2(!arrow2)}
                  >
                    {arrow2 ? (
                      <ChevronUpIcon className="h-[25px] w-[30px] p-1 pr-3 pb-2" />
                    ) : (
                      <ChevronDownIcon className="h-[25px] w-[30px] p-1 pr-3 pb-2" />
                    )}
                  </div>
                  <div className="font-bold">
                    What is a Thirt party payment Provider ?
                  </div>
                </div>
                {arrow2 ? (
                  <div>
                    We dejoy working with disignig for whom ,We dejoy working
                    with disignig for whom disignig for whom ,We dejoy working
                    with disignig for whom
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className=" rounded-lg overflow-hidden shadow-lg p-6 space-y-4  bg-white">
                <div className="flex gap-5">
                  <div
                    className="bg-blue-200 w-5 h-5 "
                    onClick={() => setArrow3(!arrow3)}
                  >
                    {arrow3 ? (
                      <ChevronUpIcon className="h-[25px] w-[30px] p-1 pr-3 pb-2" />
                    ) : (
                      <ChevronDownIcon className="h-[25px] w-[30px] p-1 pr-3 pb-2" />
                    )}
                  </div>
                  <div className="font-bold">
                    Are There any Credit Card Fee ?
                  </div>
                </div>
                {arrow3 ? (
                  <div>
                    We dejoy working with disignig for whom ,We dejoy working
                    with disignig for whom disignig for whom ,We dejoy working
                    with disignig for whom
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
