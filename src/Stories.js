export default function Stories(){
    const story = [
        {imagem: "/assets/9gag.svg", nome: "9gag", alt:"9gag"},
        {imagem: "/assets/meowed.svg", nome: "meowed", alt:"meowed"},
        {imagem: "/assets/barked.svg", nome:"barked", alt:"barked"},
        {imagem: "/assets/nathanwpylestrangeplanet.svg" , nome:"nathanwpylestrangeplanet", alt:"nathanwpylestrangeplanet"},
        {imagem: "/assets/wawawicomics.svg", nome:"wawawicomics", alt:"wawawicomics"},
        {imagem: "/assets/respondeai.svg", nome:"respondeai", alt:"respondeai"},
        {imagem: "/assets/filomoderna.svg", nome:"filomoderna", alt:"filomoderna"},
        {imagem: "/assets/memeriagourmet.svg", nome:"memeriagourmet", alt:"memeriagourmet"},
    ]
    return (
        <div className="stories">
            {story.map((sty,index)=> (<StoryItem src={sty.imagem} alt={sty.alt} nome={sty.nome} key={index}/>))}
            
            <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function StoryItem({src, nome, alt}){
    return (
        <div className="story">
                <div className="imagem">
                    <img src={src} alt={alt}/>
                </div>
                <div className="usuario">
                    {nome}
                </div>
        </div>
    )
}