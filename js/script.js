const story = [

/*---------------------------------------------------------------------------*/

// Scene 1 //
{id: 1,
title: "Sikkert Studie",
description: "Sikkert Studie laver interaktive cyber security-scenarier, hvor studerende kan teste deres viden i praksis og lære at håndtere digitale trusler i et sikkert miljø. Studerende er ofte ål for email phishing, hvor svindlere udgiver sig for at være uddannelsesinstutuioner eller offentlige insatser for at stjæle loginoplysninger. Ved at træne i realistiske scenarier kan man lære at gennemskue falske links og beskytte sine personlige data mod cyberangreb.",
image: "img/001 forside.png", 
options: [{ text: "Test dig selv", next: 2 }]},


// Scene 2 //
{id: 2,
title: "Den uventede mail",
description: "Du sidder i kantinen og er stresset over din praktikplads. Pludselig popper en mail op fra 'Karriere-Service': 'Tillykke! En virksomhed vil se din profil nu. Klik her for at logge ind.'",
image: "img/002 den uventede mail.png", 
options: [{ text: "Klik på linket i mailen", next: 3 }, { text: "Gå direkte til skolen portal", next: 5 }]},


// Scene 3 //
{id: 3,
title: "Login-siden",
description: "Du lander på en side, der ligner skolens login til forveksling. Alt ser rigtigt ud ved første øjekast.",
image: "img/003 login side.png",
showUrl: true,
options: [{ text: "Indtast brugernavn og kode", next: 4 }, { text: "Stop og tjek URL'en", next: 5 }]},


// Scene 4 //
{id: 4,
title: "Hacket!",
description: "Du indtastede dine data på 'iba-studie.net'. Hackerne har nu adgang til din mail og dine personlige filer.",
image: "img/004 konsekvens.png",
options: [{ text: "Prøv igen", next: 2 }]},
    

// Scene 5 //
{id: 5,
title: "Den sikre vej",
description: "Du brugte din officielle genvej. Der var ingen besked om praktik. Mailen var altså falsk!",
image: "img/005 den sikre vej.png",
options: [{ text: "Rapportér mailen", next: 6 }, { text: "Slet mailen", next: 6 }]},
    

// Scene 6 //
{id: 6,
title: "Opsummering",
description: "Godt gået! Du undgik fælden. Husk at tjekke URL, undgå links i mails og pas på tidspres.",
image: "img/006 godt klaret.png",
options: [{ text: "Spil igen", next: 2 }]}];

/*---------------------------------------------------------------------------*/

function renderScene(sceneId) {
const scene = story.find(s => s.id === sceneId);

    document.getElementById('scene-title').innerText = scene.title;
    document.getElementById('scene-description').innerHTML = scene.description;
    document.getElementById('scene-image').src = scene.image;

const urlBar = document.getElementById('url-sim');
    scene.showUrl ? urlBar.classList.remove('hidden') : urlBar.classList.add('hidden');

const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    scene.options.forEach(opt => {
const btn = document.createElement('button');
    btn.innerText = opt.text;
    btn.onclick = () => renderScene(opt.next);
    container.appendChild(btn);});}

/*---------------------------------------------------------------------------*/

window.onload = () => {renderScene(1);
document.getElementById('logo-button').onclick = () => renderScene(1);};