export default function Suggestions() {
    const sugestoes = [
        {imagem: "assets/bad.vibes.memes.svg", nome: "bad.vibes.memes" , razao: "Segue você"},
        {imagem: "assets/chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
        {imagem: "assets/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
        {imagem: "assets/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
        {imagem: "assets/smallcutecats.svg", nome:"smallcutecats", razao: "Segue você"}
    ]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((suge, index) => <SuggestionsItem imagem={suge.imagem} nome={suge.nome} razao={suge.razao} key={index}/>)}
        </div>
    );
}

function SuggestionsItem({imagem, nome, razao}){
    return (
        <div className="sugestao">
                <div className="usuario">
                    <img src={imagem} alt={nome}/>
                    <div className="texto">
                        <div className="nome">{nome}</div>
                        <div className="razao">{razao}</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
        </div>
    )
}