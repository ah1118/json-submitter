document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic username/password authentication
    if (username === 'admin' && password === 'password123') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('json-form').style.display = 'block';
    } else {
        alert('Invalid credentials!');
    }
});

document.getElementById('submit-json').addEventListener('click', function() {
    const jsonData = document.getElementById('json-input').value;

    if (!jsonData) {
        alert('Please paste valid JSON data.');
        return;
    }

    try {
        JSON.parse(jsonData); // Check if the input is valid JSON

        // Create a blob for JSON data
        const blob = new Blob([jsonData], { type: 'application/json' });
        const zip = new JSZip();
        zip.file('categories_data.json', blob);

        // Generate a zip file
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            // Download the zip file locally
            saveAs(content, 'categories_data.zip');

            // Here you can call a GitHub API or server-side script to upload the file
            // For now, we only download the file to the client-side
        });
    } catch (e) {
        alert('Invalid JSON data!');
    }
});
