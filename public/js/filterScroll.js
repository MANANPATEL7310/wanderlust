document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("categoryScrollContainer");
  const scrollLeftBtn = document.getElementById("scrollLeftButton");
  const scrollRightBtn = document.getElementById("scrollRightButton");

  if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
    const scrollAmount = 300;

    scrollRightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    scrollLeftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollContainer.addEventListener("scroll", () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      scrollLeftBtn.style.display = scrollContainer.scrollLeft > 0 ? "flex" : "none";
      scrollRightBtn.style.display = scrollContainer.scrollLeft >= maxScrollLeft - 5 ? "none" : "flex";
    });
  }

  // Category button click handlers
  document.querySelectorAll(".category-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("category", category);
      window.location.href = currentUrl.toString();
    });
  });

  // Apply Filters button handler from modal
  const applyFiltersBtn = document.getElementById("applyFiltersBtn");
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener("click", () => {
      const priceRange = document.getElementById("priceRangeSelect").value;
      const rating = document.getElementById("ratingSelect").value;
      const category = document.getElementById("categorySelect").value;

      const currentUrl = new URL(window.location.href);
      
      // Clear existing filters
      currentUrl.searchParams.delete("priceRange");
      currentUrl.searchParams.delete("rating");
      currentUrl.searchParams.delete("category");

      // Add new filters if selected
      if (priceRange) currentUrl.searchParams.set("priceRange", priceRange);
      if (rating) currentUrl.searchParams.set("rating", rating);
      if (category) currentUrl.searchParams.set("category", category);

      // Navigate to filtered URL
      window.location.href = currentUrl.toString();

      // Close modal (Bootstrap 5)
      const modal = bootstrap.Modal.getInstance(document.getElementById("filterModal"));
      if (modal) modal.hide();
    });
  }

  // Populate filter form with current query params on modal open
  const filterModal = document.getElementById("filterModal");
  if (filterModal) {
    filterModal.addEventListener("show.bs.modal", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const currentPriceRange = urlParams.get("priceRange");
      const currentRating = urlParams.get("rating");
      const currentCategory = urlParams.get("category");

      if (currentPriceRange) {
        document.getElementById("priceRangeSelect").value = currentPriceRange;
      }
      if (currentRating) {
        document.getElementById("ratingSelect").value = currentRating;
      }
      if (currentCategory) {
        document.getElementById("categorySelect").value = currentCategory;
      }
    });
  }
});
