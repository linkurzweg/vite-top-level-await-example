import { ref } from 'vue'

const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
const data = ref(await response.json())

const useFetch = () => {
    return {
        data
    }
}

export default useFetch