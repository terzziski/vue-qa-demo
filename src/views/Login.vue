<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    handleLogin() {
      if (this.username === 'admin' && this.password === '1234') {
        this.$store.commit('auth/login', this.username)
        localStorage.setItem('user', this.username)
        this.$router.push('/dashboard')
      } else {
        this.error = 'Invalid credentials'
      }
    }
  }
}
</script>
