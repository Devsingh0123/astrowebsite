import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userProfile, userRegister } from "@/redux/slice/UserAuth";
import { toast } from "react-toastify";
// import LanguageSwitcher from "@/LanguageSwitcher";

/* ---------------- ZOD SCHEMAS ---------------- */

const loginSchema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().min(10, "Mobile must be at least 10 digits"),
    country_code: z.string().min(1, "Country code is required"),
    username: z.string().min(3, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/* ---------------- COMPONENT ---------------- */

const UserLogin = ({ ele }) => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.userAuth);

  const [mode, setMode] = useState("login");
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    country_code: "",
    mobile: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fields: {},
    form: "",
  });

  /* ---------------- EFFECT ---------------- */

  useEffect(() => {
    if (user) {
      setOpen(false);
      setForm({
        name: "",
        email: "",
        mobile: "",
        country_code: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      fields: { ...prev.fields, [name]: undefined },
      form: "",
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const parsed = loginSchema.safeParse({
      username: form.username,
      password: form.password,
    });

    if (!parsed.success) {
      setErrors({
        fields: parsed.error.flatten().fieldErrors,
        form: "Please fix the errors below",
      });
      return;
    }

    console.log("parsed data from userlogin",parsed.data)

    try {
      await dispatch(userLogin(parsed.data)).unwrap();
      toast.success("You are logged in");
      await dispatch(userProfile()).unwrap();
      setOpen(false);
    } catch (err) {
      setErrors({
        fields: {},
        form: typeof err === "string" ? err : "Something went wrong",
      });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const parsed = signupSchema.safeParse(form);

    if (!parsed.success) {
      setErrors({
        fields: parsed.error.flatten().fieldErrors,
        form: "Please fix the errors below",
      });
      return;
    }

    const { confirmPassword, ...submitData } = parsed.data;

    try {
      await dispatch(userRegister(submitData)).unwrap();
      toast.success("Register successful, please login");
      setMode("login");
    } catch (err) {
      setErrors({
        fields: {},
        form: typeof err === "string" ? err : "Something went wrong",
      });
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="flex items-center gap-3">
      
  

      {/* User Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex gap-2">
            <User />
            {ele?.name || "Account"}
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              <h2 className="text-2xl text-black">
                {mode === "login" ? "Login" : "Create Account"}
              </h2>
            </DialogTitle>
            <DialogDescription className="sr-only">
              {mode === "login"
                ? "Enter your username and password to login"
                : "Fill the form to create a new account"}
            </DialogDescription>
          </DialogHeader>

          {(errors.form || error) && (
            <p className="text-red-600 text-sm text-center">
              {errors.form || error}
            </p>
          )}

          {/* LOGIN FORM */}
          {mode === "login" && (
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              <div>
                <Label>Username</Label>
                <Input name="username" onChange={handleChange} />
                {errors.fields.username && (
                  <p className="text-red-600 text-sm">
                    {errors.fields.username[0]}
                  </p>
                )}
              </div>

              <div>
                <Label>Password</Label>
                <Input type="password" name="password" onChange={handleChange} />
                {errors.fields.password && (
                  <p className="text-red-600 text-sm">
                    {errors.fields.password[0]}
                  </p>
                )}
              </div>

              <Button className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>

              <p className="text-center text-sm">
                Don't have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => {
                    setMode("signup");
                    setErrors({ fields: {}, form: "" });
                  }}
                >
                  Sign up
                </span>
              </p>
            </form>
          )}

          {/* SIGNUP FORM */}
          {mode === "signup" && (
            <form onSubmit={handleSignup} className="space-y-3 mt-4">
              <Input name="name" placeholder="Name" onChange={handleChange} />
              <Input name="email" placeholder="Email" onChange={handleChange} />
              <div className="flex gap-2">
                <Input
                  name="country_code"
                  placeholder="+91"
                  className="w-1/3"
                  onChange={handleChange}
                />
                <Input
                  name="mobile"
                  placeholder="Mobile"
                  className="w-2/3"
                  onChange={handleChange}
                />
              </div>
              <Input
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />

              <Button className="w-full" disabled={loading}>
                {loading ? "Creating..." : "Sign Up"}
              </Button>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => {
                    setMode("login");
                    setErrors({ fields: {}, form: "" });
                  }}
                >
                  Login
                </span>
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserLogin;



// import { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { User } from "lucide-react";
// import { z } from "zod";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogin, userProfile, userRegister } from "@/redux/slice/UserAuth";
// import { toast } from "react-toastify";

// const loginSchema = z.object({
//   username: z.string().min(3),
//   password: z.string().min(6),
// });

// const signupSchema = z
//   .object({
//     name: z.string().min(2),
//     email: z.string().email(),
//     mobile: z.string().min(10),
//     country_code: z.string().min(1),
//     username: z.string().min(3),
//     password: z.string().min(6),
//     confirmPassword: z.string().min(6),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// const UserLogin = ({ ele }) => {
//   const dispatch = useDispatch();
//   const { user, loading } = useSelector((state) => state.userAuth);

//   const [mode, setMode] = useState("login");
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     country_code: "",
//     mobile: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   useEffect(() => {
//     if (user) {
//       setOpen(false);
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const parsed = loginSchema.safeParse({
//       username: form.username,
//       password: form.password,
//     });
//     if (!parsed.success) return;

//     await dispatch(userLogin(parsed.data)).unwrap();
//     await dispatch(userProfile()).unwrap();
//     toast.success("Logged in successfully");
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const parsed = signupSchema.safeParse(form);
//     if (!parsed.success) return;

//     const { confirmPassword, ...submitData } = parsed.data;
//     await dispatch(userRegister(submitData)).unwrap();
//     toast.success("Account created");
//     setMode("login");
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button className="flex gap-2">
//           <User />
//           {ele?.name || "Account"}
//         </Button>
//       </DialogTrigger>

//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>
//             {mode === "login" ? "Login" : "Create Account"}
//           </DialogTitle>
//           <DialogDescription className="sr-only">
//             Authentication form
//           </DialogDescription>
//         </DialogHeader>

//         {mode === "login" ? (
//           <form onSubmit={handleLogin} className="space-y-4 mt-4">
//             <Input name="username" placeholder="Username" onChange={handleChange} />
//             <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
//             <Button className="w-full" disabled={loading}>
//               {loading ? "Logging..." : "Login"}
//             </Button>
//             <p
//               className="text-sm text-center cursor-pointer underline"
//               onClick={() => setMode("signup")}
//             >
//               Create Account
//             </p>
//           </form>
//         ) : (
//           <form onSubmit={handleSignup} className="space-y-3 mt-4">
//             <Input name="name" placeholder="Name" onChange={handleChange} />
//             <Input name="email" placeholder="Email" onChange={handleChange} />
//             <Input name="country_code" placeholder="+91" onChange={handleChange} />
//             <Input name="mobile" placeholder="Mobile" onChange={handleChange} />
//             <Input name="username" placeholder="Username" onChange={handleChange} />
//             <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
//             <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
//             <Button className="w-full" disabled={loading}>
//               {loading ? "Creating..." : "Sign Up"}
//             </Button>
//             <p
//               className="text-sm text-center cursor-pointer underline"
//               onClick={() => setMode("login")}
//             >
//               Already have an account?
//             </p>
//           </form>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default UserLogin;
