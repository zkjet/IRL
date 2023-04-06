import { ConnectButton } from "@rainbow-me/rainbowkit";
import Footer from "./components/Footer";
import pinkpng from "./assets/pinkpng.png";

const MyApp = () => {
  return (
    <div className="">
      <div className="navbar bg-gradient-to-r from-rose-700 to-pink-600 text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="http://www.www.com">Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between" href="http://www.www.com">
                  IRL Contracts
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="http://www.www.com">Landscaping</a>
                  </li>
                  <li>
                    <a href="http://www.www.com">Car Purchase</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://www.www.com">Custom Contract</a>
              </li>
            </ul>
          </div>
          <a
            className="btn btn-ghost normal-case text-xl"
            href="http://www.www.com"
          >
            IRL Contracts
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="http://www.www.com">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="http://www.www.com">
                IRL Contracts
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="http://www.www.com">Landscaping</a>
                </li>
                <li>
                  <a href="http://www.www.com">Car Purchase</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://www.www.com">Custom Contract</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ConnectButton />
        </div>
      </div>
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-7xl font-bold color-white">IRL Contracts</h1>
              <br />
              <button className="btn btn-lg btn-primary bg-gradient-to-r from-rose-700 to-pink-600">
                Enter dApp
              </button>
              <p className="py-6">Interact with testnet live contracts!</p>
              <img src={pinkpng} alt="video" />
              <h3 className="text-1xl font-bold">
                Landscaping, Car Purchase Agreements, Custom Contracts
              </h3>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default MyApp;
