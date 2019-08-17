import React, { useState } from 'react';
import ResourceList from './ResourceListFunctional';

const App = () => {
  // destructuring array, assigning names to the first and second elements
  const [resource, setResource] = useState('posts'); // 'posts' is an initial value

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
