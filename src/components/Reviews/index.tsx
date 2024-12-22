import { StarIcon } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const reviewsData = [
  {
    rating: 5,
    text: "Definitely worth the money. They have tons of models, and it's very easy to navigate.",
    author: "Aaron",
    location: "US",
  },
  {
    rating: 5,
    text: "Amazing service and great selection of AI models. Highly recommended!",
    author: "Sarah",
    location: "UK",
  },
  {
    rating: 5,
    text: "The platform is intuitive and the results are outstanding. Best AI service I've used.",
    author: "Michael",
    location: "CA",
  },
  {
    rating: 5,
    text: "Customer support is excellent and the models are top-notch. Worth every penny.",
    author: "Emma",
    location: "AU",
  },
  {
    rating: 5,
    text: "Incredible variety of models and the interface is super user-friendly.",
    author: "David",
    location: "DE",
  },
];

const ReviewCard = ({
  review,
}: {
  review: { rating: number; text: string; author: string; location: string };
}) => (
  <div className="flex h-[201.781px] w-[409px] rounded-2xl bg-neutral-950">
    <div className="flex flex-col gap-6 p-4">
      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, index) => (
          <StarIcon
            key={index}
            size={18}
            className="fill-yellow-300 stroke-yellow-300"
          />
        ))}
      </div>
      <span className="text-[18px]">{review.text}</span>
      <span className="pt-4">
        @ {review.author}, {review.location}
      </span>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <div className="w-full pt-28" id="reviews">
      <div className="bg-gd-review py-20">
        <div className="flex flex-col gap-2 text-center">
          <span className="text-[32px] font-bold lg:text-[42px]">
            Customer Reviews
          </span>
          <span className="px-20 text-[15px] font-medium text-gray-400 lg:px-0 lg:text-[22px]">
            Don't just take our word for it. See what other customers think
            about us.
          </span>
        </div>
        <div className="flex flex-col gap-4 py-10 md:px-44">
          <Marquee
            direction="right"
            className="custom-marquee"
            autoFill
            gradient
            gradientColor="#000000"
          >
            {reviewsData.map((review, index) => (
              <ReviewCard key={`right-${index}`} review={review} />
            ))}
          </Marquee>
          <Marquee
            className="custom-marquee"
            autoFill
            gradient
            gradientColor="#000000"
            direction="left"
          >
            {reviewsData.map((review, index) => (
              <ReviewCard key={`left-${index}`} review={review} />
            ))}
          </Marquee>
        </div>
        <div className="flex flex-row items-center justify-center px-4 text-[20px] font-semibold lg:px-0">
          <Link href="https://www.trustpilot.com/review/" target="_blank">
            <button
              type="button"
              className="h-[71px] w-full rounded-[50px] bg-neutral-950 transition-all duration-300 hover:brightness-125 lg:w-[453.422px]"
            >
              See 100+ Reviews Rating us 4.8/5 -{">"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
