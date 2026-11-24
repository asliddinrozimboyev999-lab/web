const avtomobillar = [
    {
        id: 1,
        nomi: "Chevrolet Cobalt GX-Style",
        kategoriya: "sedan",
        narx: 13200,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/1f3a5f/ffffff?text=Cobalt+2023",
        yili: 2023,
        probeg: "35 000 km",
        yoqilgi: "Benzin / Metan",
        teglar: ["avtomat", "kraska toza", "yangi"]
    },
    {
        id: 2,
        nomi: "Chevrolet Gentra L-Elegant",
        kategoriya: "sedan",
        narx: 14500,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/2b4c7e/ffffff?text=Gentra+2022",
        yili: 2022,
        probeg: "52 000 km",
        yoqilgi: "Benzin",
        teglar: ["lyuk", "abs", "magicar"]
    },
    {
        id: 3,
        nomi: "Chevrolet Tracker 2 Premier",
        kategoriya: "krossover",
        narx: 21800,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/e07a5f/ffffff?text=Tracker+2",
        yili: 2024,
        probeg: "11 000 km",
        yoqilgi: "Benzin (Turbo)",
        teglar: ["panorama", "full", "yangi"]
    },
    {
        id: 4,
        nomi: "Chevrolet Malibu 2 XL",
        kategoriya: "biznes",
        narx: 28500,
        mavjud: false,
        rasm: "https://via.placeholder.com/400x250/1f3a5f/ffffff?text=Malibu+2+XL",
        yili: 2021,
        probeg: "68 000 km",
        yoqilgi: "Benzin",
        teglar: ["turbo", "komfort", "sotilgan"]
    },
    {
        id: 5,
        nomi: "Chevrolet Damas DLX",
        kategoriya: "tijorat",
        narx: 8400,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/3d5a80/ffffff?text=Damas+DLX",
        yili: 2023,
        probeg: "24 000 km",
        yoqilgi: "Metan gaz",
        teglar: ["tejamkor", "metan"]
    },
    {
        id: 6,
        nomi: "BYD Song Plus Champion",
        kategoriya: "elektromobil",
        narx: 29900,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/2a9d8f/ffffff?text=BYD+Song+Plus",
        yili: 2024,
        probeg: "4 500 km",
        yoqilgi: "Elektro / Gibrid",
        teglar: ["elektro", "360 kamera", "full"]
    },
    {
        id: 7,
        nomi: "Kia K5 Prestige",
        kategoriya: "biznes",
        narx: 31000,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/264653/ffffff?text=Kia+K5",
        yili: 2023,
        probeg: "29 000 km",
        yoqilgi: "Benzin",
        teglar: ["led", "komfort", "avtomat"]
    },
    {
        id: 8,
        nomi: "Hyundai Tucson",
        kategoriya: "krossover",
        narx: 27400,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/e76f51/ffffff?text=Hyundai+Tucson",
        yili: 2022,
        probeg: "41 000 km",
        yoqilgi: "Benzin",
        teglar: ["4x4", "krossover", "kafolat"]
    },
    {
        id: 9,
        nomi: "Chevrolet Nexia 3",
        kategoriya: "sedan",
        narx: 10800,
        mavjud: false,
        rasm: "https://via.placeholder.com/400x250/457b9d/ffffff?text=Nexia+3",
        yili: 2021,
        probeg: "75 000 km",
        yoqilgi: "Propan",
        teglar: ["propan", "mexanika", "sotilgan"]
    },
    {
        id: 10,
        nomi: "Chevrolet Labo",
        kategoriya: "tijorat",
        narx: 8900,
        mavjud: true,
        rasm: "https://via.placeholder.com/400x250/1d3557/ffffff?text=Chevrolet+Labo",
        yili: 2024,
        probeg: "9 000 km",
        yoqilgi: "Metan gaz",
        teglar: ["yuk tashish", "yangi", "metan"]
    }
];

const jamiAvtoSoni = avtomobillar.length;

const ortachaNarx = Math.round(
    avtomobillar.reduce((summa, avto) => summa + avto.narx, 0) / jamiAvtoSoni
);

const engQimmatNarx = avtomobillar.reduce(
    (maks, avto) => (avto.narx > maks ? avto.narx : maks),
    0
);

const engQimmatAvto = avtomobillar.find(avto => avto.narx === engQimmatNarx);

const avtoNomlariRoyxati = avtomobillar.map(avto => avto.nomi);