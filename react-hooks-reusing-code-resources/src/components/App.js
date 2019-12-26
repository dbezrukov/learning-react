import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  // destructuring array, assigning names to the first and second elements
  const [resource, setResource] = useState('posts'); // 'posts' is an initial value

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
