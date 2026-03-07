import type { HTMLInputTypeAttribute } from "react";
import type {
  FieldValues,
  FieldPath,
  UseFormRegister,
  FieldError,
} from "react-hook-form";

type TFormInputProps<T extends FieldValues> = {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name: FieldPath<T>;
  id: string;
  register: UseFormRegister<T>;
  label: string;
  error?: FieldError;
  isRequired?: boolean;
};

const FormInput = <T extends FieldValues>(props: TFormInputProps<T>) => {
  const {
    placeholder = " ",
    type = "text",
    name,
    id,
    register,
    label,
    error,
    isRequired = false,
  } = props;

  return (
    <fieldset className="relative">
      <input
        placeholder={placeholder}
        type={type}
        {...register(name)}
        id={id}
        className={`px-3 py-4 w-full rounded-[10px] border border-gray-300 bg-gray-100 text-black leading-normal font-normal text-sm peer`}
      />
      <label
        className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-300 leading-normal font-medium peer-[:not(:placeholder-shown):focus]:text-[12px] peer-[:not(:placeholder-shown):focus]:left-2 peer-[:not(:placeholder-shown):focus]:top-1/3"
        htmlFor={id}
      >
        {label}{" "}
        {isRequired && (
          <span className="peer-[:not(:placeholder-shown):focus]:hidden text-red-500">
            *
          </span>
        )}
      </label>
      {error && (
        <p className="text-sm font-normal leading-normal text-red-500 mt-1">
          {error.message}
        </p>
      )}
    </fieldset>
  );
};

export default FormInput;
