<template>
  <transition name="fade">
    <div v-if="item" class="modal-backdrop" @click="$emit('close')">
      <!-- پنل مودال -->
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="$emit('close')">×</button>
        <img :src="item.image" class="modal-img" />
        <h2>{{ item.name }}</h2>
        <p class="description">{{ item.description }}</p>
        <p class="price">{{ item.price }} تومان</p>
        <button class="add-to-cart-btn" @click="handleAddToCart">
          افزودن به سبد خرید
        </button>

 <!-- Toast پیام موفقیت بالای صفحه -->
<transition name="toast-fade">
  <div v-if="showToast" class="toast">
    <span>آیتم با موفقیت به سبد اضافه شد</span>
    <button class="toast-close" @click="showToast = false">×</button>
  </div>
</transition>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ItemModal",
  props: { item: Object },
  data() {
    return {
      showToast: false
    };
  },
  methods: {
    handleAddToCart() {
      this.$emit('add-to-cart', this.item);
      this.showToast = true;
      setTimeout(() => this.showToast = false, 2000);
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed; top:0; left:0; width:100%; height:100%;
  background: rgba(0,0,0,0.45); backdrop-filter: blur(6px);
  display:flex; justify-content:center; align-items:center;
  z-index:3000;
}

.modal-content {
  position: relative;
  background: rgba(15,15,15,0.85);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 25px;
  width: 400px; max-width: 90%;
  text-align: center;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6);
  font-family: 'Lalezar', cursive;
}

.modal-content:hover { cursor: default; }

.modal-img { width: 100%; border-radius: 15px; margin-bottom: 20px; }
h2 { margin: 10px 0; font-size: 24px; color: #fff; }
.description { margin: 10px 0; color: #ccc; font-size: 14px; }
.price { margin: 10px 0; font-weight: bold; color: var(--primary-color); font-size: 18px; }

.add-to-cart-btn {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 16px;
  font-family: 'Lalezar', cursive;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: yellow;
  backdrop-filter: blur(14px);
  color: red;
  transition: all 0.2s ease;
}
.add-to-cart-btn:hover { background: #fff; transform: scale(1.05); }

.close-btn { position: absolute; top: 10px; right: 15px; font-size: 1.5rem; background: transparent; border: none; color: #fff; cursor: pointer; }

/* Toast */
.toast {
  position: fixed; 
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #22c55e;
  color: #fff;
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 4000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}


.toast-close {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}

/* انیمیشن Fade */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }

.toast-fade-enter-active, .toast-fade-leave-active { transition: opacity 0.3s ease; }
.toast-fade-enter-from, .toast-fade-leave-to { opacity: 0; }
.toast-fade-enter-to, .toast-fade-leave-from { opacity: 1; }

@media screen and (max-width: 768px) {
  .modal-content { width: 90%; padding: 20px; border-radius: 15px; }
  .modal-img { margin-bottom: 15px; }
}
</style>
