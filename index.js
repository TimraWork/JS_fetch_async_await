const delay = (ms) => {
	return new Promise((r) => setTimeout(() => r(), ms));
};

// delay(2000).then(() => console.log('2 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
// 	console.log('Fetch todo started ...');
// 	// создадим искусственную задержку
// 	return delay(2000)
// 		.then(() => {
// 			// через 2s сделаем запрос на сервер и вернем результат в формате json
// 			// fetch(url).then(response => response.json());

// 			// возвращаем fetch
// 			return fetch(url);
// 		})
// 		.then((response) => response.json());
// }

// fetchTodos()
// 	.then((data) => {
// 		console.log('Data: ', data);
// 	})
// 	.catch((e) => console.error(e));

async function fetchAsyncTodos() {
	// если внутри ф-и мы используем await, то сама ф-я должна быть ассинхронной - async
	await delay(2000); // ждем 2s
	const response = await fetch(url); // ждем запрос
	const data = await response.json(); // ждем ответ
	console.log('Data: ', data);
}

fetchAsyncTodos(); // запускаем ф-ю
