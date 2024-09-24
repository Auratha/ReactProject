import { useState } from "react";

const LoginSignUp = ({ loginActive, handleLoginActive }) => {
  const [authMode, setAuthMode] = useState("login");
  const [userDataForForm, setUserDataForForm] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserDataForForm({ ...userDataForForm, [name]: value });
  };

  const loginUser = (e) => {
    e.preventDefault();

    saveUserData();

    if (authMode === "login") {
      const userData = JSON.parse(localStorage.getItem("userData")) || [];
      const foundUser = userData.find(
        (user) =>
          user.email === userDataForForm.email &&
          user.password === userDataForForm.password
      );
      if (foundUser) {
        handleLoginActive(true);
      }
    }
  };

  const saveUserData = () => {
    if (authMode === "signup") {
      const userData = JSON.parse(localStorage.getItem("userData")) || [];
      userData.push(userDataForForm);
      localStorage.setItem("userData", JSON.stringify(userData));
      setAuthMode("login");
    }
  };

  return (
    <div className="py-10 h-[85vh] bg-pink-100 flex justify-center items-center">
      {loginActive === false ? (
        <form className="w-[40%] p-12 bg-white space-y-5">
          <h1 className="mb-2 text-3xl font-medium">
            {authMode === "login" ? "Login" : "Sign Up"}
          </h1>
          {authMode === "signup" && (
            <input
              name="name"
              className="w-full p-2 border-2 border-gray-200 outline-none"
              type="text"
              placeholder="Your name"
              onChange={handleInputChange}
              autoComplete="off"
            />
          )}
          <input
            name="email"
            className="w-full p-2 border-2 border-gray-200 outline-none"
            type="email"
            placeholder="Email address"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            name="password"
            className="w-full p-2 border-2 border-gray-200 outline-none"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <button
            className="w-full p-2 bg-red-500 text-white"
            onClick={loginUser}
          >
            Continue
          </button>
          {authMode === "login" ? (
            <p>
              Don't have an account?{" "}
              <span
                className="text-red-500 font-medium cursor-pointer"
                onClick={() => setAuthMode("signup")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              ALready have an account?{" "}
              <span
                className="text-red-500 font-medium"
                onClick={() => setAuthMode("login")}
              >
                Click here
              </span>
            </p>
          )}

          <div className="">
            <input type="checkbox" />
            <p className="inline ml-2">
              By continuing, you agree to the Terms of Service and Privacy
              Policy
            </p>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Already Login</h1>
          <p className="text-xl">Pls explore our products</p>
        </div>
      )}
    </div>
  );
};

export default LoginSignUp;
