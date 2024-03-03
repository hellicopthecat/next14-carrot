import {InputHTMLAttributes} from "react";

interface IFormInputProps {
  errMsgs?: string[];
  name: string;
}
export default function FormInput({
  errMsgs = [],
  name,
  ...rest
}: IFormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-2 ring-gray-300 focus:ring-orange-500 border-none placeholder:text-neutral-400 transition"
        {...rest}
      />
      {errMsgs?.map((err, index) => (
        <span key={index} className=" text-red-500 font-medium">
          {err}
        </span>
      ))}
    </div>
  );
}
