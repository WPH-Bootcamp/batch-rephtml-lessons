import { useState } from "react";
import { useForm } from "react-hook-form";

// SEBELUM MENGGUNAKAN REACT HOOK FORM
// const ReactHookForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   })
//   return (
//     <div>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input value={password} onChange={(e) => setPassword(e.target.value)} />
//     </div>
//   );
// };

// SESUDAH MENGGUNAKAN REACT HOOK FORM
type FormProps = {
  email: string;
  password: string;
};

const RHF = () => {
  const { register, handleSubmit, formState } = useForm<FormProps>();
  const { errors } = formState;

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RHF;
