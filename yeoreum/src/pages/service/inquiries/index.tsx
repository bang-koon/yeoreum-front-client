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
        <Title>문의내역</Title>
        <Search />
      </Header>
      <Posts flag="inquiry" />
    </Container>
  );
};

export default Board;
