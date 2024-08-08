import AccountLoginPage from "@/account/pages/login/AccountLoginPage.vue"
import AccountRegisterPage from "@/account/pages/register/AccountGenralRegisterPage.vue"

const AccountRoutes = [
    {
        path: '/account/login',
        name: 'AccountLoginPage',
        component: AccountLoginPage
    },
    {
        path: '/account/register',
        name: 'AccountGeneralRegisterPage',
        component: AccountRegisterPage
    },

]

export default AccountRoutes