import { Profile } from "./task-1/Profile"
import user from './App-json/user.json'

import { Statistics } from "./task-2/Statistics";
import data from './App-json/data.json'

import { FriendList } from "./task-3/FriendList"
import friends from './App-json/friends.json'

import { TransactionHistory } from "./task-4/TransactionHistory"
import transactions from "./App-json/transactions.json"


export const App = () => {
  return (
    <div>
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} />,
      
      <Statistics
      title="Upload stuts"
        stats={data} />
      
     <FriendList
        friends={friends} />
      
      <TransactionHistory items={transactions} />
      

    </div>


  );
};
