let body = document.body;
let string = window.location.search;
let url = 'https://api.github.com/users/bessik1234';

fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);

        let photo = new Image();
        photo.src = json.avatar_url;
        body.append(photo);

        let name = document.createElement('p');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Информация о пользователе недоступна';
        }
        body.append(name);
        name.addEventListener("click", () => window.location = json.html_url);

        let bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Информация о пользователе недоступна';
        }
        body.append(bio);

    })
    .catch(err => alert('Информация о пользователе недоступна'));