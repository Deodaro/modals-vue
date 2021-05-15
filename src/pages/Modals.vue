<template>
  <div class="wrapper-content wrapper-content--fixed">

    <section>
      <div class="container">
        <!-- <h1>Modals Page</h1> -->

        <!-- first modal -->
        <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
        <modal
          v-show="modalFirst"
          title="First Modal"
          @close="modalFirst = false">

          <div slot="body">
            <p>text text text text</p>
            <button class="btn btnPrimary" @click="modalFirst = !modalFirst">ok!</button>
          </div>

        </modal>

        <!-- second modal (with form) -->
        <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show modal with form</button>
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

        <!-- third modal (with validate) -->
        <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal with form + validate</button>
        <modalValidate v-show="modalValidate" @close="modalValidate = false"/>
        
      </div>
    </section>

  </div>
</template>

<script>
import modal from '@/components/UI/Modal'
import modalValidate from '@/components/ModalValidate'

export default {
  components: { modal, modalValidate },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 1em;
  margin-bottom: 1em;
  &:last-child {
    margin-right: 0;
  }
}
</style>