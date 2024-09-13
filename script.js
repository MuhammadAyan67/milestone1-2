"use strict";
const togglebutto = document.getElementById('toggle-skills');
const skill = document.getElementById('skills');
togglebutto.addEventListener('click', () => {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
