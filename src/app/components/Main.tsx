import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


export function Main() {
  return (
    <section>
      <div className="max-w-6xl m-auto">
        <div>
          <div className="flex lg:flex-row relative lg:relative flex-col justify-center items-center">
            <div className="lg:pt-20 pt-12 ">
              <p className="bg-blue-100 p-2 rounded-md w-72">Gerenciador Financeiro Moderno</p>
              <h1
                className="lg:text-6xl text-5xl font-medium w-80 lg:w-[490px] pt-5"
              >Estamos construindo o futuro
                Financeiro só para você
              </h1>
              <p className="text-2xl pt-5 w-72 lg:w-[590px] font-light">
                Conta fácil e rápida que
                te ajuda a gerenciar seu dinheiro
                da melhor forma.
              </p>
              <div className="mt-7 flex lg:relative absolute lg:-bottom-0 -bottom-24">
                <button className="
                w-40 bg-blue-500 text-gray-50 
                px-2 py-4 rounded-3xl">
                  <Link href="https://driving-ibex-15.accounts.dev/sign-up#/?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F%23__clerk_db_jwt%5BeyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMmFCVzJOVXZmdU9lck9DZ01ZOWp3UWtjNWU3IiwiaWQiOiJjbGllbnRfMmFHUlhkN0hnNXZSRXBJcXFJTmc5T0lRdmVCIiwicm90YXRpbmdfdG9rZW4iOiJncXNzbHN4OHhncHd0OHZ6dXg0MWFzNWVwZWFic2UybWQ2NDcyMGQzIn0.o4c0dTbQK9_eB_Q1clgVT3WXa3XADOXqECli7fRIXGIjGStlAfyusYrplFJan-O73Eg5PEK2H5AvDJhkywbbT4kppLN6hhfRVG6rzxnRfb4lDEkgcFR4GDh8J6e8KjVXZY-95hseELu0o1XrUYt8Xndg_CbyqNF_V6G4gYkdGamekTr-YuK57pbfXkXPBA4ZgpWKvpVtlhfQ8_1QYK0HA9nag1t76zeGFmjw4SxVVI3c3fQdUMgQog00cB1Gm7Qt94km6K4KuwTtO4Vf8o3imozf0WSDUa0uOZsucbKVO41MTlgePNpKrrW43Br_Mz1_o9T9B0iwwckhBmZXg4aZ7Q%5D">
                    Começe Agora
                  </Link>
                </button>
                <button className="ml-3 flex 
                items-center justify-center
                w-40 border-gray-400 border  text-blue-500 
                 rounded-3xl">
                  Saber Mais
                  <MdArrowOutward className="ml-2" size="18px" />
                </button>
              </div>
            </div>
            <div className="lg:ml-44 mt-12 ">
              <Image
                src="/img/soma.jpg"
                alt="Mulher somando seus Lucros"
                width={312}
                height={12}
                className="rounded-md lg:w-[360px] w-[340px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}