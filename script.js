document.addEventListener('DOMContentLoaded', () => {
    // Modal related elements
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const captionText = document.createElement('div');
    captionText.setAttribute('id', 'caption');
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.classList.add('close-btn');
    
    // Append modal elements to the DOM
    modalContent.appendChild(captionText);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Add event listener to close modal when clicking the close button
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Add event listener to close modal when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Get all project images
    const projectImages = document.querySelectorAll('.project-img');
    
    // Event listener for each image to open it in the modal
    projectImages.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            
            // Remove the previous image if there is one
            const existingImg = modalContent.querySelector('img');
            if (existingImg) {
                existingImg.remove();
            }

            // Create a new image element
            const modalImg = document.createElement('img');
            modalImg.src = image.src;
            modalImg.alt = image.alt;
            modalContent.insertBefore(modalImg, captionText);
            captionText.textContent = image.alt; // Add image caption
        });
    });
});
