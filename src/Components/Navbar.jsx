/** @format */
"use-client";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setHasToken(token !== null);
    }
  }, []);

  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-md navbar-default  bg-light">
          <div className="container">
            <Link href={"/"} className="navbar-brand">
              <img
                src="/assets/dist/image/logo-no-background.png"
                alt="PETDOPTION LOGO"
                title="PETDOPTION LOGO"
              />
            </Link>
            <div className="navbar-toolbar d-none d-md-flex align-items-center order-lg-3">
              

             
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbar-default"
            >
              <span className="fas fa-bars" />
            </button>
            <div
              className="offcanvas offcanvas-start p-4 p-lg-0"
              id="navbar-default"
            >
              <div className="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
                <Link href={"/"} className="navbar-brand">
                  <img
                    src="/assets/dist/image/logo-no-background.png"
                    alt="PETDOPTION LOGO"
                    title="PETDOPTION LOGO"
                  />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <ul className="navbar-nav ms-md-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link active" href={"/"}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" href={"/list-pets"}>
                    Adopt
                  </Link>
                </li>

                {hasToken && <li className="nav-item">
                  <Link className="nav-link" href={"/favourites"}>
                    Favorites
                  </Link>
                </li>}

                <li className="nav-item">
                  <Link className="nav-link" href={"/about"}>
                    About
                  </Link>
                </li>
                 {hasToken ? (
                <span
                  className="nav-link d-flex gap-2 flex-column flex-md-row align-items-center pt-0"
                  style={{ color: "#78258B" }}
                >
                  <UserOutlined />
                  {localStorage.getItem("email")}
                  <Button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        localStorage.removeItem("email");
                        localStorage.removeItem("token");
                      }
                      window.location.replace("/");
                    }}
                  >
                    Logout
                  </Button>
                </span>
              ) : (
                <Link
                  href="/login"
                  className="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin"
                >
                  <i className="fas fa-user me-2" />
                  Login
                </Link>
              )}
                 
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
