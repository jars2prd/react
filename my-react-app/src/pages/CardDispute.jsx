import React from "react";
import { useLocation } from "react-router-dom";

export default function CardDispute() {
  const location = useLocation();
  const txn = location.state?.transaction;

  return (
    <section className="page card-dispute">
      <h1>Card Dispute</h1>
      {txn ? (
        <div style={{ marginBottom: "16px" }}>
          <p><strong>Transaction on Card:</strong> {txn.card}</p>
          <p><strong>Txn Amount:</strong> ₹{txn.amount.toFixed(2)}</p>
          <p><strong>Txn Date:</strong> {txn.date}</p>
        </div>
      ) : (
        <p>Go to Transaction tab and select appropreate transaction to raise a dispute.</p>
      )}
      
      {txn ? (
      <form>
        <label>Reason for Dispute:</label><br />
        <textarea rows="4" cols="40" placeholder="Describe the issue..." /><br /><br />
        <button type="submit">Submit Dispute</button>
      </form>
      ) : (<p></p>)
      }
    </section>
  );
}
