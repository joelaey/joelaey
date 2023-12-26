fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('data');
        dataContainer.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
