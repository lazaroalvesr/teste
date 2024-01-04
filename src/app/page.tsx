import { Avaliacao } from "./components/Avaliacao";
import { Choice } from "./components/Choice";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Main } from "./components/Main";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div>
      <Main />
      <Avaliacao />
      <Choice />
      <Pricing />
      <Faq />
      <Footer/>
    </div>
  )
}
