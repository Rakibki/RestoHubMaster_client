import { NavLink } from "react-router-dom";

const NavItem = ({ location, Icon, text }) => {
  return (
    <div className="mb-1 p-2 gap-2 block transition-all text-[#515d6e] font-Inter text-base">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-[#ffa41f] bg-[#ffa41f] block p-2 bg-opacity-20"
            : ""
        }
        to={location}
      >
        <div className="flex items-center gap-2">
          <div>
            <Icon className="text-2xl" />
          </div>{" "}
          <div>{text}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default NavItem;
