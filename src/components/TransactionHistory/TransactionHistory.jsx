import clsx from 'clsx';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={clsx(s.table)}>
        <thead className={clsx(s.head)}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={clsx(s.bodyTr)} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
