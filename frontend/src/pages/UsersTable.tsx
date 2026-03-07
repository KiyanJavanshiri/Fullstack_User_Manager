import { useGetUsersQuery, useDeleteUserMutation } from "@/store/api/userApi";
import { Link } from "react-router";
import Title from "@/components/Title";
import Button from "@/components/Button";
import EditIcon from "@/assets/edit.svg?react";
import DeleteIcon from "@/assets/delete.svg?react";

const TABLE_COLUMNS = ["Name", "Email", "Age", "Role", "Actions"];

const UsersTable = () => {
  const { data: users, isLoading, isSuccess } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  return (
    isSuccess && (
      <section>
        <Title title="Users" />
        {isLoading && (
          <div className="flex justify-center items-center mt-20">
            <div className="loader"></div>
          </div>
        )}
        {isSuccess && (
          <table className="w-full mt-6 border-separate border-spacing-y-2">
            <thead className="bg-gray-100">
              <tr className="">
                {TABLE_COLUMNS.map((col, i) => (
                  <th
                    key={i}
                    className="text-left leading-normal font-medium text-sm text-gray-600 px-4 py-2 first:rounded-l-lg last:rounded-r-lg capitalize"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="odd:bg-gray-50 text-sm leading-normal text-black font-normal"
                >
                  <td className="px-4 py-2 rounded-l-lg">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.age}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 rounded-r-lg">
                    <Link to={`/edit/${user._id}`} className="inline-block mr-4">
                      <EditIcon className="stroke-blue-400 w-4 h-4" />
                    </Link>
                    <Button
                      onClick={async () => {
                        try {
                          await deleteUser(user._id);
                        } catch (ex) {
                          console.error(ex);
                        }
                      }}
                    >
                      <DeleteIcon className="stroke-red-500 w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    )
  );
};

export default UsersTable;
