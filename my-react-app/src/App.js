import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardDispute from './pages/CardDispute';
import DisputeDecision from './pages/DisputeDecision';
import WorkflowDesigner from "./pages/WorkflowDesigner";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/card-dispute" replace />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/card-dispute" element={<CardDispute />} />
          <Route path="/dispute-decision" element={<DisputeDecision />} />
          <Route path="/workflow-designer" element={<WorkflowDesigner />} />
          <Route path="*" element={<div style={{padding:20}}>Page not found</div>} />
        </Routes>
      </main>
    </div>
  );
}