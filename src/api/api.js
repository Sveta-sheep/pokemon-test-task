class Request {
    host = 'https://pokeapi.co';

    getPokemonChunk = async (limit = 12, offset = 0) => {
        return await fetch(`${this.host}/api/v2/pokemon/?limit=${limit}&offset=${offset}`).then(res => {
            return res.json().then(data => data.results);
        });
    }

    getPokemonInfo = async (id = 2) => {
        return await fetch(`${this.host}/api/v2/pokemon/${id}`).then(res => console.log(res))
    }

    getAllTypes = async () => {
        return await fetch(`${this.host}/api/v2/type?limit=999`).then(res => console.log(res.json()))
    }
}

export const request = new Request()