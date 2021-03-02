'use strict';

	const toDoList = {
		list: [

		]
	};

	const addList = document.querySelector(".list-addClass"),
		    form = document.querySelector("form.form"),
		    inputForm = document.querySelector("input.form__input"),
			  allLists = document.querySelector(".list__block");



	addList.addEventListener( "click" , () => {
		form.style.display = "block";

	});


	form.addEventListener("submit", (e) => {
		e.preventDefault();
		let newList = inputForm.value;
		toDoList.list.push(newList);
		creatToDoList ();
		form.reset();
		form.style.display = "none";
	});




	function creatToDoList () {
		allLists.innerHTML = "";

		toDoList.list.forEach((newList) => {
			allLists.innerHTML += `
				<li class="list__block-item">
					<div class="list__folder flex">
						<a href="#" class="wrap-list__folder flex" aria-label="To folder">
							<img class="folder-image" src="img/list-svgrepo-com.svg" alt="Список">
							<p class="nameFolder">${newList}</p>
						</a>
						<label class="checkbox-delete flex">
							<input class="input" type="checkbox" name="delete" value="yes">
						</label>
					</div>
				</li>`;
		});
	}





























