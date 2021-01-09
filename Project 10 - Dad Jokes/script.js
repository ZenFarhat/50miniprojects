const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING AYNC/AWAIT
async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    
    const res =  await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}