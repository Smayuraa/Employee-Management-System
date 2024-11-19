import { useState } from "react";

const Login = ({ handleLogin, adminLogin, employeeLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 h-screen relative">
            <div className="absolute top-4 right-4 flex gap-6">
                <button
                    onClick={adminLogin}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300"
                >
                    Admin
                </button>
                <button
                    onClick={employeeLogin}
                    className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300"
                >
                    Employee
                </button>
            </div>

            {/* Welcome Back Message */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white text-3xl font-semibold">
                <p>Welcome Back!</p>
            </div>

            {/* Login Form */}
            <div className="flex items-center justify-center h-full">
                <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
                    <form onSubmit={submitHandler} className="flex flex-col items-center ">

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-gray-100 text-lg py-3 px-6 rounded-full border-2 border-emerald-600 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-gray-100 text-lg py-3 px-6 rounded-full border-2 border-emerald-600 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <button
                            type="submit"
                            className="bg-emerald-600 text-white px-10 py-3 rounded-full text-xl hover:bg-emerald-700 transition-all duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
