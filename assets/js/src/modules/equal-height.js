export default function equalHeight(selector, selector2 = ''){
	let initialHeight = 0;
	document.querySelectorAll(selector).forEach(item => {
		if(item.getBoundingClientRect().height > initialHeight){
			initialHeight = item.getBoundingClientRect().height;
		}
	});
	document.querySelectorAll(selector).forEach(item => {
		item.style.height = initialHeight + 'px';
	});
	if(document.querySelectorAll(selector2)){
		document.querySelectorAll(selector2).forEach(item => {
			item.style.height = initialHeight + 'px';
		});
	}
};