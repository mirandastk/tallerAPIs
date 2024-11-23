document.addEventListener('DOMContentLoaded', () => {
  // Mostrar el mensaje de carga
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block';

  fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => {
      const charactersContainer = document.getElementById('characters');
      charactersContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos personajes

      // Ocultar el mensaje de carga
      loadingElement.style.display = 'none';

      // Mostrar los personajes
      data.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        
        const characterImage = character.imageUrl ? `<img src="${character.imageUrl}" alt="${character.fullName}">` : '';
        const characterInfo = `
          <h3>${character.fullName}</h3>
          <p>Casa: ${character.family}</p>
          <p>Reino: ${character.title}</p>
        `;

        characterDiv.innerHTML = characterImage + characterInfo;
        charactersContainer.appendChild(characterDiv);
      });
    })
    .catch(error => {
      console.error('Error al obtener los personajes:', error);
      loadingElement.innerHTML = 'Hubo un error al cargar los personajes.';
    });
});
