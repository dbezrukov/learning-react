import React from 'react';
import axios from 'axios';

// In a class-based component we have to handle both componentDidMount
// and componentDidUpdate methods to reflect changing of the resource property
// PS Hooks can solve this problem, so ResourceList should be rewritten with hooks

class ResourceList extends React.Component {
  state = { resources: [] }

  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: response.data })
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>
  }
}

export default ResourceList;