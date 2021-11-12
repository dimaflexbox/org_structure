<template>
<div class="display-contents">
  <tr>
    <td class="table__main-td q">
      <div>
        <i class="fas fa-angle-right table__angle"></i> 
        {{ item.name }}
      </div>
    </td>
    <td></td>
    <td>{{ item.count }}</td>
    <td>
      <i class="fas fa-pen table__icons table__icons_edit table_transition"></i>
      <i class="fas fa-times-circle table__icons table__icons_delete table_transition"></i>
    </td>
  </tr>
  <item v-for="(child, index) in item.children" :key="index" :item="child"></item>
</div>
</template>

<script>

export default {
    name: 'Item',
    data() {
      return {
      }
    },
    props: ['item'],
    mounted() {
      // this.totalSummary();
    },
    computed: {
      structureList() {
        return this.$store.getters.GETSTRUCTURELIST;
      },
    },
    methods: {
      
    },
}
</script>
<style scoped>

.display-contents {
  display: contents;
}

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