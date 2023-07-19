import Footer from "@/components/footer/Footer";
import Logo from "@/components/logo/Logo";
import Button from "@/components/ui/button/Button";
import Select from "@/components/ui/form-element/Select";
import Image from "next/image";
import React from "react";

function RequestFacility() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "93.5vh" }}
    >
      <div style={{ width: "400px" }}>
        <div
          className="border rounded-md p-5 shadow-md w-full"
          style={{ backgroundColor: "var(--bgc)" }}
        >
          {/* <Image
            src="https://staging-sc.arcapps.org/assets/img/Logo.ico"
            alt=""
            className="w-28 m-auto"
          /> */}
          <Logo className="m-auto" />
          <h1
            className="text-3xl font-bold text-center mt-5"
            style={{ color: "var(--primary)" }}
          >
            Request Facility Login
          </h1>
          <p className="text-center text-sm text-gray-500 mt-2">
            Please select a Facility to send login request.
          </p>

          <div className="mt-5">
            <Select label="Province" required>
              <option value="">--Select--</option>
            </Select>
            <div className="my-3">
              <Select label="District" required>
                <option value="">--Select--</option>
              </Select>
            </div>
            <Select label="Facility" required>
              <option value="">--Select--</option>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full mt-3"
            title="Submit Request"
          />
          <Button title="Cancel" className="w-full mt-3" link="/" type="link" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RequestFacility;
