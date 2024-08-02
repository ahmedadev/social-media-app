import { z } from "zod";
export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Too Short" }).max(50,{message:"Too Long"}),
  username: z.string().min(2, { message: "Too Short" }).max(50, { message: "Too Long" }),
  email: z.string().email().min(2, { message: "Too Short" }).max(50, { message: "Too Long" }),
  password:z.string().min(8, { message: "Password must be at least 8 characters" }).max(50, { message: "Too Long" }),
});
