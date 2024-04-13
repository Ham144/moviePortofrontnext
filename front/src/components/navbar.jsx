import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between">
			<div>
				<div className="w-3 h-3 p-6 rounded-full bg-purple-200 flex justify-center items-start">
					log
				</div>
			</div>
			<div>
				<ul className="flex items-center uppercase">
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href={"/genres"}>genres</Link>
					</li>
					<li>
						<Link href={"/popular"}>popular</Link>
					</li>
					<li>
						<Link href={"/watch-later"}>watch later</Link>
					</li>
				</ul>
			</div>
			<div>
				<input type="text" size={50} className="flex items-center" />
			</div>
		</nav>
	);
};

export default Navbar;
