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
        }
    }
})