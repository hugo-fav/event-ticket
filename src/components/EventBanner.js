"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import {
  ImageStyle,
  BannerContent,
  BannerContentHeading1,
  BannerContentHeading2,
  BannerContentParagraph,
  PayingButton,
  Overlay,
} from "@/styles/EventBannerStyle";

// Dynamic import of CheckoutForm to avoid SSR issues
const CheckoutForm = dynamic(() => import("./CheckoutForm"), { ssr: false });

export default function EventBanner() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <ImageStyle>
      <Image
        src="/StockCake-Festival_Sunset_Celebration_1762601308.jpg"
        alt="Event Banner"
        fill
      />

      <BannerContent>
        <BannerContentHeading2>January, 22</BannerContentHeading2>
        <BannerContentHeading1>Summer Vibe Concert 2025</BannerContentHeading1>
        <BannerContentParagraph>
          Join us for an unforgettable night of music, energy, and fun at Lagos
          Arena!
        </BannerContentParagraph>

        {isMobile && (
          <PayingButton onClick={() => setShowCheckout(true)}>
            Buy Ticket
          </PayingButton>
        )}
      </BannerContent>

      {isMobile && showCheckout && (
        <Overlay onClick={() => setShowCheckout(false)} />
      )}

      <CheckoutForm
        showCheckout={showCheckout}
        closeCheckout={() => setShowCheckout(false)}
        isMobile={isMobile}
      />
    </ImageStyle>
  );
}
