export function parsePrompt(prompt) {

const text = (prompt || '').toLowerCase();

function includesAny(keywords) {
	return keywords.some(word => text.includes(word));
}

const wants = {
	navbar: includesAny(['nav','navbar','navigation']),
	logo: includesAny(['logo', 'branding', 'logo de l’entreprise']),
	title: includesAny(['accueil','landing', 'title']),
	products: includesAny(['product','boutique','shop', 'shopping']),
	chat: includesAny(['chat','message','conversation']),
	button: includesAny(['button','commander','acheter'])
};

const colors = {
	bleu:'#3b82f6', rouge:'#ef4444', violet:'#8b5cf6',jaune:'#eab308', 
	orange:'#f97316', black:'#000000ff', vert:'#22c55e',blanc:'#ffffff', 
	gris:'#6b7280', rose:'#ec4899', marron:'#92400e',cyan:'#22d3ee', 
	gold:'#ffd700', silver:'#c0c0c0'
};

let primary = '#5b8def'; 
const foundColor = Object.keys(colors).find(colorName => text.includes(colorName));
if (foundColor) {
  primary = colors[foundColor]; 
}

let title = 'Mon application';
if (text.includes("title ")) { 
	title = text.split("title ")[1] || title; 
} else if (text.includes("nom ")) { 
	title = text.split("nom ")[1] || title; 
}

return { wants, primary, title };

}
