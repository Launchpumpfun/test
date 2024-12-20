import Link from "next/link";

export default function Features() {
	return (
		<div className="py-24" id="features">
			<div className="flex flex-col justify-center items-center text-center pb-4">
				<span className="text-[33px] lg:text-[43px] font-bold text-white">
					Key Features
				</span>
				<span className="text-[15px] px-14 lg:px-0 lg:text-[22px] font-medium text-gray-400">
					Don't worry, there's more! These were the ones we thought you'd be the
					most interested in.
				</span>
			</div>
			<div className="w-full px-4 lg:px-20 flex flex-col justify-center items-center">
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-10 pb-4 lg:pb-10">
					<div className="w-full lg:w-[551px] bg-neutral-950 flex flex-col justify-center items-center rounded-[10px] gap-4">
						<div className="pt-10">
							<div className="w-[50px] h-[50px] bg-blue-500 flex flex-row justify-center items-center rounded-[6px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									color="rgb(255, 255, 255)"
									width={32}
									height={32}
								>
									<path
										fillRule="evenodd"
										d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center text-center gap-4 pb-10 px-4">
							<span className="text-[18px] lg:text-[22px] text-white font-bold">
								Top-Tier Selection of Models and Exclusive Content
							</span>
							<div className="px-4 lg:px-10">
								<span className="text-[15px] lg:text-[18px] font-medium text-gray-400">
									Leaks.ph offers a unique collection containing the{" "}
									<span className="text-white">full OnlyFans</span> of over{" "}
									<span className="text-blue-500">5,000</span> models and
									hundreds of <span className="text-blue-500">amateur</span>{" "}
									compilations.
								</span>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-[551px] bg-neutral-950 flex flex-col justify-center items-center rounded-[10px] gap-4">
						<div className="pt-10">
							<div className="w-[50px] h-[50px] bg-blue-500 flex flex-row justify-center items-center rounded-[6px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									color="rgb(255, 255, 255)"
									width={32}
									height={32}
								>
									<path
										fillRule="evenodd"
										d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center text-center gap-4 pb-10 px-4">
							<span className="text-[18px] lg:text-[22px] text-white font-bold">
								Simple, Secure, and Hassle-Free
							</span>
							<div className="px-4 lg:px-10">
								<span className="text-[15px] lg:text-[18px] font-medium text-gray-400">
									Enjoy browsing our content library{" "}
									<span className="text-white">without fear</span> of malicious
									entities.
									<br /> All content is stored in{" "}
									<span className="text-blue-500">100% safe</span> mega.nz
									folders.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
					<div className="w-full lg:w-[551px] bg-neutral-950 flex flex-col justify-center items-center rounded-[10px] gap-4">
						<div className="pt-10">
							<div className="w-[50px] h-[50px] bg-blue-500 flex flex-row justify-center items-center rounded-[6px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									color="rgb(255, 255, 255)"
									width={32}
									height={32}
								>
									<path
										fillRule="evenodd"
										d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center text-center gap-4 pb-10 px-4">
							<span className="text-[18px] lg:text-[22px] text-white font-bold">
								Browse Packs from Your Favourite Categories
							</span>
							<div className="px-4 lg:px-10">
								<span className="text-[15px] lg:text-[18px] font-medium text-gray-400">
									From <span className="text-white">Latinas</span> to{" "}
									<span className="text-white">Snapchat</span> and{" "}
									<span className="text-white">Celebrity</span>, if you can
									imagine it, we have it. Discover new go-to categories{" "}
									<span className="text-blue-500">with ease</span>.
								</span>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-[551px] bg-neutral-950 flex flex-col justify-center items-center rounded-[10px] gap-4">
						<div className="pt-10">
							<div className="w-[50px] h-[50px] bg-blue-500 flex flex-row justify-center items-center rounded-[6px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									color="rgb(255, 255, 255)"
									width={32}
									height={32}
								>
									<path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
									<path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
									<path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
								</svg>
							</div>
						</div>
						<div className="flex flex-col justify-center items-center text-center gap-4 pb-10 px-4">
							<span className="text-[18px] lg:text-[22px] text-white font-bold">
								Request New Models & Enjoy <br />
								Lightning-Fast Delivery
							</span>
							<div className="px-4 lg:px-10">
								<span className="text-[15px] lg:text-[18px] font-medium text-gray-400">
									We take pride in delivering{" "}
									<span className="text-white">model</span> and{" "}
									<span className="text-white">pack</span> requests to our
									customers.
									<br /> Just ask and we'll{" "}
									<span className="text-blue-500">take care of the rest</span>.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-fit flex flex-col lg:flex-row gap-4 lg:gap-10 pt-4 lg:pt-10">
					<div className="w-full lg:w-[1136px] h-[260px] bg-neutral-950 rounded-[10px]">
						<div className="flex flex-col justify-center items-center py-16 gap-8">
							<span className="text-[22px] font-bold  text-white">
								What are you waiting for?
							</span>
							<Link href="#pricing">
								<button
									type="button"
									className="w-[166.422px] h-[53px] bg-white text-black text-[16px] font-medium rounded-[100px]"
								>
									Join Now!
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
