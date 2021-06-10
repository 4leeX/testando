import React, { useState } from 'react';
import produtos from '../../produtos';
import '../../produtos';
import './styled.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PaymentIcon from '@material-ui/icons/Payment';

export default function Card() {
  const [scrollX, setScrollX] = useState(-200);

  const len = produtos.map((prod) => prod.name).length;

  const handleLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = len * 180;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <div className="movieRow-left" onClick={handleLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-right" onClick={handleRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-listarea">
        <div
          className="movieRow-list"
          style={{
            marginLeft: scrollX,
            width: 999999,
          }}
        >
          {produtos.map((produto, key) => (
            <div className="movieRow-item" key={key}>
              <img src={produto.image} alt={produto.name} />
              <div className="card-info">
                <h4 className="nome">{produto.name.substring(0, 32)}...</h4>
                <h4 className="est">{produto.product_condition} Em ótimo estado</h4>
                <h4 className="precos">R$ {parseFloat(produto.price * 0.91).toFixed(2)} à vista</h4>
                <h4 className="precos-2"><PaymentIcon style={{ fontSize: 20 }} /> 10x de {produto.price / 10},00 <br />
                  <span>(R$ {produto.price},00)</span>
                </h4>
                <div className="hov">
                  <button>VER PRODUTO</button>
                  <div className="bag"><LocalMallIcon style={{ fontSize: 20 }}/> ADICIONAR NA SACOLA</div>
                </div>
               
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
