import 'index.css';
import user from './data/user.json';
import { Profile } from './profile/profile';
import data from './data/data.json';
import { Statistics } from './statistic/data';
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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
