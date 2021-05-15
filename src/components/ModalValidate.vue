<template>
  <modal
    title="Modal with form + validate"
    @close="$emit('close')">

    <div slot="body">
      <form @submit.prevent="">
        <div class="form-item">
          <label for="name">Name:</label>
          <input
            v-bind="name"
            :class="{ error: $v.name.$error }"
            @change="$v.name.$touch()"
            id="name">
        </div>
        <div class="form-item">
          <label for="email">Email:</label>
          <input
            v-bind="email"
            id="email">
        </div>
        <button class="btn btnPrimary">Submit</button>
      </form>      
    </div>
    
  </modal>
</template>

<script>
import { required, minLength, between, email } from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal'

export default {
  components: { modal },
  data() {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    }
  }
}
</script>