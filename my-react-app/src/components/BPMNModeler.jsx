import React, { useEffect, useRef } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

export default function BPMNModeler({ xml, onChange }) {
  const containerRef = useRef(null);
  const modelerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize BPMN Modeler
    modelerRef.current = new BpmnModeler({
      container: containerRef.current,
      keyboard: { bindTo: document },
    });

    async function loadDiagram() {
      try {
        if (xml) {
          // 🟢 Load predefined BPMN XML
          await modelerRef.current.importXML(xml);
        } else {
          // 🟡 Create a blank diagram if none provided
          await modelerRef.current.createDiagram();
        }

        // 🧭 Fit diagram to viewport
        const canvas = modelerRef.current.get("canvas");
        canvas.zoom("fit-viewport");
      } catch (err) {
        console.error("Error loading BPMN diagram:", err);
      }
    }

    loadDiagram();

    // Listen for changes (optional)
    if (onChange) {
      modelerRef.current.on("commandStack.changed", async () => {
        const { xml } = await modelerRef.current.saveXML({ format: true });
        onChange(xml);
      });
    }

    // Cleanup
    return () => modelerRef.current.destroy();
  }, [xml, onChange]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "85vh",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    />
  );
}
