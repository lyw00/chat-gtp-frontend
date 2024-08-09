import googleRedirection from "@/googleAuthetication/google/GoogleRedirection.vue"

const GoogleAuthenticationRoutes = [
    {
        path: '/google_auth/google-access-token',
        name: 'GoogleRedirection',
        component: googleRedirection
    },
]

export default GoogleAuthenticationRoutes