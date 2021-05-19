<template>
  <modal
    title="Login modal"
    @close="$emit('close')"
    @toRegistration="$emit('toRegistration')">
    
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
          <p class="errorText" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} symbols!</p>
          <label for="password">Password:</label>
          <input
            v-model="password"
            :class="{ error: $v.password.$error }"
            @change="$v.password.$touch()"
            id="password">
        </div>

        <!-- button -->
        <button class="btn btnPrimary">Log In</button>

      </form>
    </div>

    <div slot="footer">
      <!-- link -->
      <button class="link btn-link" @click="$emit('switch')">I need an account</button>
    </div>

  </modal>
</template>

<script>
import modal from '@/components/UI/Modal'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  components: { modal },
  data() {
    return {
      email: '',
      password: '',
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
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const login = {
          email: this.email,
          password: this.password
        }
        console.log(login)
        // reset
        this.email = ''
        this.password = ''
        this.$v.$reset()
        this.$emit('close')
      }
    }
  },
}
</script>
