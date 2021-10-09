(function () {
   const listitems = document.getElementsByTagName("LI");
   console.log(listitems);
   Array.from(listitems).forEach((li) => {
      li.addEventListener("click", () => {
         if (li.style["text-decoration"] === "line-through") {
            li.style["text-decoration"] = "none";
         } else li.style["text-decoration"] = "line-through";
      });
   });
})();
