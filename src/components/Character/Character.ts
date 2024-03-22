import styles from'./Character.css'


export enum Attribute {
	'image' = 'image',
	'name' = 'name',
	'status' = 'status',
	'species' = 'species',
	'type' = 'type',
	'origin' = 'origin',
	'nameoffirstepisode' = 'nameoffirstepisode',
}

class myCharacters extends HTMLElement {
	image?: string;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	origin?: string;
	nameoffirstepisode?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			name: null,
			status: null,
			species: null,
			type: null,
			origin: null,
			nameoffirstepisode: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/character/character.css">
            
            <section class="container">
            <img src="${this.image}"></img>
            <h1>${this.name}</h1>
            <p>Status: ${this.status}</p>
            <p>Species: ${this.species}</p>
            <p>Type:  ${this.type ? this.type : 'Normal'}</p>
            <p>Origin: ${this.origin}</p>
            <p>Name of first episode: ${this.nameoffirstepisode}</p>
            </section>
            
            `;
		}
        const cssProfile = this.ownerDocument.createElement("style");
        cssProfile.innerHTML = styles;
        this.shadowRoot?.appendChild(cssProfile)
	}
}

export default myCharacters;
customElements.define('my-characters', myCharacters);