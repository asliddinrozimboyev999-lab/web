document.addEventListener("DOMContentLoaded", () => {
    const konteyner = document.getElementById("avto-konteyner");
    if (!konteyner) return;

    const qidiruvInput = document.getElementById("qidiruv-input");
    const kategoriyaSelect = document.getElementById("kategoriya-select");
    const saralashSelect = document.getElementById("saralash-select");
    const topilganSoni = document.getElementById("topilgan-soni");

    document.getElementById("stat-jami").textContent = `${jamiAvtoSoni} ta`;
    document.getElementById("stat-ortacha").textContent = `$${ortachaNarx.toLocaleString()}`;
    document.getElementById("stat-qimmat").textContent = engQimmatAvto
        ? `${engQimmatAvto.nomi} ($${engQimmatAvto.narx.toLocaleString()})`
        : "-";

    function kartalarniChiqar(royxat) {
        konteyner.textContent = "";
        topilganSoni.textContent = royxat.length;

        if (royxat.length === 0) {
            const xabar = document.createElement("p");
            xabar.className = "empty-msg";
            xabar.textContent = "Hech narsa topilmadi";
            konteyner.append(xabar);
            return;
        }

        const sevimlilar = JSON.parse(localStorage.getItem("sevimliAvtolar") || "[]");

        royxat.forEach(avto => {
            const karta = document.createElement("article");
            karta.className = "card";
            karta.dataset.id = avto.id;

            const badge = document.createElement("span");
            badge.className = avto.mavjud ? "badge" : "badge badge-sold";
            badge.textContent = avto.mavjud ? "Sotuvda" : "Sotilgan";

            const img = document.createElement("img");
            img.src = avto.rasm;
            img.alt = avto.nomi;
            img.className = "card-img";

            const h3 = document.createElement("h3");
            h3.textContent = avto.nomi;

            const narxEl = document.createElement("p");
            narxEl.className = "card-price";
            narxEl.textContent = `$${avto.narx.toLocaleString()}`;

            const infoEl = document.createElement("p");
            infoEl.className = "card-info";
            infoEl.textContent = `${avto.yili}-yil • ${avto.probeg} • ${avto.yoqilgi}`;

            const btnGroup = document.createElement("div");
            btnGroup.className = "card-actions";

            const batafsilBtn = document.createElement("button");
            batafsilBtn.type = "button";
            batafsilBtn.className = "btn-detail";
            batafsilBtn.textContent = "Batafsil";

            const favBtn = document.createElement("button");
            favBtn.type = "button";
            const isFav = sevimlilar.includes(avto.id);
            favBtn.className = isFav ? "btn-fav active" : "btn-fav";
            favBtn.textContent = isFav ? "♥ Saqlangan" : "♡ Saqlash";

            btnGroup.append(batafsilBtn, favBtn);
            karta.append(badge, img, h3, narxEl, infoEl, btnGroup);
            konteyner.append(karta);
        });
    }

    function yangila() {
        const qidiruvMatni = qidiruvInput.value.trim().toLowerCase();
        const tanlanganKat = kategoriyaSelect.value;
        const saralashTuri = saralashSelect.value;

        let natija = avtomobillar.filter(avto => {
            const nomMos = avto.nomi.toLowerCase().includes(qidiruvMatni);
            const katMos = tanlanganKat === "barchasi" || avto.kategoriya === tanlanganKat;
            return nomMos && katMos;
        });

        natija = [...natija];
        if (saralashTuri === "narx-osish") {
            natija.sort((a, b) => a.narx - b.narx);
        } else if (saralashTuri === "narx-kamayish") {
            natija.sort((a, b) => b.narx - a.narx);
        } else if (saralashTuri === "nom-az") {
            natija.sort((a, b) => a.nomi.localeCompare(b.nomi));
        }

        kartalarniChiqar(natija);
    }

    qidiruvInput.addEventListener("input", yangila);
    kategoriyaSelect.addEventListener("change", yangila);
    saralashSelect.addEventListener("change", yangila);

    yangila();
});