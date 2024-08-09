import actions, { GoogleAuthenticationActions } from "./actions"
import mutations, { AuthenticationMutations } from "./mutations"
import state, { AuthenticationState } from "./states"


export interface GoogleAuthenticationModule {
    namespaced: true
    state: AuthenticationState
    actions: GoogleAuthenticationActions
    mutations: AuthenticationMutations
}

const GoogleAuthenticationModule: GoogleAuthenticationModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default GoogleAuthenticationModule