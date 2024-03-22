
import getCharacters from './data/datafetch';
import myCharacters, { Attribute } from './components/Character/Character';
import stylesApp from './index.css';

class AppContainer extends HTMLElement {
	characters: myCharacters[] = [];
	number: any = 0;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		try {
			const Data = await getCharacters(20);
			const arrayCharacters = Data;
			arrayCharacters?.forEach((character) => {
				const characterCard = this.ownerDocument.createElement('my-characters') as myCharacters;
				characterCard.setAttribute(Attribute.image, character.image);
				characterCard.setAttribute(Attribute.name, character.name);
				characterCard.setAttribute(Attribute.status, character.status);
				characterCard.setAttribute(Attribute.species, character.species);
				characterCard.setAttribute(Attribute.type, character.type);
				characterCard.setAttribute(Attribute.origin, character.origin.name);
				characterCard.setAttribute(Attribute.nameoffirstepisode, character.nameoffirstepisode);
				this.characters.push(characterCard);
				this.render();
			});
		} catch {
			console.log('error');
		}
		const inputElement = this.shadowRoot?.querySelector('.hola');
		inputElement?.addEventListener('change', (e: any) => {
			this.number = e.target.value;
			this.render();
		});
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '<input class="hola" type="number"/>';

			// Agregar los nuevos elementos utilizando appendChild
			this.characters.slice(0, this.number).forEach((characterElement) => {
				this.shadowRoot?.appendChild(characterElement.cloneNode(true));
			});
            const cssContainer = this.ownerDocument.createElement("style");
            cssContainer.innerHTML = stylesApp;
            this.shadowRoot?.appendChild(cssContainer);
		}
        
	}
}
customElements.define('app-container', AppContainer);