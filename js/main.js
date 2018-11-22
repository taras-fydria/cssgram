(function () {
  "use strict";
  const sampleImages = [
    'https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da8271878b509b7558a598dc60703949&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1536539588411-a3818ee6fb04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44aa2864fe01a4b4c526d3ca82e1cfd6&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54222a2eb39d89f4184a2470b4d07735&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1533117514952-a3cfdbb7f986?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=314221de1b1c8146e889be099daf6205&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1534054923604-d8c3f5949f62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7265134ed9e5c696da422e873daaa19&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1536275596884-dab910637e3f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c08802596bd73e81c97e073dc4d435b&auto=format&fit=crop&w=500&q=60'
  ];

  const borderRange = document.getElementById("spacing");
  const inputs = document.querySelectorAll(
    ".ba-filters input, #base, #spacing"
  );

  inputs.forEach(function (element) {
    element.addEventListener("change", handleUpdate);
    element.addEventListener("input", handleUpdate);
  });

  function handleUpdate() {
    // this == range slider that is changed
    const suffix = this.dataset.suffix || "";
    const varVal = this.value + suffix;
    const varName = this.name;
    setCssVar(varName, varVal);
    setTextVal(varName, varVal)

  }

  function setTextVal(varName, varVal) {
    const textVal = document.getElementById(varName + "-val");

    if (textVal) {
      textVal.textContent = varVal;
    }
  }

  function setCssVar(varName, varVal) {
    document.documentElement.style.setProperty("--" + varName, varVal);
    // document.querySelector('.ba-filter__value').textContent = varVal;
  }

  const clearBtn = document.querySelector("[data-clear]");
  clearBtn.addEventListener("click", clearAll);

  function clearAll() {
    //   console.log('IIIIII');

    inputs.forEach(function (element) {
      const defaultVal = element.getAttribute('value');
      element.value = defaultVal;
      const varName = element.name;
      const suffix = element.dataset.suffix || "";
      const varVal = element.value + suffix;

      setCssVar(varName, varVal);
      setTextVal(varName, varVal);
    });
  }

  function getRandomImage() {
    let randomIndex = Math.random() * sampleImages.length;
    randomIndex = Math.floor(randomIndex);
    return sampleImages[randomIndex];
  }

  const filteredImg = document.querySelector('.ba-filtered-img');

  function getImgUrl() {
    filteredImg.src = getRandomImage();
  }

  document.querySelector('.ba-filtered-img').addEventListener('click', getImgUrl);

})();