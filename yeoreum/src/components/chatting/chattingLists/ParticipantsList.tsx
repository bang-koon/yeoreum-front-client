import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Modal from '../../common/Modal';
import ElseProfile from '../../elseProfile/ElseProfile';
import { ChatRoom } from '../../../pages/chatting';
import ProfileImage from '../../common/ProfileImage';

interface ChatUserProps {
  chatData: ChatRoom[];
  setA: any;
  a: ChatRoom | null;
}

function ParticipantsList({ chatData, setA, a }: ChatUserProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openProfile = () => {
    setIsOpen(true);
  };

  return (
    <>
      {a?.users && (
        <div>
          <ListBox onClick={() => setA(a)}>
            {a.users.map(user => (
              <Item key={user.userNo}>
                {isOpen && (
                  <Modal
                    onClose={() => {
                      setIsOpen(false);
                    }}
                  >
                    {/* <ElseProfile /> */}
                  </Modal>
                )}
                <ProfileImage src={user.profileImage} size={50} />
                <Nickname>{user.nickname}</Nickname>
              </Item>
            ))}
          </ListBox>
        </div>
      )}
    </>
  );
}

export default ParticipantsList;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  min-width: 150px;
  min-height: 50px;
`;

const Nickname = styled.span`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
`;
