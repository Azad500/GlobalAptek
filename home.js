document.addEventListener("DOMContentLoaded", () => {
  // -------------discountedProducts------------
  const discountedProducts = [
    {
      id: 1,
      image: "./images/discountedProducts/carousel1.jpg",
      drugName: "Paracetamol 0.5 mq N20",
      drugOldPrice: "1.80 AZN",
      drugNewPrice: "1.60 AZN",
    },
    {
      id: 2,
      image: "./images/discountedProducts/carousel2.jpg",
      drugName: "Kombilipen 2 ml N5",
      drugOldPrice: "5.85 AZN",
      drugNewPrice: "5.06 AZN",
    },
    {
      id: 3,
      image: "./images/discountedProducts/carousel3.png",
      drugName: "Alset 10 mq N10",
      drugOldPrice: "2.50 AZN",
      drugNewPrice: "2.16 AZN",
    },
    {
      id: 4,
      image: "./images/discountedProducts/carousel4.avif",
      drugName: "Albentoks 400 mq N6",
      drugOldPrice: "6.50 AZN",
      drugNewPrice: "5.92 AZN",
    },
    {
      id: 5,
      image: "./images/discountedProducts/carousel5.jpg",
      drugName: "Nistatin məlhəm 30 q",
      drugOldPrice: "3.45 AZN",
      drugNewPrice: "3.12 AZN",
    },
    {
      id: 6,
      image: "./images/discountedProducts/carousel6.avif",
      drugName: "Bepanten krem 5% 100q",
      drugOldPrice: "15.90 AZN",
      drugNewPrice: "14.80 AZN",
    },
    {
      id: 7,
      image: "./images/discountedProducts/carousel7.jpg",
      drugName: "Ursobilan 500 mq N60",
      drugOldPrice: "65.00 AZN",
      drugNewPrice: "63.31 AZN",
    },
    {
      id: 8,
      image: "./images/discountedProducts/carousel8.jpg",
      drugName: "Klavin Platinum N20",
      drugOldPrice: "120.00 AZN",
      drugNewPrice: "100.00 AZN",
    },
    {
      id: 9,
      image: "./images/discountedProducts/carousel9.jpg",
      drugName: "Fantom 5 mq N30",
      drugOldPrice: "50.00 AZN",
      drugNewPrice: "48.02 AZN",
    },
  ];
  // -------------mostViewedProducts------------
  const mostViewedProducts = [
    {
      id: 1,
      image: "./images/mostViewedProducts/carousel1.jpg",
      drugName: "Balıq yağı N90",
      drugPrice: "37.80 AZN",
    },
    {
      id: 2,
      image: "./images/mostViewedProducts/carousel2.png",
      drugName: "Kesol 50 mkq 200 doz",
      drugPrice: "14.98 AZN",
    },
    {
      id: 3,
      image: "./images/mostViewedProducts/carousel3.webp",
      drugName: "Agemo N50",
      drugPrice: "29.60 AZN",
    },
    {
      id: 4,
      image: "./images/mostViewedProducts/carousel4.jpg",
      drugName: "Neyrovit 2 ml N10",
      drugPrice: "13.94 AZN",
    },
    {
      id: 5,
      image: "./images/mostViewedProducts/carousel5.jpg",
      drugName: "Vamelan-wm N30",
      drugPrice: "7.91 AZN",
    },
    {
      id: 6,
      image: "./images/mostViewedProducts/carousel6.jpg",
      drugName: "Salbutamol 200 doza",
      drugPrice: "5.40 AZN",
    },
    {
      id: 7,
      image: "./images/mostViewedProducts/carousel7.jpeg",
      drugName: "Lekart 1 q 5 ml N5",
      drugPrice: "10.01 AZN",
    },
    {
      id: 8,
      image: "./images/mostViewedProducts/carousel8.webp",
      drugName: "Nervio B12 3 ml N6",
      drugPrice: "52.38 AZN",
    },
    {
      id: 9,
      image: "./images/mostViewedProducts/carousel9.avif",
      drugName: "Krem Sebamed uşaqlar üçün  50 ml",
      drugPrice: "9.30 AZN",
    },
  ];
  // -------------allDrugs------------
  const allDrugs = [
    {
      id: 1,
      image: "./images/allDrugs/drug1.png",
      drugName: "Ornaenzim N30",
      drugPrice: "21.80 AZN",
    },
    {
      id: 2,
      image: "./images/mostViewedProducts/carousel9.avif",
      drugName: "Krem Sebamed uşaqlar üçün  50 ml",
      drugPrice: "9.30 AZN",
    },
    {
      id: 3,
      image: "./images/mostViewedProducts/carousel8.webp",
      drugName: "Nervio B12 3 ml N6",
      drugPrice: "52.38 AZN",
    },
    {
      id: 4,
      image: "./images/mostViewedProducts/carousel7.jpeg",
      drugName: "Lekart 1 q 5 ml N5",
      drugPrice: "10.01 AZN",
    },
    {
      id: 5,
      image: "./images/mostViewedProducts/carousel6.jpg",
      drugName: "Salbutamol 200 doza",
      drugPrice: "5.40 AZN",
    },
    {
      id: 6,
      image: "./images/mostViewedProducts/carousel1.jpg",
      drugName: "Balıq yağı N90",
      drugPrice: "37.80 AZN",
    },
    {
      id: 7,
      image: "./images/mostViewedProducts/carousel2.png",
      drugName: "Kesol 50 mkq 200 doz",
      drugPrice: "14.98 AZN",
    },
    {
      id: 8,
      image: "./images/mostViewedProducts/carousel3.webp",
      drugName: "Agemo N50",
      drugPrice: "29.60 AZN",
    },
    {
      id: 9,
      image: "./images/mostViewedProducts/carousel4.jpg",
      drugName: "Neyrovit 2 ml N10",
      drugPrice: "13.94 AZN",
    },
    {
      id: 10,
      image: "./images/mostViewedProducts/carousel5.jpg",
      drugName: "Vamelan-wm N30",
      drugPrice: "7.91 AZN",
    },
    {
      id: 11,
      image: "./images/allDrugs/drug2.jpg",
      drugName: "Pulsoksimetr 'Beurer' PO 30",
      drugPrice: "94.90 AZN",
    },
    {
      id: 12,
      image: "./images/allDrugs/drug3.webp",
      drugName: "Qalınlaşdırıcı şampun 400 ml",
      drugPrice: "42.32 AZN",
    },
    {
      id: 13,
      image: "./images/allDrugs/drug4.jpg",
      drugName: "Feminiti N6",
      drugPrice: "17.33 AZN",
    },
    {
      id: 14,
      image: "./images/allDrugs/drug5.avif",
      drugName: "Livolen Plus N30",
      drugPrice: "23.20 AZN",
    },
    {
      id: 15,
      image: "./images/allDrugs/drug6.jpg",
      drugName: "Nistatin 0.5 mq N10",
      drugPrice: "2.59 AZN",
    },
    {
      id: 16,
      image: "./images/allDrugs/drug7.jpg",
      drugName: "Gastrosit N7",
      drugPrice: "23.51 AZN",
    },
    {
      id: 17,
      image: "./images/allDrugs/drug8.avif",
      drugName: "Faktazidim 500 mq N1",
      drugPrice: "5.90 AZN",
    },
    {
      id: 18,
      image: "./images/allDrugs/drug9.jpg",
      drugName: "Eritromisin 100 mq N20",
      drugPrice: "2.10 AZN",
    },
    {
      id: 19,
      image: "./images/allDrugs/drug10.webp",
      drugName: "Ardeysedon N20",
      drugPrice: "14.35 AZN",
    },
    {
      id: 20,
      image: "./images/allDrugs/drug11.jpg",
      drugName: "Anestezol N10",
      drugPrice: "1.70 AZN",
    },
  ];
  // ---------------brands------------
  const brands = [
    {
      id: 1,
      image: "./images/brands/brend1.jpg",
      alt: "beurer logo",
    },
    {
      id: 2,
      image: "./images/brands/brend2.png",
      alt: "boso logo",
    },
    {
      id: 3,
      image: "./images/brands/brend3.jpg",
      alt: "posay logo",
    },
    {
      id: 4,
      image: "./images/brands/brend4.jpg",
      alt: "alcon logo",
    },
    {
      id: 5,
      image: "./images/brands/brend5.jpeg",
      alt: "capitano logo",
    },
    {
      id: 6,
      image: "./images/brands/brend6.webp",
      alt: "biolane logo",
    },
    {
      id: 7,
      image: "./images/brands/brend7.png",
      alt: "krka logo",
    },
    {
      id: 8,
      image: "./images/brands/brend8.png",
      alt: "egis logo",
    },
    {
      id: 9,
      image: "./images/brands/brend9.jpg",
      alt: "kopas logo",
    },
    {
      id: 10,
      image: "./images/brands/brend10.svg",
      alt: "polpharma logo",
    },
    {
      id: 11,
      image: "./images/brands/brend11.svg",
      alt: "fito logo",
    },
  ];
  // ---------------optics------------
  const opticsProducts = [
    {
      id: 1,
      image: "./images/optics/optic1.jpg",
      opticName: "Optik çərçivə 'Mustang' MU7087 04",
      opticPrice: "110.20 AZN",
      alt: "optic 1",
    },
    {
      id: 2,
      image: "./images/optics/optic2.jpg",
      opticName: "Optik çərçivə 'Mustang' MU7063 03",
      opticPrice: "91.80 AZN",
      alt: "optic 2",
    },
    {
      id: 3,
      image: "./images/optics/optic3.jpg",
      opticName: "Optik çərçivə 'Mustang' MU7093 01",
      opticPrice: "110.20 AZN",
      alt: "optic 3",
    },
    {
      id: 4,
      image: "./images/optics/optic4.webp",
      opticName: "Optik çərçivə 'Mustang' MU7117 02",
      opticPrice: "96.40 AZN",
      alt: "optic 4",
    },
    {
      id: 5,
      image: "./images/optics/optic5.jpg",
      opticName: "Optik çərçivə 'Mustang' MU7114 04",
      opticPrice: "105.60 AZN",
      alt: "optic 5",
    },
    {
      id: 6,
      image: "./images/optics/optic6.png",
      opticName: "Optik çərçivə 'Mustang' MU7125 02",
      opticPrice: "101 AZN",
      alt: "optic 6",
    },
    {
      id: 7,
      image: "./images/optics/optic7.webp",
      opticName: "Optik çərçivə 'Mustang' MU7153",
      opticPrice: "119.35 AZN",
      alt: "optic 7",
    },
    {
      id: 8,
      image: "./images/optics/optic8.webp",
      opticName: "Optik çərçivə 'Mustang' MU7083",
      opticPrice: "82.62 AZN",
      alt: "optic 8",
    },
    {
      id: 9,
      image: "./images/optics/optic9.jpg",
      opticName: "Optik çərçivə 'Mustang' MU7130 02",
      opticPrice: "85 AZN",
      alt: "optic 9",
    },
    {
      id: 10,
      image: "./images/optics/optic10.jpg",
      opticName: "Optik çərçivə 'Mustang' MU7143 02",
      opticPrice: "100 AZN",
      alt: "optic 10",
    },
  ];
  // ---------------cosmetic------------
  const cosmeticProducts = [
    {
      id: 1,
      image: "./images/cosmetics/cosmetic1.webp",
      opticName: "LA ROCHE POSAY TOLERIANE RICHE kremi",
      opticPrice: "33.52 AZN",
      alt: "cosmetic 1",
    },
    {
      id: 2,
      image: "./images/cosmetics/cosmetic2.jpg",
      opticName: "LA ROCHE-POSAY NUTRITIC INTENSE kremi",
      opticPrice: "12.72 AZN",
      alt: "cosmetic 2",
    },
    {
      id: 3,
      image: "./images/cosmetics/cosmetic3.jpg",
      opticName: "LA ROCHE-POSAY TOLERIANE kremi",
      opticPrice: "42.32 AZN",
      alt: "cosmetic 3",
    },
    {
      id: 4,
      image: "./images/cosmetics/cosmetic4.webp",
      opticName: "LA ROCHE-POSAY LIPIKAR GEL LAVANT",
      opticPrice: "23.92 AZN",
      alt: "cosmetic 4",
    },
    {
      id: 5,
      image: "./images/cosmetics/cosmetic5.jpg",
      opticName: "LA ROCHE-POSAY LIPIKAR OIL AP",
      opticPrice: "39.12 AZN",
      alt: "cosmetic 5",
    },
  ];

  const kidsProducts = [
    {
      id: 1,
      image: "./images/kid/kid1.jpg",
      opticName: "Bepanten",
      opticPrice: "14.80 AZN",
      alt: "kid 1",
    },
    {
      id: 2,
      image: "./images/kid/kid2.webp",
      opticName: "Dolphin uşaq bezi",
      opticPrice: "7.50 AZN",
      alt: "kid 2",
    },
    {
      id: 3,
      image: "./images/kid/kid3.webp",
      opticName: "Multivitaminli bərpaedici balzam",
      opticPrice: "21.52 AZN",
      alt: "kid 3",
    },
    {
      id: 4,
      image: "./images/kid/kid4.webp",
      opticName: "Körpələr üçün yumşaldıcı krem",
      opticPrice: "31.92 AZN",
      alt: "kid 4",
    },
    {
      id: 5,
      image: "./images/kid/kid5.jpg",
      opticName: "Günəşdən qoruyucu krem",
      opticPrice: "64.72 AZN",
      alt: "kid 5",
    },
  ];

  const pregnantProducts = [
    {
      id: 1,
      image: "./images/pregnant/pregnant1.jpg",
      opticName: "Divasteron N21",
      opticPrice: "4.20 AZN",
      alt: "pregnant 1",
    },
    {
      id: 2,
      image: "./images/pregnant/pregnant2.jpg",
      opticName: "Spazmokan 40 mq N30",
      opticPrice: "4.98 AZN",
      alt: "pregnant 2",
    },
    {
      id: 3,
      image: "./images/pregnant/pregnant3.webp",
      opticName: "Magnefol N50",
      opticPrice: "26.50 AZN",
      alt: "pregnant 3",
    },
    {
      id: 4,
      image: "./images/pregnant/pregnant4.jpg",
      opticName: "Biogest 200 mq N15",
      opticPrice: "29.32 AZN",
      alt: "pregnant 4",
    },
    {
      id: 5,
      image: "./images/pregnant/pregnant5.jpg",
      opticName: "Solukar 10 ml N10",
      opticPrice: "29 AZN",
      alt: "pregnant 5",
    },
  ];

  // -------------discountedProducts------------
  const carousel = document.querySelector(".discounted-products");
  if (carousel) {
    discountedProducts.map((product) => {
      carousel.innerHTML += `
      <li class="carousel__item">
        <div class="carousel__image">
          <img src="${product.image}" alt="carousel ${product.id}" />
        </div>
        <ul class="carousel__text">
          <li>
            <h3>${product.drugName}</h3>
          </li>
          <li>
            <del>${product.drugOldPrice}</del>
            <p>${product.drugNewPrice}</p>
          </li>
        </ul>
      </li>
      `;
    });
  } else {
    console.error("Element with class 'discounted-products' not found");
  }

  // -------------mostViewedProducts------------
  const rightSideProducts = document.querySelector(".most-viewed-products");
  if (rightSideProducts) {
    mostViewedProducts.map((rightSide) => {
      rightSideProducts.innerHTML += `
      <li class="carousel__item">
        <div class="carousel__image">
          <img src="${rightSide.image}" alt="carousel ${rightSide.id}" />
        </div>
        <ul class="carousel__text">
          <li>
            <h3>${rightSide.drugName}</h3>
          </li>
          <li>
            <p>${rightSide.drugPrice}</p>
          </li>
        </ul>
      </li>
      `;
    });
  } else {
    console.error("Element with class 'most-viewed-products' not found");
  }
  // ---------------pregnant------------
  const pregnantContainer = document.querySelector(".pregnant-container");
  const pregnantProduct = document.querySelector(".pregnant-products");
  if (pregnantProduct) {
    pregnantProduct.innerHTML = "";
    pregnantProducts.forEach((optic) => {
      pregnantProduct.innerHTML += `
    <li>
      <div class="drug-image">
        <img src="${optic.image}" alt="carousel ${optic.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${optic.opticName}</h4>
        <p>${optic.opticPrice}</p>
      </div>
    </li>
    `;
    });
  } else {
    console.error("Element with class 'all-drugs' not found");
  }
  // ---------------optics------------
  const opticsContainer = document.querySelector(".optics-container");
  const opticsProduct = document.querySelector(".optics-products");
  if (opticsProduct) {
    opticsProduct.innerHTML = "";
    opticsProducts.forEach((optic) => {
      opticsProduct.innerHTML += `
    <li>
      <div class="drug-image">
        <img src="${optic.image}" alt="carousel ${optic.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${optic.opticName}</h4>
        <p>${optic.opticPrice}</p>
      </div>
    </li>
    `;
    });
  } else {
    console.error("Element with class 'all-drugs' not found");
  }
  // ---------------cosmetic------------
  const cosmeticContainer = document.querySelector(".cosmetic-container");
  const cosmeticProduct = document.querySelector(".cosmetic-products");
  if (cosmeticProduct) {
    cosmeticProduct.innerHTML = "";
    cosmeticProducts.forEach((cosmetic) => {
      cosmeticProduct.innerHTML += `
    <li>
      <div class="drug-image">
        <img src="${cosmetic.image}" alt="carousel ${cosmetic.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${cosmetic.opticName}</h4>
        <p>${cosmetic.opticPrice}</p>
      </div>
    </li>
    `;
    });
  } else {
    console.error("Element with class 'all-drugs' not found");
  }
  // ---------------kids------------
  const kidContainer = document.querySelector(".kids-container");
  const kidProduct = document.querySelector(".kids-products");
  if (kidProduct) {
    kidProduct.innerHTML = "";
    kidsProducts.forEach((cosmetic) => {
      kidProduct.innerHTML += `
    <li>
      <div class="drug-image">
        <img src="${cosmetic.image}" alt="carousel ${cosmetic.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${cosmetic.opticName}</h4>
        <p>${cosmetic.opticPrice}</p>
      </div>
    </li>
    `;
    });
  } else {
    console.error("Element with class 'all-drugs' not found");
  }
  // -------------allDrugs------------
  const allDrugsProducts = document.querySelector(".all-drugs");
  const paginationControls = document.querySelector(".pagination-controls");
  const recordsPerPage = 10;
  const numberOfPages = Math.ceil(allDrugs.length / recordsPerPage);

  function renderCards(page) {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const itemsToShow = allDrugs.slice(startIndex, endIndex);

    if (allDrugsProducts) {
      allDrugsProducts.innerHTML = "";
      itemsToShow.forEach((drugs) => {
        allDrugsProducts.innerHTML += `
      <li>
        <div class="drug-image">
          <img src="${drugs.image}" alt="carousel ${drugs.id}" />
        </div>
        <div class="drugs-text">
          <h4>${drugs.drugName}</h4>
          <p>${drugs.drugPrice}</p>
        </div>
      </li>
      `;
      });
    } else {
      console.error("Element with class 'all-drugs' not found");
    }
  }

  function renderPagination(currentPage) {
    paginationControls.innerHTML = "";

    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#00994a";
      } else {
        pageLink.style.backgroundColor = "#539f78";
      }
      pageLink.addEventListener("click", () => {
        renderCards(i);
        renderPagination(i);
      });
      paginationControls.appendChild(pageLink);
    }
  }

  renderCards(1);
  renderPagination(1);
  //   ---------------------------slider----------------------------------
  const sliderContainer = document.querySelector(".slider-container");
  brands.map((item) => {
    const sliderImages = document.createElement("img");
    sliderImages.classList.add("slider-image");
    sliderImages.style.width = "300px";
    sliderImages.src = item.image;
    sliderImages.alt = item.alt;
    sliderContainer.appendChild(sliderImages);
  });
  function cloneFirstToLast() {
    const firstItem = sliderContainer.firstElementChild.cloneNode(true);
    sliderContainer.appendChild(firstItem);
    sliderContainer.removeChild(sliderContainer.firstElementChild);
  }
  function autoScroll() {
    const containerWidth = sliderContainer.offsetWidth;
    const contentWidth = sliderContainer.scrollWidth;
    let scrollLeft = sliderContainer.scrollLeft;
    scrollLeft += 2;
    sliderContainer.scrollLeft = scrollLeft;
    if (scrollLeft + containerWidth >= contentWidth - 2) {
      cloneFirstToLast();
      sliderContainer.scrollLeft -= 300;
    }
  }
  function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 30);
  }
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  startAutoScroll();
  sliderContainer.addEventListener("mouseenter", stopAutoScroll);
  sliderContainer.addEventListener("mouseleave", startAutoScroll);

  // -----------------navbar-----------

  const buyDrugElements = document.querySelector(".down-side-in-navbar");
  const searchPart = document.querySelector(".down-side-in-header");
  const carouselContainer = document.querySelector(".carousels-container");
  const allDrugsContainer = document.querySelector(".all-drugs-container");
  const allDrugsElement = document.querySelector(".all-drugs-element");
  const buyDrugContainer = document.querySelector(".buyDrug-con");
  const findDocContainer = document.querySelector(".findDoc-con");
  const notesHealtyContainer = document.querySelector(".notesHealty-con");
  const buyDrug = document.querySelector(".buyDrug");
  const findDoc = document.querySelector(".findDoc");
  const notesHealty = document.querySelector(".notesHealty-con");
  const drugs = document.querySelector(".drugs");
  const optica = document.querySelector(".optica");
  const cosmetic = document.querySelector(".cosmetic");
  const kid = document.querySelector(".kid");
  const pregnant = document.querySelector(".pregnant");
  const doctorsContainer = document.querySelector(".doctors-container");
  drugs.style.backgroundColor = "#00876b";

  if ((carouselContainer.style.display = "flex")) {
    doctorsContainer.style.display = "none";
  }

  buyDrug.addEventListener("click", () => {
    location.reload();
    if ((buyDrugElements.style.display = "none")) {
      buyDrugElements.style.display = "flex";
      buyDrugContainer.style.setProperty("--hundred-width", "100%");
      findDocContainer.style.setProperty("--zero-width", "0%");
      notesHealtyContainer.style.setProperty("--zero-width", "0%");
      searchPart.style.display = "block";
      carouselContainer.style.display = "flex";
      allDrugsContainer.style.display = "flex";
      drugs.style.backgroundColor = "#00876b";
      opticsContainer.style.display = "none";
      cosmeticContainer.style.display = "none";
      kidContainer.style.display = "none";
      pregnantContainer.style.display = "none";
      optica.style.backgroundColor = "transparent";
      cosmetic.style.backgroundColor = "transparent";
      kid.style.backgroundColor = "transparent";
      pregnant.style.backgroundColor = "transparent";
    }
  });

  findDoc.addEventListener("click", () => {
    if ((buyDrugElements.style.display = "flex")) {
      buyDrugElements.style.display = "none";
      buyDrugContainer.style.setProperty("--hundred-width", "0%");
      findDocContainer.style.setProperty("--zero-width", "100%");
      notesHealtyContainer.style.setProperty("--zero-width", "0%");
      searchPart.style.display = "none";
      carouselContainer.style.display = "none";
      allDrugsContainer.style.display = "none";
      drugs.style.backgroundColor = "#00876b";
      opticsContainer.style.display = "none";
      cosmeticContainer.style.display = "none";
      kidContainer.style.display = "none";
      pregnantContainer.style.display = "none";
      optica.style.backgroundColor = "transparent";
      cosmetic.style.backgroundColor = "transparent";
      kid.style.backgroundColor = "transparent";
      pregnant.style.backgroundColor = "transparent";
      doctorsContainer.style.display = "flex";
    }
  });

  notesHealty.addEventListener("click", () => {
    if ((buyDrugElements.style.display = "flex")) {
      buyDrugElements.style.display = "none";
      buyDrugContainer.style.setProperty("--hundred-width", "0%");
      findDocContainer.style.setProperty("--zero-width", "0%");
      notesHealtyContainer.style.setProperty("--zero-width", "100%");
      searchPart.style.display = "none";
      carouselContainer.style.display = "none";
      allDrugsContainer.style.display = "none";
      drugs.style.backgroundColor = "#00876b";
      opticsContainer.style.display = "none";
      cosmeticContainer.style.display = "none";
      kidContainer.style.display = "none";
      pregnantContainer.style.display = "none";
      optica.style.backgroundColor = "transparent";
      cosmetic.style.backgroundColor = "transparent";
      kid.style.backgroundColor = "transparent";
      pregnant.style.backgroundColor = "transparent";
      doctorsContainer.style.display = "none";
    }
  });

  // --------------elements------------

  drugs.addEventListener("click", () => {
    drugs.style.backgroundColor = "#00876b";
    optica.style.backgroundColor = "transparent";
    cosmetic.style.backgroundColor = "transparent";
    kid.style.backgroundColor = "transparent";
    pregnant.style.backgroundColor = "transparent";
    carouselContainer.style.display = "flex";
    allDrugsElement.style.display = "flex";
    paginationControls.style.display = "flex";
    opticsContainer.style.display = "none";
    cosmeticContainer.style.display = "none";
    kidContainer.style.display = "none";
    pregnantContainer.style.display = "none";
  });

  optica.addEventListener("click", () => {
    optica.style.backgroundColor = "#00876b";
    drugs.style.backgroundColor = "transparent";
    cosmetic.style.backgroundColor = "transparent";
    kid.style.backgroundColor = "transparent";
    pregnant.style.backgroundColor = "transparent";
    carouselContainer.style.display = "none";
    allDrugsElement.style.display = "none";
    paginationControls.style.display = "none";
    opticsContainer.style.display = "flex";
    cosmeticContainer.style.display = "none";
    kidContainer.style.display = "none";
    pregnantContainer.style.display = "none";
  });

  cosmetic.addEventListener("click", () => {
    cosmetic.style.backgroundColor = "#00876b";
    drugs.style.backgroundColor = "transparent";
    optica.style.backgroundColor = "transparent";
    kid.style.backgroundColor = "transparent";
    pregnant.style.backgroundColor = "transparent";
    carouselContainer.style.display = "none";
    allDrugsElement.style.display = "none";
    paginationControls.style.display = "none";
    opticsContainer.style.display = "none";
    cosmeticContainer.style.display = "flex";
    kidContainer.style.display = "none";
    pregnantContainer.style.display = "none";
  });

  kid.addEventListener("click", () => {
    kid.style.backgroundColor = "#00876b";
    drugs.style.backgroundColor = "transparent";
    optica.style.backgroundColor = "transparent";
    cosmetic.style.backgroundColor = "transparent";
    pregnant.style.backgroundColor = "transparent";
    carouselContainer.style.display = "none";
    allDrugsElement.style.display = "none";
    paginationControls.style.display = "none";
    opticsContainer.style.display = "none";
    cosmeticContainer.style.display = "none";
    kidContainer.style.display = "flex";
    pregnantContainer.style.display = "none";
  });

  pregnant.addEventListener("click", () => {
    pregnant.style.backgroundColor = "#00876b";
    drugs.style.backgroundColor = "transparent";
    optica.style.backgroundColor = "transparent";
    cosmetic.style.backgroundColor = "transparent";
    kid.style.backgroundColor = "transparent";
    carouselContainer.style.display = "none";
    allDrugsElement.style.display = "none";
    paginationControls.style.display = "none";
    opticsContainer.style.display = "none";
    cosmeticContainer.style.display = "none";
    kidContainer.style.display = "none";
    pregnantContainer.style.display = "flex";
  });

  // ------------------doctors--------------

  const doctorsKind = [
    "Allerqoloq",
    "Anestezioloq",
    "Dermatoveneroloq",
    "Fleboloq",
    "Hepatoloq",
    "Kardioloq",
    "Mikrobioloq",
    "Neyrocərrah",
    "Onkoginekoloq",
    "Patomorfoloq",
    "Proktoloq",
    "Pulmonoloq",
    "Reanimatoloq",
    "Stomatoloq",
    "Uroloq-androloq",
    "Terapevt",
  ];

  const doctors = [
    {
      id: 1,
      image: "./images/doctors/doctor1.jpg",
      kind: "Allerqoloq",
      doctorName: "Kamal Hacıyev",
      alt: "doctor 1",
    },
    {
      id: 2,
      image: "./images/doctors/doctor2.jpeg",
      kind: "Anestezioloq",
      doctorName: "Amil Əliyev",
      alt: "doctor 2",
    },
    {
      id: 3,
      image: "./images/doctors/doctor3.jpg",
      kind: "Dermatoveneroloq",
      doctorName: "Kamil Qurbanov",
      alt: "doctor 3",
    },
    {
      id: 4,
      image: "./images/doctors/doctor4.jpeg",
      kind: "Fleboloq",
      doctorName: "İsmayıl Ələsgəov",
      alt: "doctor 4",
    },
    {
      id: 5,
      image: "./images/doctors/doctor5.jpg",
      kind: "Hepatoloq",
      doctorName: "Könül Mahmudova",
      alt: "doctor 5",
    },
    {
      id: 6,
      image: "./images/doctors/doctor6.jpg",
      kind: "Kardioloq",
      doctorName: "Üzeyir Rəhimov",
      alt: "doctor 6",
    },
    {
      id: 7,
      image: "./images/doctors/doctor7.jpg",
      kind: "Mikrobioloq",
      doctorName: "Göyçək Əliyeva",
      alt: "doctor 7",
    },
    {
      id: 8,
      image: "./images/doctors/doctor8.webp",
      kind: "Neyrocərrah",
      doctorName: "ƏliOsman Qədirbəyli",
      alt: "doctor 8",
    },
    {
      id: 9,
      image: "./images/doctors/doctor9.jpg",
      kind: "Onkoginekoloq",
      doctorName: "Əkbər İbrahimov",
      alt: "doctor 9",
    },
    {
      id: 10,
      image: "./images/doctors/doctor10.jpg",
      kind: "Patomorfoloq",
      doctorName: "Müqavil Şıxəliyev",
      alt: "doctor 10",
    },
    {
      id: 11,
      image: "./images/doctors/doctor11.png",
      kind: "Proktoloq",
      doctorName: "Anar Əliyev",
      alt: "doctor 11",
    },
    {
      id: 12,
      image: "./images/doctors/doctor12.jpg",
      kind: "Pulmonoloq",
      doctorName: "Mahir Əliyev",
      alt: "doctor 12",
    },
    {
      id: 13,
      image: "./images/doctors/doctor13.jpg",
      kind: "Reanimatoloq",
      doctorName: "Sevda Quliyeva",
      alt: "doctor 13",
    },
    {
      id: 14,
      image: "./images/doctors/doctor14.jpeg",
      kind: "Stomatoloq",
      doctorName: "Rövşən İbişov",
      alt: "doctor 14",
    },
    {
      id: 15,
      image: "./images/doctors/doctor15.jpg",
      kind: "Uroloq-androloq",
      doctorName: "Seymur Mehtiyev",
      alt: "doctor 15",
    },
    {
      id: 16,
      image: "./images/doctors/doctor16.png",
      kind: "Terapevt",
      doctorName: "Həbib Sahratov",
      alt: "doctor 16",
    },
  ];

  const doctorKind = document.querySelector(".left-side-doctors");
  const allDoctorsHeading = document.querySelector(".all-doctors");

  allDoctorsHeading.addEventListener("click", () => {
    displayDoctors(doctors);
  });

  doctorsKind.map((item) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = item;
    p.className = "doctor-kind";
    li.appendChild(p);
    doctorKind.appendChild(li);

    p.addEventListener("click", () => {
      filterDoctorsByKind(item);
    });
  });
  // ---------------doctors------------
  function displayDoctors(filteredDoctors) {
    const allDoctors = document.querySelector(".right-side-doctors");
    if (allDoctors) {
      allDoctors.innerHTML = "";
      filteredDoctors.forEach((optic) => {
        allDoctors.innerHTML += `
          <li>
            <div class="drug-image">
              <img src="${optic.image}" alt="${optic.alt}" />
            </div>
            <div class="drugs-text">
              <h4>${optic.kind}</h4>
              <p>${optic.doctorName}</p>
            </div>
          </li>
        `;
      });
    } else {
      console.error("Element with class 'right-side-doctors' not found");
    }
  }

  function filterDoctorsByKind(kind) {
    const filteredDoctors = doctors.filter((doctor) => doctor.kind === kind);
    displayDoctors(filteredDoctors);
  }

  displayDoctors(doctors);
});
