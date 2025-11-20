"use client";

import dynamic from "next/dynamic";
import {
  CheckoutFormDiv,
  CheckoutFormH2,
  CheckoutFormParagraph,
  CheckoutFormPrice,
  CheckoutFormDivider,
  CheckoutFormTotal,
  CloseButton,
} from "@/styles/CheckoutForm";

// Dynamic import of PayButton (client-only)
const PayButton = dynamic(() => import("./PayButton"), { ssr: false });

export default function CheckoutForm({
  showCheckout,
  closeCheckout,
  isMobile,
}) {
  return (
    <CheckoutFormDiv $isMobile={isMobile} $showMobile={showCheckout}>
      {isMobile && <CloseButton onClick={closeCheckout}>✕</CloseButton>}

      <CheckoutFormH2>Buy Event Tickets</CheckoutFormH2>
      <CheckoutFormParagraph>Summary:</CheckoutFormParagraph>

      <CheckoutFormPrice>
        <span>Date</span>
        <span>January, 22</span>

        <span>Time</span>
        <span>3:00pm</span>

        <span>Ticket</span>
        <span>General Admission</span>
      </CheckoutFormPrice>

      <CheckoutFormDivider />

      <CheckoutFormTotal>
        <span>Price</span>
        <span>#15,000</span>
      </CheckoutFormTotal>

      <div style={{ marginTop: "25px", textAlign: "center" }}>
        <PayButton />
      </div>
    </CheckoutFormDiv>
  );
}
