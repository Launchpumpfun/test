import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";

export default function HomePage() {
	return (
		<main className="bg-gd">
			<Hero />
			<Pricing />
			<Reviews />
			<Features />
			<Footer />
		</main>
	);
}
