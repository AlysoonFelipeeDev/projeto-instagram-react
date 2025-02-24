import React from "react";

export default function Posts(){
    const post = [
        {imagem: ["assets/gato-telefone.svg", "assets/meowed.svg", "assets/respondeai.svg", 101523], alt:["gato-telefone", "meowed", "respondeai"]},
        {imagem: ["assets/dog.svg", "assets/barked.svg", "assets/adorable_animals.svg", 99105], alt:["dog", "baked", "adorable_animals"]},
        {imagem: ["assets/gato-telefone.svg", "assets/meowed.svg", "assets/filomoderna.svg", 145230], alt:["gato-telefone", "meowed", "filomoderna"]}
        
    ]
    
    return (
        <div className="posts">
            {post.map((pst,index)=> <PostItem imagem={pst.imagem} alt={pst.alt} key={index}/>)}
        </div>
    );
}

function PostItem(props){
    const {imagem,alt} = props
    const [img1, img2, img3, like] = imagem;
    const [alt1, alt2, alt3] = alt;

    const [maisSeguidor, setMaiseguidor] = React.useState(like);
    const [curtido, setCurtido] = React.useState(false);
    const [salvo, setSalvo] = React.useState(false);

    function salvarPost(){
        setSalvo(!salvo)
    }

    function darLike(){
        setCurtido(!curtido);
        setMaiseguidor(curtido ? maisSeguidor - 1 : maisSeguidor + 1);
    }

    function darLikePost(){
        if(!curtido){
            setCurtido(true)
            setMaiseguidor(maisSeguidor + 1)
        };
    }

return (
        <>
            <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={img2} alt={alt2}/>
                        {alt2}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div className="conteudo">
                    <img onClick={darLikePost} src={img1} alt={alt1}/> 
                </div>
                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon onClick={darLike} 
                            name={curtido ? "heart" : "heart-outline"}
                            style={{ color: curtido ? 'red' : 'black' }}
                        ></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={salvarPost}   name={!salvo ? "bookmark-outline" : "bookmark"}  ></ion-icon>
                        </div>
                    </div>
                    <div className="curtidas">
                        <img src={img3} alt={alt3}/>
                        <div className="texto">
                            Curtido por <strong>{alt3}</strong> e <strong>outras {maisSeguidor} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}