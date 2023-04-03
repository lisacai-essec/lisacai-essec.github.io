// Creation des barres de chargements
function creationBarre(element, chargement, couleur) {
    let bar = new ProgressBar.Line(element, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        color: couleur,
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(chargement);
}

// Langages
let lang = [
    ["francais_progress", 1.0, "#7F2CCB"],
    ["chinois_progress", 1.0, "#7F2CCB"],
    ["anglais_progress", 0.6, "#7F2CCB"],
    ["espagnol_progress", 0.4, "#7F2CCB"],
];

for(let i = 0; i < lang.length; i++) {
    let element = document.getElementById(lang[i][0]);
    creationBarre(element, lang[i][1], lang[i][2]);
}