import React, { useEffect, useState } from 'react';
import PostContainer from '../../components/board/PostContainer';
import FriendTop from '../../components/friend/page/FriendTop';
import UserSearch from '../../components/friend/page/UserSearch';
import MyFriendList from '../../components/friend/page/MyFriendList';
import { requestGetSearchFriends } from '../../apis/friends';
import { FriendResponseType } from '../../types/friend';
import { getToken } from '../../utils/user';

function index() {
  const token = getToken() as string;
  const [searchTerm, setSearchTerm] = useState('');
  const [friendList, setFriendList] = useState<FriendResponseType>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const friends = await requestGetSearchFriends(searchTerm, token);
      setFriendList(friends);

      if (!searchTerm) {
        setFriendList(friends.friends);
      }
      if (searchTerm) {
        setFriendList(friends.searchResult);
      }
    })();
  }, [searchTerm]);

  return (
    <PostContainer>
      <FriendTop />
      <UserSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        loading={loading}
      />
      <MyFriendList friendList={friendList} />
    </PostContainer>
  );
}

export default index;
