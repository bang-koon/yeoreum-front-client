import styled from '@emotion/styled';
import Link from 'next/link';
const Footer = () => (
  <Container>
    <SignUpText>Don't have an account yet?</SignUpText>
    <Link href="/signup"> Sign Up </Link>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 0.7em;
  & > a {
    margin-bottom: 0.9em;
    color: ${({ theme }) => theme.palette.main};
    font-size: 1.1em;
  }
`;
const SignUpText = styled.p`
  margin: 1em 0.6em;
`;

export default Footer;
