import { useState, useEffect } from 'react';

function FriendStatus({ friend: { id } }) {
  const isOnline = useFriendStatus(id);
  if (isOnline == null) return 'Loading...';
  return isOnline ? 'Online' : 'Offline';
}

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(id, setIsOnline);
    // Specify how to clean up after this effect:
    return () =>
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, setIsOnline);
  }, [id]);
  return isOnline;
}
