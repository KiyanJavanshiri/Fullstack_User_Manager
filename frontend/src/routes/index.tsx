import { Route, Routes } from "react-router";
import { UsersTable } from "@/pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<UsersTable />} />
      <Route path="*" element={<p>pon</p>} />
    </Routes>
  );
};

export default RootRouter;
