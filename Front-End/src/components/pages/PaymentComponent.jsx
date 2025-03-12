import { useState } from "react";

const PaymentComponent = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
        <select
          className="border p-3 w-full rounded-lg"
          value={selectedPayment}
          onChange={(e) => setSelectedPayment(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="UPI">UPI</option>
          <option value="Net Banking">Net Banking</option>
        </select>
      </div>

      {/* Show payment gateway only when a method is selected */}
      {selectedPayment && (
        <div className="p-4 border rounded-lg bg-gray-100">
          <h4 className="text-md font-medium mb-2">
            {selectedPayment} Payment Gateway
          </h4>

          {selectedPayment === "Credit Card" && (
            <div>
              <p>Enter your card details:</p>
              <input
                type="text"
                placeholder="Card Number"
                className="border p-2 w-full rounded-md mt-2"
              />
            </div>
          )}

          {selectedPayment === "UPI" && (
            <div>
              <p>Enter your UPI ID:</p>
              <input
                type="text"
                placeholder="UPI ID"
                className="border p-2 w-full rounded-md mt-2"
              />
            </div>
          )}

          {selectedPayment === "Net Banking" && (
            <div>
              <p>Select Your Bank:</p>
              <select className="border p-2 w-full rounded-md mt-2">
                <option value="">Choose Bank</option>
                <option value="HDFC">HDFC</option>
                <option value="SBI">SBI</option>
                <option value="ICICI">ICICI</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentComponent;
