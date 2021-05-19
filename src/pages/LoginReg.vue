<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- login -->
        <button class="btn btnPrimary" @click="login = !login">Log In</button>
        <login
          v-show="login"
          @close="login = false"
          @switch="switchModal" />

        <!-- registration -->
        <button class="btn btnPrimary" @click="registration = !registration">Sign up</button>
        <registration
          v-show="registration"
          @close="registration = false"
          @switch="switchModal" />

      </div>
    </section>
  </div>
</template>

<script>
import login from '@/components/Login'
import registration from '@/components/Registration'

export default {
  components: { login, registration },
  data() {
    return {
      login: false,
      registration: false
    }
  },
  methods: {
    switchModal() {
      this.login = !this.login
      this.registration = !this.registration
      console.log('Modal switched')
    }
  }
}
</script>