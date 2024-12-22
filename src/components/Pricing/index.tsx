import { CheckIcon } from "lucide-react";

export default function Pricing() {
	return (
		<div
			className="pt-14 w-full flex flex-col justify-center items-center text-center bg-gd-2"
			id="pricing"
		>
			<p>
				<span
					className="font-bold text-[33px] lg:text-[45px]"
					style={{ lineHeight: "49.5px" }}
				>
					Curated content tiers
					<br />
					for <span className="text-blue-500">your pleasure</span>
				</span>
			</p>
			<p className="pt-2 pb-6 px-5 lg:px-0">
				<span className="font-semibold text-[17px] lg:text-[23px] text-gray-400">
					With over <span className="text-white">5,000+</span> Models,{" "}
					<span className="text-white">50TB+</span> of content and{" "}
					<span className="text-white">Instant Delivery</span> we are sure to
					have what
					<br />
					<span>you are looking for.</span>
				</span>
			</p>
			<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
				<div className="w-[364px] h-[540px] bg-neutral-950 rounded-xl">
					<div className="h-2/6 bg-zinc-900 rounded-t-xl">
						<div className="text-[20px] font-semibold pt-8">Basic</div>
						<div className="flex flex-row gap-2 items-center justify-center">
							<span className="text-[20px] text-neutral-400 font-bold pb-10">
							</span>
							<span className="text-[60px] font-bold">$19.99</span>
							<span className="text-[18px] text-neutral-400 font-bold">
								USD
							</span>
						</div>
					</div>
					<div className="h-full w-full">
						<div className="w-full pt-10 flex flex-col gap-4 justify-start px-14">
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">Instant Access</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									One Time Payment
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									100+ New Models Each Day!
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									All Trending Models
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">PPVs Included</span>
							</div>
						</div>
						<div className="pt-12">
							<button
								data-sellix-product="65d01976ebd98"
								// type="submit"
								className="w-[175px] h-[55px] bg-white rounded-[50px] text-[16px] text-black font-bold hover:brightness-90 transition-all duration-300"
							>
								Purchase
							</button>
						</div>
					</div>
				</div>
				<div className="w-[364px] h-[605px] bg-neutral-950 rounded-xl bg-gd-pricing">
					<div className="h-2/6 bg-zinc-900 rounded-t-xl">
						<div className="flex flex-row w-full justify-end">
							<div className="px-6 py-1 bg-blue-500 rounded-bl-lg rounded-tr-lg cursor-pointer">
								<span className="font-bold">Popular</span>
							</div>
						</div>
						<div className="text-[20px] font-semibold">Exclusive</div>
						<div className="flex flex-row gap-2 items-center justify-center">
							<span className="text-[20px] text-neutral-400 font-bold pb-10">
							</span>
							<span className="text-[70px] font-bold">$34.99</span>
							<span className="text-[18px] text-neutral-400 font-bold">
								USD
							</span>
						</div>
					</div>
					<div className="h-full w-full">
						<div className="w-full pt-10 flex flex-col gap-4 justify-start px-14">
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">Instant Access</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									One Time Payment
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									250+ New Models Each Day!
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									Custom Model Requests
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">PPVs Included</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									Snapchat & Teen Leaks
								</span>
							</div>
						</div>
						<div className="pt-12">
							<button
								data-sellix-product="65d01862c8887"
								// type="submit"
								className="w-[175px] h-[55px] bg-blue-500 rounded-[50px] text-[16px] text-white font-bold hover:brightness-110 transition-all duration-300"
							>
								Purchase
							</button>
						</div>
					</div>
				</div>
				<div className="w-[364px] h-[540px] bg-neutral-950 rounded-xl cursor-pointer">
					<div className="h-2/6 bg-zinc-900 rounded-t-xl">
						<div className="text-[20px] font-semibold pt-8">Premium</div>
						<div className="flex flex-row gap-2 items-center justify-center">
							<span className="text-[20px] text-neutral-400 font-bold pb-10">
							</span>
							<span className="text-[60px] font-bold">$24.99</span>
							<span className="text-[18px] text-neutral-400 font-bold">
								USD
							</span>
						</div>
					</div>
					<div className="h-full w-full">
						<div className="w-full pt-10 flex flex-col gap-4 justify-start px-14">
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">Instant Access</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									One Time Payment
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									150+ New Models Each Day!
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">
									Custom Model Requests
								</span>
							</div>
							<div className="flex flex-row items-center gap-3">
								<div className="w-5 h-5 flex flex-row justify-center items-center bg-gray-500 rounded-full">
									<CheckIcon size={16} />
								</div>
								<span className="text-[15px] font-medium">PPVs Included</span>
							</div>
						</div>
						<div className="pt-12">
							<button
								data-sellix-product="65d018ea84d4b"
								// type="submit"
								className="w-[175px] h-[55px] bg-white rounded-[50px] text-[16px] text-black font-bold hover:brightness-90 transition-all duration-300"
							>
								Purchase
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
