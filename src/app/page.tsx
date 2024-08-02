import Pagina from "@/components/template/Pagina";
import Background from "../../public/background.jpg"

export default function Home() {
  return (
    <Pagina titulo="Página Inicial" subtitulo="Estamos contruindo algo aqui" imagemFundo={Background.src} >
      <div className='flex flex-col justify-center items-center text-gray-200'>
        <div className="flex flex-row text-center justify-center mt-12">
          <h1 className="text-[40px] font-bold">Seja Bem-Vinda!</h1>
        </div>
        <div className="w-[80vh] mt-5 flex flex-1 grow text-center text-balance text-[20px]">
          <p> 
            Este site foi feito se baseando na tradução feita pela 
            <a className="font-bold px-1" target="_blank" href="https://panfletinhos.itch.io/oroubodomel">Panfletinhos</a> 
            do RPG de Grant Howitt(Honey Weist), e tem o objetivo de dar uma ficha interativa e 100% online para quem quer jogar
            esse RPG do conforto de casa.
          </p>
        </div>
      </div>
    </Pagina>
  );
}
