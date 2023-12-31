import { css } from "@emotion/react";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "tabler-icons-react";
import { Fridge } from "tabler-icons-react";
import { GrillFork } from "tabler-icons-react";

const TabBarItem: React.FC<{
  name: string;
  path: string;
  icon: React.ReactNode;
}> = ({ name, path, icon }) => {
  return (
    <Link to={path}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {icon}
        <div>{name}</div>
      </div>
    </Link>
  );
};

export const PageLayout: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        margin-left: 0px;
        margin: auto;
        flex-direction: column;
        min-height: 100vh;
        width: 100vw;
        font-size: 12px;
        background-color: #f9f4e6;
      `}
    >
      <main
        css={css`
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding-bottom: 60px;
        `}
      >
        <Outlet />
      </main>
      <nav
        css={css`
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          background-color: #f7cdd0;
          padding: 12px;
          margin-left: 0px;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        `}
      >
        <TabBarItem
          name="Shopping List"
          path="/cart"
          icon={<ShoppingCart size={15} strokeWidth={2} color={"#c36b85"} />}
        />
        <TabBarItem
          name="Home"
          path="/"
          icon={<Fridge size={15} strokeWidth={2} color={"#c36b85"} />}
        />
        <TabBarItem
          name="Recipe"
          path="/recipe"
          icon={<GrillFork size={15} strokeWidth={2} color={"#c36b85"} />}
        />
      </nav>
    </div>
  );
};
