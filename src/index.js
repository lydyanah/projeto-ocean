import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.nome}</h2>
      <img src={props.imagem} alt="Imagem do Personagem" width="300" />
    </div>
  );
}

function ListaItens() {
  return (
    <div className="lista_itens">
      <CardItem
        nome="Golum"
        imagem="https://static3.tcdn.com.br/img/img_prod/460977/pre_venda_estatua_gollum_o_senhor_dos_aneis_the_lord_of_the_rings_masters_collection_escala_1_3_weta_37337_9_20201211173419.jpg"
      />
      <CardItem
        nome="Galadriel"
        imagem="https://static.wikia.nocookie.net/lotr/images/a/af/Galadriel_-_ROTK.png"
      />
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
