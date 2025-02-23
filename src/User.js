import React from "react"

export default function User(){
    const [usuario, setUsuario] = React.useState("catanacomics");
    const [imgUsuario, setImgUsuario] = React.useState("assets/catanacomics.svg");

    function alterarUsuario(){
        const perguntaNome = prompt("Qual seu nome?") || usuario;

        if(usuario){
            setUsuario(perguntaNome);
        } else  {
            setUsuario(usuario);
        }
    }

    function alterarImagem(){
        const perguntaImagem = prompt("Adicione aqui o link de sua imagem") || imgUsuario;

    if(!imgUsuario){
            setImgUsuario(imgUsuario)
        } else if(imgUsuario){
            setImgUsuario(perguntaImagem);
        }
    }

    return (
        <div className="usuario">
            <img src={imgUsuario} alt="imagem de perfil" onClick={(() => alterarImagem())}/>
            <div className="texto">
                <span>
                <strong>{usuario}</strong>
                <ion-icon name="pencil" onClick={(() => alterarUsuario())}></ion-icon>
                </span>
            </div>
        </div>
    )
}