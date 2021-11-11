<template>
  <section>
    <table class="table">
      <thead class="table__thead">
        <tr>
          <td></td>
          <td>Общее количество</td>
          <td>Фактическое количество</td>
          <td>Действия</td>
        </tr>
      </thead>
      <tbody>
        <Item
          v-for="(item, index) in structureList"
          :key="index"
          :item="item"
        ></Item>
      </tbody>
    </table>
    <!-- <span style="width: 5rem; height: 5rem; background: red;">{{ $store.getters.getStructureList }}</span> -->
    <!-- <div v-for="(inner,index) in structureList" :key="index">
      <div v-for="(innerSecond,index) in inner" :key="index">{{ innerSecond }}</div>
    </div> -->
  </section>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'List',
  components: {
    Item,
  },
  data() {
    return {
      
    }
  },
  computed: {
    structureList() {
      return this.$store.getters.GETSTRUCTURELIST;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

/* Отступ для всех ячеек кроме тех, что с кнопками удалить и редактировать */
.table td:not(tbody td:last-child){
  padding: 1.3rem 1.5rem;  
}

/* Размеры 2-4 ячеек */
.table td:not(:first-child, :last-child){
  width: 25%;
}

.table td:last-child{
  width: 15%;
}

.table__thead{
  background: #2e4052;
  color: #fff;
}

.table__thead td:not(:first-child) {
  border-left: 1px solid #7d8a94;
}

.table__angle {
  padding-right: 1rem;
}

.table__icons {
  padding: 1.3rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.table__icons_edit:hover {
  color: orange;
}

.table__icons_delete:hover {
  color: #d13e3e;
}

.table_transition {
  transition: 0.3s ease-in-out;
}

.table__main-td {
  cursor: pointer;
}
</style>
