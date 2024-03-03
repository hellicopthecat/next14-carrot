"use server";
import {z} from "zod";
const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);
const checkUserName = (username: string) => !username.match(/[,./가-힣ㄱ-ㅎ]/);
const chechPassword = ({
  password,
  pwCheck,
}: {
  password: string;
  pwCheck: string;
}) => password === pwCheck;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자열로 입력해주세요",
        required_error: "ID를 입력해주세요.",
      })
      .trim()
      .toLowerCase()
      .min(3, "3이상이여야합니다.")
      .max(10, "10이하여야합니다.")
      .refine(checkUserName, "한글 및 .,/는 안됨"),
    email: z.string().email("이메일을 입력해주세요"),
    password: z
      .string()
      .min(3)
      .regex(passwordRegex, "대소문자 특수기호를 입력하시오"),
    pwCheck: z.string().min(3),
  })
  .refine(chechPassword, {message: "둘다 틀려", path: ["pwCheck"]});

export const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    pwCheck: formData.get("pwCheck"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
};
