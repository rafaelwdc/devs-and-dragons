import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Mago } from "./modules/mago.js";

const magaCamila = new Mago('Camila', 4, 'Fogo', 4, 3);
const magoPatricky = new Mago('Patricky', 8, 'Gelo', 7, 10);
const arqueiroRafael = new Arqueiro('Rafael', 7, 8);
const arqueiroMagaSteela = new ArqueiroMago('Steela', 7, 10, 'Ar', 4, 8)

const personagens = [magoPatricky, magaCamila, arqueiroRafael, arqueiroMagaSteela];

new PersonagemView(personagens).render();