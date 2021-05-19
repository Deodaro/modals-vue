<template>
<div class="wrapper">

<header>
  <div class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="logo">VUE-CLI</div>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.title">
            <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<router-view></router-view>

<!-- <footer></footer> -->

</div>
</template>

<script>

export default {
  data() {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'Modals', url: '/modals'},
        { title: 'Login&Reg Modals', url: '/login-reg'},
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #444ce0;
  }
}

.btn {
  margin-left: 1em;
  margin-bottom: 1em;
  &:first-of-type {
    margin-left: 0;
  }
}

.btn-link {
  padding: 0;
  border: none;
  background-color: transparent;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

// error
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
