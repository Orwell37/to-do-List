'use strict';



	const toDoList = {
		list: [
			'month',
		]
	};

	const addList = document.querySelector(".list-addClass"),
				form = document.querySelector("form.form"),
				inputForm = document.querySelector("input.form__input");


	addList.addEventListener( "click" , () => {
		form.style.display = "block";

	});

	form.addEventListener("submit", () => {
		let newList = inputForm.value;

	});

	function createList() {

	}















