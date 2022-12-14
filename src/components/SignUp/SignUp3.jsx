import React from "react";

export default function SignUp3() {
    return (
        <div className="flex justify-center mt-20 items-center">
            <div className="lg:grid grid-cols-2 pb-10">
                <div className="w-96">
                    <lottie-player
                        src="https://assets5.lottiefiles.com/packages/lf20_pprxh53t.json"
                        background="transparent"
                        speed="1"
                        // style="width: 300px; height: 300px;" non pris en compte sur reactjs
                        loop
                        // controls
                        autoplay
                    ></lottie-player>
                </div>
                <div className="ml-10 mt-4 lg:space-y-5 space-y-5">
                    <div>
                        <label for="email">Nom prénoms</label>
                        <br />
                        <input
                            className="w-2/3 h-10 rounded-md border-2 border-black px-2"
                            type="username"
                            name="username"
                            id="username"
                            placeholder="Jean DUBOIS"
                        />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <br />
                        <input
                            className="w-2/3 h-10 rounded-md border-2 border-black px-2"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div>
                        <label for="email">Mot de passe</label>
                        <br />
                        <input
                            className="w-2/3 h-10 rounded-md border-2 border-black px-2"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="***********"
                        />
                    </div>
                    <div>
                        <label for="email">Confirmer votre mot de passe</label>
                        <br />
                        <input
                            className="w-2/3 h-10 rounded-md border-2 border-black px-2"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="***********"
                        />
                    </div>
                    <div className="bg-blue-500 mt-5 w-1/3 px-7 py-3 mx-8 flex text-justify rounded-md items-center">
                        <button className="flex items-center text-center" type="submit">
                            S'inscrire
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
