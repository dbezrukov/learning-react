import React, { useState } from 'react';

const App = () => {
  // destructuring array, assigning names to the first and second elements
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
