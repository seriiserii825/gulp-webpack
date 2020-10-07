export default function filterTabs(tabsParentSelector, tabsSelector, contentSelector, hiddenClass){
	const tabsParent = document.querySelector(tabsParentSelector);
	const tabs = document.querySelectorAll(tabsSelector);
	const content = document.querySelectorAll(contentSelector);

	function hideTabs(){
		tabs.forEach(item => {
			item.classList.add(hiddenClass);
		});
		content.forEach(item => {
			item.style.display = 'none';
		});
	}

	function showTab(i = 0){
		tabs[i].classList.remove(hiddenClass);
		content[i].style.display = 'block';
	}

	hideTabs();
	showTab();

	tabsParent.addEventListener('click', (e) => {
		e.preventDefault();

		const target = e.target;

		tabs.forEach((item, index) => {
			if(target && target === item){
				hideTabs();
				tabs[index].classList.remove(hiddenClass);
				content[index].style.display = 'block';
			}
		});
	});
};