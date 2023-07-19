"use client";
import Footer from "@/components/footer/Footer";
import Logo from "@/components/logo/Logo";
import Button from "@/components/ui/button/Button";
import Date from "@/components/ui/form-element/Date";
import Input from "@/components/ui/form-element/Input";
import NRC from "@/components/ui/form-element/NRC";
import Select from "@/components/ui/form-element/Select";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function Client() {
  const [nrc, setNrc] = useState(null);

  // tab active handler
  const handleTabActive = (e) => {
    if (e.target.classList.contains("tab_active")) {
      e.target.classList.remove("tab_active");
    } else {
      e.target.classList.add("tab_active");
    }
  };
  return (
    <div>
      <div className="mt-10 m-auto mb-10" style={{ width: "100%" }}>
        <div className="text-center border-b mb-3">
          <Logo style={{ width: "110px" }} className="m-auto" />
          <h1
            className="my-5 text-4xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            Search Client
          </h1>
        </div>
        <div>
          <Button
            title="Register Client"
            type="link"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--white)",
            }}
            className="text-white"
            link="/user-signup"
          />
        </div>
        <div
          className="card shadow border mt-5 rounded-md"
          style={{ backgroundColor: "var(--bgc)" }}
        >
          <div className="card-body">
            <Tabs>
              <TabList>
                <div className="btn-group w-full">
                  <Tab
                    style={{
                      width: "25%",
                      backgroundColor: "var(--gray)",
                      borderColor: "var(--border)",
                      color: "var(--btn-text)",
                    }}
                    className="btn tab_active"
                    onClick={handleTabActive}
                  >
                    NRC
                  </Tab>
                  <Tab
                    style={{
                      width: "25%",
                      backgroundColor: "var(--gray)",
                      borderColor: "var(--border)",
                      color: "var(--btn-text)",
                    }}
                    className="btn"
                    onClick={handleTabActive}
                  >
                    Cellphone
                  </Tab>
                  <Tab
                    style={{
                      width: "25%",
                      backgroundColor: "var(--gray)",
                      borderColor: "var(--border)",
                      color: "var(--btn-text)",
                    }}
                    className="btn"
                    onClick={handleTabActive}
                  >
                    NUPN
                  </Tab>
                  <Tab
                    style={{
                      width: "25%",
                      backgroundColor: "var(--gray)",
                      borderColor: "var(--border)",
                      color: "var(--btn-text)",
                    }}
                    className="btn"
                    onClick={handleTabActive}
                  >
                    Advance Search
                  </Tab>
                </div>
              </TabList>

              <TabPanel>
                <form action="" className="w-5/6 m-auto">
                  <div className="py-10 mt-5 flex gap-3 items-center justify-center">
                    <NRC state={nrc} setState={setNrc} required />
                    <Button type="submit" title="Search" className="px-10" />
                  </div>
                </form>
              </TabPanel>
              <TabPanel>
                <form action="" className="w-5/6 m-auto">
                  <div className="py-10 mt-5 flex gap-3 items-center justify-center">
                    <Select style={{ width: "230px" }} label="Code" required>
                      <option value="">--Select--</option>
                      <option value="+26">BW(+26)</option>
                    </Select>
                    <Input label="Cellphone Number" required />
                    <Button type="submit" title="Search" className="px-10" />
                  </div>
                </form>
              </TabPanel>
              <TabPanel>
                <form action="" className="w-5/6 m-auto">
                  <div className="py-10 mt-5 flex gap-3 items-center justify-center">
                    <Input label="NUPN" required />
                    <Button type="submit" title="Search" className="px-10" />
                  </div>
                </form>
              </TabPanel>
              <TabPanel>
                <form action="" className="w-5/6 m-auto py-10">
                  <div className=" mt-5 mb-5 grid grid-cols-2 gap-3 items-center justify-center">
                    <Input label="First Name" required />
                    <Input label="Surname" required />
                    <Input label="NUPN" required />
                    <Date label="Date Of Birth" />
                  </div>
                  <div className="text-center">
                    <Button
                      type="submit"
                      title="Search"
                      icon={<BiSearch />}
                      className="px-10"
                    />
                  </div>
                </form>
              </TabPanel>
            </Tabs>
          </div>
        </div>

        <div
          className="card shadow border rounded-md mt-10 p-5"
          style={{ backgroundColor: "var(--bgc)" }}
        >
          <h2 style={{ color: "var(--text)" }}>Rachel Green</h2>
          <div className="mt-2" style={{ color: "var(--text)" }}>
            <b>NUPN</b> : 2306-02123P-00001-1
          </div>
          <div className="flex gap-10 my-2">
            <p style={{ color: "var(--text)" }}>
              <b>DOB</b> : 13/06/2000
            </p>
            <p style={{ color: "var(--text)" }}>
              <b>Sex</b> : Female
            </p>
            <p style={{ color: "var(--text)" }}>
              <b>NRC</b> : 111111/11/1
            </p>
            <p style={{ color: "var(--text)" }}>
              <b>Cellphone</b> : 260 2312312222
            </p>
          </div>
          <div>
            <b>Address</b> :
          </div>
          <div className="flex gap-2">
            <Button
              className="btn-sm rounded-md font-medium text-xs"
              title="Edit Profile"
              type="link"
              link="/"
              style={{
                color: "var(--white)",
                backgroundColor: "var(--primary)",
              }}
            />
            <Button
              className="btn-sm rounded-md font-medium text-xs"
              title="Admit"
              type="link"
              link="/"
              style={{
                color: "var(--white)",
                backgroundColor: "var(--primary)",
              }}
            />
            <Button
              className="btn-sm rounded-md font-medium text-xs"
              title="Service Queue"
              type="link"
              link="/"
              style={{
                color: "var(--white)",
                backgroundColor: "var(--primary)",
              }}
            />
            <Button
              className="btn-sm rounded-md font-medium text-xs"
              title="Attend to Patient"
              type="link"
              link="/"
              style={{
                color: "var(--white)",
                backgroundColor: "var(--primary)",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Client;
