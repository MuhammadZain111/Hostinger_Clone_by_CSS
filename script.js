


document.getElementById('morefeatures').addEventListener('click', function() {
    var additionalFeatures = document.querySelectorAll('.tick'); // Select additional items
    var featuresContainer = document.querySelector('.pricing'); // Select container
  
    // Toggle visibility of additional features
    additionalFeatures.forEach(function(morefeatures) {
      feature.style.display = feature.style.display === 'none' ? 'inline' : 'none';
    });
  
    // Change the text of the button based on visibility
    var buttonText = this.textContent;
    this.textContent = buttonText === 'See less features' ? 'See more features' : 'See less features';
  
    // Adjust the height of the container based on the visibility of additional features
    featuresContainer.style.height = featuresContainer.scrollHeight + '100px';
  });
  