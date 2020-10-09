import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          {/* <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
      </span>
      <span>
        <p className="title">Garantia do Vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum urna massa, at viverra nisi suscipit nec. Etiam ultrices sed mi eu dignissim. Mauris luctus pharetra diam. Fusce non orci eros. Phasellus sit amet nisi viverra, luctus massa et, blandit diam. Integer quis consequat orci, eget blandit leo. Sed in efficitur justo. Mauris leo dui, aliquet vitae condimentum eu, ultrices ac nunc. Donec vel rutrum quam, eu condimentum eros. Vestibulum ac ligula in erat mattis pharetra. Donec eleifend orci in lorem dignissim feugiat. Phasellus lacinia metus id egestas ultrices. Ut sollicitudin, nibh a vehicula rhoncus, sapien nulla hendrerit ex, sed eleifend justo nunc et arcu.
      <br />
      <br />
      Items inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Pellentesque eu tempus augue, at ullamcorper ex. Etiam porttitor nec sapien ornare venenatis. Nunc sit amet eros nec arcu sollicitudin cursus. Mauris pharetra condimentum metus, nec gravida odio fermentum sit amet. Ut convallis eget arcu in vulputate. Nunc in semper magna, vitae tristique dui. Pellentesque diam ante, malesuada sit amet nulla eget, hendrerit dictum felis. Proin nisi massa, tincidunt pretium metus vitae, congue rutrum justo. Curabitur facilisis augue sed nisl auctor, vitae feugiat nulla tincidunt. Proin et maximus elit. Suspendisse imperdiet nulla quam, eget elementum enim porta et. Aenean sem augue, ultricies sed rutrum at, laoreet tincidunt lorem.
    </p>
  </Description>
)

export default Product;
