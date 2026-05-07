const story = [

/*---------------------------------------------------------------------------*/

// Scene 1 //
{id: 1,
title: "Sikkert Studie",
description: "<p>Sikkert Studie laver interaktive cyber security-scenarier, hvor studerende kan teste deres viden i praksis og lære at håndtere digitale trusler i et sikkert miljø.</p><p>Studerende er ofte mål for email phishing, hvor svindlere udgiver sig for at være uddannelsesinstitutioner eller offentlige instanser for at stjæle loginoplysninger. Ved at træne i realistiske scenarier kan man lære at gennemskue falske links og beskytte sine personlige data mod cyberangreb.<p>",
image: "img/001 forside.png", 
options: [{ text: "Test dig selv", next: 2 }]},


// Scene 2 //
{id: 2,
title: "Den uventede mail",
description: "<p>Du sidder i kantinen og er stresset over din praktikplads. Pludselig popper en mail op fra 'Karriere-Service': 'Tillykke! En virksomhed vil se din profil nu. 'Klik her for at logge ind'. </p><p>Hvad gør du?<p>",
image: "img/002 den uventede mail.png", 
options: [{ text: "Klik på linket i mailen", next: 3 }, { text: "Gå direkte til skolen portal", next: 5 }]},


// Scene 3 //
{id: 3,
title: "Login-siden",
description: "<p>Du lander på en side, der ligner skolens login til forveksling. Alt ser rigtigt ud ved første øjekast. https://iba.instructure.net/login/ldap. </p><p>Hvad gør du?<p>",
image: "img/003 login side.png",
options: [{ text: "Indtast brugernavn og kode", next: 4 }, { text: "Stop og tjek URL'en", next: 5 }]},


// Scene 4 //
{id: 4,
title: "KONSEKVENS: Du er blevet hacket!",
description: "<p>ÅH NEJ! Ved at indtaste dine oplysninger på 'iba-studie.net' (i stedet for .dk) har du givet hackerne fuld adgang. De har nu adgang til din mail, dine filer og dine private beskeder. </p><p>Læring: Klik aldrig på links i uventede mails, uanset hvor meget de trigger din nysgerrighed eller stress.<p>",
image: "img/004 konsekvens.png",
options: [{ text: "Prøv igen", next: 2 }]},
    

// Scene 5 //
{id: 5,
title: "Den sikre vej",
description: "<p>Du logger ind sikkert via din browser-genvej. Der er ingen besked om praktik i din officielle indbakke. </p><p>Mailen var falsk!<p>",
image: "img/005 den sikre vej.png",
options: [{ text: "Rapportér mailen som phishing", next: 6 }, { text: "Slet blot mailen og læs videre", next: 6 }]},
    

// Scene 6 //
{id: 6,
title: "Flot klaret!",
description: "<p>Du undgik 'Praktik-Fælden'.</p><p>Ved at stoppe op undgik du 3 klassiske red flags:</p><p> 1. Tidspres (skal ske 'nu').</p><p> 2. Eksternt link til login.</p><p> 3. Forkert URL (iba-studie.net).<p>",
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