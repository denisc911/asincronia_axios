// Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
let users = [];

// Realizar la solicitud a la API
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        users = response.data;
// Imprimir por consola la lista de usuarios
        console.log(users);  
    })
    .catch(error => {
        console.error('Error en la peticion', error);
    });

// Crea una función que muestre por consola la variable global que habías creado
function showUsers() {
    // Imprimir por consola la lista de usuarios
    console.log(users);
}

// Función para mostrar los nombres en el DOM
function displayUserNames() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; 
    users.forEach(user => {
        const userItem = document.createElement('p');
// Imprimir por consola solo el nombre de los usuarios
        userItem.textContent = user.name;
        userList.appendChild(userItem);
    });
}

// Crea un botón que cuando lo cliques ejecute la función que habías creado
document.getElementById('showUsersBtn').addEventListener('click', displayUserNames);
