import { useEffect, useState } from "react";
import $ from "jquery";

export const useSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch((prev) => !prev);

  return { showSearch, toggleSearch };
};

export const useOffCanvas = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const toggleCanvas = () => setShowCanvas((prev) => !prev);

  return { showCanvas, toggleCanvas };
};

export const useMobileMenu = () => {
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".tgmenu__wrap li.menu-item-has-children ul").length) {
      $(".tgmenu__wrap .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="plus-line"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".tgmobile__menu").length) {
      var mobileMenuContent = $(".tgmenu__wrap .tgmenu__main-menu").html();
      $(".tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer").append(
        mobileMenuContent
      );

      //Dropdown Button
      $(".tgmobile__menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(300);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".tgmobile__menu-backdrop, .tgmobile__menu .close-btn").on(
        "click",
        function () {
          $("body").removeClass("mobile-menu-visible");
        }
      );
    }
  }, []);
};
