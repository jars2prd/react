import React from "react";

export default function TransactionTable({ transactions = [], onView, onDispute }) {
  return (
    <div className="card" style={{ padding: "16px" }}>
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Card Number</th>
            <th style={thStyle}>Date</th>            
            <th style={thStyle}>Amount (₹)</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((txn, idx) => (
              <tr key={txn.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={tdStyle}>{idx + 1}</td>
                <td style={tdStyle}>{txn.card}</td>
                <td style={tdStyle}>{txn.date}</td>                
                <td style={tdStyle}>{txn.amount.toFixed(2)}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: "8px",
                      background:
                        txn.status === "Completed"
                          ? "#d4edda"
                          : txn.status === "Disputed"
                          ? "#fff3cd"
                          : "#ffffffff",
                      color:
                        txn.status === "Completed"
                          ? "#155724"
                          : txn.status === "Disputed"
                          ? "#856404"
                          : "#721c24"
                    }}
                  >
                    {txn.status}
                  </span>
                </td>
                <td style={tdStyle}>
                  <button onClick={() => onView?.(txn)} style={btnStyle}>
                    WriteOff
                  </button>
                  <button onClick={() => onDispute?.(txn)} style={btnStyleAlt}>
                    Dispute
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "12px" }}>
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold"
};

const tdStyle = {
  padding: "10px",
  textAlign: "left"
};

const btnStyle = {
  marginRight: "6px",
  padding: "4px 8px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

const btnStyleAlt = {
  padding: "4px 8px",
  background: "#ffc107",
  color: "#000",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};
