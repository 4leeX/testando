import React from 'react';
import produtos from '../../produtos';
import { Container, BottomCard } from './styled';
import { AiOutlineCreditCard } from 'react-icons/ai';

export default function Card() {
  return (
    <Container>
      <div className="listarea">
        <div className="list">
          {produtos.map((produto) => (
            <div className="cardPrincipal" key={produto.product_id}>
              <img src={produto.image} alt={produto.name} />

              <BottomCard>
                <h4 className="nome">{produto.name.substring(0, 32)}...</h4>
                <div className="est">
                  {produto.product_condition} Em ótimo estado
                </div>

                <div className="precos">
                  <h4>
                    R$ {parseFloat(produto.price * 0.91).toFixed(2)} à vista
                  </h4>
                  <h4 className="precos-2">
                    <AiOutlineCreditCard /> 10x de {produto.price / 10},00{' '}
                    <br />
                    <span>(R$ {produto.price},00)</span>
                  </h4>
                </div>

                {/* <button>Ver Produto</button> */}
              </BottomCard>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
