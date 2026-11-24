# Xorazm Avto — Avtomobil e'lonlari portali (4-amaliy ish)

## Loyiha mavzusi
Urganch shahri va Xorazm viloyati bo'yicha avtomobillarni sotish, sotib olish va e'lon joylashtirish uchun interaktiv veb-portal.

## Qo'shilgan imkoniyatlar
- Dinamik katalog: Avtomobillar ro'yxati JavaScript orqali DOM elementlari (createElement, textContent) yordamida yaratiladi.
- Jonli qidiruv, filtr va saralash: Model nomi bo'yicha qidiruv (input), kategoriya filtri (change) va narx/nom bo'yicha saralash birgalikda ishlaydi.
- Bozor statistikasi: Jami avtomobillar soni, o'rtacha narx va eng qimmat model avtomatik hisoblanadi.
- Modal oyna: Batafsil ma'lumotlar uchun modal oyna (Escape, fon va × tugmasi orqali yopiladi).
- Event delegation: Kartalardagi tugmalar bitta ota konteyner orqali boshqariladi.
- Sevimlilar (localStorage), tungi/kunduzgi rejim (localStorage) va mobil menyu.
- E'lon berish formasini JavaScript orqali tekshirish.

## Ishlatilgan massiv metodlari
- reduce() — js/data.js faylida o'rtacha narx va eng qimmat narxni hisoblashda.
- find() — js/data.js faylida eng qimmat avtomobilni topishda va js/ui.js faylida modal uchun ID bo'yicha qidirishda.
- map() — js/data.js faylida barcha avtomobil nomlari ro'yxatini olishda.
- filter() — js/katalog.js faylida qidiruv va kategoriya bo'yicha filtrlashda, js/ui.js faylida sevimlilardan o'chirishda.
- sort() — js/katalog.js faylida narx va nom bo'yicha saralashda.