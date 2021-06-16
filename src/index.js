import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.item.nome}</h2>
      <img
        src={props.item.imagem}
        alt={props.item.nome}
        width="300"
        height="200"
      />
    </div>
  );
}

class ListaItens extends React.Component {
  //1. Define estado inicial

  constructor(props) {
    super(props);

    this.state = {
      itens: [],
    };
  }

  async componentDidMount() {
    const request = await fetch("https://backend-flexivel.herokuapp.com/", {
      headers: new Headers({
        Authorization: "lidi.ocean",
      }),
    });

    const json = await request.json();

    //2. Atualiza o estado
    this.setState({
      itens: json,
    });
  }

  render() {
    //3. Renderiza utilizando a info que está no estado
    return (
      <div className="lista_itens">
        {this.state.itens.map((item, index) => (
          <CardItem item={item} key={index} />
        ))}
      </div>
    );
  }
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
