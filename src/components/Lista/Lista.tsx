import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";
import { Descricao, Foto, Info, ItemLista, Nome, Valor, ListaStyled, ListaVazia } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
}

const Lista = (props: ListaProps) => {

    return (
      <div>

        {props.professores.length > 0 ? (
            <ListaStyled>
                {props.professores.map(professor => (
                    <ItemLista key={professor.id}>
                      <Foto src={professor.foto}></Foto>
                      <Info>
                        <Nome>{professor.nome}</Nome>
                        <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                        <Descricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Descricao>
                        <Button onClick={ () => props.onSelect(professor) } sx={{width:'70%'}}>Marcar aula com {professor.nome}</Button>
                      </Info>
                    </ItemLista>
                ))}
            </ListaStyled>
        ) : (
            <ListaVazia>Nenhum item encontrado</ListaVazia>
            
        )}
      </div>
    )
}

export default Lista;