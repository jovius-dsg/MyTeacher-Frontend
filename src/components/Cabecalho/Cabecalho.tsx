import { Cabecalhocontainer, Logo } from "./Cabecalho.style";

const Cabecalho = () => {
    return (
        <Cabecalhocontainer>
            <div>
              <Logo src="/images/myteacher.png"/>
            </div>

            <p>Encontre o professor perfeito!</p>
        </Cabecalhocontainer>
    )
}

export default Cabecalho;