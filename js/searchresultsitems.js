window.addEventListener('DOMContentLoaded', () => {

	const loadContent = (url) => {
		 fetch(url)
			.then(response => response.json())
			.then(json => createElement(json.response.items));
	}
	
	function createElement(arr) {
		const itemMini = document.getElementById('searchresultsitems');
	
		arr.forEach(function(item) {
			let card = document.createElement('div');
			card.classList.add("item", "mini");
			card.innerHTML = `
				<a href="${item.sourceUrl}" class="item-video">
					<span class="item-video__item ibg" style="background-image: url('http://svigu.net/storage/kinopoisk/covers/${item.cover}');"><img src="http://svigu.net/storage/kinopoisk/covers/${item.cover}" alt="" /></span>
					<span class="item-video-info">
						<span class="item-video-info__rating">${item.ratingKinopoisk}</span>
						<span class="item-video-info__values"><strong>HD</strong> 44m</span>
					</span>
				</a>
				<div class="item-body">
					<a href="" class="item__title">Сериал:<br />${item.title} (${item.year})</a>
					<div class="item__source">
						<span>${item.sourceTitle}</span>
						<a target="_blank" href="http://lostfilm-hd720.ru">lostfilm-hd720.ru</a>
					</div>
					<div class="item__collection">В колекцию</div>
				</div>
				`;
	
				itemMini.appendChild(card);
		});
	}
	
	loadContent('json/searchresults.json',);
});

