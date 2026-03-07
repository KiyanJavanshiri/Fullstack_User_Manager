import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/utils/validationSchemas";
import FormInput from "@/components/FormInput";
import Title from "@/components/Title";

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
  return (
    <section>
      <Title title="Create Product" />
      <form>
        <FormInput<TCreateUserForm>
          name="firstName"
          id="firstName"
          isRequired={true}
          error={errors.firstName}
          register={register}
          label="FirstName"
        />
      </form>
    </section>
  );
};

export default CreateUser;
