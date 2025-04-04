function addSong() {
    const title = document.getElementById('songTitle').value.trim();
    const artist = document.getElementById('artistName').value.trim();
    const chords = document.getElementById('chords').value.trim();

    if (!title || !artist || !chords) {
        alert('Compila tutti i campi!');
        return;
    }

    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songs.push({ title, artist, chords });
    localStorage.setItem('songs', JSON.stringify(songs));

    resetForm();
    showSaveMessage("Canzone aggiunta!");
}

function resetForm() {
    document.getElementById('songTitle').value = '';
    document.getElementById('artistName').value = '';
    document.getElementById('chords').value = '';
}

function showSaveMessage(message) {
    const saveMessage = document.getElementById('saveMessage');
    saveMessage.innerHTML = `<p>${message}</p>`;
    saveMessage.style.display = 'block';
    setTimeout(() => {
        saveMessage.style.display = 'none';
    }, 3000);
}

// Le funzioni per la gestione della lista delle canzoni (openDeleteModal, deleteSong, editSong)
// sono ora implementate direttamente in song-list.html e quindi non necessarie qui.