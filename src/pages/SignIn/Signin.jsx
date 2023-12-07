// import { useState } from "react";
import { useState } from "react";
import signin from "../../assets/signin.png";
import { Eye, EyeOff } from "lucide-react";

function SignIn() {
  const [typePassword, setTypePassword] = useState("password");

  function changeTypePassword() {
    if (typePassword === "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  }

  return (
    <div className="h-screen md:flex md:flex-row">
      <div
        style={{ "--image-url": ` url(${signin}) ` }}
        className="bg-[image:var(--image-url)] bg-center bg-contain bg-no-repeat basis-[50%] bg-[#F3F5F7] md:bg-contain py-8"
      >
        <h6 className="text-center text-2xl font-medium">3legant.</h6>
      </div>

      <div className="flex flex-col py-10 px-5 gap-y-6">
        <h1 className="text-[40px]">Sign In</h1>
        <p className="text-[#6C7275] text-base">
          Don’t have an accout yet?{" "}
          <span className="text-[#38CB89] text-base font-semibold">
            Sign in
          </span>
        </p>

        <input
          type="text"
          placeholder="Your username or email address"
          name=""
          id=""
          className="border-b border-b-[#6C7275] border-solid pb-[8px]"
        />

        <div className=" pb-[8px] flex border-b border-b-[#6C7275] border-solid ">
          <input
            type={typePassword}
            placeholder="Password"
            name=""
            id=""
            className="grow "
          />
          <span>
            {typePassword === "text" ? (
              <EyeOff onClick={changeTypePassword} />
            ) : (
              <Eye onClick={changeTypePassword} />
            )}
          </span>
        </div>

        <div className="flex items-center gap-x-3">
          <input type="checkbox" name="" id="" className="" />
          <label htmlFor="confirm" className=" text-xs text-[#6C7275]">
            Remember me
          </label>
          <p className="text-xs font-semibold 3 ">Forgot password?</p>
        </div>
        <button className="bg-black text-[#ffffff] rounded-md  ">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
