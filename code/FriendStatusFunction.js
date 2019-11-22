import { useState, useEffect } from 'react';
function FriendStatus({ friend: { id } }) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(id, setIsOnline);
    // Specify how to clean up after this effect:
    return () =>
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, setIsOnline);
  }, [id]);
  if (isOnline == null) return 'Loading...';
  return isOnline ? 'Online' : 'Offline';
}
