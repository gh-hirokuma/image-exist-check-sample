window.addEventListener("DOMContentLoaded", function () {
  const elements = document.getElementsByClassName("img-content");

  Array.from(elements).forEach((elem) => {
    const images = Array.from(elem.children).filter(
      (child) => child instanceof Image
    );

    if (images.length) {
      console.log("画像あるよ");
    } else {
      console.log("画像ないよ");
    }
  });
});
