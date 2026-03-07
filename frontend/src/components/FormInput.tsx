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
    <fieldset className="relative w-full">
      <div className="relative">
        <input
          placeholder={placeholder}
          type={type}
          {...register(name)}
          id={id}
          className={`px-3 py-4 w-full rounded-[10px] border border-gray-300 bg-gray-100 text-black leading-normal font-normal text-sm peer`}
        />
        <label
          className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-400 group leading-normal font-medium peer-[:not(:placeholder-shown)]:text-[12px] peer-focus:text-[12px] peer-[:not(:placeholder-shown)]:left-2 peer-focus:left-2 peer-[:not(:placeholder-shown)]:top-1/5 peer-focus:top-1/5 peer-[:not(:placeholder-shown)]:text-black peer-focus:text-black transition-all duration-100 ease-in-out outline-none focus:border-black"
          htmlFor={id}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && (
        <p className="text-sm font-normal leading-normal text-red-500 mt-1">
          {error.message}
        </p>
      )}
    </fieldset>
  );
};

export default FormInput;
