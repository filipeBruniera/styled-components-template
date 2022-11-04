import { Carro } from "./Carro";

export function Garagem(props) {
  return (
    <div>
      <h1>Garagem da {props.nome}</h1>
      <button onClick={props.mensagemAprentacao}>Mensagem</button>

      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} />
      <Carro adicionadoPor={props.nome} cor={"Pink"} ano={2022} />
    </div>
  );
}
