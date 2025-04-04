function addSong() {
    const titleInput = document.getElementById('songTitle');
    const artistInput = document.getElementById('artistName');
    const chordsInput = document.getElementById('chords');
    const saveMessage = document.getElementById('saveMessage');

    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();
    const chords = chordsInput.value.trim();

    if (!title || !artist || !chords) {
        alert('Compila tutti i campi!');
        return;
    }

    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songs.push({ title, artist, chords });
    localStorage.setItem('songs', JSON.stringify(songs));

    titleInput.value = '';
    artistInput.value = '';
    chordsInput.value = '';

    saveMessage.style.display = 'block';
    setTimeout(() => {
        saveMessage.style.display = 'none';
    }, 3000);

    // Reindirizza alla pagina della lista canzoni
    window.location.href = 'song-list.html';
}