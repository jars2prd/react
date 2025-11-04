import React, { useState } from "react";
import BPMNModeler from "../components/BPMNModeler";

const defaultBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_0u4f8rs" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.40.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">
  <bpmn:process id="Process_11igzy5" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_1c9n3f6</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1c9n3f6" sourceRef="StartEvent_1" targetRef="Activity_0zrab5t" />
    <bpmn:userTask id="Activity_0zrab5t" name="TxnList">
      <bpmn:extensionElements>
        <zeebe:userTask />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1c9n3f6</bpmn:incoming>
      <bpmn:outgoing>Flow_0z7f4k2</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="Gateway_0eyq0ol">
      <bpmn:incoming>Flow_0z7f4k2</bpmn:incoming>
      <bpmn:incoming>Flow_0ra6q6n</bpmn:incoming>
      <bpmn:outgoing>Flow_1r8wux5</bpmn:outgoing>
      <bpmn:outgoing>Flow_0wv8w9i</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0z7f4k2" sourceRef="Activity_0zrab5t" targetRef="Gateway_0eyq0ol" />
    <bpmn:sequenceFlow id="Flow_1r8wux5" sourceRef="Gateway_0eyq0ol" targetRef="Activity_1htho2b" />
    <bpmn:callActivity id="Activity_1htho2b" name="VISA">
      <bpmn:extensionElements>
        <zeebe:calledElement propagateAllChildVariables="false" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1r8wux5</bpmn:incoming>
      <bpmn:outgoing>Flow_12o0t49</bpmn:outgoing>
    </bpmn:callActivity>
    <bpmn:sequenceFlow id="Flow_12o0t49" sourceRef="Activity_1htho2b" targetRef="Gateway_01uifbd" />
    <bpmn:endEvent id="Event_135q7jg">
      <bpmn:incoming>Flow_1k0goln</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0wv8w9i" sourceRef="Gateway_0eyq0ol" targetRef="Activity_1dj8z09" />
    <bpmn:callActivity id="Activity_1dj8z09" name="HSBC">
      <bpmn:extensionElements>
        <zeebe:calledElement propagateAllChildVariables="false" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0wv8w9i</bpmn:incoming>
      <bpmn:outgoing>Flow_1qlsas0</bpmn:outgoing>
    </bpmn:callActivity>
    <bpmn:endEvent id="Event_037ckvo">
      <bpmn:incoming>Flow_1qlsas0</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1qlsas0" sourceRef="Activity_1dj8z09" targetRef="Event_037ckvo" />
    <bpmn:exclusiveGateway id="Gateway_01uifbd">
      <bpmn:incoming>Flow_12o0t49</bpmn:incoming>
      <bpmn:outgoing>Flow_1k0goln</bpmn:outgoing>
      <bpmn:outgoing>Flow_0ra6q6n</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_1k0goln" sourceRef="Gateway_01uifbd" targetRef="Event_135q7jg" />
    <bpmn:sequenceFlow id="Flow_0ra6q6n" sourceRef="Gateway_01uifbd" targetRef="Gateway_0eyq0ol" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_11igzy5">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="182" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0rghpcp_di" bpmnElement="Activity_0zrab5t">
        <dc:Bounds x="270" y="140" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0eyq0ol_di" bpmnElement="Gateway_0eyq0ol" isMarkerVisible="true">
        <dc:Bounds x="425" y="155" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0mv8z6h_di" bpmnElement="Activity_1htho2b">
        <dc:Bounds x="530" y="140" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_135q7jg_di" bpmnElement="Event_135q7jg">
        <dc:Bounds x="792" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0w5x8fj_di" bpmnElement="Activity_1dj8z09">
        <dc:Bounds x="530" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_037ckvo_di" bpmnElement="Event_037ckvo">
        <dc:Bounds x="792" y="272" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_01uifbd_di" bpmnElement="Gateway_01uifbd" isMarkerVisible="true">
        <dc:Bounds x="695" y="155" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1c9n3f6_di" bpmnElement="Flow_1c9n3f6">
        <di:waypoint x="218" y="180" />
        <di:waypoint x="270" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0z7f4k2_di" bpmnElement="Flow_0z7f4k2">
        <di:waypoint x="370" y="180" />
        <di:waypoint x="425" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1r8wux5_di" bpmnElement="Flow_1r8wux5">
        <di:waypoint x="475" y="180" />
        <di:waypoint x="530" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_12o0t49_di" bpmnElement="Flow_12o0t49">
        <di:waypoint x="630" y="180" />
        <di:waypoint x="695" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0wv8w9i_di" bpmnElement="Flow_0wv8w9i">
        <di:waypoint x="450" y="205" />
        <di:waypoint x="450" y="290" />
        <di:waypoint x="530" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1qlsas0_di" bpmnElement="Flow_1qlsas0">
        <di:waypoint x="630" y="290" />
        <di:waypoint x="792" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1k0goln_di" bpmnElement="Flow_1k0goln">
        <di:waypoint x="745" y="180" />
        <di:waypoint x="792" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ra6q6n_di" bpmnElement="Flow_0ra6q6n">
        <di:waypoint x="705" y="170" />
        <di:waypoint x="580" y="80" />
        <di:waypoint x="464" y="169" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

export default function WorkflowDesigner() {
  const [xml, setXml] = useState(defaultBpmn);

  return (
    <section className="page workflow-designer">
      <h1>Workflow Designer</h1>
      <BPMNModeler xml={xml} onChange={setXml} />
    </section>
  );
}
