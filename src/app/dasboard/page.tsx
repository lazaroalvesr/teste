'use client'

import { api } from "@/api/api";
import { FormEvent, useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";

interface moneyProps {
  id: string;
  entrada: string;
  tipo: string
}

export default function Page() {
  const [Customer, setCustomer] = useState<moneyProps[]>([])
  const entradaRef = useRef<HTMLInputElement | null>(null)
  const tipoRef = useRef<HTMLInputElement | null>(null)


  useEffect(() => {
    loadMoney()
  }, [])

  async function loadMoney() {
    const response = await api.get("/views")
    setCustomer(response.data)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!entradaRef.current?.value || !tipoRef.current?.value) return

    try {
      const response = await api.post("/views", {
        entrada: entradaRef.current?.value,
        tipo: tipoRef.current?.value,
      });
      setCustomer(allCustomer => [...allCustomer, response.data]);
      entradaRef.current.value = "";
      tipoRef.current.value = "";
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }

  }

  async function handleDelete(id: string) {
    try {
      await api.delete("/views", {
        params: {
          id,
        }
      })

      setCustomer(Customer.filter(Customer => Customer.id !== id))
    } catch (e) {
      console.log(e)
    }
  }

  

  
    return <div
      className="max-w-6xl m-auto text-xl">
      <div className="flex  pt-4">
      </div>


      <div className="bg-gray-300 w-[400px] rounded-md ">
        <form className="flex flex-col mt-12  p-4" onSubmit={handleSubmit}>
          <label>Entrada:</label>
          <input type="text" placeholder="Digite um valor"
            className="w-56 mb-8 mt-2 flex focus:outline-none p-2 rounded-md"
            ref={entradaRef} />

          <label>Tipo:</label>
          <input type="text" placeholder="Digite o tipo da Entrada"
            className="w-56 mt-2 flex focus:outline-none p-2 rounded-md"
            ref={tipoRef} />

          <input type="submit" value="Cadastrar"
            className="w-32  cursor-pointer mt-5  bg-gray-400 p-3 rounded-md" />
        </form>
      </div>

      <div className="lg:max-w-6xl mt-20 text-2xl bg-gray-100 m-auto mb-3 ">
        <div className="flex flex-col lg:flex-row gap-32 bg-gray-200 w-full rounded-md  p-2">
          <div>
            <div className="flex">
              <ul className="flex gap-[80px] lg:flex-row lg:gap-[330px]">
                <li>Saldo</li>
                <li>Tipo</li>
                <li>Data</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative">
          {Customer.map(({ id, entrada, tipo }) => (
            <div key={id} className="grid grid-cols-3  p-2">
              <p>R$ {entrada}</p>
              <p>{tipo}</p>
              <p>Data</p>
                <button className="ml-[900px] -mt-12" onClick={() => handleDelete(id)}><MdDelete /></button>
            </div>
          ))}
        </div>
      </div>
    </div>;
  }

