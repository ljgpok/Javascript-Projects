const list = document.getElementById('list');
const url = 'https://www.scorebat.com/video-api/v1/';
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {

  let games = data;
  games.forEach((game) => {
    
    const listItem = document.createElement('li');
  
    listItem.innerHTML = `
      <a href="${game.url}" target="_blank">
        <img src="${game.thumbnail}" />
        <p> ${game.title}</p>
      </a>
    `;
  
    list.appendChild(listItem);
  });
  })
  .catch(function(error) {
    console.log(error);
  });
