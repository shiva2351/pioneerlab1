import { IoIosMenu, IoIosSearch } from "react-icons/io";

import "./index.css";

const SideBar = () => {
  console.log("kk");
  return (
    <nav className="sidebar">
      <ul className="side-ul">
        <li>
          <ul>
            <li>
              <div>
                <img alt="logo" />
                <h1>Carbon cell</h1>
                <IoIosMenu />
              </div>
              <div>
                <input type="search" />
                <IoIosSearch />
              </div>
            </li>
            <li>
              <ul>
                <li>Home</li>
                <li>Organization</li>
                <li>Assets</li>
                <li>Trade</li>
                <li>History</li>
                <li>wallet</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <ul>
                <li>Notifications</li>
                <li>Profile</li>
                <li>settings</li>
              </ul>
            </li>
            <li>
              <div>
                <img alt="profile" />
                <div>
                  <h1>bro</h1>
                  <p>abc@gmail.com</p>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
