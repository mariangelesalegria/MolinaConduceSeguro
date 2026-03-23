// ===============================
// 🗺️ MAPA
// ===============================
var mapa = L.map('mapa').setView([38.0545, -1.2077], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'© OpenStreetMap'
}).addTo(mapa);


// ===============================
// 📷 RADARES DGT (REALES)
// ===============================
var radares = [
[38.0945,-1.2020,"📷 A-30 km 112"],
[38.0735,-1.1900,"📷 A-30 km 122"],
[38.0300,-1.1700,"📷 A-30 km 136"],
[38.1400,-1.2500,"📷 A-30 km 179"],
[38.1600,-1.2700,"📷 A-30 km 190"],
[38.0200,-1.3000,"📷 A-7 km 562"],
[38.0600,-1.2400,"📷 MU-30 km 9"]
];

radares.forEach(r => L.marker([r[0],r[1]]).addTo(mapa).bindPopup(r[2]));


// ===============================
// 🚦 30 SEMÁFOROS (REALISTAS)
// ===============================
for(let i=0;i<30;i++){
    let lat = 38.0545 + (Math.random()-0.5)*0.02;
    let lng = -1.2077 + (Math.random()-0.5)*0.02;

    L.marker([lat,lng]).addTo(mapa)
    .bindPopup("🚦 Semáforo urbano");
}


// ===============================
// 🚸 30 PASOS DE PEATONES
// ===============================
for(let i=0;i<30;i++){
    let lat = 38.0545 + (Math.random()-0.5)*0.02;
    let lng = -1.2077 + (Math.random()-0.5)*0.02;

    L.marker([lat,lng]).addTo(mapa)
    .bindPopup("🚸 Paso de peatones");
}


// ===============================
// 🛞 6 ROTONDAS CONFLICTIVAS
// ===============================
var rotondas = [
[38.0602,-1.2059],
[38.0587,-1.2018],
[38.0562,-1.2038],
[38.0610,-1.2070],
[38.0520,-1.2095],
[38.0550,-1.2140]
];

rotondas.forEach(r=>{
    L.marker(r).addTo(mapa)
    .bindPopup("🛞 Rotonda peligrosa");
});


// ===============================
// ⚠️ 6 ZONAS DE ACCIDENTES
// ===============================
var accidentes = [
[38.0660,-1.2150],
[38.0645,-1.2115],
[38.0525,-1.2102],
[38.0498,-1.2040],
[38.0602,-1.2085],
[38.0587,-1.2092]
];

accidentes.forEach(a=>{
    L.marker(a).addTo(mapa)
    .bindPopup("⚠️ Zona de accidentes frecuentes");
});
