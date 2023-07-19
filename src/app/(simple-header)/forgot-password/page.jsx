import Footer from "@/components/footer/Footer";
import Logo from "@/components/logo/Logo";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/form-element/Input";
import Select from "@/components/ui/form-element/Select";
import React from "react";

function Forgot() {
  return (
    <div
      className="flex h-full justify-center items-center w-full"
      style={{ height: "93.5vh" }}
    >
      <div style={{ width: "30%" }}>
        <div
          className="shadow border mb-10 p-10 rounded-md"
          style={{ backgroundColor: "var(--bgc)" }}
        >
          <div className="text-center">
            <Logo style={{ width: "100px", margin: "auto" }} />
            <h1
              className="text-3xl font-bold mt-3"
              style={{ color: "var(--primary)" }}
            >
              Login Recovery Request
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Please provide either <b>Username</b> or <b>Cellphone</b> to
              recover your Login.
            </p>
          </div>
          <div className="mt-5 border p-5 rounded-md">
            <h1
              className="text-xl border-b pb-2"
              style={{ color: "var(--primary)" }}
            >
              Recovery Request
            </h1>
            <div className="mt-4">
              <Input label="Username" />
              <div className="my-4 flex gap-3 items-center justify-center">
                <Select style={{ width: "230px" }} label="Code" required>
                  <option value="">--Select--</option>
                  <option value="+26">BW(+26)</option>
                </Select>
                <Input label="Cellphone Number" />
              </div>
              <div className="flex justify-center gap-3">
                <Button type="submit" title="Submit" className="px-10" />
                <Button type="link" link="/" title="Cancel" className="px-10" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Forgot;
