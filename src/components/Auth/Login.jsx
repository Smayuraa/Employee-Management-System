import { useState } from "react"; 

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)

        setEmail('')
        setPassword('')
    };

    return (
        <>
            <div className="bg-black flex h-screen w-screen items-center justify-center">
                <div className="border-2 rounded-xl border-emerald-600 p-20">
                    <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-6"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <button className="text-white mt-6 outline-none bg-emerald-600 border-none text-xl py-3 px-10 rounded-full placeholder:text-gray-400">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
