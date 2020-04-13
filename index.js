const delay = (ms) => {
	return new Promise((r) => setTimeout(() => r(), ms));
};

const url = 'https://jsonplaceholder.typicode.com/todos';

async function fetchAsyncTodos() {
	// если внутри ф-и мы используем await, то сама ф-я должна быть ассинхронной - async
	try {
		// ЕСЛИ ВСЕ ХОРОШО, то срабатывает TRY
		await delay(2000); // ждем 2s
		const response = await fetch(url); // ждем запрос
		const data = await response.json(); // ждем ответ
		console.log('Data: ', data); // выводим ответ в консольь
	} catch (e) {
		// ЕСЛИ ЧТО-ТО пошло не так, то выводим ошибку в консоль
		console.log(e);
	} finally {
		// ЭТОТ КОД ВЫПОЛНЯЕТСЯ ВНЕ ЗАВИМОСТИ ОТ ОШИБОК ВСЕГДА ВКОНЦЕ
		console.log('finally');
	}
}

fetchAsyncTodos(); // запускаем ф-ю
