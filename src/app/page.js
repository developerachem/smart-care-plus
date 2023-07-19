import loginCss from "@/app/login.module.css";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import Login from "./components/Login";

export default function Home() {
  return (
    <>
      <div className={`light ${loginCss.loginPage}`}>
        <div className={loginCss.pageWrapper}>
          <div style={{ width: "65%" }}>
            <h1
              className="text-center text-5xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              Smart Care Plus
            </h1>
            <Image
              src="/login.png"
              alt="smart-care image"
              width={1000}
              height={200}
            />
          </div>
          <div>
            <div className={loginCss.loginCard}>
              <Image src="/Logo.ico" alt="" width={30} height={30} />
              <h1 className="text-xl">Welcome Back to Smart Care Plus</h1>
              <p className="text-center text-sm mt-2">
                Enter your <b>Username</b> & <b>Password</b> to Login.
              </p>
              <Login />
              <div className="flex justify-between items-center mt-3">
                <small>Version-2.0.0</small>
                <Link
                  className="text-right text-sm block"
                  style={{ color: "var(--primary)" }}
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
