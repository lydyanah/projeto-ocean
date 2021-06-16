import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const itens = [
  {
    nome: "Gollum",
    imagem: "/assets/gollum.jpg",
  },
  {
    nome: "Galadriel",
    imagem: "/assets/galadriel.jpg",
  },
  {
    nome: "Legolas",
    imagem: "/assets/legolas.jpg",
  },
];

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.item.nome}</h2>
      <img
        src={props.item.imagem}
        alt="Imagem do Personagem"
        width="300"
        height="200"
      />
    </div>
  );
}

function ListaItens() {
  return (
    <div className="lista_itens">
      {itens.map((item) => (
        <CardItem item={item} />
      ))}
    </div>
  );
}

function App() {
  return <ListaItens />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
