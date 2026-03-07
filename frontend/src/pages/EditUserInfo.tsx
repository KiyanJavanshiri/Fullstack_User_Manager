import { useParams } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { useUpdateUserMutation, useGetUserQuery } from "@/store/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/utils/validationSchemas";
import FormInput from "@/components/FormInput";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { useEffect } from "react";

type TUpdateUserForm = z.infer<typeof userSchema>;

const EditUserInfo = () => {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id!);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUpdateUserForm>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      age: String(user?.age) || "",
      email: user?.email || "",
      role: user?.role || "user",
    },
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName,
        lastName: user.lastName,
        age: String(user.age),
        email: user.email,
        role: user.role,
      });
    }
  }, [reset, user]);

  const onSubmit: SubmitHandler<TUpdateUserForm> = async (data) => {
    try {
      await updateUser({ id: id!, body: { ...data, age: +data.age } });
      reset();
    } catch (ex) {
      console.error(ex);
    }
  };

  console.log(errors);

  return user && (
    <section>
      <Title title={`Edit user ${user?.firstName}`} />
      <form
        className="max-w-200 mx-auto mt-12 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-start gap-x-4">
          <FormInput<TUpdateUserForm>
            name="firstName"
            id="firstName"
            isRequired={true}
            error={errors.firstName}
            register={register}
            label="FirstName"
          />
          <FormInput<TUpdateUserForm>
            name="lastName"
            id="lastName"
            isRequired={true}
            error={errors.lastName}
            register={register}
            label="LastName"
          />
        </div>
        <div className="flex justify-between items-start gap-x-4">
          <FormInput<TUpdateUserForm>
            name="age"
            id="age"
            isRequired={true}
            error={errors.age}
            register={register}
            label="Age"
          />
          <FormInput<TUpdateUserForm>
            name="role"
            id="role"
            isRequired={true}
            error={errors.role}
            register={register}
            label="Role"
          />
        </div>
        <FormInput<TUpdateUserForm>
          name="email"
          id="email"
          isRequired={true}
          error={errors.email}
          register={register}
          label="Email"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="inline-block px-4 py-2 rounded-md bg-black text-white leading-normal text-base font-medium hover:bg-gray-700 disabled:bg-gray-600"
            disabled={isLoading}
          >
            Update
          </Button>
        </div>
      </form>
    </section>
  );
};

export default EditUserInfo;
