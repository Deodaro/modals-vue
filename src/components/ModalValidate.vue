<template>
  <modal
    v-show="modalSecond.show"
    title="Modal with form"
    @close="modalSecond.show = false">

    <div slot="body">
      <form @submit.prevent="submitSecondForm">
        <label for="name">Name:</label>
        <input type="text" v-model="modalSecond.name" id="name">
        <label for="email">Email:</label>
        <input type="email" v-model="modalSecond.email" id="email">
        <button class="btn btnPrimary">Submit</button>
      </form>      
    </div>
    
  </modal>
</template>

<script>
import modal from '@/components/UI/Modal'
export default {
  components: { modal }
}
</script>