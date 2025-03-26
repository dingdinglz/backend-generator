import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            workspaceConfig: {
                name: ''
            }
        }
    },
    mutations: {
        changeWorkspaceConfig(state, s) {
            state.workspaceConfig = JSON.parse(s)
        },
        addMiddleware(state, middleware) {
            if (state.workspaceConfig.middlewares === null) {
                state.workspaceConfig.middlewares = []
            }
            state.workspaceConfig.middlewares.push(middleware);
        },
        deleteMiddleware(state, middleware) {
            if (state.workspaceConfig.middlewares === null) {
                return
            }
            const index = state.workspaceConfig.middlewares.indexOf(middleware);
            if (index !== -1) {
                state.workspaceConfig.middlewares.splice(index, 1)
            }
        },
        addType(state, type) {
            if (state.workspaceConfig.types === null) {
                state.workspaceConfig.types = []
            }
            state.workspaceConfig.types.push({
                name: type,
                fields: []
            })
        },
        deleteType(state, type) {
            if (state.workspaceConfig.types === null) {
                return
            }
            for (let i = 0; i < state.workspaceConfig.types.length; i++) {
                if (state.workspaceConfig.types[i].name === type) {
                    state.workspaceConfig.types.splice(i, 1)
                    break
                }
            }
        },
        newConfig(state) {
            if (state.workspaceConfig.configs === null) {
                state.workspaceConfig.configs = []
            }
            state.workspaceConfig.configs.push({
                name: "",
                type: ""
            })
        },
        deleteConfig(state, name) {
            if (state.workspaceConfig.configs === null) {
                return
            }
            for (let i = 0; i < state.workspaceConfig.configs.length; i++) {
                if (state.workspaceConfig.configs[i].name === name) {
                    state.workspaceConfig.configs.splice(i, 1)
                    break
                }
            }
        },
        addTable(state) {
            if (state.workspaceConfig.database === null) {
                state.workspaceConfig.database = []
            }
            state.workspaceConfig.database.push({
                name: "",
                fields: []
            })
        },
        deleteTable(state, name) {
            if (state.workspaceConfig.database === null) {
                return
            }
            for (let i = 0; i < state.workspaceConfig.database.length; i++) {
                if (state.workspaceConfig.database[i].name === name) {
                    state.workspaceConfig.database.splice(i, 1)
                    break
                }
            }
        }
    }
})