import './Chamados.css'

export default function Chamados(){

    const [novoChamado, setNovoChamado] = useState(false)

    return(

        <>
       <aside className={`telaNovoChamado ${novoChamado ? 'aberto' : ''}`}>

                <div className="popupNovo">
                      Cliente: <input type="text"/>
                      Assunto: <input type="text"/>
                      Detalhe o cenário: <input type="text" className="detalheChamado"/>

                    <div className="criarChamado">
                        <button>Criar Chamado</button>
                    </div>
                </div>

       </aside>
        </>
    )
}