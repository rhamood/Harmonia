import { useState } from "react";

interface FormData{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const AuthPage = () => {

    //false = Register, true = Login
    const [isLogin, setIsLogin] = useState(true);
    //feedback message
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const initialForm: FormData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    //updates data with new input value
    const [data, setData] = useState<FormData>(initialForm); 
    
    // updates the matching field in data whenever an input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

    // clears the form and message when switching between Register and Login tabs
    // const handleToggle = () => {
    //     setIsLogin(!isLogin);
    //     setMessage("");
    //     setData(initialForm);
    // };

    // handles form submission for Register and Login
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // stop page from refreshing

    if (!isLogin) {
      // --- REGISTER ---

      // make sure all fields are filled
        if (!data.name || !data.email || !data.password) {
            setMessage("Please fill in all fields.");
            setSuccess(false);
            return;
        }
    
        // make sure passwords match before sending to server
        if (data.password !== data.confirmPassword) {
            setMessage("Passwords do not match.");
            setSuccess(false);
            return;
        }
    
        // send new user data to backend
        const res = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        setMessage(result.message); // show server response (e.g. "Registered successfully!")
        setSuccess(res.ok);
        if (res.ok) setData(initialForm); // reset form on success

    } else {
        // --- LOGIN ---
        // make sure email and password are filled
        if (!data.email || !data.password) {
            setMessage("Please fill in all fields.");
            setSuccess(false);
            return;
        } 
        if (data.email === "janedoe@gmail.com" && data.password === "12345") {
            const defaultUser = {
                name: "Jane Doe",
                email: "janedoe@gmail.com",
            };
            localStorage.setItem("loggedInUser", JSON.stringify(defaultUser));
            window.location.href = "/profile";
            return;
        } else {
              setMessage("Invalid credentials. Email: janedoe@gmail.com and Password: 12345");
              setSuccess(false);
              return;
        }
        // // send login credentials to backend
        // const res = await fetch("http://localhost:3000/api/login", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email: data.email, password: data.password }),
        // });

        // const result = await res.json();
        // setMessage(result.message);
        // setSuccess(res.ok);

        // if (res.ok) {
        //     // save logged-in user to localStorage so other pages (e.g. ProfilePage) can access it
        //     localStorage.setItem("loggedInUser", JSON.stringify(result.user));
        //     window.location.href = "/profile"; // redirect to profile page
        // }
    }
  };

  return (
    <div className="min-h-screen bg-[#D496BB] flex items-center justify-center px-4">

      {/* Decorative background blobs for depth */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Frosted glass card */}
        <div className="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-2xl p-10">

          {/* Toggle tabs — clicking sets isLogin true or false directly */}
          {/* <div className="flex bg-white/20 rounded-2xl p-1 mb-8">
            <button
              type="button"
              onClick={() => { setIsLogin(false); setMessage(""); setData(initialForm); }}  // switch to Register and clear form
              className={`flex-1 py-2 rounded-xl font-bold text-sm tracking-wide transition duration-200 ${
                !isLogin ? "bg-white text-pink-500 shadow" : "text-white/60 hover:text-white"
              }`}
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => { setIsLogin(true); setMessage(""); setData(initialForm); }} // switch to Login and clear form
              className={`flex-1 py-2 rounded-xl font-bold text-sm tracking-wide transition duration-200 ${
                isLogin ? "bg-white text-pink-500 shadow" : "text-white/60 hover:text-white"
              }`}
            >
              Login
            </button>
          </div> */}

          {/* Header — changes text based on active tab */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white drop-shadow-md tracking-tight">
              {isLogin ? "Welcome Back" : "Join Us"}
            </h1>
            <p className="text-white/80 mt-2 text-sm tracking-wide">
              {isLogin ? "Login to access your profile" : "Create your account to start reviewing albums"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name field — only shown on Register tab */}
            {!isLogin && (
              <div className="flex flex-col gap-1">
                <label className="text-white font-semibold text-sm tracking-wide pl-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  value={data.name}
                  onChange={handleInputChange}
                  className="bg-white/80 border border-pink-200 rounded-xl px-4 py-3 text-pink-900 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition"
                />
              </div>
            )}

            {/* Email — shown on both tabs */}
            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-sm tracking-wide pl-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                id="email"
                value={data.email}
                onChange={handleInputChange}
                className="bg-white/80 border border-pink-200 rounded-xl px-4 py-3 text-pink-900 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition"
              />
            </div>

            {/* Password — shown on both tabs */}
            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-sm tracking-wide pl-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                id="password"
                value={data.password}
                onChange={handleInputChange}
                className="bg-white/80 border border-pink-200 rounded-xl px-4 py-3 text-pink-900 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition"
              />
            </div>

            {/* Confirm Password — only shown on Register tab */}
            {!isLogin && (
              <div className="flex flex-col gap-1">
                <label className="text-white font-semibold text-sm tracking-wide pl-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  id="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleInputChange}
                  className="bg-white/80 border border-pink-200 rounded-xl px-4 py-3 text-pink-900 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition"
                />
              </div>
            )}

            {/* Feedback message — only renders if message is not empty */}
            {message && (
              <p className={`text-sm text-center font-semibold px-3 py-2 rounded-xl ${
                success ? "bg-green-100/50 text-green-100" : "bg-red-100/30 text-white"
              }`}>
                {message}
              </p>
            )}

            {/* Submit button — label changes based on active tab */}
            <button
              type="submit"
              className="mt-2 bg-white text-pink-500 font-bold py-3 rounded-xl shadow-lg hover:bg-pink-50 hover:scale-105 active:scale-95 transition duration-200 tracking-wide text-lg"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;


