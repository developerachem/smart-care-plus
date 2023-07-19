import Footer from "@/components/footer/Footer";
import Date from "@/components/ui/form-element/Date";
import Input from "@/components/ui/form-element/Input";
import NRC from "@/components/ui/form-element/NRC";
import Password from "@/components/ui/form-element/Password";
import Select from "@/components/ui/form-element/Select";
import Textarea from "@/components/ui/form-element/Textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { XCircle, CheckCircle } from "react-feather";

function SignUp() {
  return (
    <div className="my-10">
      <div className="flex justify-center ">
        <div
          className=" mt-10 mb-3 border shadow-lg p-5 rounded-md"
          style={{ backgroundColor: "var(--bgc)" }}
        >
          <form action="">
            <div className="text-center mb-5">
              <Image
                src="https://staging-sc.arcapps.org/assets/img/zambia.png"
                alt=""
                className="m-auto"
                width={100}
                height={100}
              />
              <h1
                className="text-3xl mt-3 font-bold"
                style={{ color: "var(--primary)" }}
              >
                User Profile Registration
              </h1>
              <p className="text-sm text-gray-500 border-b pb-3">
                Fields marked by <span style={{ color: "red" }}>*</span> are
                mandatory
              </p>
            </div>
            <div className="p-5 mt-5 border rounded-md">
              <h1 style={{ color: "var(--primary)" }} className="mb-2 text-xl">
                Personal Information
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <Input required label="First Name" />
                <Input required label="Surname" />
                <Date required label="Date of Birth" />
                <Select label="Sex" required>
                  <option value="">--Select--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
                <div>
                  <Input required label="Designation" />
                </div>
                <div>
                  <NRC label="NRC" required />
                  <div className="mt-1">
                    <label
                      style={{ cursor: "pointer" }}
                      className="flex items-center gap-2"
                    >
                      <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                      I do not have NRC
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 mt-5 border rounded-md">
              <h1 style={{ color: "var(--primary)" }} className="mb-2 text-xl">
                Contact Information
              </h1>
              <Textarea label="Contact Address" required />
              <div className="flex gap-5 mt-3">
                <div style={{ width: "150px" }}>
                  <Select>
                    <option value="">--select--</option>
                  </Select>
                </div>
                <Input label="Cellphone" />
              </div>
            </div>
            <div className="p-5 mt-5 border rounded-md">
              <h1 style={{ color: "var(--primary)" }} className="mb-2 text-xl">
                Login Information
              </h1>
              <Input label="Username" required />
              <Password label="Password" required className="my-3" />
              <Password label="Confirm Password" required />
            </div>

            <div className="flex gap-2 mt-5 justify-center items-center">
              <button
                className="btn w-40 text-white"
                style={{ backgroundColor: "var(--primary)" }}
                type="submit"
              >
                <CheckCircle size={20} /> Submit
              </button>
              <Link href="/" className="btn btn-neutral w-40">
                <XCircle size={20} /> Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
