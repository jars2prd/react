import React, { useEffect, useRef } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";

export default function BPMNModeler({ onChange }) {
  const containerRef = useRef(null);
  const modelerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    modelerRef.current = new BpmnModeler({
      container: containerRef.current,
      width: "100%",
      height: "100%"
    });

    // ✅ Use async init to avoid rendering before ready
    async function createNewDiagram() {
      try {
        await modelerRef.current.createDiagram();
        const canvas = modelerRef.current.get("canvas");
        canvas.zoom("fit-viewport");
      } catch (err) {
        console.error("Error creating BPMN diagram:", err);
      }
    }

    createNewDiagram();

    // Listen for model changes
    if (onChange) {
      modelerRef.current.on("commandStack.changed", async () => {
        try {
          const { xml } = await modelerRef.current.saveXML({ format: true });
          onChange(xml);
        } catch (e) {
          console.error(e);
        }
      });
    }

    return () => modelerRef.current?.destroy();
  }, [onChange]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "80vh",
        minHeight: "500px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    />
  );
}
