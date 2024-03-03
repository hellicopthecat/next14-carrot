"use client";
import {useFormStatus} from "react-dom";

interface IFormBtnProps {
  btnTxt: string;
}
export default function FormBtn({btnTxt}: IFormBtnProps) {
  const {pending} = useFormStatus();
  return (
    <button
      className="primary-btn text-lg h-10 disabled:bg-gray-500 disabled:text-gray-400"
      disabled={pending}
    >
      {pending ? "로딩 중..." : btnTxt}
    </button>
  );
}
