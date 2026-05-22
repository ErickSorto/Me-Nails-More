"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaGoogle, FaStar } from "react-icons/fa6";

type Review = {
  name: string;
  service: string;
  text: string;
};

const mobileQuery = "(max-width: 700px)";
const autoplayDelay = 3600;

function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar aria-hidden="true" key={index} />
      ))}
    </div>
  );
}

function GoogleMark() {
  return <FaGoogle className="brand-icon" aria-hidden="true" />;
}

export default function MobileReviewCarousel({ reviews }: { reviews: Review[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);

  const scrollToReview = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelectorAll<HTMLElement>(".proof-review-card")[index];

    if (!scroller || !card) {
      return;
    }

    const inlinePadding = Number.parseFloat(window.getComputedStyle(scroller).paddingInlineStart) || 0;

    scroller.scrollTo({
      left: Math.max(card.offsetLeft - inlinePadding, 0),
      behavior: "smooth",
    });
  }, []);

  const updateActiveReview = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".proof-review-card"));
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    const closestIndex = cards.reduce((closest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - scrollerCenter);
      const closestCard = cards[closest];
      const closestDistance = closestCard
        ? Math.abs(closestCard.offsetLeft + closestCard.offsetWidth / 2 - scrollerCenter)
        : Number.POSITIVE_INFINITY;

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(mobileQuery);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncAutoplay = () => {
      setAutoplayEnabled(media.matches && !reducedMotion.matches);
    };

    syncAutoplay();
    media.addEventListener("change", syncAutoplay);
    reducedMotion.addEventListener("change", syncAutoplay);

    return () => {
      media.removeEventListener("change", syncAutoplay);
      reducedMotion.removeEventListener("change", syncAutoplay);
    };
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    let animationFrame = 0;

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveReview);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      scroller.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateActiveReview]);

  useEffect(() => {
    if (!autoplayEnabled || reviews.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      const nextIndex = (activeIndex + 1) % reviews.length;

      setActiveIndex(nextIndex);
      scrollToReview(nextIndex);
    }, autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, autoplayEnabled, reviews.length, scrollToReview]);

  return (
    <div className="proof-review-shell">
      <div className="proof-review-grid" ref={scrollerRef}>
        {reviews.map((review) => (
          <article className="proof-review-card" key={review.service}>
            <div className="proof-review-top">
              <span>
                <GoogleMark />
              </span>
              <div>
                <strong>{review.name}</strong>
                <small>{review.service}</small>
              </div>
            </div>
            <Stars />
            <p>{review.text}</p>
          </article>
        ))}
      </div>
      <div className="proof-carousel-dots" aria-label="Review carousel">
        {reviews.map((review, index) => (
          <button
            aria-label={`Show ${review.service} review`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={activeIndex === index ? "active" : undefined}
            key={review.service}
            onClick={() => {
              setActiveIndex(index);
              scrollToReview(index);
            }}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
