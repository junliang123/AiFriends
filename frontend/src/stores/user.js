import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const id = ref(123)
    const username = ref('ljl')
    const photo = ref('http://127.0.0.1:8000/media/user/photos/default.png')
    const profile = ref('')
    const accessToken = ref('1')

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

    return{
        id,
        username,
        photo,
        profile,
        accessToken,
        IsLogin,
        SetAccessToken,
        SetUserInfo,
        Logout,
    }
})