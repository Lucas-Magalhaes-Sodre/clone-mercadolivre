import React from 'react';
import { ReactNode } from 'react';
import Product from '../Product';
import Header from '../Header';
import Footer from '../Footer';

import { Container,Wrapper } from './styles';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product children={undefined} />
       
      </Wrapper>
      <Footer />
      {children}
    </Container>
  );
};

export default Layout;
