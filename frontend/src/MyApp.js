import { ConnectButton } from "@rainbow-me/rainbowkit";

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
                <a href="http://www.www.com">Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between" href="http://www.www.com">
                  Parent
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
                    <a href="http://www.www.com">Submenu 1</a>
                  </li>
                  <li>
                    <a href="http://www.www.com">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://www.www.com">Item 3</a>
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
              <a href="http://www.www.com">Item 1</a>
            </li>
            <li tabIndex={0}>
              <a href="http://www.www.com">
                Parent
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
                  <a href="http://www.www.com">Submenu 1</a>
                </li>
                <li>
                  <a href="http://www.www.com">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://www.www.com">Item 3</a>
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
              <h1 className="text-5xl font-bold">Welcome to IRL Contracts</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-rose-700 to-pink-600">
                Get Started
              </button>
              <div className="flex w-full">
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                  content
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                  content
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default MyApp;
