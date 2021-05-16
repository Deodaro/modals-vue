<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- <h1>Login&Reg Page</h1> -->

        <!-- login -->
        <button class="btn btnPrimary" @click="login = !login">Log In</button>
        <!-- <login v-show="login" @close="login = false" @toRegistration="registration = true" /> -->
        <login v-show="login" @close="login = false" />

        <!-- registration -->
        <button class="btn btnPrimary" @click="registration = !registration">Sign up</button>
        <!-- <registration v-show="registration" @close="registration = false" @toLogin="login = true"/> -->
        <registration v-show="registration" @close="registration = false" />

      </div>
    </section>
  </div>
</template>

<script>
import modal from '@/components/UI/Modal'
import login from '@/components/Login'
import registration from '@/components/Registration'

export default {
  components: { modal, login, registration },
  data() {
    return {
      login: false,
      registration: false
    }
  },
}
</script>