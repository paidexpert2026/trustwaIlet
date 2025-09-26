"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState, KeyboardEvent, useEffect } from "react";

const Page = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const text = e.target.value;

    // Only allow single digits
    if (text.length <= 1 && /^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to next input if text is entered
      if (text.length === 1 && index < otp.length - 1) {
        setCurrentInputIndex(index + 1);
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  useEffect(() => {
    const otpString = otp.join("");
    if (otpString === "123456") {
      console.log(currentInputIndex);
      router.push("/dashboard");
    }
  }, [otp])
  

  // console.log(otp.join(""))

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      setCurrentInputIndex(index - 1);
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const pastedDigits = pastedData.replace(/\D/g, "").slice(0, 6).split("");

    const newOtp = [...otp];
    pastedDigits.forEach((digit, index) => {
      if (index < newOtp.length) {
        newOtp[index] = digit;
      }
    });

    setOtp(newOtp);

    // Focus on the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
    const focusIndex =
      nextEmptyIndex !== -1 ? nextEmptyIndex : newOtp.length - 1;
    setCurrentInputIndex(focusIndex);
    inputsRef.current[focusIndex]?.focus();
  };

  return (
    <div className="max-w-sm mx-auto bg-black/80 min-h-screen">
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col gap-3">
          <p className="text-white text-center font-medium">Enter passcode</p>
          <div className="flex gap-3 items-center mt-1">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                className="w-10 h-10 bg-transparent border border-white/10 rounded-lg text-white text-center focus:outline-none focus:border-white/30"
                ref={(ref) => {inputsRef.current[idx] = ref;}}
                onFocus={() => setCurrentInputIndex(idx)}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onPaste={handlePaste}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
