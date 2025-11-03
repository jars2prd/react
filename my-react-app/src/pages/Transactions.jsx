import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  const navigate = useNavigate();

  const [transactions] = useState([
    {
      id: 1,
      date: "2025-10-30",
      card: "4863698909409999",
      amount: 1299.99,
      status: "Completed"
    },
    {
      id: 2,
      date: "2025-10-31",
      card: "4863698909409999",
      amount: 450.0,
      status: "Pending"
    },
    {
      id: 3,
      date: "2025-11-01",
      card: "4863698909409999",
      amount: 8999.99,
      status: "Disputed"
    },
    {
      id: 3,
      date: "2025-11-01",
      card: "4863698909409999",
      amount: 99.99,
      status: ""
    },
    {
      id: 3,
      date: "2025-11-01",
      card: "4863698909409999",
      amount: 199.00,
      status: ""
    },
    {
      id: 3,
      date: "2025-11-01",
      card: "4863698909409999",
      amount: 60.00,
      status: ""
    },
    {
      id: 3,
      date: "2025-11-01",
      card: "4863698909409999",
      amount: 9000.00,
      status: ""
    },
    {
      id: 3,
      date: "2025-11-01",
      card: "4863698909409999",
      amount: 621.09,
      status: ""
    },
    {
      id: 3,
      date: "2025-11-01",
      card: "4863698909409999",
      amount: 8999.99,
      status: ""
    }
  ]);

  const handleView = (txn) => {
    alert(`Viewing details for: ${txn.description}`);
  };

  const handleDispute = (txn) => {
    // 👇 Navigate to the Card Dispute page when user clicks "Dispute"
    navigate("/card-dispute", { state: { transaction: txn } });
  };

  return (
    <section className="page transactions">
      <h1 style={{ marginBottom: "16px" }}>Transaction List</h1>
      <TransactionTable
        transactions={transactions}
        onView={handleView}
        onDispute={handleDispute}
      />
    </section>
  );
}
