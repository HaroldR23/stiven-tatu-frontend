import { reviewsContent } from "@/app/constants";
import { ReviewCardProps } from "@/app/models";
import { ArrowRight } from "lucide-react";

const ReviewCard = ({
  review,
  language,
  isExpanded,
  toggleExpanded,
  index,
}: ReviewCardProps) => {
  const CARD_HEIGHT = "560px";
  const COLLAPSED_PANEL_HEIGHT = "215px";
  const EXPANDED_PANEL_HEIGHT = "340px";

  return (
    <div
      className="flex-[0_0_100%] min-w-0 px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
    >
      <div
        className="relative overflow-hidden border border-white/5 bg-[#0a0a0a]"
        style={{ height: CARD_HEIGHT }}
      >
        <div
          className="w-full transition-all duration-500 ease-in-out"
          style={{
            height: isExpanded
              ? CARD_HEIGHT
              : `calc(${CARD_HEIGHT} - ${COLLAPSED_PANEL_HEIGHT})`,
          }}
        >
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-contain object-center bg-[#050505]"
          />
        </div>

        <div
          className={`left-0 right-0 flex flex-col transition-all duration-500 ease-in-out ${
            isExpanded ? "absolute bottom-0" : "relative"
          }`}
          style={{
            height: isExpanded ? EXPANDED_PANEL_HEIGHT : COLLAPSED_PANEL_HEIGHT,
            background: isExpanded
              ? "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.92) 30%, rgba(8,8,8,0.98) 55%, rgb(10,10,10) 100%)"
              : "linear-gradient(to bottom, rgba(8,8,8,0.92) 0%, rgb(10,10,10) 35%, rgb(10,10,10) 100%)",
            backdropFilter: isExpanded ? "blur(2px)" : "none",
          }}
        >
          <div className="flex-1 min-h-0 flex flex-col px-6 pt-4 overflow-hidden">
            {/* <span
              className="text-4xl leading-none mb-2 shrink-0 select-none"
              style={{ color: "#F1B111", fontFamily: "Georgia, serif" }}
            >
              "
            </span> */}
            <div
              className={`flex-1 min-h-0 ${isExpanded ? "overflow-y-auto pr-1" : "overflow-hidden mt-5"}`}
            >
              <p
                className="text-white/88 italic text-sm leading-relaxed"
                style={
                  !isExpanded
                    ? {
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }
                    : undefined
                }
              >
                {review.review}"
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-4 shrink-0">
            <p className="font-medium text-sm text-white/90">
              — {review.name}
            </p>
            <button
              onClick={() => toggleExpanded(index)}
              className="inline-flex items-center gap-2 group"
              style={{ color: "#F1B111" }}
            >
              <span
                className="px-3 py-1 rounded-full border text-xs transition-colors duration-200 group-hover:bg-[#F1B111] group-hover:text-black"
                style={{ borderColor: "#F1B111" }}
              >
                {isExpanded
                  ? reviewsContent[language].seeLess
                  : reviewsContent[language].seeMore}
              </span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300"
                style={{
                  transform: isExpanded
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
