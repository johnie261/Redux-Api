import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Users from './components/users';
import { fetchUsers } from './store/users/usersSlice';
import { useEffect } from 'react';

function App() {
//  const { isLoading, error } = useSelector((store) => store.users)
  const { isLoading, error } = useSelector(store => store.users) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  // const { isLoading } = useSelector(state => state.users) || {};

  if(isLoading) {
    return <h2>Loading</h2>
}

if(error !== null) {
    return <p>something went wrong</p>
}

  return <main>
    < Users />
      <h1>heloooo</h1>
  </main>
}

export default App;
