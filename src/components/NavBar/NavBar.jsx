import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/IMG_6613.JPG";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const style = {
    wrapper: `bg-[#000] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logo: `rounded-full `,
    title: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`
};

const NavBar = () => {
    return (
        <div className={style.wrapper}>
            <Link href="/">
                <div className={style.logoContainer}>
                    <img src={Logo} alt="Logo" width={40} height={40} className={style.logo} />
                    <div className={style.title}> Title</div>
                </div>
            </Link>

            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input
                    className={style.searchInput}
                    placeholder="Search items, collections, and accounts"
                />
            </div>

            <div className={style.headerItems}>
                <Link href="/">
                    <div className={style.headerItem}>Accueil</div>
                </Link>
                <Link href="/">
                    <div className={style.headerItem}>Contact</div>
                </Link>
                <Link href="/">
                    <div className={style.headerItem}>Sing in</div>
                </Link>
                <Link href="/">
                    <div className={style.headerItem}>Sing up</div>
                </Link>
            </div>

            <div className={style.headerIcon}>
                <CgProfile />
            </div>
            <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
            </div>
        </div>
    );
};

export default NavBar;
