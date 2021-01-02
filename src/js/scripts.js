// Add your scripts here

import iro from '@jaames/iro';

const colorPicker = new iro.ColorPicker('#js-picker', {
	// Set the size of the color picker
	width: 320,
	wheelAngle: 245,
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
		<li data-index="${colorPicker.colors.length}">
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

// TODO: Update skill based on a map of values in the H ranges
// And experience based on S value. Do not mess with L
function updateSkill(colorObject) {
	const skill = document.querySelector(`[data-index="${colorObject.index}"]`);

	if (skill) {
		skill.firstElementChild.style.backgroundColor = colorObject.hexString;
	} else {
		// Add the new skill at index 0
	}
}

colorPicker.on('input:change', updateSkill);
