import Image from "next/image";
import CustomerButton from "@/component/customerButton";

export default function Home() {
  return (

    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <CustomerButton
        label="Click Me"
        onClick={() => console.log("Button Clicked")} 
        className="bg-red-500" // You can pass extra styles if needed
      />
    </div>
  );
}
