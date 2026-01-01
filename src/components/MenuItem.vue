<template>
  <div class="menu-items">
    <div
      v-for="item in items"
      :key="item.id"
      class="menu-item"
      @click="$emit('select-item', item)"
    >
      <img :src="item.image" class="thumb" />

      <div class="info">
        <h3>{{ item.name }}</h3>
        <p class="price">{{ item.price }} تومان</p>
        <p class="desc">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    items: Array,
  },
};
</script>

<style scoped>
/* کانتینر */
.menu-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
}

/* کارت منو */
.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 14px;
  border-radius: 16px;
  cursor: pointer;

  /* شیشه‌ای مشکی */
  background: linear-gradient(
    180deg,
    #e6b41eb0,
    rgba(0, 0, 0, 0.55)
  );
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);

  overflow: hidden;
  transition: all 0.35s ease;
}

/* افکت نور */
.menu-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.12),
    transparent
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

/* hover */
.menu-item:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.75);
}

.menu-item:hover::before {
  opacity: 1;
}

/* تصویر */
.thumb {
  width: 78px;
  height: 78px;
  object-fit: cover;
  border-radius: 14px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.menu-item:hover .thumb {
  transform: scale(1.08);
}

/* متن */
.info {
  flex: 1;
}

.info h3 {
  margin: 0;
  font-size: 17px;
  color: #ffc107;
}

.info .price {
  margin: 4px 0;
  font-size: 15px;
  font-weight: bold;
  color: #22c55e;
}

.info .desc {
  margin: 0;
  font-size: 14px;
  color: #cfcfcf;
}

/* موبایل */
@media (max-width: 768px) {
  .menu-item {
    padding: 12px;
    gap: 10px;
  }

  .thumb {
    width: 62px;
    height: 62px;
  }

  .info h3 {
    font-size: 15px;
  }

  .info .desc {
    font-size: 13px;
  }
}
</style>
