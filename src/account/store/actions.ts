import { ActionContext, Commit } from "vuex"
import { AccountState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"

export type AccountActions = {
    requestEmailDuplicationCheckToDjango(
        context: ActionContext<AccountState, any>,
        payload: any
    ): Promise<boolean>
    requestNicknameDuplicationCheckToDjango(
        context: ActionContext<AccountState, any>,
        nickname: string
    ): Promise<boolean>
    requestCreateNewAccountToDjango(
        context: ActionContext<any, any>,
        accountInfo: { email: string, id:string, password:string,logintype:string}
    ): Promise<void>
    requestPasswordDuplicationCheckToDjango(
        context: ActionContext<AccountState, any>,
        payload: any
    ): Promise<boolean> 
}

const actions: AccountActions = {
    async requestEmailDuplicationCheckToDjango(
        context: ActionContext<AccountState, any>,
        payload: any
    ): Promise<boolean> {

        const { email } = payload

        return axiosInst.djangoAxiosInst.post(
                    '/account/email-duplication-check', 
                    { email: email }
        )
        .then((res) => {
            if (res.data.isDuplicate) {
                return true
            } else {
                return false
            }
        })
    },
    async requestNicknameDuplicationCheckToDjango(
        context: ActionContext<AccountState, any>,
        payload: any
    ): Promise<boolean> {

        const { newNickname } = payload

        return axiosInst.djangoAxiosInst.post(
                    '/account/nickname-duplication-check', 
                    { newNickname: newNickname }
        )
        .then((res) => {
            if (res.data.isDuplicate) {
                return true
            } else {
                return false
            }
        })
    },
    async requestPasswordDuplicationCheckToDjango(
        context: ActionContext<AccountState, any>,
        payload: any
    ): Promise<boolean> {

        const { password } = payload

        return axiosInst.djangoAxiosInst.post(
                    '/account/password-duplication-check', 
                    { password: password }
        )
        .then((res) => {
            if (res.data.isDuplicate) {
                return true
            } else {
                return false
            }
        })
    },
    async requestCreateNewAccountToDjango(
        context: ActionContext<any, any>,
        accountInfo: { id:string,email: string,password:string,logintype:string}
    ): Promise<void> {
        try {
            await axiosInst.djangoAxiosInst.post('/account/register', accountInfo)
        } catch (error) {
            console.error('신규 계정 생성 실패:', error)
            throw error
        }
    },
};

export default actions;