<template>
  <div class="left-orders">
    <template>
      <v-data-table
        :headers="table.labels"
        :items="table.contents"
        :items-per-page="5"
        class="order-table"
      >
        <template v-slot:item.avatar="{ item }">
          <v-img
            :src="require('../../../assets/' + item.avatar)"
            :alt="item.name"
            width="60"
            height="60"
          />
        </template>
        <!-- <img src="../../../assets/1.jpg" alt=""> -->
        <template v-slot:item.id="{ item }">
          <b>#{{ item.id }}</b>
        </template>
        <template v-slot:item.isComplete="{ item }">
          <v-btn class="status-btn" :color="getStatusColor(item.isComplete)">
            {{ item.isComplete === true ? "complete" : "pending" }}
          </v-btn>
        </template>
      </v-data-table>
    </template>
  </div>
</template>

<script>
export default {
  name: "LeftOrders",
  data() {
    return {
      table: {
        labels: [
          {
            text: "AVATAR",
            align: "start",
            sortable: false,
            value: "avatar",
          },
          { text: "ID", value: "id" },
          { text: "NAME", value: "name" },
          { text: "PRODUCT", value: "product" },
          { text: "QUANTITY", value: "quantity" },
          { text: "STATUS", align: "end", value: "isComplete" },
        ],
        contents: [
          {
            avatar: "1.jpg",
            id: 5469,
            name: "Louis Stanley",
            product: "IMax",
            quantity: 231,
            isComplete: true,
          },
          {
            avatar: "2.jpg",
            id: 5468,
            name: "Gregory Dixon",
            product: "IPad",
            quantity: 250,
            isComplete: true,
          },
          {
            avatar: "3.jpg",
            id: 5467,
            name: "Catherine Dixon",
            product: "SSD",
            quantity: 250,
            isComplete: true,
          },
          {
            avatar: "4.jpg",
            id: 5466,
            name: "Mary Silva",
            product: "Magic Mouse",
            quantity: 250,
            isComplete: false,
          },
        ],
      },
    };
  },
  methods: {
    getStatusColor(status) {
      if (status) {
        return "#00c292";
      } else {
        return "#fb9678";
      }
    },
  },
};
</script>

<style lang="scss">
.left-orders {
  table > thead > tr > th {
    // display: flex !important;
    // flex-direction: row !important;
    // flex-wrap: nowrap !important;
    // align-items: center !important;
  }
  .order-table {
    .status-btn {
      color: white;
      span {
        font-size: 12px !important;
      }
    }
    thead.v-data-table-header {
      background: #f1f2f7 !important;
    }
  }
}
</style>
