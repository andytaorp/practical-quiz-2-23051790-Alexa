import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (!habitName) return;
    const newHabit = {
      id: Date.now(),
      habitName,
      completed: false,
    };

    onAddHabit(newHabit);
    setHabitName("");
  };

  return (
    //TODO: add a form to add a new habit
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Habit"
        className="item-input"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit" className="add-button">Add Habit</button>
    </form>
  );
}
