import { getCurrentDate } from '../../helpers/currentDate';
import styles from './TableCell.module.css';
import { useState } from 'react';

interface TableCellProps {
  date: string;
  doneDate?: string;
}

export const TableCell = ({ date }: TableCellProps) => {
  const [isDone, setIsDone] = useState(false);
  const style = isDone ? `${styles.cell} ${styles.done}` : `${styles.cell}`;

  const handleDone = () => {
    const currentDate = getCurrentDate();
    if (currentDate == date) {
      setIsDone((prevState) => !prevState);
    }
  };

  return (
    <span className={style} onClick={handleDone}>
      {date.split('-')[2]}
    </span>
  );
};
