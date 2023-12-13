import {reactive} from "vue";

export const store = reactive ({
    searchText: "",
    searchValueType: '',
    loading: true,
    cards: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypes: [],
    apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
});