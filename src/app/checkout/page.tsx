"use client"
import { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    area: "",
    province: "Azad Kashmir",
    promoCode: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-[900px] bg-white shadow-lg rounded-lg p-6 flex gap-6">
        {/* Left Section - Delivery Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="p-3 border rounded w-full" name="fullName" placeholder="Enter your first and last name" onChange={handleChange} />
            <input className="p-3 border rounded w-full" name="phone" placeholder="Enter your phone number" onChange={handleChange} />
            <input className="p-3 border rounded w-full col-span-2" name="address" placeholder="Building / House No / Floor / Street" onChange={handleChange} />
            <select className="p-3 border rounded w-full" name="city" onChange={handleChange}>
              <option>Select City</option>
              <option>Muzaffarabad</option>
              <option>Mirpur</option>
            </select>
            <select className="p-3 border rounded w-full" name="area" onChange={handleChange}>
              <option>Select Area</option>
              <option>Area 1</option>
              <option>Area 2</option>
            </select>
          </div>
        </div>
        
        {/* Right Section - Promotion & Order Summary */}
        <div className="w-80">
          <h2 className="text-2xl font-semibold mb-4">Promotion</h2>
          <div className="flex gap-2">
            <input className="p-3 border rounded flex-1" name="promoCode" placeholder="Enter Store/Daraz Code" onChange={handleChange} />
            <button className="bg-blue-500 text-white px-6 py-3 rounded">Apply</button>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-gray-100 p-4 rounded">
              <div className="flex justify-between text-lg"><span>Items Total (2 items)</span><span>Rs. 746</span></div>
              <div className="flex justify-between text-lg"><span>Delivery Fee</span><span>Rs. 145</span></div>
              <hr className="my-3" />
              <div className="flex justify-between text-xl font-bold"><span>Total</span><span className="text-red-500">Rs. 891</span></div>
            </div>
          </div>

          <button className="w-full bg-gray-400 text-white py-3 rounded mt-6 text-lg" disabled>Proceed to Pay</button>
        </div>
      </div>
    </div>
  );
}
