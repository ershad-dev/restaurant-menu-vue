<template>
  <div id="app">
    <!-- هدر -->
    <Header />


    <AppHeader
  :cartCount="cart.length"
  @toggle-cart="showCart = !showCart"
>
  <CategoryNav />
</AppHeader>


    <!-- منوی دسته‌بندی افقی Sticky -->
    <CategoryNav
      :categories="categories"
      ref="categoryNav"
      @scrollToCategory="scrollToCategory"
    />

    <!-- دسته‌بندی‌ها و آیتم‌ها -->
    <div
      v-for="cat in categories"
      :key="cat.id"
      :id="'cat-' + cat.id"
      class="category-section"
    >
      <h2>{{ cat.title }}</h2>
      <MenuItem
        :items="menuItems.filter(mi => mi.categoryId === cat.id)"
        @select-item="selectedItem = $event"
      />
    </div>

    <!-- Modal آیتم انتخاب‌شده -->
    <ItemModal
      v-if="selectedItem"
      :item="selectedItem"
      @close="selectedItem = null"
      @add-to-cart="handleAddToCart"
    />

    <!-- سبد خرید -->
    <CartIcon
      ref="cart"
      :cart-items="cart"
      @increase="increaseQuantity"
      @decrease="decreaseQuantity"
    />

    <!-- فوتر -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CategoryNav from './components/CategoryNav.vue';
import MenuItem from './components/MenuItem.vue';
import ItemModal from './components/ItemModal.vue';
import CartIcon from './components/CartIcon.vue';
import Footer from './components/Footer.vue';
import { categories, menuItems } from './data/menu.js';

export default {
  name: 'App',
  components: { Header, CategoryNav, MenuItem, ItemModal, CartIcon, Footer },
  data() {
    return {
      categories,
      menuItems,
      selectedItem: null,
      cart: []
    };
  },
  methods: {
    // Scroll نرم هنگام کلیک روی دسته
    scrollToCategory(catId) {
      const section = document.getElementById(`cat-${catId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },

    // افزودن به سبد
    handleAddToCart(item) {
      const exist = this.cart.find(ci => ci.id === item.id);
      if (exist) exist.quantity++;
      else this.cart.push({ ...item, quantity: 1 });
      this.$refs.cart.triggerBounce();
    },

    // افزایش/کاهش تعداد آیتم در سبد
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) item.quantity--;
      else this.cart = this.cart.filter(ci => ci.id !== item.id);
    }
  }
};


</script>

<style>
#app {
  font-family: 'Lalezar', sans-serif;
  direction: rtl;
  padding: 0;
  margin: 0;
}


/* فاصله بین دسته‌ها */
.category-section {
  padding: 30px 15px;
}

/* عنوان هر دسته */
.category-section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

/* اطمینان از اینکه بخش‌ها اندازه کافی برای Scroll Spy دارند */
.category-section {
  min-height: 400px;
}
</style>
