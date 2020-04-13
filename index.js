const delay = (ms) => {
	return new Promise((r) => setTimeout(() => r(), ms));
};

delay(2000).then(() => console.log('2 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos';

function fetchTodos() {
	console.log('Fetch todo started ...');
	// создадим искусственную задержку
	return delay(2000)
		.then(() => {
			// через 2s сделаем запрос на сервер и вернем результат в формате json
			// fetch(url).then(response => response.json());

			// возвращаем fetch
			return fetch(url);
		})
		.then((response) => response.json());
}

fetchTodos()
	.then((data) => {
		console.log('Data: ', data);
	})
	.catch((e) => console.error(e));
