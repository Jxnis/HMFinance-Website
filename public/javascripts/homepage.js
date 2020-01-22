// console.log(data)

const test = () => {
    console.log('Its a test')
}

const reviewLanguage = () => {
    console.log(data)
    for(let i = 0; i < data.review.length; i++){
    	let title = document.getElementById(`title${review[i].id}`);
    	let comment = document.getElementById(`comment${review[i].id}`);
    	if(locale == 'pt'){
			console.log('Im in the if PT');
			title.innerHTML = data.review[i].titlePT;
    		comment.innerHTML = data.review[i].commentPT;
		}
		if(locale == 'en') {
			console.log('Im in the if EN');
			title.innerHTML = data.review[i].titleEN;
    		comment.innerHTML = data.review[i].commentEN;
    	}
	}
};

window.onload = reviewLanguage();

