import { useGetUsersQuery } from "@/store/api/userApi";

const UsersTable = () => {
  const { data: users, isLoading, isSuccess } = useGetUsersQuery();

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    isSuccess && (
      <div className="">
        {users.map((user) => (
          <p key={user._id}>{user.firstName}</p>
        ))}
      </div>
    )
  );
};

export default UsersTable;
