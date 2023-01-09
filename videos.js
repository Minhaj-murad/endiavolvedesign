// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function sidebaropen(event){
    var text= event.textContent || event.innerHTML;
    if(text == `<i class="fa-solid fa-bars" id="sidebarTogglebars"></i>`){
        event.innerHTML=`<i class="fa-solid fa-xmark" id="sidebarTogglecross"></i>`;
    }
    else{
        event.innerHTML=`<i class="fa-solid fa-bars" id="sidebarTogglebars"></i>`;
    }
}

$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });