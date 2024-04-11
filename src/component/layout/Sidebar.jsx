import logo from "../../assets/logo.png";
import Search from "../../assets/search";
import Heart from "../../assets/heart";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const active = location.pathname;
  const menuLists = [
    {
      name: "Home",
      icon: Search,
      path: "/",
    },
    {
      name: "Favorites",
      icon: Heart,
      path: "/favorites",
    },
  ];
  return (
    <aside className=" py-4 space-y-10">
      <div className=" flex justify-center items-center w-full px-6">
        <img src={logo} alt="Logo" className="w-[153px]" />
      </div>

      <section className="">
        <ul className="">
          {menuLists?.map((list) => (
            <li
              key={list.id}
              className=" my-3 py-2 flex justify-between items-center w-full gap-12"
            >
              {list.path === active ? (
                <div className=" w-[7px] h-[30px] rounded-md bg-primary" />
              ) : (
                <div />
              )}
              <Link
                to={list.path}
                className={`flex items-center w-full gap-4 font-bold text-xl ${
                  list.path === active ? "text-dark " : " text-dark/40"
                }`}
              >
                <span
                  className={` flex justify-center items-center p-2 rounded-md h-[30px] w-[30px] ${
                    list.path === active ? "bg-primary " : ""
                  }`}
                >
                  <list.icon
                    color={
                      list.path === active && list.name === "Home"
                        ? "#F2F2F2"
                        : list.path === active && list.name === "Favorites"
                        ? "white"
                        : "black"
                    }
                  />
                </span>
                {list.name}
              </Link>
              {/* <div /> */}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
