const requestURL = 'https://jsonplaceholder.typicode.com/users';
const btn = document.querySelector(".btn");

async function fetchUsers() {
    try {
        const response = await fetch(requestURL);
        const users = await response.json();
        const userList = document.querySelector('#userList');
        userList.innerHTML = '';
        const infoType = document.querySelector('#infoType').value;

        users.forEach(user => {
            const listItem = document.createElement("li");

            if (infoType === 'name') {
                listItem.textContent = `${user.name}`;
            } else if (infoType === 'email') {
                listItem.textContent = `${user.email}`;
            } else if (infoType === 'all') {
                listItem.textContent = `${user.name} - ${user.username}, email: ${user.email}`;
            }

            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

btn.addEventListener("click", fetchUsers);
