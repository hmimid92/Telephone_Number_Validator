const checkBtn = document.getElementById("check-btn");

const userInput = document.getElementById("user-input");

const clearBtn = document.querySelector("#clear-btn");

const resultsDiv = document.getElementById("results-div");

const findValidNumber = (number) => {
	const validNumberUs =
		/(((^[1]{1})\s\d{3}-\d{3}-\d{3})|((^[1]{1})\s[(]\d{3}[)]\s\d{3}-\d{3})|((^[1]{1})[(]\d{3}[)]\d{3}-\d{3})|((^[1]{1})\s\d{3}\s\d{3}\s\d{3})|((^[5|1]{1})\d{8})|((^[5|1]{1})\d{2}-\d{3}-\d{3})|((^[(]{1})\d{3}[)]\d{3}-\d{3}))(\d{1}$)/g;
	// console.log(number.match(validNumberUs));
	return number.match(validNumberUs) !== null ? true : false;
};

checkBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (userInput.value === "") {
		alert("Please provide a phone number");
	}

	resultsDiv.innerHTML += `
	<p>${finalUsNumber()}</p>
  `;
});

const finalUsNumber = () => {
	return findValidNumber(userInput.value)
		? `Valid US number: ${userInput.value}`
		: `Invalid US number: ${userInput.value}`;
};

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();
	resultsDiv.innerHTML = "";
});

userInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		resultsDiv.innerHTML += `
		  <p>${finalUsNumber()}</p>
		`;
	} else if (e.key === "C" || e.key === "c") {
		e.preventDefault();
		resultsDiv.innerHTML += `
		<p>${finalUsNumber()}</p>
	  `;
	}
});
