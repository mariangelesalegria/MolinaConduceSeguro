// Crear mapa centrado en Molina de Segura
var mapa = L.map('mapa').setView([38.0545, -1.2077], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'© OpenStreetMap'
}).addTo(mapa);

// -------------------------------
// 📷 RADARES
// -------------------------------
L.marker([38.0593,-1.2135]).addTo(mapa).bindPopup("📷 Radar - Av. de la Industria");
L.marker([38.0559,-1.2083]).addTo(mapa).bindPopup("📷 Radar - Av. Gutiérrez Mellado");
L.marker([38.0518,-1.2034]).addTo(mapa).bindPopup("📷 Radar - Av. del Chorrico");
L.marker([38.0630,-1.2120]).addTo(mapa).bindPopup("📷 Radar móvil - zona Altorreal");

// -------------------------------
// 🚸 PASOS DE PEATONES (30)
// -------------------------------
var pasos = [
[38.0620,-1.2160,"🚸 Paso peatones - Av. del Golf (1)"],
[38.0618,-1.2175,"🚸 Paso peatones - Av. del Golf (2)"],
[38.0615,-1.2145,"🚸 Paso peatones - Av. del Golf (3)"],
[38.0625,-1.2130,"🚸 Paso peatones - Av. del Golf (4)"],
[38.0630,-1.2152,"🚸 Paso peatones - Av. del Golf (5)"],
[38.0610,-1.2162,"🚸 Paso peatones - residenciales (6)"],
[38.0605,-1.2155,"🚸 Paso peatones - Av. Montañal (7)"],
[38.0597,-1.2170,"🚸 Paso peatones - Calle Sierra del Oro (8)"],
[38.0592,-1.2158,"🚸 Paso peatones - Calle Castillo de Aledo (9)"],
[38.0555,-1.2070,"🚸 Paso peatones - Av. Gutiérrez Mellado (10)"],
[38.0560,-1.2088,"🚸 Paso peatones - Calle Mayor (11)"],
[38.0543,-1.2065,"🚸 Paso peatones - Calle San Juan (12)"],
[38.0530,-1.2098,"🚸 Paso peatones - Centro urbano (13)"],
[38.0558,-1.2050,"🚸 Paso peatones - frente zona escolar (14)"],
[38.0580,-1.2105,"🚸 Paso peatones - cruce urbano (15)"],
[38.0540,-1.2105,"🚸 Paso peatones - Av. del Chorrico (16)"],
[38.0565,-1.2025,"🚸 Paso peatones - Polígono (17)"],
[38.0575,-1.2090,"🚸 Paso peatones - frente comercio (18)"],
[38.0538,-1.2110,"🚸 Paso peatones - Av. de Madrid (19)"],
[38.0550,-1.2035,"🚸 Paso peatones - zona residencial (20)"],
[38.0568,-1.2098,"🚸 Paso peatones - cruce barrio norte (21)"],
[38.0525,-1.2108,"🚸 Paso peatones - estación/cercanías (22)"],
[38.0588,-1.2052,"🚸 Paso peatones - acceso centro comercial (23)"],
[38.0612,-1.2094,"🚸 Paso peatones - cruce avenida secundaria (24)"],
[38.0570,-1.2075,"🚸 Paso peatones - parque municipal (25)"],
[38.0557,-1.2116,"🚸 Paso peatones - acceso barrio Este (26)"],
[38.0590,-1.2090,"🚸 Paso peatones - zona servicios (27)"],
[38.0532,-1.2068,"🚸 Paso peatones - cruce hospital/centro salud (28)"],
[38.0554,-1.2142,"🚸 Paso peatones - acceso Av. Principal (29)"],
[38.0579,-1.2125,"🚸 Paso peatones - zona educativa (30)"]
];

pasos.forEach(function(p){
    L.marker([p[0], p[1]]).addTo(mapa).bindPopup(p[2]);
});

// -------------------------------
// 🚦 SEMÁFOROS (10)
// -------------------------------
var semaforos = [
[38.0559,-1.2083,"🚦 Semáforo - Av. Gutiérrez Mellado"],
[38.0518,-1.2034,"🚦 Semáforo - Av. del Chorrico"],
[38.0545,-1.2077,"🚦 Semáforo - Cruce central"],
[38.0568,-1.2112,"🚦 Semáforo - Calle Olimpiada (Fátima)"],
[38.0532,-1.2058,"🚦 Semáforo - Intersección urbana (1)"],
[38.0580,-1.2105,"🚦 Semáforo - Intersección urbana (2)"],
[38.0527,-1.2031,"🚦 Semáforo - Cruce comercial (3)"],
[38.0570,-1.2065,"🚦 Semáforo - acceso zona escolar (4)"],
[38.0595,-1.2120,"🚦 Semáforo - cruce avenida residencial (5)"],
[38.0552,-1.2092,"🚦 Semáforo - zona con afluencia peatonal (6)"]
];

semaforos.forEach(function(s){
    L.marker([s[0], s[1]]).addTo(mapa).bindPopup(s[2]);
});

// -------------------------------
// 🛞 ROTONDAS PELIGROSAS (6)
// -------------------------------
var rotondas = [
[38.0602,-1.2059,"🛞 Rotonda peligrosa - Av. principal / secundaria"],
[38.0587,-1.2018,"🛞 Rotonda peligrosa - acceso a polígono"],
[38.0562,-1.2038,"🛞 Rotonda peligrosa - enlace urbano"],
[38.0610,-1.2070,"🛞 Rotonda peligrosa - cruce norte"],
[38.0520,-1.2095,"🛞 Rotonda peligrosa - zona centro oeste"],
[38.0550,-1.2140,"🛞 Rotonda peligrosa - cruce barrio sur"]
];

rotondas.forEach(function(r){
    L.marker([r[0], r[1]]).addTo(mapa).bindPopup(r[2]);
});

// -------------------------------
// ⚠️ PUNTOS DE ACCIDENTES FRECUENTES (6)
// -------------------------------
var accidentes = [
[38.0660,-1.2150,"⚠️ Punto de accidente - Acceso N‑301A"],
[38.0645,-1.2115,"⚠️ Punto de accidente - Polígono Industrial La Estrella"],
[38.0525,-1.2102,"⚠️ Punto de accidente - Cruce centro"],
[38.0498,-1.2040,"⚠️ Punto de accidente - Intersección peligrosa"],
[38.0602,-1.2085,"⚠️ Punto de accidente - Rotonda avenida principal"],
[38.0587,-1.2092,"⚠️ Punto de accidente - Cruce con visibilidad reducida"]
];

accidentes.forEach(function(a){
    L.marker([a[0], a[1]]).addTo(mapa).bindPopup(a[2]);
});
