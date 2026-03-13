document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#EC4899] text-white w-full">

  <!-- MAIN FOOTER -->
  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- ABOUT -->
      <div>
        <h1 class="text-2xl font-bold text-white">
      <a href="index.html">Groww Cakes</a>
    </h1>
        <p class="text-pink-100 text-sm leading-relaxed mt-2">
          We specialize in custom cake designs, fresh ingredients, and beautiful desserts
          crafted with love for your special moments.
        </p>

        <div class="flex gap-4 mt-4 text-lg">
          <a href="#" class="hover:text-[#B9799D] transition"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#B9799D] transition"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#B9799D] transition"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <!-- OUR PRODUCTS -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-pink-100">
          Our Products
        </h3>
        <ul class="space-y-2 text-pink-100 text-sm">
          <li><a href="#" class="hover:text-white transition">Birthday Cakes</a></li>
          <li><a href="#" class="hover:text-white transition">Wedding Cakes</a></li>
          <li><a href="#" class="hover:text-white transition">Cupcakes & Pastries</a></li>
          <li><a href="#" class="hover:text-white transition">Custom Theme Cakes</a></li>
        </ul>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-pink-100">
          Quick Links
        </h3>
        <ul class="space-y-2 text-pink-100 text-sm">
          <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
          <li><a href="blog.html" class="hover:text-white transition">Blog</a></li>
          <li><a href="gallery.html" class="hover:text-white transition">gallery</a></li>
          <li><a href="service.html" class="hover:text-white transition">Services</a></li>
          <li><a href="contact.html" class="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <!-- CONTACT INFO -->
      <div>
        <h3 class="text-xl font-semibold mb-4 text-pink-100">
          Contact Us
        </h3>

        <ul class="space-y-3 text-pink-100 text-sm">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-white"></i>
            <span>Chennai, Tamil Nadu, India</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-white"></i>
            <span>+91 98765 43210</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-white"></i>
            <span>info@growwcakes.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <!-- BOTTOM BAR -->
  <div class="border-t border-pink-300 py-6 text-center text-pink-100 text-xs px-4">
    © ${new Date().getFullYear()} Groww Cakes. All Rights Reserved.
  </div>

</footer>
`;
});