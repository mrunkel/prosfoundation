$(document).ready(function() {
    $("#clicklogo").click(function() {
        $("html, body").animate(
          {
            scrollTop: $("#header").offset().top
          },
          500
        );
      });
    
    $("#click1").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("#header").offset().top
        },
        500
      );
    });

    $("#click2").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("#WhoWeAre").offset().top
        },
        500
      );
    });

    $("#click3").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("#WhatWeDo").offset().top
        },
        500
      );
    });

    $("#click4").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("#Collab").offset().top
        },
        500
      );
    });

    $("#click5").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("#contact").offset().top
        },
        500
      );
    });
});