import React from 'react';
import Button from './Button';

import logo from '../assets/logo.png' 

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  
  return (
    <div className="bg-dark-blue text-white  ">
        <div className="max-w-[82%] mx-auto py-[10px] flex justify-between items-center border-b   ">
            <div className="flex items-center gap-4">
                <span className=" flex font-[500]">About</span>
                <span className='text-border-grey text-lg'>|</span>
                <span className=" flex font-[500]" >Press</span>
            </div>
            <div className="flex items-center gap-4">
                <span className=" flex font-[500]">Contact Sales</span>
                <span className='text-border-grey text-lg'>|</span>
                <span className=" flex font-[500]" >SAR</span>
            </div>
        </div>
        <div className="max-w-[82%] py-6 mx-auto  flex justify-between items-center   ">
            <div className="flex items-center gap-8 font-[500] ">
                <button className="rounded-full border border-blue-700 bg-transparent px-4 py-2  text-white">Home</button>
                <span >Solution</span>
                <span >Pricing</span>
            </div>
           <img src={logo}></img>
            <div className="flex  items-center gap-6">
                <span className=" flex font-[500]">Sign In</span>
                <Button title={"Start Free Trial"} />
            </div>
        </div>
    </div>
  )
};

export default Header;