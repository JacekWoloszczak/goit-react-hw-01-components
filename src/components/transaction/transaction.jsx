import css from './transaction.module.css';
import propTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <>
          <thead></thead>
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        </>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  id: propTypes.number,
  type: propTypes.string,
  amount: propTypes.number,
  currency: propTypes.string,
};
