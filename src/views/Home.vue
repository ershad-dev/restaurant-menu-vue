<template>
  <div>
    <!-- ⬅️ سرچ از هدر میاد -->
    <Header @search="onSearch" />

    <CategoryNav :categories="categories" />

    <!-- ⬅️ به جای menuItems، آیتم‌های فیلترشده -->
    <MenuItem
      :items="filteredMenuItems"
      @select-item="openModal"
    />

    <ItemModal
      :item="selectedItem"
      v-if="showModal"
      @close="closeModal"
      @add-to-cart="addToCart"
    />

    <CartIcon :cart-items="cartItems" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CategoryNav from "@/components/CategoryNav.vue";
import MenuItem from "@/components/MenuItem.vue";
import ItemModal from "@/components/ItemModal.vue";
import CartIcon from "@/components/CartIcon.vue";
import { categories, menuItems } from "@/data/menu.js";

export default {
  name: "HomeView",
  components: { Header, CategoryNav, MenuItem, ItemModal, CartIcon },

  data() {
    return {
      categories,
      menuItems,
      selectedItem: null,
      showModal: false,
      cartItems: [],
      searchQuery: "" // 🔴 اضافه شد
    };
  },

  computed: {
    filteredMenuItems() {
      if (!this.searchQuery) return this.menuItems;

      return this.menuItems.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },

  methods: {
    onSearch(value) {          // 🔴 سرچ از هدر
      this.searchQuery = value;
    },

    openModal(item) {
      this.selectedItem = item;
      this.showModal = true;
    },

    closeModal() {
      this.selectedItem = null;
      this.showModal = false;
    },

    addToCart(item) {
      const exist = this.cartItems.find(ci => ci.id === item.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        this.cartItems.push({ ...item, quantity: 1 });
      }
      this.closeModal();
    },
  },
};
</script>
