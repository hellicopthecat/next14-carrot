"use client";
import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import {useFormState} from "react-dom";
import {createAccount} from "./action";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">회원가입</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Username"
          required
          errMsgs={state?.fieldErrors.username}
          name="username"
          minLength={3}
          maxLength={10}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required
          errMsgs={state?.fieldErrors.email}
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errMsgs={state?.fieldErrors.password}
          name="password"
          minLength={3}
        />
        <FormInput
          type="password"
          placeholder="Password Confirm"
          required
          errMsgs={state?.fieldErrors.pwCheck}
          name="pwCheck"
          minLength={3}
        />
        <FormBtn btnTxt="회원가입" />
      </form>
      <SocialLogin />
    </div>
  );
}
