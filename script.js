const projects = [
	{
		name: 'form-validator',
		github:
			'https://github.com/t1gula00/Javascript-Projects/tree/master/form-validator'
	},
	{
		name: 'movie-booking',
		github:
			'https://github.com/t1gula00/Javascript-Projects/tree/master/movie-booking'
	},
	{
		name: 'exchange-rate',
		github:
			'https://github.com/t1gula00/Javascript-Projects/tree/master/exchange-rate'
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, github }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/image.png" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="github">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}