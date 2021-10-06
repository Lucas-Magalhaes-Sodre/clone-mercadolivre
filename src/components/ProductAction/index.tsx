import React from 'react';
import { ReactNode } from 'react';

import { 
  Container,
  Condition,
  Row,
  HeartIcon,
  DispachTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethoCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
 } from './styles';

interface ProductActionProps {
  children: ReactNode;
}

function ProductAction({ children }: ProductActionProps) {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Notebook Premium</h1>
        <HeartIcon />
        </Row>
        <DispachTag>Envio todo país</DispachTag>

        <PriceCard>
          <PriceRow>
            <span className="symbol">R$</span>
            <span className="fraction">2.858</span>
            <span className="cents">88</span>
          </PriceRow>

          <InstallmentsInfo>em 3x de 12,63</InstallmentsInfo>
        </PriceCard>
        
        <StockStatus>Estoque disponível</StockStatus>

        <MethoCard>
          <CheckIcon />

          <div>
            <span className="title">Frete grátis</span>
            <span className="Details">Benefício Lorem</span>

            <a href="#" className="more">
              Ver mais opções
            </a>

          </div>
        </MethoCard>

        <Actions>
          <Button solid>Compra Agora</Button>
          <Button>Adicionar ao carrinho</Button>
        </Actions>

        <Benefits>
          <li>
            <ShieldIcon />
            <p>Compra garantida, receba o produto que está comprando ou devolvemos seu dinheiro.</p>
          </li>
        </Benefits>

        
      {children}
    </Container>
  );
};

export default ProductAction;
