import 'index.css';
import user from './data/user.json';
import { Profile } from './profile/profile';
import statistics from './data/statistics.json';
import { Statistics } from './statistics/statistics';
import friends from './data/friends.json';
import { FriendList } from './friend/friend';
import transactions from './data/transactions.json';
import { TransactionHistory } from './transaction/transaction';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
