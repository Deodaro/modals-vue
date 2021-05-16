<template>
  <modal
    title="Registration modal"
    @close="$emit('close')"
    @toLogin="$emit('toLogin')">
    
    <div slot="body">
      <form @submit.prevent="onSubmit">

        <!-- email -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label for="email">Email:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required!</p>
          <p class="errorText" v-if="!$v.email.email">Incorrect email!</p>
          <input
            v-model="email"
            :class="{ error: $v.email.$error }"
            @change="$v.email.$touch()"
            id="email">
        </div>

        <!-- password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <p class="errorText" v-if="!$v.password.required">Field is required!</p>
          <p class="errorText" v-if="!$v.password.minLength">Password must have at least {{ $v.name.$params.minLength.min }} symbols!</p>
          <label for="password">Password:</label>
          <input
            v-model="password"
            :class="{ error: $v.password.$error }"
            @change="$v.password.$touch()"
            id="password">
        </div>

        <!-- repeat password -->
        <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
          <p class="errorText" v-if="!$v.repeatPassword.required">Field is required!</p>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical!</p>
          <label for="repeatPassword">Repeat password:</label>
          <input
            v-model="repeatPassword"
            :class="{ error: $v.repeatPassword.$error }"
            @change="$v.repeatPassword.$touch()"
            id="repeatPassword">
        </div>

        <!-- button -->
        <button class="btn btnPrimary">Register</button>

      </form>
    </div>

    <div slot="footer">
      <!-- link -->
      <!-- <button class="link btn-link" @click="$emit('toLogin')">I already have an account</button> -->
      <!-- <button class="link btn-link" @click="$emit('go-to-login')">I already have an account</button> -->
      <!-- <button class="link btn-link" v-on:click="tologin">I already have an account</button> -->
      <!-- <button class="link btn-link" @click="tologin('login', $event)">I already have an account</button> -->

    </div>

  </modal>
</template>

<script>
import modal from '@/components/UI/Modal'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  components: { modal },
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '' 
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        // reset
        this.email = ''
        this.password = ''
        this.repeatPassword = ''
        this.$v.$reset()
        this.$emit('close')
      }
    }
  }
}
</script>