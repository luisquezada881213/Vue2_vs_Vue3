export default function fetchRandomUser() {
    return fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => json.results[0].name.first)
}