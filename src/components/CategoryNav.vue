<template>
  <nav class="category-nav">
    <ul>
      <li
        v-for="cat in categories"
        :key="cat.id"
        :class="{ active: activeCategory === cat.id }"
        @click="selectCategory(cat.id)"
      >
        {{ cat.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: { categories: Array },
  data() {
    return {
      activeCategory: null,
      observers: [],
    };
  },
  mounted() {
    this.initScrollObserver();
  },
  beforeUnmount() {
    this.observers.forEach((obs) => obs.disconnect());
  },
  methods: {
    selectCategory(catId) {
      this.activeCategory = catId;
      const section = document.getElementById(`cat-${catId}`);
      if (!section) return;

      const offset = -90; // فاصله برای هدر + sticky
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    },

    initScrollObserver() {
      this.categories.forEach((cat) => {
        const section = document.getElementById(`cat-${cat.id}`);
        if (!section) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.activeCategory = cat.id;
              }
            });
          },
          {
            root: null,
            threshold: 0.45, // دقیق‌تر از 0.5 برای UX بهتر
          }
        );

        observer.observe(section);
        this.observers.push(observer);
      });
    },
  },
};
</script>

<style scoped>
/* ===== CATEGORY NAV (GLASS DARK) ===== */
.category-nav {
  position: sticky;
  top: 0;
  z-index: 1200;

  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  padding: 10px 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.category-nav::-webkit-scrollbar {
  display: none;
}



.category-nav ul {
  display: flex;
  justify-content: space-between; /* یا space-around */
  padding: 0 14px;
  margin: 0;
  list-style: none;
  width: 100%;
}

.category-nav li {
  flex-shrink: 0;
  cursor: pointer;

  padding: 8px 18px;
  border-radius: 20px;

  font-size: 14px;
  color: #ffffffff;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255,255,255,0.12);

  transition: all 0.25s ease;
}

.category-nav li:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  transform: translateY(-2px);
}

/* ===== ACTIVE (SCROLL + CLICK) ===== */
.category-nav li.active {
  background: linear-gradient(135deg, #ff9800, #ff5722);
  color: #000;
  font-weight: bold;

  box-shadow: 0 4px 14px rgba(255, 152, 0, 0.45);
  border-color: transparent;
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .category-nav li {
    padding: 6px 14px;
    font-size: 13px;
  }
}
</style>
