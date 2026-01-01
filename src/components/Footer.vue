<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h3>ERSHAD FOOD 🍴</h3>
        <p>© 2025 تمامی حقوق محفوظ است</p>
      </div>
      <div class="footer-right">
        <ul class="footer-links">
          <li><a href="#">تماس با ما</a></li>
          <li><a href="#">درباره ما</a></li>
          <li><a href="#">سوالات متداول</a></li>
        </ul>
        <div class="social-icons">
          <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/twitter.png"/></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
  padding: 20px 15px;
  margin-top: 30px;
  color: #333;
  font-size: 0.9rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.footer-left h3 {
  margin: 0;
  font-size: 1.2rem;
}

.footer-left p {
  margin: 5px 0 0 0;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
}

.footer-links li a {
  text-decoration: none;
  color: #333;
  transition: color 0.2s;
}

.footer-links li a:hover {
  color: #ff6b6b;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.social-icons a img {
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
}

.social-icons a img:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .footer-right {
    align-items: center;
  }
}
</style>
