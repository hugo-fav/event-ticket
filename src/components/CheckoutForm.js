"use client";

import {
  CheckoutFormDiv,
  CheckoutFormH2,
  CheckoutFormParagraph,
  CheckoutFormPrice,
  CheckoutFormDivider,
  CheckoutFormTotal,
  CloseButton,
} from "@/styles/CheckoutForm";

import PayButton from "./PayButton";

export default function CheckoutForm({
  showCheckout,
  closeCheckout,
  isMobile,
}) {
  return (
    <CheckoutFormDiv $isMobile={isMobile} $showMobile={showCheckout}>
      {/* Close button only on mobile */}
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
