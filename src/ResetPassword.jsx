// import React, { useState } from "react";
// import api from "./api";

// export default function ResetPassword() {
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await api.post("/reset-password", {
//         newPassword,
//       });
//       setMessage("Password reset successful! You can now log in.");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false); // Reset loading after request is done
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Reset Password</h2>
//         <input
//           type="password"
//           placeholder="Enter new password"
//           className="w-full p-2 border mb-4 rounded"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className={`${
//             loading ? "cursor-not-allowed" : "cursor-pointer"
//           } w-full bg-green-500 text-white p-2 rounded`}
//           disabled={loading} // Disable button if loading
//         >
//           {loading ? "Resetting..." : "Reset Password"}{" "}
//           {/* Show loading state */}
//         </button>
//         {message && <p className="mt-4 text-sm">{message}</p>}
//       </form>
//       <small>Please input the reset code that was sent to your email</small>
//     </div>
//   );
// }

import React, { useState } from "react";
import api from "./api";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/reset-password", {
        email,
        code,
        newPassword,
      });
      setMessage("Password reset successful! You can now log in.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter reset code"
          className="w-full p-2 border mb-4 rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter new password"
          className="w-full p-2 border mb-4 rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          } w-full bg-green-500 text-white p-2 rounded`}
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {message && <p className="mt-4 text-sm">{message}</p>}
      </form>
    </div>
  );
}
