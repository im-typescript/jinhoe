import React, {useState, useEffect} from 'react';
import {IUser} from './IUser';
import { getDataPromise } from './getDataPromise';
import { Card } from './Card';
import './App.css'
// import logo from './logo.svg';
// import './App.css';


const App: React.FC = () => {
  const limit = 1
  const [skip, setSkip] = useState(0)
  const [users, setUsers] = useState<IUser[]>([])

  const onClick = () => {
    getDataPromise((receivedUsers: IUser[]) => {
      setSkip(skip + limit)
      setUsers([...users, ...receivedUsers])
    })(skip, limit)
  }


  // useEffect(()=> {
  //   getDataPromise((receivedUsers: IUser[]) => {
  //       setUsers([...users, ...receivedUsers]);
  //   })(0, 1)
  // }, [])

  useEffect(onClick, []);
  return (
      <div className='App'>{
        users.map((user: IUser, key: number) => (<Card click = {onClick} user={user} key={key.toString()} />))
      }</div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
