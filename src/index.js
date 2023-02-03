import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const magoPatricky = new Mago('Patricky', 4, 'Fogo', 4, 3);
const magaCamila = new Mago('Camila', 8, 'Gelo', 7, 10);

const personagens = [magoPatricky, magaCamila];

new PersonagemView(personagens).render();