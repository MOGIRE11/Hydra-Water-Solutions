 let $(document).ready(function () {
  const intervalTime = 5000;
  let currentPage = 1;

  function autoRotate() {
    const element = $(`label[for="slide_2_${currentPage}"]`);
    if (element.length) {
      element.click();
    }
    currentPage = currentPage === 4 ? 1 : currentPage + 1;
  }

  setInterval(autoRotate, intervalTime);
});
