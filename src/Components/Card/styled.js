import styled from 'styled-components';

const Container = styled.section`
  .movieRow {
    margin-bottom: 30px;
  }

  .movieRow-listarea {
    overflow-x: hidden;
    padding-left: 30px;
  }
  .movieRow-list {
    transition: all ease 0.5s;
  }
  .movieRow-item {
    display: inline-block;
    transform: scale(0.9);
    width: 180px;
    cursor: pointer;

    .hov {
      opacity: 0;
    }
  }

  .movieRow-item:hover {
    transform: scale(1);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all ease 0.2s;

    .hov {
      opacity: 1;
    }
  }

  .movieRow-item img {
    width: 100%;
  }

  .movieRow-left,
  .movieRow-right {
    position: absolute;
    width: 40px;
    height: 500px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
  }
  .movieRow-left {
    left: 0;
  }
  .movieRow-right {
    right: 0;
  }
  .movieRow:hover .movieRow-left,
  .movieRow:hover .movieRow-right {
    opacity: 1;
  }

  .card-info {
    text-align: center;
  }

  .nome {
    font-weight: 100;
  }

  .precos {
    font-size: 19px;
    font-family: serif;
  }

  .precos-2 {
    color: grey;
    font-weight: initial;
    font-size: 17px;
    text-align: center;
  }
  span {
    font-size: 13px;
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

  button {
    background: black;
    color: white;
    border: none;
    margin: 10px;
    padding: 10px 10px 10px;
    padding-left: 10px;
    cursor: pointer;
    font-size: 12px;
  }

  .bag {
    padding-top: 10px;
    font-size: 13px;
  }
`;

export default Container;
