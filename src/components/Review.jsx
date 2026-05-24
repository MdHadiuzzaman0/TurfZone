import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Avatar } from "@heroui/react";
import Marquee from "react-fast-marquee"; 
const reviews = [
  { id: 1, name: "Sami Chowdhury", image: "/review-01.avif", role: "Footballer", text: "Booking turfs used to be a nightmare over phone calls. This platform solved it in 3 clicks! Highly recommended.", rating: 5 },
  { id: 2, name: "Tamim Hasan", image: "/review-02.avif",  role: "Cricket Captain", text: "The slot selection dropdown is so smooth. Managed to secure our premium Friday night pitch instantly.", rating: 4.5 },
  { id: 3, name: "Siam Ahmed", image: "/review-03.avif", role: "Tournament Organizer", text: "Love the row layout for managing facilities. All data like location and slots are visible at a single glance.", rating: 4 },
  { id: 4, name: "Ahsan Habib", image: "/review-04.avif", role: "Badminton Enthusiast", text: "Real-time updates and seamless integration. The UI looks absolute premium in dark mode. Recommended!", rating: 4 },
];

const ReviewMarquee = () => {
  return (
    <div className="bg-black py-20 overflow-hidden w-full flex flex-col items-center">
      {/* Title */}
      <div className="w-full max-w-7xl px-6 mb-12 text-center md:text-left">
        <h2 className="text-3xl font-sports font-black text-white uppercase tracking-wide">
          What Athletes <span className="text-arenaOrange">Say</span>
        </h2>
        <p className="text-zinc-500 font-body text-sm mt-1">Real feedback from players and sports community leaders.</p>
      </div>

      <Marquee 
        speed={50}            
        pauseOnHover={true}
        gradient={true} gradientColor="black" gradientWidth={50}     
      >
        {reviews.map((review, index) => {
          const fullStars = Math.floor(review.rating);
          const hasHalfStar = review.rating % 1 !== 0;

          return (
            <div
              key={index}
              className="w-[320px] sm:w-[380px] p-6 bg-arenaCard border border-white/5 rounded-xl flex flex-col justify-between flex-shrink-0 shadow-xl transition-all duration-300 hover:border-arenaOrange/30 mx-3" 
            >
              <div>
                <div className="flex text-arenaOrange text-lg mb-3 items-center">
                  {[...Array(fullStars)].map((_, i) => (
                    <IoMdStar key={i} />
                  ))}
                  {hasHalfStar && <IoMdStarHalf />}
                </div>
                <p className="text-zinc-300 font-body text-sm italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                 <Avatar>
                    <Avatar.Image alt="review image" src={review.image} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-sports font-bold uppercase tracking-wide text-sm">{review.name}</h4>
                    <p className="text-zinc-500 font-body text-xs">{review.role}</p>
                  </div>
                </div>
                <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 font-sports font-bold px-2 py-0.5 rounded uppercase">Verified</span>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default ReviewMarquee;