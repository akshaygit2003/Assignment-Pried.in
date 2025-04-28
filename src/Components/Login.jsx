import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const data = [
    {
      email: "abc@gmail.com",
      password: "abc123",
      role: "Teacher",
    },
    {
      email: "xyz@gmail.com",
      password: "xyz123",
      role: "Parent",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists in the data array
    // and if the email, password, and role match then only the user is logged in
    const user = data.find(
      (user) =>
        user.email === email && user.password === password && user.role === role
    );

    if (user) {
      alert("Login Successful");
      if (role === "Teacher") {
        navigate("/teacher"); // Redirect to Teacher component
      } else if (role === "Parent") {
        navigate("/parent"); // Redirect to Parent component
      }
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-amber-200 p-8 rounded-lg shadow-md w-full ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md  bg-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="w-full text-center justify-center flex items-center text-sm text-gray-600"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Role:</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Teacher"
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="mr-2"
                />
                Teacher
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Parent"
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="mr-2"
                />
                Parent
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-4xl bg-blue-500 border-black text-black py-2 rounded-md hover:bg-blue-600 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
