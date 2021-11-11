<template>
<!-- v-for="(item, index) in structureList" :key="index" -->
    <!-- <tr>
          <td class="table__main-td">
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
        </tr> -->
        <div>
          <h3>{{ item.name }} ({{ item.count }})</h3>
          <ul>
            <li v-if="item.children && item.children.length">
              <Item v-for="(child, index) in item.children" :key="index" :item="child"></Item>
            </li>
          </ul>
        </div>
</template>

<script>

export default {
    name: 'Item',
    props: ['item'],
    computed: {
      structureList() {
        return this.$store.getters.GETSTRUCTURELIST;
      }
    },
}
</script>