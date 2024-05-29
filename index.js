// const nagigation = document.getElementById("navigationMenu");
// const navToggle = document.getElementById("navToggle"); 
// navToggle.addEventListener("click", () => {
//   const visibility = nagigation.getAttribute("data-visible");
//   if (visibility === "false") {
//     nagigation.setAttribute("data-visible", true);
//     navToggle.setAttribute("aria-expanded", true)
    
//   }else{
//     nagigation.setAttribute("data-visible", false);
//     navToggle.setAttribute("aria-expanded", false);
   
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navigationMenu = document.getElementById('navigationMenu');
  const submenuItems = document.querySelectorAll('.has-submenu');

  // Toggle navigation menu visibility
  navToggle.addEventListener('click', () => {
      const isVisible = navigationMenu.getAttribute('data-visible') === 'true';
      navigationMenu.setAttribute('data-visible', !isVisible);
      navToggle.setAttribute('aria-expanded', !isVisible);
  });

  // Toggle dropdown menus visibility
  submenuItems.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault()
          const isExpanded = item.getAttribute('aria-expanded') === 'true';
          submenuItems.forEach(i => i.setAttribute('aria-expanded', 'false')); // Close all dropdowns
          item.setAttribute('aria-expanded', !isExpanded); // Toggle the clicked one

          event.stopPropagation(); // Prevent the click from closing the dropdown immediately
      });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
      submenuItems.forEach(item => item.setAttribute('aria-expanded', 'false'));
  });
});