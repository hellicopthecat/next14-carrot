import FormBtn from "@/components/form-button";
import FormInput from "@/components/form-input";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">SMS 로그인</h2>
      </div>
      <form action="" className="flex flex-col gap-3">
        <FormInput
          type="email"
          placeholder="Email"
          required
          errMsgs={["이메일을 작성하세요."]}
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errMsgs={["비밀번호를 입력하세요."]}
          name="password"
        />
        <FormBtn btnTxt="로그인" />
      </form>
    </div>
  );
}
