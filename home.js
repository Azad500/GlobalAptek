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
      title1: "Tərkibi:",
      title2: "İstehsalçı Ölkə:",
      title3: "Tasiredicinin miqdari:",
      description1:
        "Pankreatin Lipaza Amilaza Proteaza Pepsin Bromelain Papain §üyüd ekstrakti",
      description2: "BRITANIYA",
      description3:
        "Pankreatin 150 mq, Lipaza 6750 BV,Amilaza 6300 BV,Proteaza 450 BV,Pepsin 10 mq,Bromelain 100 mg,Papain 100 mq,Süyüd ekstrakti 50 mq",
    },
    {
      id: 2,
      image: "./images/mostViewedProducts/carousel9.avif",
      drugName: "Krem Sebamed uşaqlar üçün  50 ml",
      drugPrice: "9.30 AZN",
      title1: "Vahidi:",
      title2: "İstehsalçı Ölkə:",
      title3: "Aid Oldugu kateqoriyalar:",
      description1: "TUB",
      description2: "GERMANY",
      description3:
        "Usaq darisina qulluq vasitalari,Badane quiluq vasitaleri,Namlendirici vasitaler",
    },
    {
      id: 3,
      image: "./images/mostViewedProducts/carousel8.webp",
      drugName: "Nervio B12 3 ml N6",
      drugPrice: "52.38 AZN",
      title1: "Tərkibi:",
      title2: "Vahidi:",
      title3: "Tasiredicinin miqdari:",
      description1: "Betametazon Diklifenak natrium Hidroksokobalamin",
      description2: "AMP",
      description3:
        "Betametazon 2 mq, Diklifenak natrium 75 mq, Hidroksokobalamin 10 mq",
    },
    {
      id: 4,
      image: "./images/mostViewedProducts/carousel7.jpeg",
      drugName: "Lekart 1 q 5 ml N5",
      drugPrice: "10.01 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Betametazon Diklifenak natrium Hidroksokobalamin",
      description2: "Agrikesici, iltihab aleyhine",
      description3: "ARGENTINA",
    },
    {
      id: 5,
      image: "./images/mostViewedProducts/carousel6.jpg",
      drugName: "Salbutamol 200 doza",
      drugPrice: "5.40 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Salbutamol",
      description2: "Bronxodilatasiyaedici",
      description3: "iSPANIYA",
    },
    {
      id: 6,
      image: "./images/mostViewedProducts/carousel1.jpg",
      drugName: "Balıq yağı N90",
      drugPrice: "37.80 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Baliq yagi",
      description2: "Antioksidant, metabolik",
      description3: "BOSNIYA",
    },
    {
      id: 7,
      image: "./images/mostViewedProducts/carousel2.png",
      drugName: "Kesol 50 mkq 200 doz",
      drugPrice: "14.98 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Budesonid",
      description2: "Qlükokortikosteroid",
      description3: "italiya",
    },
    {
      id: 8,
      image: "./images/mostViewedProducts/carousel3.webp",
      drugName: "Agemo N50",
      drugPrice: "29.60 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1:
        "Baliq yagi, EPT, DHT, Omega 3, C vitamini, Niasin, E vitamini,",
      description2: "Metabolik, antioksidant",
      description3: "Isveçre",
    },
    {
      id: 9,
      image: "./images/mostViewedProducts/carousel4.jpg",
      drugName: "Neyrovit 2 ml N10",
      drugPrice: "13.94 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "B1 vitamini B6 vitamini B12 vitamini",
      description2: "Polivitamin",
      description3: "Belarus",
    },
    {
      id: 10,
      image: "./images/mostViewedProducts/carousel5.jpg",
      drugName: "Vamelan-wm N30",
      drugPrice: "7.91 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1:
        "Pisikotunun quru ekstrakti Nanenin quru ekstrakti Bedrancin quru",
      description2: "Sedativ, yuxugetirici, spazmolitik",
      description3: "POLSA",
    },
    {
      id: 11,
      image: "./images/allDrugs/drug2.jpg",
      drugName: "Pulsoksimetr 'Beurer' PO 30",
      drugPrice: "94.90 AZN",
      title1: "Tərkibi:",
      title2: "istehsalci Firma:",
      title3: "istehsalci Ölke:",
      description1: "saturasiya",
      description2: "Beurer",
      description3: "GER",
    },
    {
      id: 12,
      image: "./images/allDrugs/drug3.webp",
      drugName: "Qalınlaşdırıcı şampun 400 ml",
      drugPrice: "42.32 AZN",
      title1: "Tərkibi:",
      title2: "Vahidi:",
      title3: "istehsalci Ölke:",
      description1: "Ramnoza Filoksan Termal su Vichy Spa",
      description2: "ADAT",
      description3: "iSPANIYA",
    },
    {
      id: 13,
      image: "./images/allDrugs/drug4.jpg",
      drugName: "Feminiti N6",
      drugPrice: "17.33 AZN",
      title1: "Tərkibi:",
      title2: "Vahidi:",
      title3: "istehsalci Ölke:",
      description1:
        "Metronidazol, Mikonazol nitrat, Neomisin sulfat, Polimiksin B sulfat,",
      description2: "SVEC",
      description3: "Argentina",
    },
    {
      id: 14,
      image: "./images/allDrugs/drug5.avif",
      drugName: "Livolen Plus N30",
      drugPrice: "23.20 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1:
        "Onginar yarpagi ekstrakti Alfa lipoy tursusu Siitaki ekstrakti Reysi",
      description2: "Hepatoprotektor",
      description3: "TÜRKiYƏ",
    },
    {
      id: 15,
      image: "./images/allDrugs/drug6.jpg",
      drugName: "Nistatin 0.5 mq N10",
      drugPrice: "2.59 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Nistatin,",
      description2: "Gobalakeleyhine vasite",
      description3: "BELÇIKA",
    },
    {
      id: 16,
      image: "./images/allDrugs/drug7.jpg",
      drugName: "Gastrosit N7",
      drugPrice: "23.51 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Klaritromisin, Lansoprazol, Amoksisillin,",
      description2: "Xora aleyhine",
      description3: "TÜRKiYƏ",
    },
    {
      id: 17,
      image: "./images/allDrugs/drug8.avif",
      drugName: "Faktazidim 500 mq N1",
      drugPrice: "5.90 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Seftazidim",
      description2: "Antibakterial",
      description3: "İTALİYA",
    },
    {
      id: 18,
      image: "./images/allDrugs/drug9.jpg",
      drugName: "Eritromisin 100 mq N20",
      drugPrice: "2.10 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Eritromisin,",
      description2: "Antibiotik",
      description3: "UKRAYNA",
    },
    {
      id: 19,
      image: "./images/allDrugs/drug10.webp",
      drugName: "Ardeysedon N20",
      drugPrice: "14.35 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Pisikotu kökü Mayaotu qozalari",
      description2: "Sedativ",
      description3: "MiSiR",
    },
    {
      id: 20,
      image: "./images/allDrugs/drug11.jpg",
      drugName: "Anestezol N10",
      drugPrice: "1.70 AZN",
      title1: "Tərkibi:",
      title2: "Vahidi:",
      title3: "istehsalci Ölke:",
      description1: "Benzokain, Vismut subqallat Sink oksid, Mentol,",
      description2: "SVEC",
      description3: "RUSIYA",
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
      drugName: "Optik çərçivə 'Mustang' MU7087 04",
      opticPrice: "110.20 AZN",
      alt: "optic 1",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 2,
      image: "./images/optics/optic2.jpg",
      drugName: "Optik çərçivə 'Mustang' MU7063 03",
      opticPrice: "91.80 AZN",
      alt: "optic 2",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 3,
      image: "./images/optics/optic3.jpg",
      drugName: "Optik çərçivə 'Mustang' MU7093 01",
      opticPrice: "110.20 AZN",
      alt: "optic 3",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 4,
      image: "./images/optics/optic4.webp",
      drugName: "Optik çərçivə 'Mustang' MU7117 02",
      opticPrice: "96.40 AZN",
      alt: "optic 4",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 5,
      image: "./images/optics/optic5.jpg",
      drugName: "Optik çərçivə 'Mustang' MU7114 04",
      opticPrice: "105.60 AZN",
      alt: "optic 5",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 6,
      image: "./images/optics/optic6.png",
      drugName: "Optik çərçivə 'Mustang' MU7125 02",
      opticPrice: "101 AZN",
      alt: "optic 6",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 7,
      image: "./images/optics/optic7.webp",
      drugName: "Optik çərçivə 'Mustang' MU7153",
      opticPrice: "119.35 AZN",
      alt: "optic 7",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 8,
      image: "./images/optics/optic8.webp",
      drugName: "Optik çərçivə 'Mustang' MU7083",
      opticPrice: "82.62 AZN",
      alt: "optic 8",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 9,
      image: "./images/optics/optic9.jpg",
      drugName: "Optik çərçivə 'Mustang' MU7130 02",
      opticPrice: "85 AZN",
      alt: "optic 9",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
    {
      id: 10,
      image: "./images/optics/optic10.jpg",
      drugName: "Optik çərçivə 'Mustang' MU7143 02",
      drugPrice: "100 AZN",
      alt: "optic 10",
      title1: "Vahidi:",
      title2: "istehsalci Ölke:",
      title3: "",
      description1: "ADAT",
      description2: "TÜRKiYƏ",
      description3: "",
    },
  ];
  // ---------------cosmetic------------
  const cosmeticProducts = [
    {
      id: 1,
      image: "./images/cosmetics/cosmetic1.webp",
      drugName: "LA ROCHE POSAY TOLERIANE RICHE kremi",
      drugPrice: "33.52 AZN",
      alt: "cosmetic 1",
      title1: "Tərkibi:",
      title2: "istehsalci Ölke:",
      title3: "Vahidi:",
      description1: "Gliserin Niasinamid Seramid Termal su La Roche Posay",
      description2: "FRANSA",
      description3: "ADAT",
    },
    {
      id: 2,
      image: "./images/cosmetics/cosmetic2.jpg",
      drugName: "LA ROCHE-POSAY NUTRITIC INTENSE kremi",
      drugPrice: "12.72 AZN",
      alt: "cosmetic 2",
      title1: "Tərkibi:",
      title2: "istehsalci Ölke:",
      title3: "Vahidi:",
      description1: "Gliserin Niasinamid Seramid Termal su La Roche Posay",
      description2: "FRANSA",
      description3: "ADAT",
    },
    {
      id: 3,
      image: "./images/cosmetics/cosmetic3.jpg",
      drugName: "LA ROCHE-POSAY TOLERIANE kremi",
      drugPrice: "42.32 AZN",
      alt: "cosmetic 3",
      title1: "Tərkibi:",
      title2: "istehsalci Ölke:",
      title3: "Vahidi:",
      description1: "Gliserin Niasinamid Seramid Termal su La Roche Posay",
      description2: "FRANSA",
      description3: "ADAT",
    },
    {
      id: 4,
      image: "./images/cosmetics/cosmetic4.webp",
      drugName: "LA ROCHE-POSAY LIPIKAR GEL LAVANT",
      drugPrice: "23.92 AZN",
      alt: "cosmetic 4",
      title1: "Tərkibi:",
      title2: "istehsalci Ölke:",
      title3: "Vahidi:",
      description1: "Gliserin Niasinamid Seramid Termal su La Roche Posay",
      description2: "FRANSA",
      description3: "ADAT",
    },
    {
      id: 5,
      image: "./images/cosmetics/cosmetic5.jpg",
      drugName: "LA ROCHE-POSAY LIPIKAR OIL AP",
      drugPrice: "39.12 AZN",
      alt: "cosmetic 5",
      title1: "Tərkibi:",
      title2: "istehsalci Ölke:",
      title3: "Vahidi:",
      description1: "Gliserin Niasinamid Seramid Termal su La Roche Posay",
      description2: "FRANSA",
      description3: "ADAT",
    },
  ];
  // ----------------kids--------------
  const kidsProducts = [
    {
      id: 1,
      image: "./images/kid/kid1.jpg",
      drugName: "Bepanten",
      drugPrice: "14.80 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Deksapantenol",
      description2: "Regenerasiyaedici",
      description3: "GER",
      alt: "kid 1",
    },
    {
      id: 2,
      image: "./images/kid/kid2.webp",
      drugName: "Dolphin uşaq bezi",
      drugPrice: "7.50 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Deksapantenol",
      description2: "Regenerasiyaedici",
      description3: "GER",
      alt: "kid 2",
    },
    {
      id: 3,
      image: "./images/kid/kid3.webp",
      drugName: "Multivitaminli bərpaedici balzam",
      drugPrice: "21.52 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Deksapantenol",
      description2: "Regenerasiyaedici",
      description3: "GER",
      alt: "kid 3",
    },
    {
      id: 4,
      image: "./images/kid/kid4.webp",
      drugName: "Körpələr üçün yumşaldıcı krem",
      drugPrice: "31.92 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Deksapantenol",
      description2: "Regenerasiyaedici",
      description3: "GER",
      alt: "kid 4",
    },
    {
      id: 5,
      image: "./images/kid/kid5.jpg",
      drugName: "Günəşdən qoruyucu krem",
      drugPrice: "64.72 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Ölke:",
      description1: "Deksapantenol",
      description2: "Regenerasiyaedici",
      description3: "GER",
      alt: "kid 5",
    },
  ];
  // ----------------pregnant--------------
  const pregnantProducts = [
    {
      id: 1,
      image: "./images/pregnant/pregnant1.jpg",
      drugName: "Divasteron N21",
      drugPrice: "4.20 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Olke:",
      description1: "Siproteron asetat Etinilestradiol",
      description2: "Gestagen",
      description3: "ABS",
      alt: "pregnant 1",
    },
    {
      id: 2,
      image: "./images/pregnant/pregnant2.jpg",
      drugName: "Spazmokan 40 mq N30",
      drugPrice: "4.98 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Olke:",
      description1: "Drotaverin",
      description2: "Spazmolitik",
      description3: "MACARISTAN",
      alt: "pregnant 2",
    },
    {
      id: 3,
      image: "./images/pregnant/pregnant3.webp",
      drugName: "Magnefol N50",
      drugPrice: "26.50 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Olke:",
      description1: "Maqnezium laktat",
      description2: "Maqnezium çatışmamazlığının bərpaedicisi",
      description3: "Ruminiya",
      alt: "pregnant 3",
    },
    {
      id: 4,
      image: "./images/pregnant/pregnant4.jpg",
      drugName: "Biogest 200 mq N15",
      drugPrice: "29.32 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Olke:",
      description1: "Progesteron",
      description2: "Progesteron",
      description3: "MİSİR",
      alt: "pregnant 4",
    },
    {
      id: 5,
      image: "./images/pregnant/pregnant5.jpg",
      drugName: "Solukar 10 ml N10",
      drugPrice: "29 AZN",
      title1: "Tərkibi:",
      title2: "Farmakoloji Tasiri:",
      title3: "istehsalci Olke:",
      description1: "L karnitin asiti",
      description2: "Metabolik vasitə",
      description3: "SAN-MARİNO",
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
    pregnantProducts.forEach((pregnant) => {
      const pregnantİtem = document.createElement("li");
      pregnantİtem.innerHTML = `
      <div class="drug-image">
        <img src="${pregnant.image}" alt="carousel ${pregnant.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${pregnant.drugName}</h4>
        <p>${pregnant.drugPrice}</p>
      </div>
    `;
      pregnantİtem.addEventListener("click", () => showModule(pregnant));
      pregnantProduct.appendChild(pregnantİtem);
    });
  } else {
    console.error("Element with class 'all-drugs' not found");
  }
  // ---------------optics------------
  const opticsContainer = document.querySelector(".optics-container");
  const opticsProduct = document.querySelector(".optics-products");
  const searchElement = document.querySelector(".search-element");

  function renderOptics(productsToShow) {
    if (opticsProduct) {
      opticsProduct.innerHTML = "";
      productsToShow.forEach((optic) => {
        const opticsİtem = document.createElement("li");
        opticsİtem.innerHTML = `
      <div class="drug-image">
        <img src="${optic.image}" alt="carousel ${optic.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${optic.drugName}</h4>
        <p>${optic.drugPrice}</p>
      </div>
    `;
        opticsİtem.addEventListener("click", () => showModule(optic));
        opticsProduct.appendChild(opticsİtem);
      });
    } else {
      console.error("Element with class 'optics-products' not found");
    }
  }
  // ---------------cosmetic------------
  const cosmeticContainer = document.querySelector(".cosmetic-container");
  const cosmeticProduct = document.querySelector(".cosmetic-products");
  if (cosmeticProduct) {
    cosmeticProduct.innerHTML = "";
    cosmeticProducts.forEach((cosmetic) => {
      const cosmeticsİtem = document.createElement("li");
      cosmeticsİtem.innerHTML = `
      <div class="drug-image">
        <img src="${cosmetic.image}" alt="carousel ${cosmetic.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${cosmetic.drugName}</h4>
        <p>${cosmetic.drugPrice}</p>
      </div>
    `;
      cosmeticsİtem.addEventListener("click", () => showModule(cosmetic));
      cosmeticProduct.appendChild(cosmeticsİtem);
    });
  } else {
    console.error("Element with class 'all-drugs' not found");
  }
  // ---------------kids------------
  const kidContainer = document.querySelector(".kids-container");
  const kidProduct = document.querySelector(".kids-products");

  if (kidProduct) {
    kidProduct.innerHTML = "";
    kidsProducts.forEach((kids) => {
      const kidsİtem = document.createElement("li");
      kidsİtem.innerHTML = `
      <div class="drug-image">
        <img src="${kids.image}" alt="carousel ${kids.alt}" />
      </div>
      <div class="drugs-text">
        <h4>${kids.drugName}</h4>
        <p>${kids.drugPrice}</p>
      </div>
    `;
      kidsİtem.addEventListener("click", () => showModule(kids));
      kidProduct.appendChild(kidsİtem);
    });
  } else {
    console.error("Element with class 'kids-products' not found");
  }

  // -------------allDrugs------------
  const allDrugsProducts = document.querySelector(".all-drugs");
  const paginationControls = document.querySelector(".pagination-controls");
  const recordsPerPage = 10;
  const numberOfPages = Math.ceil(allDrugs.length / recordsPerPage);

  function renderCards(page, searchResult = null) {
    let itemsToShow;

    if (searchResult && searchResult.length === 1) {
      // If exactly one search result is found, show only that item
      itemsToShow = searchResult;
    } else {
      const startIndex = (page - 1) * recordsPerPage;
      const endIndex = startIndex + recordsPerPage;
      itemsToShow = searchResult || allDrugs.slice(startIndex, endIndex);
    }

    if (allDrugsProducts) {
      allDrugsProducts.innerHTML = "";
      itemsToShow.forEach((drugs) => {
        const drugItem = document.createElement("li");
        drugItem.innerHTML = `
        <div class="drug-image">
          <img src="${drugs.image}" alt="carousel ${drugs.id}" />
        </div>
        <div class="drugs-text">
          <h4>${drugs.drugName}</h4>
          <p>${drugs.drugPrice}</p>
        </div>
      `;
        drugItem.addEventListener("click", () => showModule(drugs));
        allDrugsProducts.appendChild(drugItem);
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
      pageLink.style.backgroundColor =
        i === currentPage ? "#00994a" : "#539f78";
      pageLink.addEventListener("click", () => {
        renderCards(i);
        renderPagination(i);
      });
      paginationControls.appendChild(pageLink);
    }
  }

  // Example function to handle the search and filter the drugs
  function handleSearch() {
    const searchQuery = searchElement.value.toLowerCase();

    if ((allDrugsElement.style.display = "flex")) {
      const searchResultAllDrug = allDrugs.filter((drug) =>
        drug.drugName.toLowerCase().includes(searchQuery)
      );
      if (searchResultAllDrug.length === 1) {
        // If exactly one result is found, display only that result
        renderCards(1, searchResultAllDrug);
        paginationControls.innerHTML = ""; // Clear pagination controls if only one result
        carouselContainer.style.display = "none";
      } else {
        // Otherwise, display paginated results
        renderCards(1, searchResultAllDrug);
        renderPagination(1);
        carouselContainer.style.display = "flex";
      }
    }
    if (
      opticsContainer.style.display === "flex" &&
      allDrugsElement.style.display === "none"
    ) {
      const searchResultOptics = opticsProducts.filter((optic) =>
        optic.opticName.toLowerCase().includes(searchQuery)
      );
      if (searchResultOptics.length === 1) {
        renderOptics(searchResultOptics);
      } else {
        renderOptics(searchResultOptics);
      }
    }
  }

  searchElement.addEventListener("input", handleSearch);

  renderOptics(opticsProducts);
  renderCards(1);
  renderPagination(1);

  // ------module-drug--------
  function showModule(drug) {
    const module = document.querySelector(".overlay-module");
    if (module) {
      window.scrollTo({
        top: 0,
      });
      document.body.style.overflowY = "hidden";
      module.innerHTML = `
        <div class="overlay-element">
          <div class="module-left-side">
            <div>
              <img src="${drug.image}" alt="${drug.drugName}" />
            </div>
            <h3>${drug.drugName}</h3>
            <p class="price">${drug.drugPrice}</p>
            <button class="close-module">Bağla</button>
          </div>
          <ul class="module-right-side">
            <li>
              <h3>${drug.title1}</h3>
              <p>${drug.description1}</p>
            </li>
            <li>
              <h3>${drug.title2}</h3>
              <p>${drug.description2}</p>
            </li>
            <li>
              <h3>${drug.title3}</h3>
              <p>${drug.description3}</p>
            </li>
          </ul>
        </div>  
      `;
      module.style.display = "flex";

      const closeButton = module.querySelector(".close-module");
      closeButton.addEventListener("click", () => {
        module.style.display = "none";
        document.body.style.overflowY = "auto";
      });
    } else {
      console.error("Element with class 'overlay-module' not found");
    }
  }
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
  const healtyNotesContainer = document.querySelector(
    ".healty-notes-container"
  );
  drugs.style.backgroundColor = "#00876b";

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
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      healtyNotesContainer.style.display = "flex";
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",
      alt: "doctor 1",
    },
    {
      id: 2,
      image: "./images/doctors/doctor2.jpeg",
      kind: "Anestezioloq",
      doctorName: "Amil Əliyev",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",
      alt: "doctor 2",
    },
    {
      id: 3,
      image: "./images/doctors/doctor3.jpg",
      kind: "Dermatoveneroloq",
      doctorName: "Kamil Qurbanov",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",
      alt: "doctor 3",
    },
    {
      id: 4,
      image: "./images/doctors/doctor4.jpeg",
      kind: "Fleboloq",
      doctorName: "İsmayıl Ələsgəov",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",
      alt: "doctor 4",
    },
    {
      id: 5,
      image: "./images/doctors/doctor5.jpg",
      kind: "Hepatoloq",
      doctorName: "Könül Mahmudova",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 5",
    },
    {
      id: 6,
      image: "./images/doctors/doctor6.jpg",
      kind: "Kardioloq",
      doctorName: "Üzeyir Rəhimov",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 6",
    },
    {
      id: 7,
      image: "./images/doctors/doctor7.jpg",
      kind: "Mikrobioloq",
      doctorName: "Göyçək Əliyeva",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 7",
    },
    {
      id: 8,
      image: "./images/doctors/doctor8.webp",
      kind: "Neyrocərrah",
      doctorName: "ƏliOsman Qədirbəyli",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 8",
    },
    {
      id: 9,
      image: "./images/doctors/doctor9.jpg",
      kind: "Onkoginekoloq",
      doctorName: "Əkbər İbrahimov",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 9",
    },
    {
      id: 10,
      image: "./images/doctors/doctor10.jpg",
      kind: "Patomorfoloq",
      doctorName: "Müqavil Şıxəliyev",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 10",
    },
    {
      id: 11,
      image: "./images/doctors/doctor11.png",
      kind: "Proktoloq",
      doctorName: "Anar Əliyev",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 11",
    },
    {
      id: 12,
      image: "./images/doctors/doctor12.jpg",
      kind: "Pulmonoloq",
      doctorName: "Mahir Əliyev",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 12",
    },
    {
      id: 13,
      image: "./images/doctors/doctor13.jpg",
      kind: "Reanimatoloq",
      doctorName: "Sevda Quliyeva",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 13",
    },
    {
      id: 14,
      image: "./images/doctors/doctor14.jpeg",
      kind: "Stomatoloq",
      doctorName: "Rövşən İbişov",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 14",
    },
    {
      id: 15,
      image: "./images/doctors/doctor15.jpg",
      kind: "Uroloq-androloq",
      doctorName: "Seymur Mehtiyev",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

      alt: "doctor 15",
    },
    {
      id: 16,
      image: "./images/doctors/doctor16.png",
      kind: "Terapevt",
      doctorName: "Həbib Sahratov",
      title1: "Həkim haqqında",
      title2: "Təhsil",
      title3: "İcra olunan prosedurlar",
      description1:
        "Türkiyə Hepotobilyar Cərrahi Dərnəyinin həqiqi üzvüdür.Nyu-York Endokrinoloji Dərnəyinin həqiqi üzvüdür. ",
      description2:
        "1995-ci ildə Azərbaycan Dövlət Tibb Universitetini bitirib. 1996-2001-ci illərdə Ankara Yüksək İxtisas Xəstəxanasında Genel -cerrah ixtisası üzrə uzmanlıq bitirib. 2001-2002-ci illərdə Ankara Nümunə Elmi Araşdırma Xəstəxanasında Endokrin Cərrahiyyə üzrə yüksək ixtisas keçib. 2010-cu ildə 'Qaraciyər serrozu xəstəliyi' üzrə elmi müdafiəsini tamamlayaraq Ph.D dərəcəsini alıb. Hal-hazırda doktorluq dissertasiyası üzrənində çalışır.",
      description3:
        "-Endokrin cərrahiyyə;-tiroid;-paratiroid;-böyrəküstü vəzi;-pankreas cərrahiyyəsi;-cərrah hepatoloq;-qastroen;-kolopraktoloq;-ümumi və onkoloji cərrahiyyə.",

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
      const allDoctorKinds = document.querySelectorAll(".doctor-kind");
      allDoctorKinds.forEach((kind) => {
        kind.style.textDecoration = "none";
      });
      p.style.textDecoration = "underline";

      filterDoctorsByKind(item);
    });
  });
  // ---------------doctors------------
  function displayDoctors(filteredDoctors) {
    const allDoctors = document.querySelector(".right-side-doctors");
    if (allDoctors) {
      allDoctors.innerHTML = "";
      filteredDoctors.forEach((doctor) => {
        // Use 'doctor' instead of 'optic'
        const doctorItem = document.createElement("li");
        doctorItem.innerHTML = `
            <div class="drug-image">
              <img src="${doctor.image}" alt="${doctor.alt}" />
            </div>
            <div class="drugs-text">
              <h4>${doctor.kind}</h4>
              <p>${doctor.doctorName}</p>
            </div>
        `;
        doctorItem.addEventListener("click", () => showModuleDoctor(doctor)); // Pass 'doctor' to the function
        allDoctors.appendChild(doctorItem);
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

  function showModuleDoctor(doctor) {
    // Use 'doctor' instead of 'drug'
    const module = document.querySelector(".overlay-module");
    if (module) {
      window.scrollTo({
        top: 0,
      });
      document.body.style.overflowY = "hidden";
      module.innerHTML = `
        <div class="overlay-element">
          <div class="module-left-side">
            <div>
              <img src="${doctor.image}" alt="${doctor.doctorName}" />
            </div>
            <h3>${doctor.doctorName}</h3>
            <button class="close-module">Bağla</button>
          </div>
          <ul class="module-right-side">
            <li>
              <h3>${doctor.title1}</h3>
              <p>${doctor.description1}</p>
            </li>
            <li>
              <h3>${doctor.title2}</h3>
              <p>${doctor.description2}</p>
            </li>
            <li>
              <h3>${doctor.title3}</h3>
              <p>${doctor.description3}</p>
            </li>
          </ul>
        </div>  
      `;
      module.style.display = "flex";

      const closeButton = module.querySelector(".close-module");
      closeButton.addEventListener("click", () => {
        module.style.display = "none";
        document.body.style.overflowY = "auto";
      });
    } else {
      console.error("Element with class 'overlay-module' not found");
    }
  }

  // -----------healty-notes----------

  const notes = [
    {
      id: 1,
      image: "./images/healtyNotes/note1.jpg",
      alt: "note 1",
      kind: "Ürək çatışmazlığı",
      title1: "Ürək çatışmazlığına səbəb nədir?",
      title2: "Kimdə ürək çatışmazlığı daha çox inkişaf edir?",
      title3: "Ürək çatışmazlığının əlamətləri nələrdir?",
      title4: "Ürək çatışmazlığının müalicəsi hansılardır?",
      description1:
        "Ürək çatışmazlığı bir xəstəlik və ya zədə ürək əzələsinə zərər verdikdən sonra qəfil başlaya bilər. Lakin əksər hallarda ürək çatışmazlığı uzunmüddətli tibbi şəraitdən yavaş-yavaş inkişaf edir.",
      description2:
        "Ürək çatışmazlığı hər yaşda baş verə bilər. Həm kişilərdə, həm də qadınlarda olur, lakin kişilər tez-tez qadınlardan daha gənc yaşda inkişaf etdirirlər. Ürək çatışmazlığının inkişaf ehtimalı aşağıdakı hallarda artır: 65 və ya daha çox yaşınız var. Yaşlanma ürək əzələlərini zəiflədə və sərtləşdirə bilər, Ailənizin sağlamlıq tarixçəsi ürək çatışmazlığı olan və ya keçmiş qohumlar daxildir, Siz genlərinizdə dəyişikliklər ürək toxumanıza təsir edən, Ürəyinizə zərər verə biləcək vərdişləriniz varO cümlədən, Smoking, Yüksək tərkibli qidalar yemək piy, xolesterolvə natrium (duz), Qeyri-aktiv həyat tərzinə sahib olmaq, Alkoqol istifadəsi pozğunluğu (AUD), Qanunsuz narkotik istifadəsi, Ürəyinizə təsir edə biləcək digər tibbi şərtləriniz varO cümlədən: Yüksək qan təzyiqi də daxil olmaqla hər hansı ürək və ya qan damarı vəziyyəti, Ciddi ağciyər xəstəlikləri, İnfeksiya, məsələn HİV / AİDS or Covid-19, Obezite, Diabet, Sleep apnea, Xroniki böyrək xəstəliyi, Anemiya, Dəmir yükü xəstəliyi,Ürəyinizə zərər verə biləcək xərçəng müalicələri kimi radiasiya və kemoterapi, Siz afroamerikalısınız. Afrikalı amerikalıların ürək çatışmazlığı inkişaf etdirmə ehtimalı daha yüksəkdir və digər irqlərdən olan insanlara nisbətən daha gənc yaşlarda daha ciddi hallar olur. Stiqma, ayrı-seçkilik, gəlir, təhsil və coğrafi bölgə kimi faktorlar da onların ürək çatışmazlığı riskinə təsir edə bilər.",
      description3:
        "Ürək çatışmazlığının simptomları ürəyinizin hansı tərəfinin təsirləndiyindən və vəziyyətinizin nə qədər ciddi olduğundan asılıdır. Əksər simptomlar orqanlarınıza qan axınının azalması və bədəninizdə maye yığılması ilə əlaqədardır. Maye yığılması, ürəyinizdən qan axınının çox yavaş olması səbəbindən baş verir. Nəticədə qan ürəyinizə qaytaran damarlarda toplanır. Maye qan damarlarından sızaraq bədəninizin toxumalarında toplana bilər və bu da şişməyə səbəb ola bilər (ödəmə) və digər problemlər.",
      description4:
        "Müalicəniz ürək çatışmazlığının növündən və nə qədər ciddi olduğundan asılı olacaq. Ürək çatışmazlığının müalicəsi yoxdur. Ancaq müalicə daha az simptomlarla daha uzun yaşamağınıza kömək edə bilər. Müalicə ilə belə, ürək çatışmazlığı adətən zamanla daha da pisləşir, buna görə də ömrünüzün qalan hissəsi üçün müalicəyə ehtiyacınız olacaq. Əksər müalicə planlarına aşağıdakılar daxildir: Dərman qəbul etmək, Maye yığılmasını idarə etmək üçün daha az natrium yemək və daha az maye içmək, kimi digər dəyişikliklərin edilməsi siqareti buraxma, idarəetmə vurğuvə sağlamlıq xidmətinizin tövsiyə etdiyi qədər fiziki fəaliyyət əldə edin, Ürək çatışmazlığını pisləşdirə biləcək hər hansı bir vəziyyətin müalicəsi, Lazım ola bilər ürək əməliyyatı əgər: Anadangəlmə ürək qüsurunuz və ya ürəyinizdə düzəldilə bilən zədəniz var, Ürəyinizin sol tərəfi zəifləyir və sinənizə bir cihaz qoymaq kömək edə bilər. Cihazlara daxildir, An implantasiya edilə bilən kardioverter defibrilator, Biventrikulyar kardiostimulyator (ürək resinxronizasiya terapiyası), Mexanik ürək nasosu (ventrikulyar köməkçi cihaz (VAD) və ya tam süni ürək), Ürək həkiminiz a ürək nəqli çünki ürək çatışmazlığınız həyat üçün təhlükəlidir və başqa heç nə kömək etmir, Müalicənizin bir hissəsi olaraq, simptomlarınıza çox diqqət yetirməlisiniz, çünki ürək çatışmazlığı birdən pisləşə bilər. Provayderiniz a ürək reabilitasiya proqramı vəziyyətinizi idarə etməyi öyrənməyə kömək etmək.",
    },
    {
      id: 2,
      image: "./images/healtyNotes/note2.jpg",
      alt: "note 2",
      kind: "Sümük xərçəngi",
      title1: "Xülasə",
      title2: "Üç növ sümük xərçəngi var:",
      title3: "Simptomlar",
      title4: "",
      description1:
        "Sümükdə başlayan xərçəng nadirdir. Bədənin başqa yerindən sümüyə yayılan xərçəng daha çox rast gəlinir.",
      description2:
        "Osteosarkoma – ən çox 10-19 yaş arasında baş verir. Daha çox diz və qolun yuxarı hissəsində rast gəlinir, Xondrosarkoma - adətən 40 yaşından sonra qığırdaqda başlayır, Ewing sarkoması – ən çox 19 yaşdan kiçik uşaqlarda və yeniyetmələrdə rast gəlinir. Oğlanlarda qızlara nisbətən daha çox rast gəlinir.",
      description3:
        "Sümük xərçənginin ən çox görülən simptomu ağrıdır. Digər simptomlar xərçəngin yerindən və ölçüsündən asılı olaraq dəyişir. Cərrahiyyə çox vaxt sümük xərçənginin əsas müalicəsidir. Digər müalicələrə amputasiya, kemoterapi və radiasiya terapiyası daxil ola bilər. Sümük xərçəngi müalicədən sonra geri dönə biləcəyi üçün müntəzəm təqib ziyarətləri vacibdir.",
      description4: "",
    },
    {
      id: 3,
      image: "./images/healtyNotes/note3.jpg",
      alt: "note 3",
      kind: "Alzheimer xəstəliyi",
      title1: "Yaş aralığı",
      title2: "Proses necə gedir?",
      title3: "Simptomlar",
      title4: "Risk",
      description1:
        "Alzheimer xəstəliyinin (AH) ən çox görülən formasıdır demans yaşlı insanlar arasında. Demans, insanın gündəlik fəaliyyətlərini yerinə yetirmək qabiliyyətinə ciddi təsir göstərən beyin pozğunluğudur.",
      description2:
        "AD yavaş-yavaş başlayır. Bu, ilk növbədə beynin düşüncə, yaddaş və dili idarə edən hissələrini əhatə edir. AD olan insanlar bu yaxınlarda baş verənləri və ya tanıdıqları insanların adlarını xatırlamaqda çətinlik çəkə bilərlər. Əlaqədar problem, yüngül koqnitiv pozğunluq (MCI), eyni yaşdakı insanlar üçün normaldan daha çox yaddaş probleminə səbəb olur. Çoxları, lakin hamısı deyil, MCI olan insanlar AD inkişaf etdirəcəklər.",
      description3:
        "AD-də zaman keçdikcə simptomlar daha da pisləşir. İnsanlar ailə üzvlərini tanımaya bilər. Danışmaq, oxumaq və ya yazmaqda çətinlik çəkə bilərlər. Dişlərini fırçalamağı və ya saçlarını daramağı unuda bilərlər. Daha sonra onlar narahat və ya aqressivləşə və ya evdən uzaqlaşa bilərlər. Nəhayət, onlara tam qayğı lazımdır. Bu, məcburi olan ailə üzvləri üçün böyük stress yarada bilər qayğı onlar üçün.",
      description4:
        "AD adətən 60 yaşından sonra başlayır. Yaşlandıqca risk artır. Ailə üzvlərindən birində xəstəlik varsa, riskiniz də daha yüksəkdir.",
    },
    {
      id: 4,
      image: "./images/healtyNotes/note4.jpeg",
      alt: "note 4",
      kind: "Beyin anevrizması",
      title1: "Balonlaşma",
      title2: "Simptomlar",
      title3: "Xəstə Təqdimatları",
      title4: "Burada başlayın",
      description1:
        "Bir beyin anevrizma beyində arteriya divarında anormal qabarıqlıq və ya “balonlaşma”dır. Onlar bəzən giləmeyvə anevrizması adlanır, çünki onlar çox vaxt kiçik giləmeyvə ölçüsündə olurlar. Əksər beyin anevrizmaları böyüyənə, qan sızmağa və ya partlamaya başlayana qədər heç bir simptom yaratmır.",
      description2:
        "Müalicə anevrizmanın ölçüsündən və yerindən, yoluxmuş olub-olmamasından və partlayıb-sızmasından asılıdır. Əgər beyin anevrizması partlayırsa, simptomlar arasında ani, şiddətli baş ağrısı, ürəkbulanma və qusma, boyun tutulması, huşun itirilməsi və ürəkbulanma əlamətləri ola bilər. zərbə. Bu simptomlardan hər hansı biri təcili tibbi yardım tələb edir.",
      description3: "Beyində anevrizma Tibb ensiklopediyası",
      description4: "Beyin anevrizması Mayo Tibbi Təhsil və Tədqiqat Vəqfi",
    },
    {
      id: 5,
      image: "./images/healtyNotes/note5.jpg",
      alt: "note 5",
      kind: "Meningit",
      title1: "Xülasə",
      title2: "Erkən müalicə",
      title3: "Xüsusiyyətləri",
      title4: "Xəstə Təqdimatları",
      description1:
        "Menenjit beyin və onurğa beynini əhatə edən nazik toxumanın iltihabıdır. Menenjitin bir neçə növü var. Ən çox görülən viral meningitdir. Virus bədənə burun və ya ağızdan daxil olduqda və beyinə keçdikdə onu əldə edirsiniz. Bakterial meningit nadirdir, lakin ölümcül ola bilər. Adətən soyuqdəyməyə bənzər infeksiyaya səbəb olan bakteriyalarla başlayır. Səbəb ola bilər zərbə, Eşitmə itkisi, və beyin zədələnməsi. Digər orqanlara da zərər verə bilər. Pnevmokok infeksiyaları və meningokok infeksiyaları bakterial meningitin ən çox yayılmış səbəbləridir.",
      description2:
        "Erkən müalicə ölüm də daxil olmaqla ciddi problemlərin qarşısını almağa kömək edə bilər. Menenjitin diaqnozu üçün testlərə qan testləri, görüntüləmə testləri və serebrospinal mayeni yoxlamaq üçün onurğa kranı daxildir. Antibiotiklər bakterial meningiti müalicə edə bilər. Antiviral dərmanlar bəzi viral meningit növlərinə kömək edə bilər. Digər dərmanlar simptomları aradan qaldırmağa kömək edə bilər.",
      description3:
        "Bakterial Menenjit Xəstəliklərə Nəzarət və Qarşısının Alınması üzrə Mərkəzləri",
      description4: "Qram-mənfi meningit Tibb ensiklopediyası",
    },
    {
      id: 6,
      image: "./images/healtyNotes/note6.jpg",
      alt: "note 5",
      kind: "Addison xəstəliyi",
      title1: "Xülasə",
      title2: "İmmunitet sistemi",
      title3: "Laboratoriya testləri",
      title4: "Xəstə Təqdimatları",
      description1:
        "Böyrəküstü vəziləriniz böyrəklərinizin üstündədir. Bu bezlərin xarici təbəqəsi bədəninizin stresə cavab verməsinə və qan təzyiqinizi, su və duz balansınızı tənzimləməsinə kömək edən hormonlar istehsal edir. Adrenal bezlər bu hormonları kifayət qədər istehsal etmədikdə Addison xəstəliyi baş verir.",
      description2:
        "İmmunitet sistemindəki problem adətən Addison xəstəliyinə səbəb olur. İmmunitet sistemi səhvən öz toxumalarınıza hücum edərək böyrəküstü vəzilərinizi zədələyir. Digər səbəblərə infeksiyalar və xərçəng daxildir.",
      description3:
        "Laboratoriya testləri Addison xəstəliyinin olduğunu təsdiqləyə bilər. Əgər müalicə etməsəniz, ölümcül ola bilər. Ömrünüzün qalan hissəsi üçün hormon həbləri qəbul etməlisiniz. Addison xəstəliyiniz varsa, təcili yardım vəsiqəsi daşımalısınız. Xəstəliyiniz olduğunu söyləməli, dərmanlarınızı sadalamalısınız və təcili vəziyyətdə nə qədər ehtiyacınız olduğunu söyləməlisiniz.",
      description4: "ACTH qan testi Tibb ensiklopediyası",
    },
    {
      id: 7,
      image: "./images/healtyNotes/note7.webp",
      alt: "note 7",
      kind: "Katarakt",
      title1: "Xülasə",
      title2: "İnkişafı",
      title3: "Genetika",
      title4: "Müalicələr və Müalicələr",
      description1:
        "Katarakta gözündəki linzanın buludlanmasıdır. Görmə qabiliyyətinizə təsir edir. Katarakta yaşlı insanlarda çox yaygındır. 80 yaşına qədər bütün amerikalıların yarıdan çoxu ya kataraktaya malikdir, ya da katarakt əməliyyatı keçirib.",
      description2:
        "Katarakt adətən yavaş inkişaf edir. Yeni eynəklər, daha parlaq işıqlandırma, parıltıya qarşı günəş eynəkləri və ya böyüdücü linzalar əvvəlcə kömək edə bilər. Cərrahiyyə də bir seçimdir. Bu, buludlu linzanın çıxarılmasını və süni lens ilə əvəz edilməsini nəzərdə tutur. Günəş eynəyi və ultrabənövşəyi günəş şüalarının qarşısını almaq üçün kənarı olan papaq taxmaq kataraktları gecikdirməyə kömək edə bilər.",
      description3:
        "Autosomal dominant optik atrofiya və katarakta: MedlinePlus Genetika Milli Tibb Kitabxanası",
      description4:
        "IOL İmplantları: Kataraktadan Sonra Lensin dəyişdirilməsi (Gözdaxili linzalar) American Academy of Ophthalmology",
    },
    {
      id: 8,
      image: "./images/healtyNotes/note8.png",
      alt: "note 8",
      kind: "Böyrək xərçəngi",
      title1: "Xülasə",
      title2: "Müalicə üsulu",
      title3: "Müalicələr və Müalicələr",
      title4: "Statistika və Tədqiqat",
      description1:
        "İki böyrəyiniz var. Bunlar belinizin üstündə onurğa sümüyünün hər iki tərəfində yerləşən yumruq ölçüsündə orqanlardır. İçindəki borular qanınızı süzür və təmizləyir, tullantıları çıxarır və sidik çıxarır. Böyrək xərçəngi böyrəklərinizin içərisindəki kiçik boruların astarında əmələ gəlir.",
      description2:
        "Müalicə yaşınızdan, ümumi sağlamlığınızdan və xərçəngin nə qədər inkişaf etdiyindən asılıdır. Buraya cərrahiyyə, kemoterapi və ya radiasiya, bioloji və ya hədəflənmiş müalicələr daxil ola bilər. Bioloji terapiya bədəninizin xərçənglə mübarizə qabiliyyətini artırır. Məqsədli terapiya, normal hüceyrələrə daha az zərər verən xüsusi xərçəng hüceyrələrinə hücum edən dərmanlar və ya digər maddələrdən istifadə edir.",
      description3:
        "Böyrək (böyrək hüceyrəsi) xərçəngi üçün təsdiqlənmiş dərmanlar Milli Xərçəng İnstitutunun",
      description4:
        "Maye Biopsiyası Beyin Xərçəngini və Erkən Mərhələ Böyrək Xərçəngini Müəyyən edir Milli Xərçəng İnstitutunun",
    },
    {
      id: 9,
      image: "./images/healtyNotes/note9.jpg",
      alt: "note 9",
      kind: "Quş qripi",
      title1: "Xülasə",
      title2: "İnsanlara təsiri",
      title3: "Müalicə üsulu",
      title4: "Xüsusiyyətləri",
      description1:
        "Quşlar da insanlar kimi qripə yoluxur. Quş qripi virusları quşları, o cümlədən toyuqları, digər ev quşlarını və ördək kimi çöl quşlarını yoluxur. Adətən quş qripi virusları yalnız digər quşlara yoluxur. İnsanların quş qripi viruslarına yoluxması nadirdir, lakin bu baş verə bilər. İki növ, H5N1 və H7N9, Asiya, Afrika, Sakit Okean, Yaxın Şərq və Avropanın bəzi bölgələrində baş verən epidemiyalar zamanı bəzi insanlara yoluxmuşdur. ABŞ-da insanlara təsir edən digər quş qripi növlərinin nadir halları da olmuşdur.",
      description2:
        "Quş qripinə yoluxmuş insanların əksəriyyəti yoluxmuş quşlarla və ya quşların tüpürcəyi, selikli qişası və ya nəcisləri ilə çirklənmiş səthlərlə yaxın təmasda olub. Tərkibində virus olan damlacıqlar və ya tozlarla nəfəs alaraq onu əldə etmək də mümkündür. Nadir hallarda virus bir insandan digərinə keçir. Yaxşı bişirilməmiş quş əti və ya yumurta yeməklə də quş qripinə yoluxmaq mümkün ola bilər.",
      description3:
        "Antiviral dərmanlarla müalicə xəstəliyi daha az ağırlaşdıra bilər. Onlar həmçinin qripə məruz qalan insanlarda qripin qarşısını almağa kömək edə bilər. Hal-hazırda ictimaiyyət üçün heç bir peyvənd yoxdur. Hökumətin H5N1 quş qripi virusunun bir növü üçün peyvənd ehtiyatı var və insandan insana asanlıqla yayılan bir epidemiya olarsa, onu paylaya bilər.",
      description4:
        "İnsanlarda Quş Qripi A Virus İnfeksiyaları Xəstəliklərə Nəzarət və Qarşısının Alınması üzrə Mərkəzləri",
    },
    {
      id: 10,
      image: "./images/healtyNotes/note10.jpg",
      alt: "note 10",
      kind: "Vərəm",
      title1: "Vərəm (vərəm) nədir?",
      title2: "Vərəmin (vərəm) səbəbi nədir?",
      title3: "Kimlərin vərəm mikroblarına yoluxma ehtimalı daha yüksəkdir?",
      title4: "Vərəmin (vərəm) əlamətləri hansılardır?",
      description1:
        "Vərəm (vərəm) a bakterial xəstəlik adətən ağciyərlərə hücum edir. Ancaq böyrəklər, onurğa və beyin də daxil olmaqla bədənin digər hissələrinə də hücum edə bilər.",
      description2:
        "Vərəmə Mycobacterium tuberculosis adlı bakteriyalar (mikroblar) səbəb olur. Mikroblar hava yolu ilə insandan insana keçir. Boğazında və ya ağciyərində vərəm xəstəliyi olan insanlar öskürərkən, asqırdıqda, danışarkən və ya mahnı oxuyanda mikrobları havaya yayırlar. Mikrobları olan hava ilə nəfəs alsanız, vərəmə yoluxa bilərsiniz. Vərəm toxunma, öpüşmə, yemək və qab-qacaq paylaşma yolu ilə yayılmır.",
      description3:
        "Vərəm xəstəsi olan şəxsin yanında olan hər kəs mikroblara yoluxa bilər. Aşağıdakı hallarda vərəm xəstəliyi olan birinin yaxınlığında olma ehtimalınız daha yüksəkdir: Vərəm xəstəliyinin yayıldığı ölkələrdə anadan olublar və ya tez-tez səyahət edirlər,Səhiyyə işçisidir, Evləri, həbsxanaları və qocalar evləri olmayan insanlar üçün sığınacaqlar kimi vərəmin daha çox yayıldığı yerdə işləyin və ya yaşayın",
      description4:
        "Əgər vərəm xəstəliyiniz varsa, Vərəm mikrobları aktivdir, yəni bədəninizin daxilində böyüyür (çoxalır) və sizi xəstələndirir. Əgər vərəm ağciyərinizdə və ya boğazınızda böyüyürsə, siz vərəm mikroblarını başqa insanlara yaya bilərsiniz. Vərəm mikroblarına yoluxduqdan sonra həftələr və illər ərzində vərəm xəstəliyi ilə xəstələnə bilərsiniz.",
    },
  ];
  const healtyNotes = document.querySelector(".healty-notes");

  notes.map((item) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = item;
    p.className = "healty-notes-kind";
    li.appendChild(p);
    healtyNotes.appendChild(li);
  });

  const informationsCart = (notes) => {
    if (healtyNotes) {
      healtyNotes.innerHTML = "";
      notes.forEach((note) => {
        const noteItem = document.createElement("li");
        noteItem.innerHTML = `
            <div class="note-image">
              <img src="${note.image}" alt="${note.alt}" />
            </div>
            <div class="note-text">
              <h4>${note.kind}</h4>
              <p>${note.description1}</p>
            </div>
        `;
        noteItem.addEventListener("click", () => showModuleİnformations(note));
        healtyNotes.appendChild(noteItem);
      });
    } else {
      console.error("Element with class 'healty-notes' not found");
    }
  };
  function showModuleİnformations(note) {
    const module = document.querySelector(".overlay-module");
    if (module) {
      window.scrollTo({
        top: 0,
      });
      document.body.style.overflowY = "hidden";
      module.innerHTML = `
        <div class="overlay-element">
          <div class="module-left-side">
            <div>
              <img src="${note.image}" alt="${note.alt}" />
            </div>
            <h3>${note.kind}</h3>
            <button class="close-module">Bağla</button>
          </div>
          <ul class="module-right-side">
            <li>
              <h3>${note.title1}</h3>
              <p>${note.description1}</p>
            </li>
            <li>
              <h3>${note.title2}</h3>
              <p>${note.description2}</p>
            </li>
            <li>
              <h3>${note.title3}</h3>
              <p>${note.description3}</p>
            </li>
            <li>
              <h3>${note.title4}</h3>
              <p>${note.description4}</p>
            </li>
          </ul>
        </div>  
      `;
      module.style.display = "flex";

      const closeButton = module.querySelector(".close-module");
      closeButton.addEventListener("click", () => {
        module.style.display = "none";
        document.body.style.overflowY = "auto";
      });
    } else {
      console.error("Element with class 'overlay-module' not found");
    }
  }
  informationsCart(notes);

  // -----------mobile----------------
  const menuBar = document.querySelector(".menu-bar");
  const menuBarModule = document.querySelector(".menuBar-module");
  menuBarModule.style.display = "none";
  const xIcon = document.querySelector(".fa-brands");
  menuBar.addEventListener("click", () => {
    menuBarModule.style.display = "flex";
    document.body.style.overflowY = "hidden";
  });
  xIcon.addEventListener("click", () => {
    menuBarModule.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});
