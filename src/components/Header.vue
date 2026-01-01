<template>
  <header class="header">
    <!-- پس‌زمینه رنگی شیشه‌ای -->
    <div class="header-bg"></div>

    <div class="header-content">
      <!-- برند -->
      <div class="brand" @mouseover="brandHover = true" @mouseleave="brandHover = false">
        <h1 :class="{ 'hovered': brandHover }">Ershad Food</h1>
      </div>

      <!-- تصویر غذا -->
      <div class="food-banner">
        <img :src="foodImage" alt="Food" />
      </div>

      <!-- ناوبری دسکتاپ -->
      <nav class="nav-desktop">
        <ul>
          <li v-for="link in links" :key="link.name">
            <a
              :href="link.href"
              :class="{ active: currentRoute === link.href }"
              @click.prevent="navigate(link.href)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- نوار جستجوی دسکتاپ -->
      <div class="search-desktop">
        <input
          type="text"
          placeholder="جستجو..."
          v-model="searchText"
          @input="emitSearch"
        />
        <button @click="emitSearch">🔍</button>
      </div>

      <!-- منوی موبایل -->
      <div class="mobile-menu">
        <button class="burger" @click="mobileOpen = !mobileOpen">☰</button>
        <transition name="slide-fade">
          <div v-if="mobileOpen" class="mobile-nav">
            <ul>
              <li v-for="link in links" :key="link.name">
                <a
                  :href="link.href"
                  :class="{ active: currentRoute === link.href }"
                  @click.prevent="navigate(link.href); mobileOpen = false"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
            <!-- جستجوی موبایل -->
            <div class="search-mobile">
              <button @click="showMobileSearch = !showMobileSearch">🔍</button>
              <transition name="fade">
                <input
                  v-if="showMobileSearch"
                  type="text"
                  placeholder="جستجو..."
                  v-model="searchText"
                  @input="emitSearch"
                />
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        { name: "خانه", href: "/" },
        { name: "منو", href: "/menu" },
        { name: "تماس با ما", href: "/contact" },
      ],
      currentRoute: "/",
      brandHover: false,
      mobileOpen: false,
      showMobileSearch: false,
      searchText: "",
      bgColor: "rgba(15,15,15,0.85)", // رنگ پس‌زمینه شیشه‌ای
      foodImage: "/path/to/food.jpg", // تصویر غذایی که می‌خوای بذاری
    };
  },
  methods: {
    navigate(href) {
      this.currentRoute = href;
    },
    emitSearch() {
      this.$emit("search", this.searchText);
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  font-family: 'Lalezar', cursive;
}

/* پس‌زمینه شیشه‌ای */
.header-bg {
  position: absolute;
  top:0; left:0; width:100%; height:100%;
  backdrop-filter: blur(12px);
  background-color: var(--header-bg, rgba(15,15,15,0.85));
  z-index: 1;
}

.header-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  z-index: 2;
  color: #fff;
}

/* برند */
.brand h1 {
  font-size: 2rem;
  color: #FFCC00;
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}
.brand h1.hovered {
  transform: scale(1.1);
  text-shadow: 0 0 15px #FFCC00;
}

/* تصویر غذا */
.food-banner img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 15px;
}

/* ناوبری دسکتاپ */
.nav-desktop ul {
  display: flex;
  gap: 25px;
  list-style: none;
}
.nav-desktop a {
  color: #fff;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
.nav-desktop a.active,
.nav-desktop a:hover {
  color: #22C55E;
}

/* نوار جستجوی دسکتاپ */
.search-desktop {
  display: flex;
  align-items: center;
  gap: 5px;
}
.search-desktop input {
  padding: 5px 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.15);
  color: #fff;
}
.search-desktop input::placeholder {
  color: #ccc;
}
.search-desktop button {
  background: #FFCC00;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
}

/* منوی موبایل */
.mobile-menu {
  display: none;
  position: relative;
}
.burger {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
.mobile-nav {
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: rgba(15,15,15,0.95);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mobile-nav a {
  color: #fff;
  text-decoration: none;
}
.mobile-nav a.active,
.mobile-nav a:hover {
  color: #22C55E;
}

/* جستجوی موبایل */
.search-mobile {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.search-mobile input {
  padding: 5px 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.15);
  color: #fff;
}
.search-mobile input::placeholder {
  color: #ccc;
}

/* انیمیشن‌ها */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }

/* Responsive */
@media screen and (max-width: 768px) {
  .nav-desktop,
  .search-desktop,
  .food-banner {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
