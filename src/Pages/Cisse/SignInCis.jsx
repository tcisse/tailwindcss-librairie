import lock from "../../assets/img/lock.svg";

export default function SignInCis() {
    return (
        <div className="flex justify-center items-center space-y-10 p-20">
            <form className="space-y-10" action="">
                <div className="flex justify-center">
                    <img src={lock} alt="lockimage" />
                </div>
                <h1 className="flex justify-center">
                    <span className="text-4xl text-blue-600 font-bold">Sign in </span>
                </h1>
                <div className="">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter yoour email"
                        className="px-2 py-2 border w-[378px]"
                    />
                </div>
                <div className="">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter yoour password"
                        className="px-2 py-2 border w-[378px]"
                    />
                </div>
                <div className="">
                    <input type="checkbox" name="" id="" placeholder="Remember me" />
                    <span className="mx-2">Remember me</span>
                </div>
                <div>
                    <button className="bg-blue-500 px-40 py-2 rounded-md">SIGN IN</button>
                </div>
                <div className="space-x-7 text-blue-600 cursor-pointer">
                    <span>Forgot password ?</span>
                    <span>D'ont have account ? Sign Up</span>
                </div>
            </form>
        </div>
    );
}
