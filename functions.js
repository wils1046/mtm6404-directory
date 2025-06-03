//1 
const list = (clients) => {
    return clients.map((client) => {
        return `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>${client.balance}</strong>
        </li>`;
    }).join('');
};

//2
const order = (clients, property) => {
    return clients.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
};

//3
const total = (clients) => {
    return clients.reduce((sum, client) => sum + client.balance, 0);
};

//4
const info = (index) => {
    return clients.find((client, i) => i === index);
};

//5
const search = (query) => {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
};