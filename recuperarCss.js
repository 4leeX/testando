import styled from 'styled-components';

const Container = styled.section`
  display: flexbox;
  max-width: 150px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  text-align: center;

  img {
    width: 150px;
    height: 250px;
    justify-content: center;
  }

  .listarea {
  }

  .list {
  }

  .cardPrincipal {
    padding: 0 20px;
  }
`;

const BottomCard = styled.div`
  text-align: center;
  margin-bottom: 20px;
  justify-content: center;

  .nome {
    font-weight: 100;
  }

  .precos {
    font-size: 18px;
    font-family: serif;
  }

  .precos-2 {
    color: grey;
    font-weight: initial;
    font-size: 15px;
  }

  .est {
    background-color: orange;
    opacity: 0.4;
    color: #b43839;
    font-weight: bold;
    border-radius: 50px;
    font-size: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export { Container, BottomCard };
