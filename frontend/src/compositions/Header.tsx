import { NavLink } from "react-router";
import { PATHS } from "@/utils/links";
import Container from "@/layout/Container";
import TableIcon from "@/assets/table.svg?react";

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-400">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-3">
            <TableIcon className="stroke-black" />
            <span className="text-[18px] leading-normal text-black font-semibold">
              Felix
            </span>
          </div>
          <nav>
            <ul className="flex justify-center items-center gap-x-8">
              {PATHS.map(({ title, path }, i) => (
                <li key={i}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => {
                      return `inline-block text-base leading-normal text-black font-medium p-1 ${isActive ? "border-b border-black" : ""} hover:font-semibold`;
                    }}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
