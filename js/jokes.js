const url = "https://official-joke-api.appspot.com/random_ten";

const contentContainerFiveJokes = document.querySelector(".container-content");

const errorMessage = document.querySelector("h1");

async function fetchFiveJokes() {
	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);

		contentContainerFiveJokes.innerHTML = "";

		const jokes = json;
		const jokeObjects = jokes.object;

		jokes.forEach(function (object) {
			contentContainerFiveJokes.innerHTML += `
        <h4 class="type">Type:<br>${object.type}</br></h4>
        <div class="setup"><br>${object.setup}</br></div>
        <div class="punchline">${object.punchline}</div>
        </div>
        </div>
        `;
		});
	} catch (error) {
		console.log(error);
		errorMessage.innerHTML = message("Oups...sorry! An error occured", error);
	}
}

fetchFiveJokes();
