import { Component } from 'react';

class FriendStatus extends Component {
  constructor(props) {
    super(props);
    this.handleOnlineChange = this.handleOnlineChange.bind(this);
    this.state = { isOnline: null };
  }

  handleOnlineChange(isOnline) {
    this.setState({ isOnline });
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleOnlineChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleOnlineChange
    );
  }

  render() {
    if (this.state.isOnline == null) return 'Loading...';
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}
