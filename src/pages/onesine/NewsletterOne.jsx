import { HiEnvelopeOpen } from "react-icons/hi2";

const NewsletterOne = () => {
    return (
        <div className="newsletter-one-body text-slate-600">
            <section className="flex flex-col px-8 md:px-16 max-w-screen-2xl min-h-screen">
                <header className="py-8">
                    <a href="#">
                        <img src="/images/newsletter-one-logo.png" alt="" className="h-7" />
                    </a>
                </header>
                <section className="flex max-lg:flex-col lg:items-center py-12 md:py-24 gap-20">
                    {/* Description section begins */}
                    <section className="flex-1">
                        <h1 className="font-semibold text-6xl leading-tight text-slate-800">
                            Join us at the biggest FrontConf
                        </h1>
                        <p className="mt-2 text-violet-500 text-xl">July 2023 - Bengaluru</p>
                        <p className="mt-4 text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
                            voluptatibus quibusdam. Incidunt illo neque suscipit vitae nobis
                            mollitia.
                        </p>
                    </section>
                    {/* Description section ends */}
                    {/* Subscribe section begins */}
                    <section className="flex-1">
                        <div className="rounded-lg bg-white shadow-xl max-w-lg">
                            <div className="grid place-items-center rounded-t-lg bg-violet-400 p-8 text-white">
                                <HiEnvelopeOpen className="h-12 w-12" />
                            </div>
                            <div className="p-10">
                                <p>Get notified of all the updates</p>
                                <form className="mt-3 flex max-sm:flex-col max-sm:gap-3">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="transition-all duration-300 rounded-md border sm:rounded-r-none border-gray-300 px-4 py-2 flex-grow hover:border-violet-400 focus:ring focus:border-indigo-500 focus:ring-indigo-500/20"
                                    />
                                    <button
                                        type="button"
                                        className="rounded-md sm:rounded-l-none bg-violet-400 px-4 py-2 font-semibold text-white"
                                    >
                                        Notify me
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* Subscribe section ends */}
                </section>
                <footer className="py-8 mt-auto">
                    <ul className="flex gap-6 text-sm text-white lg:text-slate-400">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </footer>
            </section>
        </div>
    );
};

export default NewsletterOne;
