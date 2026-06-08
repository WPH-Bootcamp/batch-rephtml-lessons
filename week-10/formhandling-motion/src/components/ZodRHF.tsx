import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// schema
const registerSchema = z.object({
  email: z.string().email("Format harus email"),
  password: z.string().min(5, "Password min 5"),
});

// infer dari registerSchema => mengambil tipe data dari registerSchema
type FormProps = z.infer<typeof registerSchema>;

// zodResolver utk menggabungkan Zod dengan React Hook Form

const ZodRHF = () => {
  const { register, handleSubmit, formState } = useForm<FormProps>({
    resolver: zodResolver(registerSchema),
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data: FormProps) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // hanya test utk loading
    console.log(data);
    // alert("Testings");
  };
  console.log(register);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            className="border border-gray-200 rounded-md py-1 px-2"
            type="text"
            placeholder="Masukkan Email"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <small className="text-red-500">{errors.email.message}</small>
        )}
        <div>
          <label>Password</label>
          <input
            className="border border-gray-200 rounded-md py-1 px-2"
            type="text"
            placeholder="Masukkan Password"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <small className="text-red-500">{errors.password.message}</small>
        )}
        <div>
          <button
            className="py-1 px-3 border border-gray-200 bg-green-500 hover:bg-green-600 rounded-md"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ZodRHF;
