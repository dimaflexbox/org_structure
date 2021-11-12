<template>
  <section class="new">
      <header class="new__container new__container_dark">
          <h1 class="new__header">Организационная структура</h1>
      </header>
      <div class="new__container">
        <div class="new__input-container">
          <input
            type="text" 
            v-model="addObject.newName.name"
            :class="{'error-field': addObject.newName.isError}"
            class="new__input" 
            placeholder="Введите название"
          >
          <input 
            type="text" 
            v-model="addObject.newNumber.name"
            :class="{'error-field': addObject.newNumber.isError}" 
            class="new__input"
            placeholder="Введите кол-во сотрудников"
          >
          <button 
            type="button" 
            class="button new__button new__button_blue-hover new_transition"
            @click="handleAddItem"
          >
            + Добавить
          </button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'New',
  data() {
    return {
      addObject: {
        newName: {
          name: '',
          isError: false,
        },
        newNumber: {
          name: null,
          isError: false,
        }
      },
    }
  },
  methods: {
    handleAddItem: function() {
      // Проверка на пустоту
      for(let key in this.addObject) {
        if (!this.addObject[key].name) {
          this.addObject[key].isError = true;
          return; 
        }
        this.addObject[key].isError = false;
      }

      this.$store.dispatch('actionToggleAdd', this.addObject); // action
      this.addObject.newName.name = "";
      this.addObject.newNumber.name = "";
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-field {
  background: #ff7979;
  color: #fff;
}

.error-field::placeholder {
  color: #fff;
}

h1 {
    margin: 0;
}

.new__container {
  padding: 2rem;
}

/* Отступы для дочерних элементов контейнера с инпутами */
.new__input-container *:first-child {
  margin: 0 1rem 0 0;
}

.new__input-container *:last-child {
  margin: 0 0 0 1rem;
}

.new__input-container *:not(:first-child, :last-child) {
  margin: 0 1rem;
}

.new__container_dark {
  background: #2e4052;
}

.new__header {
  color: #fff;
  text-transform: uppercase;
  font-family: Arial;
  font-weight: 100;
}

.new__button {
  background: #f7f7f7;
  color: #cbcbcb;
}

.new__button_blue-hover:hover {
  background: #0d6efd;
  color: #fff;
}

.new__input {
  padding: 0.3rem 0.5rem;
  border: 1px solid #2e4052;
  border-radius: 0.25rem;
}

.button {
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
}

.new_transition {
  transition: 0.3s ease-in-out;
}

@media (max-width: 767px) {
  .new__input-container {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  /* Отступы для дочерних элементов контейнера с инпутами */
  .new__input-container *:not(:first-child, :last-child) {
    margin: 1rem 0;
  }
}
</style>
