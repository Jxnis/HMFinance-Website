const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

console.log(`View Width: ${vw}`);
if(vw < 1000) {
	window.location.replace('/dashboard/warning');
}