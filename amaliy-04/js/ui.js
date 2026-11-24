document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("xorazmAvtoTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeBtn) themeBtn.textContent = "☀️";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("xorazmAvtoTheme", isDark ? "dark" : "light");
            themeBtn.textContent = isDark ? "☀️" : "🌙";
        });
    }

    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("open");
        });
    }

    const sevimliSoniEl = document.getElementById("sevimli-soni");

    function sevimliHisobniYangila() {
        const list = JSON.parse(localStorage.getItem("sevimliAvtolar") || "[]");
        if (sevimliSoniEl) {
            sevimliSoniEl.textContent = list.length;
        }
    }
    sevimliHisobniYangila();

    const konteyner = document.getElementById("avto-konteyner");
    const modal = document.getElementById("avto-modal");
    const modalYopishBtn = document.getElementById("modal-yopish");

    function modalniOchish(avto) {
        if (!modal || !avto) return;
        document.getElementById("modal-rasm").src = avto.rasm;
        document.getElementById("modal-rasm").alt = avto.nomi;
        document.getElementById("modal-nomi").textContent = avto.nomi;
        document.getElementById("modal-narx").textContent = `Narxi: $${avto.narx.toLocaleString()}`;
        document.getElementById("modal-kategoriya").textContent = avto.kategoriya.toUpperCase();
        document.getElementById("modal-yili").textContent = `${avto.yili}-yil`;
        document.getElementById("modal-probeg").textContent = avto.probeg;
        document.getElementById("modal-yoqilgi").textContent = avto.yoqilgi;
        document.getElementById("modal-holat").textContent = avto.mavjud ? "Sotuvda mavjud" : "Sotib bo'lingan";

        const teglarKonteyner = document.getElementById("modal-teglar");
        teglarKonteyner.textContent = "";
        avto.teglar.forEach(teg => {
            const span = document.createElement("span");
            span.className = "tag-chip";
            span.textContent = `#${teg}`;
            teglarKonteyner.append(span);
        });

        modal.hidden = false;
    }

    function modalniYopish() {
        if (modal) modal.hidden = true;
    }

    if (konteyner) {
        konteyner.addEventListener("click", (e) => {
            const karta = e.target.closest(".card");
            if (!karta) return;

            const id = Number(karta.dataset.id);

            if (e.target.closest(".btn-detail")) {
                const tanlanganAvto = avtomobillar.find(a => a.id === id);
                modalniOchish(tanlanganAvto);
            }

            const favBtn = e.target.closest(".btn-fav");
            if (favBtn) {
                let sevimlilar = JSON.parse(localStorage.getItem("sevimliAvtolar") || "[]");
                if (sevimlilar.includes(id)) {
                    sevimlilar = sevimlilar.filter(item => item !== id);
                    favBtn.classList.remove("active");
                    favBtn.textContent = "♡ Saqlash";
                } else {
                    sevimlilar.push(id);
                    favBtn.classList.add("active");
                    favBtn.textContent = "♥ Saqlangan";
                }
                localStorage.setItem("sevimliAvtolar", JSON.stringify(sevimlilar));
                sevimliHisobniYangila();
            }
        });
    }

    if (modalYopishBtn) {
        modalYopishBtn.addEventListener("click", modalniYopish);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modalniYopish();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && !modal.hidden) {
            modalniYopish();
        }
    });

    const elonForma = document.getElementById("elon-forma");
    if (elonForma) {
        elonForma.addEventListener("submit", (e) => {
            e.preventDefault();

            let xatoBor = false;

            const sarlavha = document.getElementById("car-title");
            const marka = document.getElementById("car-brand");
            const narx = document.getElementById("car-price");
            const ism = document.getElementById("owner-name");
            const telefon = document.getElementById("phone");
            const email = document.getElementById("owner-email");
            const tavsif = document.getElementById("car-desc");
            const muvaffaqiyatXabar = document.getElementById("form-success");

            function xatoKorsat(inputEl, xabar) {
                const errSpan = inputEl.parentElement.querySelector(".error-text");
                if (errSpan) errSpan.textContent = xabar;
                if (xabar) {
                    inputEl.classList.add("input-error");
                    xatoBor = true;
                } else {
                    inputEl.classList.remove("input-error");
                }
            }

            if (sarlavha.value.trim().length < 3) {
                xatoKorsat(sarlavha, "Avtomobil nomi kamida 3 ta belgidan iborat bo'lishi kerak.");
            } else {
                xatoKorsat(sarlavha, "");
            }

            if (!marka.value) {
                xatoKorsat(marka, "Iltimos, avtomobil markasini tanlang.");
            } else {
                xatoKorsat(marka, "");
            }

            if (!narx.value || Number(narx.value) < 500) {
                xatoKorsat(narx, "Narx kamida $500 bo'lishi kerak.");
            } else {
                xatoKorsat(narx, "");
            }

            if (ism.value.trim() === "") {
                xatoKorsat(ism, "Bog'lanuvchi shaxs ismini kiritish majburiy.");
            } else {
                xatoKorsat(ism, "");
            }

            const telRegex = /^\+998[0-9]{9}$/;
            if (!telRegex.test(telefon.value.trim())) {
                xatoKorsat(telefon, "Telefon raqam +998901234567 shaklida kiritilishi shart.");
            } else {
                xatoKorsat(telefon, "");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                xatoKorsat(email, "To'g'ri elektron pochta manzilini kiriting (masalan: ali@mail.uz).");
            } else {
                xatoKorsat(email, "");
            }

            if (tavsif.value.trim().length < 15) {
                xatoKorsat(tavsif, "Avtomobil holati haqida kamida 15 ta belgi yozing.");
            } else {
                xatoKorsat(tavsif, "");
            }

            if (!xatoBor) {
                muvaffaqiyatXabar.textContent = "Muvaffaqiyatli! Sizning avtomobil e'loningiz tekshiruvga yuborildi.";
                muvaffaqiyatXabar.hidden = false;
                elonForma.reset();
            } else {
                muvaffaqiyatXabar.hidden = true;
            }
        });
    }
});
