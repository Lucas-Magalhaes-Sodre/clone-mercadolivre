import React from 'react';
import { ReactNode } from 'react';

import { 
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,

} from './styles';

interface SellerInfoProps {
  children: ReactNode;
}

function SellerInfo({ children }: SellerInfoProps) {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon/>

        <div>
          <p>Localização</p>
          <strong>Brasília-DF</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>777</strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>
        
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
      {children}
    </Container>
  );
};

export default SellerInfo;
