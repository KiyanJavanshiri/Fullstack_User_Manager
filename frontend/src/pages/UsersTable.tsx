import { useGetUsersQuery } from "@/store/api/userApi";
import Title from "@/components/Title";

const UsersTable = () => {
  const { data: users, isLoading, isSuccess } = useGetUsersQuery();

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    isSuccess && (
      <section>
        <Title title="Users" />
        <div className="">
          {users.map((user) => (
            <p key={user._id}>{user.firstName}</p>
          ))}
        </div>
      </section>
    )
  );
};

export default UsersTable;
