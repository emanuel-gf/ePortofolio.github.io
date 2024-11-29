function showContent(filter) {
    // Hide all embed content divs
    const embedContents = document.querySelectorAll('.embed-content');
    embedContents.forEach(div => {
        div.style.display = 'none';
        // Remove any active modal states
        const modals = div.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.remove('show');
            modal.style.display = 'none';
        });
    });
  
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => button.classList.remove('active'));
     
    // Add active class to the clicked button
    const clickedButton = document.querySelector(`[data-filter="${filter}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Show the selected embed content div based on the provided filter
    const selectedContent = document.getElementById(filter);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        
        // Setup modal functionality for the selected content
        const modalTriggers = selectedContent.querySelectorAll('[data-toggle="modal"]');
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const targetModalId = this.getAttribute('data-target');
                const modal = document.querySelector(targetModalId);
                
                if (modal) {
                    // Show modal
                    modal.classList.add('show');
                    modal.style.display = 'block';
                    
                    // Add modal backdrop
                    const backdrop = document.createElement('div');
                    backdrop.classList.add('modal-backdrop', 'fade', 'show');
                    document.body.appendChild(backdrop);
                    
                    // Close modal functionality
                    const closeButtons = modal.querySelectorAll('[data-dismiss="modal"]');
                    closeButtons.forEach(closeBtn => {
                        closeBtn.addEventListener('click', function() {
                            modal.classList.remove('show');
                            modal.style.display = 'none';
                            document.body.removeChild(backdrop);
                        });
                    });
                }
            });
        });
    }
}

// Set default selection when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initial content show
    showContent('gee');
    
    // Add click event listeners to all buttons
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const filter = this.getAttribute('data-filter');
            showContent(filter);
        });
    });
});