import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="w-full flex flex-col justify-center items-center pt-[100px] bg-gd">
			<div className="w-full flex flex-row justify-center items-center pt-[50px] lg:pt-[70px] pb-[10px] lg:pl-[100px]">
				<div className="flex flex-col">
					<span className="text-[39px] lg:text-[60px] font-bold text-center lg:text-left">
					Leaks.ph
					</span>
					<p className="text-[17.5px] lg:text-[25px] w-full lg:w-[679px] font-medium text-left hidden lg:block">
						OnlyFans can be costly. Don't worry — we've got <br />
						you covered. With our collection of over 5,000 <br />
						top models, you'll never need to buy another <br />
						OnlyFans subscription!
					</p>
					<p className="text-[17.5px] lg:text-[25px] w-full lg:w-[679px] font-medium text-center block lg:hidden px-5 lg:px-0">
						Featuring a collection of over 5,000 top models, with us you'll{" "}
						<span className="font-bold">never</span> need to buy another
						OnlyFans subscription!
					</p>
				</div>
				<div className="hidden lg:block">
					<Image
						priority
						src={"/avQsfrnBF1akz1Jjjhzl0E000Y.avif"}
						width={550}
						height={273}
						alt="discord-logo"
					/>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-3 pt-[80px]">
				<Image
					priority
					src={"/N8hiRu4sjmPwYUtgSveeJehEc4.avif"}
					width={147}
					height={49}
					alt="models"
				/>
				<span className="text-neutral-400 text-[15px]">
					Instant access to <span className="text-white">5,000+ models</span>
				</span>
			</div>
			<div className="pt-2 lg:pt-10">
				<Link href={"#pricing"}>
					<button
						type="button"
						className="bg-blue-500 px-10 py-3 rounded-[30px] text-base font-semibold hover:brightness-110 transition-all"
					>
						Join now!
					</button>
				</Link>
			</div>
		</div>
	);
}
