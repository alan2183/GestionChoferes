// Muestra el formulario según el id seleccionado y oculta los otros formularios
function showForm(formId) {
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';

    const busImage = document.querySelector('.image-container');
    busImage.style.display = formId === 'inicio' ? 'block' : 'none';
}

// Activa o desactiva el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Cambia el texto del botón según el estado del modo oscuro
    const button = document.querySelector('#ajustesSistema button');
    button.textContent = document.body.classList.contains('dark-mode')
        ? 'Desactivar Modo Oscuro'
        : 'Activar Modo Oscuro';
}
