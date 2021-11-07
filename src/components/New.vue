<template>
  <section class="new">
      <div class="new__container new__container_dark">
          <h1 class="new__header">Организационная структура</h1>
      </div>
      <div class="new__container">
        <div>
          <button type="button" class="button new__button new__button_blue-hover new_transition">
            + Добавить
            </button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'New',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin: 0;
}

.new__container {
  padding: 2rem;
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

.button {
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
}

.new_transition {
  transition: 0.3s ease-in-out;
}
</style>
