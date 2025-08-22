import Image from "next/image"; 
export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>       

      <h1 style={{ fontFamily: "Comic Sans", color: "green", fontWeight: "bold" }}>
      MINI BIO
      </h1>
      
      <img src="/assets/imagens/foto.png" height={600} width={500} />
      <p style= {{ fontFamily: "Comic Sans", fontSize: "16pt", fontWeight: "bold"}}> Juliana Tenório
        <br></br>
        Aluna do curso Ciências da Computação
        <br></br>
        Universidade Católica de Pernambuco
      </p>


    
    </div>
  )
}
