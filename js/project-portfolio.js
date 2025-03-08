document.addEventListener('DOMContentLoaded', function() {
    // Select all project cards
    const projectCards = document.querySelectorAll('.project-card');
    const projectDetailsContent = document.getElementById('project-details-content');
    const projectLinkButton = document.getElementById('project-link');
    const projectDetailsModal = new bootstrap.Modal(document.getElementById('project-details-modal'));

    // Project details configuration
    const projectDetails = {
        'gee': {
            title: 'Climatological Data Visualization',
            description: `
                <h4>Google Earth Engine Climatological Data App</h4>
                <p>A web application designed to provide comprehensive climatological insights using advanced geospatial technologies.</p>
                
                <h5>Key Features:</h5>
                <ul>
                    <li>Retrieves rainfall estimates from CHIRPS dataset</li>
                    <li>Sources evapotranspiration data from MODIS satellite observations</li>
                    <li>Provides monthly and annual climatological insights</li>
                </ul>

                <h5>Technical Details:</h5>
                <p>Developed using Google Earth Engine, the application leverages satellite-based Earth observation products to provide accessible and quick climatological insights for civil engineering and environmental research.</p>
            `,
            link: 'https://ee-emanuelgoulartf.projects.earthengine.app/view/climatological-data',
            qmdFile: 'projects/gee-climatology.qmd'
        },
        'arcgis': {
            title: 'Dublin Bike Theft Analysis',
            description: `
                <h4>Spatial Analysis of Bike Theft in Dublin</h4>
                <p>A comprehensive geospatial analysis of bike theft locations in Dublin city using ArcGIS mapping technologies.</p>
                
                <h5>Project Objectives:</h5>
                <ul>
                    <li>Identify hotspots of bike theft</li>
                    <li>Analyze spatial distribution of incidents</li>
                    <li>Provide insights for urban safety planning</li>
                </ul>

                <h5>Methodology:</h5>
                <p>Utilized GIS techniques to map and analyze bike theft data from Dublin Cycling Campaign's dataset.</p>
            `,
            link: 'index.html#arcgis',
            qmdFile: 'projects/dublin-bike-theft.qmd'
        },
        'spectral-index': {
            title: 'Spectral Index Analysis',
            description: `
                <h4>Remote Sensing Spectral Index Application</h4>
                <p>An advanced web application for analyzing vegetation and water indices using cutting-edge remote sensing techniques.</p>
                
                <h5>Key Indices Analyzed:</h5>
                <ul>
                    <li>Normalized Difference Vegetation Index (NDVI)</li>
                    <li>Normalized Difference Water Index (NDWI)</li>
                    <li>Other advanced spectral indices</li>
                </ul>

                <h5>Technical Approach:</h5>
                <p>Leverages Google Earth Engine to process and visualize multispectral satellite imagery for environmental monitoring.</p>
            `,
            link: 'https://emanuelgf.users.earthengine.app/view/spectral-index-app',
            qmdFile: 'projects/spectral-index.qmd'
        }
    };

    // Add click event to project cards
    projectCards.forEach(card => {
        card.querySelector('.view-project').addEventListener('click', function() {
            const projectType = card.dataset.project;
            const project = projectDetails[projectType];

            // Update modal content
            document.querySelector('#project-details-modal .modal-title').textContent = project.title;
            projectDetailsContent.innerHTML = project.description;
            projectLinkButton.href = project.link;

            // Optional: Load .qmd file content
            fetch(project.qmdFile)
                .then(response => response.text())
                .then(qmdContent => {
                    // You can add .qmd file content to the modal or create a separate section
                    projectDetailsContent.innerHTML += `
                        <hr>
                        <h5>Detailed Project Documentation</h5>
                        <pre><code>${qmdContent}</code></pre>
                    `;
                })
                .catch(error => {
                    console.log('QMD file not found:', error);
                });

            // Show the modal
            projectDetailsModal.show();
        });
    });
});

