import { Avaliacao } from "./components/Avaliacao";
import { Choice } from "./components/Choice";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <div>
      <Main />
      <Avaliacao />
      <Choice />
    </div>
  )
}
