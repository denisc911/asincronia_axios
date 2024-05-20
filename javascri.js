// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de usuarios.

//API
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => {
        // Verificamos que la solicitud haya sido exitosa
        if (!response.ok) {
            throw new Error(`Error al obtener los usuarios: ${response.status}`);
        }
        return response.json();
    })
    .then(users => {
        // Obtenemos los contenedores donde mostraremos los datos
        const userList = document.getElementById('user-list');
        const userNames = document.getElementById('user-names');

        // Imprimimos la lista completa de usuarios( Va en consola y por HTML)
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.textContent = JSON.stringify(user, null, 2);
            userList.appendChild(userDiv);
            console.log(user)
        });

        // Imprimimos solo los nombres de los usuarios
        users.forEach(user => {
            const nameDiv = document.createElement('div');
            nameDiv.textContent = user.name;
            userNames.appendChild(nameDiv);
            console.log(user.name)
        });
    })

    // Imprimir por consola solo el nombre de los usuarios.
    .catch(error => {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    });
