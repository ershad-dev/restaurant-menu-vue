<template>
  <div class="cart-wrapper">
    <!-- دکمه سبد خرید -->
    <button
      class="cart-toggle"
      @click="toggleCart"
      :class="{ bounce: isBouncing }"
    >
      🛒 سبد خرید ({{ totalQuantity }})
    </button>

    <!-- overlay تار -->
    <div v-if="showCart" class="cart-overlay" @click="toggleCart"></div>

    <!-- پنل سبد خرید -->
    <transition name="slide-left">
      <div v-if="showCart" class="cart-sheet">
        <div class="cart-content">
          <button class="close-btn" @click="toggleCart">×</button>
          <h3>سبد خرید</h3>

          <!-- آیتم‌ها -->
          <div
            class="cart-item"
            v-for="item in cartItems"
            :key="item.id"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="cart-item-img"
            />

            <div class="cart-item-info">
              <h4>{{ item.name }}</h4>
              <p class="price">{{ item.price }} تومان</p>

              <div class="quantity-controls">
                <button @click="$emit('decrease', item)">–</button>
                <span>{{ item.quantity }}</span>
                <button @click="$emit('increase', item)">+</button>
              </div>
            </div>
          </div>

          <!-- جمع کل -->
          <div class="cart-total">
            جمع کل: {{ totalPrice }} تومان
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CartIcon",
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showCart: false,
      isBouncing: false
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    totalQuantity() {
      return this.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    }
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
      this.triggerBounce();
    },
    triggerBounce() {
      this.isBouncing = true;
      setTimeout(() => (this.isBouncing = false), 300);
    }
  }
};
</script>

<style scoped>
.cart-wrapper {
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 2000;
}

/* دکمه سبد خرید */
.cart-toggle {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  padding: 12px 18px;
  border-radius: 14px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  transition: 0.25s;
}

.cart-toggle:hover {
  transform: scale(1.05);
  background: rgba(211, 0, 0, 0.85);
  color: #fff;
}

.cart-toggle.bounce {
  animation: bounce 0.3s;
}

@keyframes bounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.25); }
  100% { transform: scale(1); }
}

/* overlay */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: var(--color-overlay);
  z-index: 998;
}

/* پنل سبد خرید */
.cart-sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 340px;
  height: 100%;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border-right: 1px solid var(--color-border);
  box-shadow: 6px 0 30px rgba(0,0,0,0.6);
  z-index: 999;
  padding: 20px;
  overflow-y: auto;
}

/* دکمه بستن */
.close-btn {
  align-self: flex-end;
  border: none;
  background: transparent;
  font-size: 1.6rem;
  color: var(--color-text-primary);
  cursor: pointer;
}

/* متن‌ها */
.cart-content h3,
.cart-item-info h4,
.cart-item-info .price,
.quantity-controls span,
.cart-total {
  color: wight;
}

/* آیتم‌ها */
.cart-item {
  display: flex;
  gap: 12px;
  background: var(--color-card-bg);
  border-radius: 14px;
  padding: 10px;
  margin-bottom: 10px;
}

.cart-item-img {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  object-fit: cover;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
}

.quantity-controls button {
  background: rgba(255,255,255,0.15);
  border: none;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}

.quantity-controls button:hover {
  background: var(--color-primary);
  color: #000;
}

/* جمع کل */
.cart-total {
  margin-top: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: green;
}

/* انیمیشن */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(-100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

/* موبایل */
@media (max-width: 768px) {
  .cart-sheet {
    width: 75%;
  }
}
</style>
