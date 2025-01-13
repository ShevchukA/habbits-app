import { TableCell } from '../TableCell/TableCell';

interface TableRowProps {
  label: string;
  days: string[];
  data?: string[];
}

export const TableRow = ({ label, days }: TableRowProps) => {
  return (
    <div>
      <span>{label}</span>
      {days.map((day) => {
        return <TableCell key={day} date={day} />;
      })}
    </div>
  );
};
