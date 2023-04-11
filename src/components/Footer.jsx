import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-black ">
        <div className="container text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <img className="mb-4" src="./images/logo.png" alt="" />
              <p className="text-justify text-white-50">
                Law is a set of rules that are created and are enforceable by
                social or governmental institutions to regulate behavior, with
                its precise definition a matter of longstanding debate.
              </p>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h4 className="mb-4">Useful links</h4>
              <ul className="list-none">
                <li>
                  <a className="text-white-50 hover:text-white" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white-50 hover:text-white" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-white-50 hover:text-white" href="#service">
                    Cases
                  </a>
                </li>
                <li>
                  <a className="text-white-50 hover:text-white" href="#blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-white-50 hover:text-white" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h4 className="mb-4">Contact Now</h4>
              <ul className="list-none">
                <li className="text-white-50">
                  555 4th 5t NW, Washington DC 20530, United States
                </li>
                <li className="text-white-50 mt-2">+88 01750 000 000</li>
                <li className="text-white-50 mt-2">+88 01750 000 000</li>
                <li className="text-white-50 mt-2">info@gmail.com</li>
                <li className="text-white-50 mt-2">info@gmail.com</li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-1">
              <h4 className="mb-4">Subscribe</h4>
              <p className="text-justify text-white-50 w-75 mx-auto mx-md-0">
                Law is a set of rules that are created and are enforceable by
                social or governmental institutions to regulate behavior, with
                its precise definition a matter of longstanding debate
              </p>
              <div className="flex items-center mt-2">
                <input
                  placeholder="Your Name"
                  className="bg-body-secondary text-white-50 w-3/4 md:w-3/5 border-0 rounded-l-md py-3 px-4"
                  type="text"
                  name=""
                  id=""
                />
                <button
                  className="btn-color w-1/4 md:w-2/5 h-full border-0 py-3 px-4"
                  type="submit">
                  <i className="far fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
