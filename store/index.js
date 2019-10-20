export const state = () => ({
    list: [],
    storms: {},
});

export const mutations = {
    set(state, storms) {
        state.list = storms
    },
    add(state, value) {
        merge(state.list, value)
    },
    remove(state, {storms}) {
        state.list.filter(s => storms.id !== s.id)
    },
    mergeStorms(state, form) {
        assign(state.storms, form)
    },
    setStorms(state, form) {
        state.storms = form
    }
};

export const actions = {
    async get({commit}) {
        await this.$axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4460`)
            .then((res) => {
                if (res.status === 200) {
                    commit('set', res.data)
                }
            })
    },
    async show({commit}, params) {
        await this.$axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4460${params.categories_id}`)
            .then((res) => {
                if (res.status === 200) {
                    commit('mergeStorms', res.data)
                }
            })
    },
    async set({commit}, storms) {
        await commit('set', storms)
    },
    async form({commit}, form) {
        await commit('mergeStorms', form)
    },
    async add({commit}, storms) {
        await commit('add', storms)
    },
};
