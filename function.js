// CONSEGNA
// Ricreate un carosello, ma questa volta usando un array di oggeti.
// Ogni slide è rappresentata da un oggetto contenente:
// percorso immagine
// titolo
// descrizione

// :roccia: MILESTONE #1
// Ora rimuoviamo i contenuti statici dall'HTML.
// Costruiamo noi delle slide da aggiungere in pagina tramite un ciclo sul nostro array.

// :roccia: MILESTONE #2
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// :roccia: MILESTONE #3
// Aggiungere il ciclo infinito del carosello.
//  Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra,
//   la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.

 // Funzione che mi porta avanti di 1


 // Funzione per aggiornare l'immagine e le informazioni
function updateImage() {
    let currentImage = images[currentIndex];
    document.getElementById('carousel-image').src = currentImage.src;
    document.getElementById('image-title').textContent = currentImage.title;
    document.getElementById('image-description').textContent = currentImage.description;
}

// Funzione per passare all'immagine successiva
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Funzione per tornare all'immagine precedente
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}