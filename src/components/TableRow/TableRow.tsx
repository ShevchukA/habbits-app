import { TableCell } from '../TableCell/TableCell';
import styles from './TableRow.module.css';

interface TableRowProps {
  label: string;
  days: string[];
  data?: string[];
}

export const TableRow = ({ label, days }: TableRowProps) => {
  return (
    <li className={styles.row}>
      <span className={styles.label}>{label}</span>
      <div className={styles.cells}>
        {days.map((day) => {
          return <TableCell key={day} date={day} />;
        })}
      </div>
    </li>
  );
};
