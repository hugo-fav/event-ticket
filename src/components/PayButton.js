"use client";
import { useState } from "react";
import styled from "styled-components";
import { PaystackButton } from "react-paystack";

const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  color: #444;
  font-weight: 500;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s ease;

  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.15);
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const QuantityButton = styled.button`
  padding: 6px 12px;
  font-size: 1rem;
  font-weight: bold;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

const QuantityValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const StyledPaystackButton = styled(PaystackButton)`
  background: linear-gradient(135deg, #ff8a00, #e83939);
  color: white;
  padding: 14px 22px;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const PayButton = () => {
  const publicKey = "pk_test_7afcd1848d294a4e4a674c599bbd49dd49c1993c";

  // const amount = 15000 * 100;
  const ticketPrice = 15000;

  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");

  const totalAmount = ticketPrice * quantity;
  const amount = totalAmount * 100;

  const componentProps = {
    email,
    amount,
    metadata: { name: "Summer Vibe Concert Ticket" },
    publicKey,
    text: `Pay #${totalAmount.toLocaleString()}`,
    onSuccess: () => alert("✅ Payment successful!"),
    onClose: () => alert("❌ Payment window closed."),
  };

  return (
    <PayContainer>
      <Label>Enter your email to receive your ticket</Label>
      <EmailInput
        type="email"
        placeholder="e.g. johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <QuantitySelector>
        <Label>Number of Tickets:</Label>
        <QuantityButton onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
          −
        </QuantityButton>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityButton onClick={() => setQuantity(quantity + 1)}>
          +
        </QuantityButton>
      </QuantitySelector>

      <StyledPaystackButton {...componentProps} />
    </PayContainer>
  );
};

export default PayButton;
