import {
  Container,
  Header,
  Title,
} from '../../../components/service/board/layout';
import Search from '../../../components/service/board/search';
import Posts from '../../../components/service/board/posts';

const Board = () => {
  return (
    <Container>
      <Header>
        <Title>공지사항</Title>
        <Search />
      </Header>
      <Posts flag="notice" />
    </Container>
  );
};

export default Board;
