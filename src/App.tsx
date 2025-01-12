import './App.css';

import { ChangeEvent, useState } from 'react';

function App() {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setHabit(e.target.value);
  };

  const handleAddHabit = () => {
    const newHabits = [...habits, habit];
    setHabits(newHabits);
    setHabit('');
  };

  return (
    <div>
      <ul>
        {habits?.map((habit, i) => (
          <li key={i}>{habit}</li>
        ))}
      </ul>

      <input type='text' value={habit} onChange={handleInput}></input>
      <button onClick={handleAddHabit}>Add habit</button>
    </div>
  );
}

export default App;
