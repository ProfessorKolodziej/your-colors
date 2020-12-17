// Add your scripts here

import iro from '@jaames/iro';

const colorPicker = new iro.ColorPicker('#js-picker', {
	// Set the size of the color picker
	width: 320,
	layout: [
		{
			component: iro.ui.Wheel,
			options: {},
		},
	],
});

const skillSelect = document.querySelector('#js-skill-select');
const skillList = document.querySelector('#js-skills');

function buildSkill(option) {
	return `
		<li>
			<span style="background-color: ${option.value};"></span>
			${option.selectedOptions[0].text}
		</li>`;
}

function addSkill() {
	const skill = buildSkill(this);
	colorPicker.addColor(this.value);
	skillList.insertAdjacentHTML('beforeend', skill);
}

skillSelect.addEventListener('change', addSkill);
