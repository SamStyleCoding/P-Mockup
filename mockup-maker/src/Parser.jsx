export function parsePrompt(prompt) {

const text = (prompt || '').toLowerCase();

function includesAny(keywords) {
	return keywords.some(word => text.includes(word));
}

const wants = {
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

return { wants, primary };

}
