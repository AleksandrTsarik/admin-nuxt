<template>
  <div class="table">
    <v-table>
      <thead>
        <tr>
          <th>
            <v-checkbox 
              class="table-checkbox"
            ></v-checkbox>
          </th>
          <th class="text-left">
            Название
          </th>
          <th class="text-left">
            Дата
          </th>
          <th class="text-left">
            Статус
          </th>
          <th class="text-left">
            Еще колонка
          </th>
          <th class="text-left">
            Еще колонка
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
         v-for="(item, i) in options"
         :key="i"
        >
          <td>
            <v-checkbox 
              class="table-checkbox"
            ></v-checkbox>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.col1 }}</td>
          <td>{{ item.col2 }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  .table-checkbox {
    .v-input__details {
      min-height: 0;
      padding: 0;
    }
    .v-messages {
      min-height: 0;
    }
    // .v-selection-control--density-default {
    //   --v-selection-control-size: 10px;
    // }
  }
  .table {}
  table {
    thead th {
      white-space: nowrap;
      margin: 0 10px;
      &:first-child {
        .v-input {
          width: 30px;
        }
      }
    }
    tbody td {
      &:first-child {
        .v-input {
          width: 30px;
        }
      }
      &:nth-child(4) {
        color: var(--btn);
      }
    }
  }
</style>