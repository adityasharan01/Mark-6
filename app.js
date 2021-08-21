var inputText = document.querySelector('#txt-input');
var translationgif= document.querySelector('#occur-on-translation');
var button = document.querySelector('#btn-1').addEventListener('click', () => {
	translate();
});
translationgif.style.display='none';
var output = document.querySelector('#output');

function errorHandler(err) {
	console.log(err, 'There was an error!');
}

function translate() {
	// console.log('btn clicked', inputText.value);
	var it = inputText.value;
	translationgif.style.display='block';

	// console.log(url);
	fetch(`https://api.funtranslations.com/translate/minion.json?text=${it}`)
		.then((res) => res.json())
		.then((res) => {
			output.innerHTML = res.contents.translated;
		})
		.catch(errorHandler);
}