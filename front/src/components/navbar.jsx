import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex   items-center justify-between md:px-7 border border-b-4 py-3">
			<div>
				<div className="flex p-4 aspect-square rounded-full bg-gradient-to-br hover:bg-gradient-to-bl cursor-pointer from-black to-white    ">
					log0
				</div>
			</div>
			<div className=" ">
				<ul className="md:flex hidden items-center uppercase gap-x-5 ">
					<li className="hover:font-bold hover:border-b-2 ">
						<Link href={"/"}>Home</Link>
					</li>
					<li className="hover:font-bold hover:border-b-2">
						<Link href={"/genres"}>genres</Link>
					</li>
					<li className="hover:font-bold hover:border-b-2">
						<Link href={"/popular"}>popular</Link>
					</li>
					<li className="hover:font-bold hover:border-b-2">
						<Link href={"/watch-later"}>watch later</Link>
					</li>
				</ul>
			</div>
			<div>
				<input
					type="text"
					className="flex items-center md:h-[40px] md:w-[250px] bg-slate-200 rounded-full "
				/>
			</div>
		</nav>
	);
};

export default Navbar;
