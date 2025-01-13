import './App.css';

import { ChangeEvent, useState } from 'react';

import { TableRow } from './components/TableRow/TableRow';
import { getCurrentWeekDates } from './helpers/currentWeekDays';

export interface Habit {
  label: string;
  dates: string[];
}

// const emptyHabit: Habit = {
//   label: '',
//   dates: []
// }

function App() {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState<string[]>([]);

  const currentWeekDays = getCurrentWeekDates();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setHabit(e.target.value);
  };

  const handleAddHabit = () => {
    if (habit.length > 0) {
      const newHabits = [...habits, habit];
      setHabits(newHabits);
      setHabit('');
    }
  };

  return (
    <div>
      <ul>
        {habits?.map((habit, i) => (
          <li key={i}>
            <TableRow label={habit} days={currentWeekDays} />
          </li>
        ))}
      </ul>

      <input type='text' value={habit} onChange={handleInput}></input>
      <button onClick={handleAddHabit}>Add habit</button>
    </div>
  );
}

export default App;
