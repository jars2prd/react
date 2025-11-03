import React, { useEffect, useRef } from "react";
import BpmnViewer from "bpmn-js";

export default function BPMNViewer({ xml }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const viewer = new BpmnViewer({ container: containerRef.current });
    if (xml) {
      viewer.importXML(xml).then(() => {
        const canvas = viewer.get("canvas");
        canvas.zoom("fit-viewport");
      }).catch(console.error);
    }
    return () => viewer.destroy();
  }, [xml]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "80vh", border: "1px solid #ddd", borderRadius: "8px" }}
    />
  );
}
