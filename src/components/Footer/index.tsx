import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex py-14 p-4 lg:px-96 bg-gd-footer">
			<div className="flex flex-col justify-start items-start gap-10">
				<div>
					<span className="text-[17px] text-white font-bold">Leaks.ph</span>
				</div>
				<div className="flex flex-col gap-3 text-[16px] font-medium text-gray-400">
					<Link href="#pricing">
						<span>Pricing</span>
					</Link>
					<Link href="#features">
						<span>Features</span>
					</Link>
					<Link href="#reviews">
						<span>Reviews</span>
					</Link>
					<Link href="https://t.me/spiderman924" target="_blank">
						<span>Support</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
