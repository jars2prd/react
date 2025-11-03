import React from 'react';

export default function DisputeDecision() {
  return (
    <section className="page dispute-decision">
      <div className="card">
        <h1>Dispute Decision</h1>
        <div className="decision-content">
          <div className="result">
            <div className="result-row">
              <strong>Case ID:</strong>
              <span>#ABC12345</span>
            </div>
            <div className="result-row">
              <strong>Status:</strong>
              <span>Approved</span>
            </div>
            <div className="result-row">
              <strong>Refund amount:</strong>
              <span>₹ 2,450.00</span>
            </div>
          </div>

          <div className="form-actions">
            <button className="btn">Back to disputes</button>
          </div>
        </div>
      </div>
    </section>
  );
}