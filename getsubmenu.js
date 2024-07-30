  $(document).ready(function(){
        // Handle the click on the item button to load submenu
        $("#item").on('click', function(event) {
            event.preventDefault();
            var itemid = $(this).val(); // Use $(this) instead of reselecting the element

            $.ajax({
                url: 'sub-menus.html',
                type: 'GET',
                success: function (data) {
                    $("#submenus").html(data);
                    $("#submenusection").show().animate({
                        opacity: 1, // Animate opacity to 1 (visible)
                        left: '0',
                        'z-index': 1 // Bring element to foreground
                    }, 1000); // Adjust the duration as needed (in milliseconds)
                },
                error: function() {
                    console.log('An error occurred while fetching the data.');
                }
            });
        });

        // Hide the submenu section when the offcanvas is closed
        $('#offcanvasExample').on('hidden.bs.offcanvas', function () {
            $("#submenusection").hide().css({
                opacity: 0,
                left: '-100px',
                'z-index': -1 // Reset z-index
            });
        });
    });