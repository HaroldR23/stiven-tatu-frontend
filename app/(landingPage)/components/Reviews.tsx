import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ReviewsProps } from '@/app/models';
import { reviewsContent } from '@/app/constants';


const Reviews = ({ language }: ReviewsProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="reviews" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {reviewsContent[language].title}
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="reviews-slider"
        >
          <Slider {...settings}>
            {reviewsContent[language].reviews.map((review, index) => (
              <div key={index} className="px-3">
                <div className="bg-card border border-white/5 p-6 h-full">
                  <div className="aspect-square mb-4 overflow-hidden bg-secondary">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
                  <p className="font-medium">— {review.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .reviews-slider .slick-dots {
          bottom: -40px;
        }
        .reviews-slider .slick-dots li button:before {
          color: #F1B111;
          opacity: 0.3;
        }
        .reviews-slider .slick-dots li.slick-active button:before {
          opacity: 1;
        }
        .reviews-slider .slick-prev,
        .reviews-slider .slick-next {
          z-index: 1;
        }
        .reviews-slider .slick-prev:before,
        .reviews-slider .slick-next:before {
          color: #F1B111;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
