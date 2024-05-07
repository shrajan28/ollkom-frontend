import React from "react";
import Header from "./Components/Header";
import Button from "./Components/Button";
import ButtonWhite from "./Components/ButtonWhite";
import Card from "./Components/Card";
import ImageCard from "./Components/ImageCard";
import {
  BeakerIcon,
  GlobeAltIcon,
  BookOpenIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

import * as homeBasic from "../src/assets/home-primary.png";
import * as funnelImg from "../src/assets/funnelImg.png";
import * as backoffice from "../src/assets/backoffice.png";
import BulletPoint from "./Components/BulletPoint";
import * as users from "../src/assets/users.png";
import * as video from "../src/assets/video.png";
import Accordion from "./Components/Accordion";
type HomeProps = {
  title: string;
};

const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <div className="[&>*]:text-white">
      <div className="flex flex-col bg-gradient-to-b py-16    from-dark-blue to-light-blue md:flex-row items-center justify-around  ">
        <div className="max-w-[82%] mx-auto flex items-center gap-[68px]">
          <div className="flex justify-start  ">
            <div className="flex flex-col gap-7">
              <p className="text-5xl font-bold ">
                Adding the <span className="text-blue-600">"E"</span> <br />{" "}
                solution to your commerce needs.
              </p>
              <p className=" leading-[24px] mb-[2px]">
                Ollkom is actively providing support to empower the upcoming
                generation of entrepreneurs, cater to the needs of the largest
                brands worldwide, and assist individuals across all levels of
                business in between.{" "}
              </p>
              <div className="flex gap-4 w-min">
                <Button title={"Start Free Trial"} />
                <ButtonWhite title={"Get in Touch"} />
              </div>
            </div>
          </div>
          <img src={homeBasic.default}></img>
        </div>
      </div>
      <div className="  [&>*]:text-white bg-light-blue  mx-auto ">
        <div className="max-w-[82%] mx-auto pb-16 border-b border-[#8899A8]">
          <div className=" flex gap-3 justify-between">
            <div className="text-3xl font-bold">LOGO </div>
            <div className="text-3xl font-bold">LOGO </div>
            <div className="text-3xl font-bold">LOGO </div>
            <div className="text-3xl font-bold">LOGO </div>
            <div className="text-3xl font-bold">LOGO </div>
            <div className="text-3xl font-bold">LOGO </div>
            <div className="text-3xl font-bold">LOGO </div>
          </div>
        </div>
      </div>
      <div className="  mx-auto   bg-gradient-to-b from-light-blue to-dark-blue  ">
        <div className="max-w-[82%] mx-auto border-b py-16 border-[#8899A8] ">
          <div className="flex flex-col gap-3 pb-16">
            <span className="text-5xl font-bold  ">What We Offer</span>
            <p>
              There is many variations of pasages of lorem ipsum available{" "}
              <br />
              but the majority have suffered alternation in some form.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-[30px] gap-y-[35px]  justify-items-center ">
            <Card
              icon={<BeakerIcon className="h-[48px] w-[48px]  " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics."
              }
            />
            <Card
              icon={<GlobeAltIcon className="h-[48px] w-[48px] " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics."
              }
            />
            <Card
              icon={<BookOpenIcon className="h-[48px] w-[48px]  " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics."
              }
            />
            <Card
              icon={<CodeBracketIcon className="h-[48px] w-[48px]  " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics."
              }
            />
            <Card
              icon={<BeakerIcon className="h-[48px] w-[48px] " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics."
              }
            />
            <Card
              icon={<BeakerIcon className="h-[48px] w-[48px] " />}
              heading={"Refreshing Design"}
              description={
                "We dejoy working with disning clients, people for whom qualuty, service, integrity & aesthetics."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row items-center bg-dark-blue justify-between py-16">
        <div className="max-w-[82%] mx-auto flex gap-16">
          <img src={funnelImg.default}></img>
          <div className="flex justify-start py-16">
            <div className="flex flex-col gap-7">
              <span className="font-semibold text-5xl ">
                From first touch to full funnel
              </span>

              <BulletPoint />
              <BulletPoint />
              <BulletPoint />
              <BulletPoint />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row items-center bg-dark-blue justify-between py-16">
        <div className="max-w-[82%] mx-auto flex gap-16">
          <div className="flex justify-start py-16">
            <div className="flex flex-col gap-7">
              <span className="font-semibold text-5xl ">
                Streamline your back office
              </span>
              <BulletPoint />
              <BulletPoint />
              <BulletPoint />
              <BulletPoint />
            </div>
          </div>
          <img src={backoffice.default}></img>
        </div>
      </div>
      <div className="flex flex-col py-16   md:flex-row items-center bg-gradient-to-b from-dark-blue to-[#13376E] justify-between ">
        <div className="max-w-[82%] mx-auto flex gap-[99px]">
          <img src={users.default}></img>
          <div className="flex justify-start">
            <div className="">
              <span className="text-[40px] leading-[48px] font-bold ">
                Discover why millions of entrepreneurs chose Ollkom to build
                their business — <br />
                from hello world to IPO.
              </span>
              <p className="pt-[18px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <div className="grid grid-cols-2 py-[30px] gap-x-4 gap-y-[80px]">
                <div className="flex gap-6">
                  <div className="w-[4px] bg-gradient-to-b from-[#1A68DD] to-[#9EACC6]"></div>
                  <div className="flex flex-col gap-[6px]">
                    <span className="font-semibold text-[28px]">Millions</span>
                    <span className="text-lg">of merchants worldwide</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-[4px] bg-gradient-to-b from-[#1A68DD] to-[#9EACC6]"></div>
                  <div className="flex flex-col gap-[6px]">
                    <span className="font-semibold text-[28px]">170+</span>
                    <span className="text-lg">countries represented</span>
                  </div>
                </div>{" "}
                <div className="flex gap-6">
                  <div className="w-[4px] bg-gradient-to-b from-[#1A68DD] to-[#9EACC6]"></div>
                  <div className="flex flex-col gap-[6px]">
                    <span className="font-semibold text-[28px]">10%</span>
                    <span className="text-lg">of total GCC ecommerce</span>
                  </div>
                </div>{" "}
                <div className="flex gap-6">
                  <div className="w-[4px] bg-gradient-to-b from-[#1A68DD] to-[#9EACC6]"></div>
                  <div className="flex flex-col gap-[6px]">
                    <span className="font-semibold text-[28px]">$444B</span>
                    <span className="text-lg">global economic activity</span>
                  </div>
                </div>
              </div>
              <div className=" w-2/3">
                <Button title={"Get Started"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-16   md:flex-row items-center bg-gradient-to-b to-dark-blue from-[#13376E] justify-between ">
        <div className="max-w-[82%] mx-auto flex flex-col items-center gap-16">
          <span className="font-semibold text-[40px] text-center">
            Hear what other companies have to <br /> say about Ollkom
          </span>
          <div className="flex flex-col gap-[35px]">
            <img src={video.default}></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-16    md:flex-row items-center bg-gradient-to-b from-dark-blue to-[#13376E] justify-between ">
        <div className="max-w-[82%] mx-auto mb-16 flex flex-col items-center gap-16">
          <span className="font-semibold text-[40px]">
            Frequently asked questions
          </span>
          <div className="flex flex-col gap-[35px]">
            <Accordion
              title="What is Ollkom and how does it work?"
              description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <Accordion
              title="What is Ollkom and how does it work?"
              description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />{" "}
            <Accordion
              title="What is Ollkom and how does it work?"
              description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />{" "}
            <Accordion
              title="What is Ollkom and how does it work?"
              description="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
