import React from 'react';
import { ReactNode } from 'react';
import notebook from '../../assets/notebook.png';
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import { 
  Container, 
  Row, 
  Panel, 
  Column, 
  Galery, 
  Section, 
  Description, 
} from './styles';

interface ProductProps {
  children: ReactNode;
}

function Product({ children }: ProductProps) {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>

        <Column>

          <Galery>
            <img alt="notebook" src={notebook}/>
          </Galery>

          <Info />

        </Column>

        

        <Column>
         <ProductAction children={undefined} />
         <SellerInfo children={undefined} />

         <WarrantySection />
         <WarrantySection />
         <WarrantySection />
        </Column>

      </Panel>
      {children}
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com fulano de tal</p>
        <p className="description">Receba o produto que vocẽ está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repudiandae, iusto aut quae cupiditate, autem reiciendis libero esse sapiente obcaecati animi vero iste doloribus fugit voluptate aperiam reprehenderit nesciunt dolorum!
      <br />
      <br />
      Itens inclusos <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      <br /> 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum dignissimos exercitationem sapiente molestias magnam aliquam eius error iure sit laborum tenetur voluptatibus rem quae eum, molestiae perferendis id. Laudantium.

       </p>
  </Description>
)

export default Product;
