const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
	//if they are holding the shift key down and checking the box
	if(e.shiftKey && this.checked){
		let toggle = false;
		checkboxes.forEach((item) => {
			if(item.checked){
				toggle = !toggle;
			}

			if(toggle){
				item.checked = true;
			}
		});
	}

	lastChecked = this;
}

checkboxes.forEach((item) => {
	item.addEventListener('click', handleCheck);
});
