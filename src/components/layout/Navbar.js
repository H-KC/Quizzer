import React, { useEffect } from "react";
import "./navStyle.css";
import $ from "jquery";
import { Link } from "react-router-dom";

export const Navbar = () => {
  useEffect(() => {
    test();
  }, []);

  return (
    <nav className='navbar navbar-expand-custom navbar-mainbg'>
      <Link className='navbar-brand navbar-logo' to='!#'>
        QUIZERR
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <i className='fas fa-bars text-white'></i>
      </button>
      <div
        className='collapse navbar-collapse ml-3'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav ml-auto'>
          <div className='hori-selector'>
            <div className='left'></div>
            <div className='right'></div>
          </div>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              <i className='fas fa-home'></i>Home
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/classe'>
              <i className='fas fa-align-justify'></i>Class
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/quiz'>
              <i className='far fa-file-alt'></i>Quiz
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/questionnaire'>
              <i className='far fa-question-circle'></i>questionnaire
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/student'>
              <i className='far fa-user'></i>Student
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/test'>
              <i className='far fa-copy'></i>Test
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  // var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).on("ready", function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").on("click", function () {
  setTimeout(function () {
    test();
  });
});
