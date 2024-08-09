<template>
    <div></div>
</template>

<script>
import router from '@/router';
import { mapActions, mapState } from 'vuex'

const googleauthenticationModule = 'googleauthenticationModule'
const accountModule = 'accountModule'

export default {
    data () {
        return{
            email:'',
            nickname: '',
            password: '',
            logintype:'',
        }
    },
    methods: {
        ...mapActions(googleauthenticationModule, [
            'requestAccessTokenToDjangoRedirection',
            'requestUserInfoToDjango',
        ]),
        async setRedirectData () {
            const code = this.$route.query.code
            await this.requestAccessTokenToDjangoRedirection({ code })

            const userInfo = await this.requestUserInfoToDjango()
            const email = userInfo.email
            this.password = Math.random().toString(36).slice(-8)
            this.logintype = "Google"
        }
    },
    async created () {
        await this.setRedirectData()
    }
}
</script>