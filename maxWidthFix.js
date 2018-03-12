const mutationCallback = (mutationsList) => {
	for(const mutation of mutationsList) {
		if(mutation.type === 'attributes' 
			&& mutation.attributeName == 'maxWidth') {
			mutation.target.style.maxWidth='none';
			return;
		}

		if(mutation.type === "childList" && mutation.addedNodes.length) {
			document.querySelectorAll('.editable-field').forEach((elem) => elem.style.maxWidth='none');
			return;
		}
	}
};

const config = { attributes: true, childList: true, subtree: true };
document.addEventListener('DOMContentLoaded', () => {
	const observer = new MutationObserver(mutationCallback);
	observer.observe(document.body, config);
});
