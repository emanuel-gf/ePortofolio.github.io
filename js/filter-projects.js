function showContent(filter) {
  // Hide all embed content divs
  const embedContents = document.querySelectorAll('.embed-content');
  embedContents.forEach(div => {
      div.style.display = 'none';
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
