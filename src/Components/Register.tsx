import logoblue from "../assets/logoblue.png";
import Input from "./common/Input";
import Button from "./Button";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google.png";
function Register() {
  return (
    <div className=" bg-gradient-to-b from-[#111928] to-[#1562D6] py-24">
      {" "}
      <div className="bg-white flex justify-center items-center  flex-col gap-10 p-[60px] max-w-[520px] mx-auto ">
        <img
          className="object-contain"
          height={40}
          width={162}
          src={logoblue}
        ></img>
        <div className="flex flex-col gap-6 w-full">
          <Input placeholder="Email" type="email" onChange={() => {}} />
          <Input placeholder="Full Name" type="texr" onChange={() => {}} />
          <Input placeholder="Password" type="password" onChange={() => {}} />

          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={() => {}}
          />
          <Button className="w-full">Sign In</Button>
        </div>
        <div className="pt-[25px] border-t w-full border-[#DFE4EA] before:absolute relative before:top-[-15%] before:bg-white before:px-3 before:left-[35%] before:content-['Connect_With'] before:text-[#8899A8] flex gap-5">
          <Button className="w-full">
            <img src={facebook}></img>
          </Button>
          <Button className="w-full bg-[#1C9CEA]">
            <img src={twitter}></img>
          </Button>
          <Button className="w-full bg-[#D64937]">
            <img src={google}></img>
          </Button>
        </div>
        <div className=" flex flex-col gap-4">
          <span className="hover:underline text-center text-[#1562D6]">
            Forgot Password?
          </span>{" "}
          <span className="text-[#8899A8]">
            {" "}
            Not a member yet?
            <span className="text-[#1562D6] hover:underline"> Sign Up </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
