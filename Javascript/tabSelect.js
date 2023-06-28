window.addEventListener('DOMContentLoaded', (event) => {
    const tabs = document.querySelectorAll('.choice');

    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove 'selected' class from all tabs
            tabs.forEach((tab) => {
                tab.classList.remove('selected');
            });

            // Add 'selected' class to clicked tab
            tab.classList.add('selected');

            if (tab.id === 'map-tab') {
                // Show 'map-content' and all 'rowMap' divs inside it
                const mapContent = document.getElementById('map-content');
                mapContent.style.display = 'block'; 
                const rows = mapContent.querySelectorAll('.rowMap');
                rows.forEach(row => row.style.display = 'flex');
            } else {
                // Hide 'map-content'
                document.getElementById('map-content').style.display = 'none';
            }
        });
    });
});
