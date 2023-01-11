import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { RenderProps, FlagIndex, Tag } from '../../../types/service';

const Posts = ({ flag }: { flag: string }) => {
  const tag = {
    notice: {
      notice: { color: '#004D94', text: 'Notice' },
      event: { color: '#ECC600', text: 'Event' },
    },
    inquiry: {
      onGoing: { color: '#989898', text: '답변 대기' },
      complete: { color: '#139013', text: '답변 완료' },
    },
  };

  // 임시 데이터
  let infos: any[] = [];
  if (flag === 'notice') {
    infos = [
      {
        status: 'event',
        title: '여름이 시작되었습니다.',
        date: '2023.03.01',
      },
      {
        status: 'notice',
        title: '새 학기를 여름과!',
        date: '2023.03.01',
      },
      {
        status: 'notice',
        title: '여름이 시작되었습니다.',
        date: '2023.03.01',
      },
      {
        status: 'event',
        title: '새 학기를 여름과!',
        date: '2023.03.01',
      },
      {
        status: 'notice',
        title: '여름이 시작되었습니다.',
        date: '2023.03.01',
      },
    ];
  } else {
    infos = [
      {
        status: 'onGoing',
        title: '여름이 시작되었습니다.',
        date: '2023.03.01',
      },
      {
        status: 'complete',
        title: '새 학기를 여름과!',
        date: '2023.03.01',
      },
      {
        status: 'complete',
        title: '여름이 시작되었습니다.',
        date: '2023.03.01',
      },
      {
        status: 'onGoing',
        title: '새 학기를 여름과!',
        date: '2023.03.01',
      },
      {
        status: 'complete',
        title: '여름이 시작되었습니다.',
        date: '2023.03.01',
      },
    ];
  }

  const PostRender = ({ status, title, date }: RenderProps) => {
    const color = (tag as FlagIndex)[flag][status].color;
    return (
      <Wrapper>
        <Tag status={status} color={color}>
          {(tag as FlagIndex)[flag][status].text}
        </Tag>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Link href="/service/notice">
          <Image
            src="/service/arrow.svg"
            width={32}
            height={32}
            alt="Article link"
          />
        </Link>
      </Wrapper>
    );
  };
  return (
    <>
      {infos.map((info, i) => {
        return (
          <PostRender
            status={info.status}
            date={info.date}
            title={info.title}
            key={i}
          />
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 1em 1em 1em 1em;
  border-bottom: #dbdbdb 1px solid;
  & > a {
    position: absolute;
    width: fit-content;
    right: 4px;
    top: 50%;
    margin-top: -16px;
  }
`;
const Tag = styled.p<Tag>`
  color: ${p => p.color};
  display: inline-block;
  font-size: 0.875em;
`;
const Date = styled.p`
  display: inline-block;
  margin-left: 12px;
  font-size: 0.875em;
  color: #dbdbdb;
`;
const Title = styled.h3`
  width: 97%;
  margin: 0.6em 0;
  font-weight: 600;
`;

export default Posts;
