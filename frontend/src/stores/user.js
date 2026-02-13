import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref(0)
    const username = ref('')
    const photo = ref('')
    const profile = ref('')
    const accessToken = ref('')
    const hasPulledUserInfo = ref(false)

    function IsLogin(){
        return !!accessToken.value
    }

    function SetAccessToken(token){
        accessToken.value = token
    }

    function SetUserInfo(data){
        id.value = data.user_id
        username.value = data.username
        photo.value = data.photo
        profile.value = data.profile
    }

    function Logout(){
        id.value = 0
        username.value = ''
        photo.value = ''
        profile.value = ''
        accessToken.value = ''
    }

    function SetHasPulledUserInfo(newstatus){
        hasPulledUserInfo.value = newstatus
    }

    return{
        id,
        username,
        photo,
        profile,
        accessToken,
        hasPulledUserInfo,
        IsLogin,
        SetAccessToken,
        SetUserInfo,
        Logout,
        SetHasPulledUserInfo,
    }
})