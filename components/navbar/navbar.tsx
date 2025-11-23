import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/navbar/navlink";

const Navbar = () =>{
    return (
        <div className="fixed top-0 w-full bg-white shadow-sm z-20">
            <div className="mx-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <Link href="/">
                    <Image src="/logo2.png" width={73} height={32} alt="logo" priority/>
                </Link>
                <Navlink/>
            </div>
        </div>
    )
}

export default Navbar;