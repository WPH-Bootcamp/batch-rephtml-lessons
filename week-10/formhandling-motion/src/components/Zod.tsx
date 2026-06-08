/**
 * 
 Apa itu Zod?

  Zod adalah library untuk melakukan validasi data.

  Bayangkan:
  Zod = Satpam Gedung

  Sebelum seseorang masuk ke gedung, satpam akan mengecek:
  Nama ada?
  Umur sesuai?
  Membawa kartu identitas?

  Jika lolos → boleh masuk.
  Jika gagal → ditolak.
*/

/*
// SEBELUM MENGGUNAKAN ZOD
// const user = {
//   name: "Vincent",
//   age: 20,
// };

// if (typeof user.name !== "string") {
//   console.log("Name harus string");
// }

// if (typeof user.age !== "number") {
//   console.log("Age harus number");
// }

// SETELAH MENGGUNAKAN ZOD
import { z } from "zod";
const UserSchema = z.object({
   name: z.string(),
   age: z.number(),
});

const result = UserSchema.safeParse({
   name: "Vincent",
   age: 20,
});

// console.log(result);

RESULT
{
 success: true,
 data: {
   name: "Vincent",
   age: 20
 }
}

const result = UserSchema.safeParse({
  name: 123,
  age: "dua puluh",
});

RESULT
{
 success: false,
 error: ...
}
*/

const Zod = () => {
  return <div>Zod</div>;
};

export default Zod;
