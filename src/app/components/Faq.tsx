'use client'
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
  const [items, setItems] = useState([
    { id: 1, title: 'Oque é Finviue', info: 'FinVue é um controle financeiro que chegou para ajudar as pessoas a gerenciar suas finanças.', isOpen: false },
    { id: 2, title: 'Oque é ', info: 'Outra informação para o segundo item.', isOpen: false },
    { id: 3, title: 'Oque 33é ', info: 'E mais uma informação para o terceiro item.', isOpen: false },
  ]);

  function toggle(index: any) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...prevItems[index], isOpen: !prevItems[index].isOpen };
      return newItems;
    });
  }

  return (
    <section>
      <div className="max-w-3xl mt-32 m-auto mx-4 lg:mx-96">
        <div className="justify-center flex">
          <h1 className="text-4xl">FAQ</h1>
        </div>
        <div className="mt-12">
          <ul>
            {items.map((item, index) => (
              <li key={item.id} className="relative bg-gray-200 mb-4 lg:h-24 h-32 p-4 rounded-md">
                <div className="flex  justify-between items-center ">
                  <p>{item.title}</p>
                  <button onClick={() => toggle(index)}>{item.isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}</button>
                  {item.isOpen && (
                    <span className="absolute left-4 right-0 top-12 flex-col">
                      {item.info}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
