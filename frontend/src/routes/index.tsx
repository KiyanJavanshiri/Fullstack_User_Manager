import { Route, Routes } from "react-router";
import { UsersTable } from "@/pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<UsersTable />} />
    </Routes>
  );
};

export default RootRouter;
