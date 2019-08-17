import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook for quering resources: posts, todos or users
// useResources takes resource name and returns array of resources
// It can be used across many components
const useResources = (resource) => {
    const [resources, setResources] = useState([]);
  
    useEffect(
      () => {
        (async resource => {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
          );
      
          setResources(response.data);
        })(resource);
      }, 
      [resource]
    );
  
    return resources;
  };

  export default useResources;