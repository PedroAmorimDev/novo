// "Elixirss": "https://rickandmortyapi.com/api/Elixirs",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const urlBase = 'https://wizard-world-api.herokuapp.com/Elixirs';
const page = 3



const loadElixirss = async () => {
    const res = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs`);
    const data = await res.json()
    const limitData = data.results.slice(0, 6)
    return { results: limitData }
};

console.log(loadElixirss())
// console.log(loadLocations())
// console.log(loadEpisodes())
const loadAllWitchPromiseAll = async () => {
    const [Elixirs] = await Promise.all([
        loadElixirss(),
    ]);
    console.log('Elixirs:', Elixirs.results)
    showElixirs(Elixirs.results)
};
loadAllWitchPromiseAll()

function showElixirs(Elixirs) {
    const ElixirsContainer = document.getElementById('elixir-container');
    Elixirs.map((Elixirs) => {
        const divElixirs = document.createElement('div')
        divElixirs.id = `elixir-${Elixirs.id}`;
        divElixirs.innerHTML = `

        <article class="Elixirs-info">
            <h3>${Elixirs.name}</h3>
            <span class="${Elixirs.status}">${Elixirs.status} - ${Elixirs.species}</span>
        `;
        divElixirs.classList.add("Elixirs-box");
        ElixirsContainer.appendChild(divElixirs);

        divElixirs.addEventListener("click", () => {
            ElixirsDetails(Elixirs.id)
        })
    });
}

function ElixirsDetails(id) {
    console.log(id)
    const idEncrypted = encryptId(id)
    console.log(idEncrypted)
    window.location.href = `./pages/Elixirs.html?id=${idEncrypted}`
}
function encryptId(id) {
    return id.toString(36)
}