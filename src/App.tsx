import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { TableRow } from './components/TableRow/TableRow';
import { getCurrentWeekDates } from './helpers/currentWeekDays';
import styles from './App.module.css';

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

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentWeekDays = getCurrentWeekDates();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setHabit(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddHabit();
    }
  };

  const handleAddHabit = () => {
    if (habit.length > 0) {
      const newHabits = [...habits, habit];
      setHabits(newHabits);
      setHabit('');
    }
  };

  return (
    <div className={styles.container}>
      {habits.length > 0 && (
        <>
          <div className={styles.header}>
            {currentWeekDays.map((day, i) => (
              <span className={styles.headerCell} key={day}>
                {weekDays[i]}
              </span>
            ))}
          </div>

          <ul className={styles.list}>
            {habits?.map((habit, i) => (
              <TableRow key={i} label={habit} days={currentWeekDays} />
            ))}
          </ul>
        </>
      )}

      <div className={styles.controls}>
        <input
          className={styles.input}
          type='text'
          maxLength={20}
          value={habit}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        ></input>
        <button className={styles.button} onClick={handleAddHabit}>
          Add habit
        </button>
      </div>
    </div>
  );
}

export default App;
