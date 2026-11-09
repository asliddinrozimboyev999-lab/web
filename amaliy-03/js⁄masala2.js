function qatnashganmi(matn, soz) {
    return matn.toLowerCase().includes(soz.toLowerCase());
}

console.log(qatnashganmi("Bugun JavaScript darsida funksiya yozdik", "javascript"));
console.log(qatnashganmi("HTML va CSS", "php"));
console.log(qatnashganmi("Frontend va Backend dasturlash", "BACKEND"));
console.log(qatnashganmi("Salom dunyo", ""));
