import React, { useState } from "react";

function Todolist() {
  const [steps, setSteps] = useState([
    {
      id: 1,
      text: "Enter the NetCafe and approach the counter",
      completed: true,
    },
    {
      id: 2,
      text: "Choose a computer and pay for usage time",
      completed: true,
    },
    { id: 3, text: "Log in using provided credentials", completed: false },
    { id: 4, text: "Start browsing, gaming, or working", completed: false },
    { id: 5, text: "Log out and inform staff when finished", completed: false },
  ]);
  const [newStep, setNewStep] = useState("");

  const deleteStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  const addStep = () => {
    if (newStep.trim() === "") return;
    const newStepItem = {
      id: steps.length + 1,
      text: newStep,
      completed: false,
    };
    setSteps([...steps, newStepItem]);
    setNewStep("");
  };

  const toggleStepCompletion = (id) => {
    setSteps(
      steps.map((step) =>
        step.id === id ? { ...step, completed: !step.completed } : step
      )
    );
  };

  return (
    <div className="todo-list">
      <h2>To Do List</h2>
      <input
        type="text"
        value={newStep}
        onChange={(e) => setNewStep(e.target.value)}
        placeholder="Add a new list.."
      />
      <button onClick={addStep}>Add</button> {}
      <ul>
        {steps.map((step) => (
          <li key={step.id}>
            <input
              type="checkbox"
              checked={step.completed}
              onChange={() => toggleStepCompletion(step.id)}
            />
            <span
              style={{
                textDecoration: step.completed ? "line-through" : "none",
              }}
            >
              {step.text}
            </span>
            <button onClick={() => deleteStep(step.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
