import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/utils/validationSchemas";
import FormInput from "@/components/FormInput";
import Title from "@/components/Title";
import Button from "@/components/Button";

type TCreateUserForm = z.infer<typeof userSchema>;

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateUserForm>({
    defaultValues: {
      role: "user",
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<TCreateUserForm> = (data) => {
    console.log("data: ", data);
  };

  console.log(errors)

  return (
    <section>
      <Title title="Create Product" />
      <form
        className="max-w-200 mx-auto mt-12 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-start gap-x-4">
          <FormInput<TCreateUserForm>
            name="firstName"
            id="firstName"
            isRequired={true}
            error={errors.firstName}
            register={register}
            label="FirstName"
          />
          <FormInput<TCreateUserForm>
            name="lastName"
            id="lastName"
            isRequired={true}
            error={errors.lastName}
            register={register}
            label="LastName"
          />
        </div>
        <div className="flex justify-between items-start gap-x-4">
          <FormInput<TCreateUserForm>
            name="age"
            id="age"
            isRequired={true}
            error={errors.age}
            register={register}
            label="Age"
          />
          <FormInput<TCreateUserForm>
            name="role"
            id="role"
            isRequired={true}
            error={errors.role}
            register={register}
            label="Role"
          />
        </div>
        <FormInput<TCreateUserForm>
          name="email"
          id="email"
          isRequired={true}
          error={errors.email}
          register={register}
          label="Email"
        />
        <div className="flex justify-end">
          <Button type="submit" className="inline-block px-4 py-2 rounded-md bg-black text-white leading-normal text-base font-medium hover:bg-gray-700 disabled:bg-gray-600">
            Create
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CreateUser;
