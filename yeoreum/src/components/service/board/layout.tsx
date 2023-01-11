import styled from '@emotion/styled';
import React from 'react';
import Search from './search';

export interface wrapperProps {
  children: React.ReactNode;
  title: string;
}

export const Container = styled.div`
  display: flex;
  width: 680px;
  min-height: calc(100vh - 60px);
  flex-direction: column;
  margin: 0 auto;
  color: #555555;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3.25em 0 3em 0;
`;

export const Title = styled.h2`
  font-weight: 550;
  font-size: 1.8em;
`;

// export default Layout;
