<template>
  <modal
    title="Modal with form + validate"
    @close="$emit('close')">

    <div slot="body">
      <form @submit.prevent="onSubmit">
        
        <!-- name -->
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label for="name">Name:</label>
          <p class="errorText" v-if="!$v.name.required">Field is required!</p>
          <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} symbols!</p>
          <input
            v-model="name"
            :class="{ error: $v.name.$error }"
            @change="$v.name.$touch()"
            id="name">
        </div>
        
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
          <label for="password">Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required!</p>
          <p class="errorText" v-if="!$v.password.minLength">Password must have at least {{ $v.name.$params.minLength.min }} symbols!</p>
          <input
            v-model="password"
            :class="{ error: $v.password.$error }"
            @change="$v.password.$touch()"
            id="password">
        </div>

        <!-- repeat password -->
        <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
          <label for="password">Repeat password:</label>
          <p class="errorText" v-if="!$v.repeatPassword.required">Field is required!</p>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical!</p>
          <input
            v-model="repeatPassword"
            :class="{ error: $v.repeatPassword.$error }"
            @change="$v.repeatPassword.$touch()"
            id="repeatPassword">
        </div>
        
        <!-- button -->
        <button class="btn btnPrimary">Submit</button>
      </form>      
    </div>
    
  </modal>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal'

export default {
  components: { modal },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
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
          name: this.name,
          email: this.email,
          password: this.password
        }
        console.log(user)
        // reset and close modal
        this.name = ''
        this.email = ''
        this.password = ''
        this.$v.$reset()
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13px;
  color: #fc5c65;
}

.form-item {
  &.errorInput .errorText {
    display: block;
  }
}

input.error {
  border-color: #fc5c65;
}
</style>