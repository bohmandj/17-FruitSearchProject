const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// loop over fruit array for case-safe input match, add matches to results
	for (let item of fruit) {
		if (item.toLowerCase().includes(str.toLowerCase())) {
			results.push(item);
		}
	}
	return results;
}

function searchHandler(e) {
	clearUl();
	// search the fruit list for current input and replace suggestions
	if (input.value !== "") {
		let matchesArr = search(input.value);
		showSuggestions(matchesArr, input.value);
	} else return;
}

function clearUl() {
	// remove ul css and old li list if there is one
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.lastChild);
	}
	suggestions.classList.remove("has-suggestions");
}

function showSuggestions(matchesArr, inputVal) {
	// apply ul css
	suggestions.classList.add("has-suggestions")
	// loop through match list to make suggestion elements
	for (let match of matchesArr) {
		// bold the matching characters
		const boldStart = match.toLowerCase().indexOf(inputVal.toLowerCase());
		const boldEnd = boldStart + inputVal.length;
		const boldMatch = match.replace(match.slice(boldStart, boldEnd), '<b>' + match.slice(boldStart, boldEnd) + '</b>');
		// create li elements and populate with input-bolded fruit text
		const li = document.createElement('li');
		suggestions.appendChild(li);
		li.innerHTML = boldMatch;
	}
}

function useSuggestion(e) {
	// replace current input value with picked fruit and clear ul
	input.value = e.target.innerText
	clearUl();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);