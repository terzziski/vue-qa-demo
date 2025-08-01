<template>
  <div>
    <h2>Dashboard</h2>
    <form @submit.prevent="addItem">
      <input v-model="newItem" placeholder="Add item" />
      <button>Add</button>
    </form>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="editItem(index)">Edit</button>
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: ''
    }
  },
  computed: {
    items() {
      return this.$store.state.items.list
    }
  },
  methods: {
    addItem() {
      this.$store.commit('items/addItem', this.newItem)
      this.newItem = ''
    },
    editItem(index) {
      const updated = prompt('Edit item:', this.items[index])
      if (updated) this.$store.commit('items/editItem', { index, updated })
    },
    deleteItem(index) {
      this.$store.commit('items/deleteItem', index)
    }
  }
}
</script>
