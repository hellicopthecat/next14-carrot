"use server";

export const handlLoginForm = async (prevState: any, data: FormData) => {
  "use server";

  await new Promise((resv) => setTimeout(resv, 4000));
  console.log(data.get("email"));
  console.log(data.get("password"));

  return {
    errors: ["비번 오류", "비번 짧음"],
  };
};
