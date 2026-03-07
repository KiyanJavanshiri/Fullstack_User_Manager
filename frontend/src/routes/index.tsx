import { Route, Routes } from "react-router";
import { UsersTable, CreateUser, EditUserInfo } from "@/pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route index element={<UsersTable />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/edit/:id" element={<EditUserInfo />} />
      <Route path="*" element={<p>pon</p>} />
    </Routes>
  );
};

export default RootRouter;
