<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
import {onMounted} from "vue";
import api from "@/js/http/api.js";
import {useUserStore} from "@/stores/user.js";
import {useRoute} from "vue-router";
import {useRouter} from "vue-router"

const user = useUserStore()
const route = useRoute()
const router = useRouter()

onMounted(async ()=>{
  try {
    const res = await api.get('/api/user/account/get_user_info/')
    const data = res.data
    if (data.result === 'success') {
      user.SetUserInfo(data)
    }
  } catch (err){
    console.log(err)
  } finally {
    user.SetHasPulledUserInfo(true)
    if(route.meta.needLogin && !user.IsLogin()){
      await router.replace({
        name: 'user-account-login-index'
      })
    }
  }
})
</script>

<template>
  <Navbar>
    <RouterView />
  </Navbar>
</template>

<style scoped>

</style>
