db.ventas.drop()
db.ventas.insertMany([
    {
        _id: 1,
        articulo: "Microprocesador",
        fabricante: ["AMD"],
        modelo: "Ryzen 5 5600X",
        reacondicionado: false,
        precio_venta_publico: 349.99,
        unidades_vendidas: 90,
        unidades_restantes: 110,
        fecha_venta: new Date("2020-12-28"),
        precio_compra_distribuidora: 290,
        cliente: "Gesimar",
        distribuidor: "PCComponentes",
    },
    {
        _id: 2,
        articulo: "Microprocesador",
        fabricante: ["AMD"],
        modelo: "Ryzen 5 3600X",
        reacondicionado: false,
        precio_venta_publico: 249.99,
        unidades_vendidas: 100,
        unidades_restantes: 10,
        fecha_venta: new Date("2021-05-12"),
        precio_compra_distribuidora: 200,
        cliente: "Hispalense",
        distribuidor: "PCComponentes",
    },
    {
        _id: 3,
        articulo: "Microprocesador",
        fabricante: ["AMD"],
        modelo: "Ryzen 5 2600X",
        reacondicionado: false,
        precio_venta_publico: 149.99,
        unidades_vendidas: 40,
        fecha_venta: new Date("2020-02-08"),
        precio_compra_distribuidora: 90,
        cliente: "Informática Limón",
        distribuidor: "Red Computer",
    },
    {
        _id: 4,
        articulo: "Microprocesador",
        fabricante: ["Intel"],
        modelo: "i5-12600K",
        reacondicionado: false,
        precio_venta_publico: 249.99,
        unidades_vendidas: 30,
        fecha_venta: new Date("2021-12-05"),
        precio_compra_distribuidora: 210,
        cliente: "SIBOX",
        distribuidor: "Coolmod",
    },
    {
        _id: 5,
        articulo: "Microprocesador",
        fabricante: ["Intel"],
        modelo: "i5-11600K",
        reacondicionado: false,
        precio_venta_publico: 199.99,
        unidades_vendidas: 90,
        unidades_restantes: 160,
        fecha_venta: new Date("2020-10-20"),
        precio_compra_distribuidora: 140,
        cliente: "MBR",
        distribuidor: "NeoByte",
    },
    {
        _id: 6,
        articulo: "Microprocesador",
        fabricante: ["Intel"],
        modelo: "i5-10600K",
        reacondicionado: false,
        precio_venta_publico: 149.99,
        unidades_vendidas: 50,
        unidades_restantes: 10,
        fecha_venta: new Date("2019-11-04"),
        precio_compra_distribuidora: 90,
        cliente: "Alba IBS",
        distribuidor: "Red Computer",
    },
    {
        _id: 7,
        articulo: "Placa Base",
        fabricante: ["MSI"],
        modelo: "PRO Z690-A",
        reacondicionado: false,
        precio_venta_publico: 209.99,
        unidades_vendidas: 20,
        unidades_restantes: 40,
        fecha_venta: new Date("2021-12-04"),
        precio_compra_distribuidora: 120,
        cliente: "SIBOX",
        distribuidor: "Red Computer",
    },
    {
        _id: 8,
        articulo: "Placa Base",
        fabricante: ["Asus"],
        modelo: "PRIME Z590-P",
        reacondicionado: false,
        precio_venta_publico: 149.99,
        unidades_vendidas: 10,
        unidades_restantes: 80,
        fecha_venta: new Date("2021-11-17"),
        precio_compra_distribuidora: 90,
        cliente: "SIBOX",
        distribuidor: "NeoByte",
    },
    {
        _id: 9,
        articulo: "Placa Base",
        fabricante: ["MSI"],
        modelo: "B550 GAMING PLUS",
        reacondicionado: false,
        precio_venta_publico: 149.99,
        unidades_vendidas: 40,
        unidades_restantes: 40,
        fecha_venta: new Date("2019-1-29"),
        precio_compra_distribuidora: 90,
        cliente: "Gesimar",
        distribuidor: "PCComponentes",
    },
    {
        _id: 10,
        articulo: "Placa Base",
        fabricante: ["Asus"],
        modelo: "TUF Gaming X570 Plus",
        reacondicionado: false,
        precio_venta_publico: 189.99,
        unidades_vendidas: 10,
        unidades_restantes: 80,
        fecha_venta: new Date("2020-06-21"),
        precio_compra_distribuidora: 130,
        cliente: "Hispalense",
        distribuidor: "Red Computer",
    },
    {
        _id: 11,
        articulo: "Placa Base",
        fabricante: ["Asus"],
        modelo: "ROG STRIX Z690-F GAMING WIFI",
        reacondicionado: false,
        precio_venta_publico: 249.99,
        unidades_vendidas: 5,
        fecha_venta: new Date("2021-11-09"),
        precio_compra_distribuidora: 140,
        cliente: "MBR",
        distribuidor: "Coolmod",
    },
    {
        _id: 12,
        articulo: "Placa Base",
        fabricante: ["Gigabyte"],
        modelo: "Z690 AORUS ELITE",
        reacondicionado: false,
        precio_venta_publico: 249.99,
        unidades_vendidas: 30,
        unidades_restantes: 5,
        fecha_venta: new Date("2021-05-13"),
        precio_compra_distribuidora: 180,
        cliente: "Alba IBS",
        distribuidor: "Red Computer",
    },
    {
        _id: 13,
        articulo: "Placa Base",
        fabricante: ["MSI"],
        modelo: "MAG Z590 TORPEDO",
        reacondicionado: false,
        precio_venta_publico: 179.99,
        unidades_vendidas: 30,
        unidades_restantes: 10,
        fecha_venta: new Date("2020-12-11"),
        precio_compra_distribuidora: 110,
        cliente: "Informática Limón",
        distribuidor: "PCComponentes",
    },
    {
        _id: 14,
        articulo: "Placa Base",
        fabricante: ["Asus"],
        modelo: "ROG STRIX X570-E GAMING WIFI II",
        reacondicionado: true,
        precio_venta_publico: 199.99,
        unidades_vendidas: 3,
        unidades_restantes: 60,
        fecha_venta: new Date("2019-07-15"),
        precio_compra_distribuidora: 140,
        cliente: "Gesimar",
        distribuidor: "Coolmod",
    },
    {
        _id: 15,
        articulo: "RAM",
        fabricante: ["Corsair"],
        modelo: "Vengeance RGB Pro DDR4 3200 16GB 2x8GB",
        reacondicionado: true,
        precio_venta_publico: 89.99,
        unidades_vendidas: 40,
        unidades_restantes: 260,
        fecha_venta: new Date("2019-06-12"),
        precio_compra_distribuidora: 50,
        cliente: "Gesimar",
        distribuidor: "PCComponentes",
    },
    {
        _id: 16,
        articulo: "RAM",
        fabricante: ["GSkill"],
        modelo: "Trident Z RGB DDR4 3200 2x8GB",
        reacondicionado: false,
        precio_venta_publico: 99.99,
        unidades_vendidas: 200,
        fecha_venta: new Date("2020-01-12"),
        precio_compra_distribuidora: 70,
        cliente: "Informática Limón",
        distribuidor: "Red Computer",
    },
    {
        _id: 17,
        articulo: "RAM",
        fabricante: ["Corsair"],
        modelo: "Vengeance LPX DDR4 3200 2X8GB",
        reacondicionado: false,
        precio_venta_publico: 69.99,
        unidades_vendidas: 150,
        unidades_restantes: 10,
        fecha_venta: new Date("2021-02-21"),
        precio_compra_distribuidora: 55,
        cliente: "SIBOX",
        distribuidor: "NeoByte",
    },
    {
        _id: 18,
        articulo: "RAM",
        fabricante: ["Team Group"],
        modelo: "Delta White RGB DDR4 3200 2X8GB",
        reacondicionado: false,
        precio_venta_publico: 89.99,
        unidades_vendidas: 100,
        unidades_restantes: 30,
        fecha_venta: new Date("2020-08-10"),
        precio_compra_distribuidora: 75,
        cliente: "Hispalense",
        distribuidor: "PCComponentes",
    },
    {
        _id: 19,
        articulo: "Gráfica",
        fabricante: ["Nvidia", "MSI"],
        modelo: "RTX 3060 Ti GAMING Z TRIO LHR 8GB",
        reacondicionado: false,
        precio_venta_publico: 1000.99,
        unidades_vendidas: 10,
        fecha_venta: new Date("2020-11-10"),
        precio_compra_distribuidora: 900,
        cliente: "Hispalense",
        distribuidor: "NeoByte",
    },
    {
        _id: 20,
        articulo: "Gráfica",
        fabricante: ["Nvidia", "PNY"],
        modelo: "RTX 3060 Ti XLR8 Gaming REVEL EPIC-X RGB 8GB",
        reacondicionado: false,
        precio_venta_publico: 1100.99,
        unidades_vendidas: 20,
        fecha_venta: new Date("2021-01-01"),
        precio_compra_distribuidora: 850,
        cliente: "Gesimar",
        distribuidor: "PCComponentes",
    },
    {
        _id: 21,
        articulo: "Gráfica",
        fabricante: ["Nvidia", "EVGA"],
        modelo: "GTX 1650 SC Ultra Gaming 4GB",
        reacondicionado: false,
        precio_venta_publico: 349.99,
        unidades_vendidas: 30,
        unidades_restantes: 10,
        fecha_venta: new Date("2020-09-20"),
        precio_compra_distribuidora: 250,
        cliente: "Informática Limón",
        distribuidor: "Coolmod",
    },
    {
        _id: 22,
        articulo: "Gráfica",
        fabricante: ["AMD", "PowerColor"],
        modelo: "Red Devil AMD Radeon RX 6600XT 8GB",
        reacondicionado: false,
        precio_venta_publico: 800.99,
        unidades_vendidas: 30,
        unidades_restantes: 5,
        fecha_venta: new Date("2021-08-12"),
        precio_compra_distribuidora: 650,
        cliente: "Alba IBS",
        distribuidor: "Red Computer",
    },
    {
        _id: 23,
        articulo: "Gráfica",
        fabricante: ["AMD", "XFX"],
        modelo: "Speedster SWFT 210 AMD Radeon RX 6600 XT 8GB",
        reacondicionado: false,
        precio_venta_publico: 790.99,
        unidades_vendidas: 25,
        unidades_restantes: 10,
        fecha_venta: new Date("2021-10-05"),
        precio_compra_distribuidora: 650,
        cliente: "SIBOX",
        distribuidor: "PCComponentes",
    },
    {
        _id: 24,
        articulo: "Gráfica",
        fabricante: ["AMD", "PowerColor"],
        modelo: "Radeon RX 6800XT Red Devil 16GB",
        reacondicionado: false,
        precio_venta_publico: 1450.99,
        unidades_vendidas: 5,
        fecha_venta: new Date("2020-12-25"),
        precio_compra_distribuidora: 1200,
        cliente: "MBR",
        distribuidor: "Coolmod",
    },
    {
        _id: 25,
        articulo: "Fuente de Alimentación",
        fabricante: ["Corsair"],
        modelo: "CV Series CV750 750W 80 Plus Bronze",
        reacondicionado: false,
        precio_venta_publico: 139.99,
        unidades_vendidas: 50,
        unidades_restantes: 30,
        fecha_venta: new Date("2019-12-02"),
        precio_compra_distribuidora: 100,
        cliente: "MBR",
        distribuidor: "PCComponentes",
    },
    {
        _id: 26,
        articulo: "Fuente de Alimentación",
        fabricante: ["Corsair"],
        modelo: "RM Series RM850 850W 80 Plus Gold Full Modular",
        reacondicionado: true,
        precio_venta_publico: 149.99,
        unidades_vendidas: 5,
        unidades_restantes: 10,
        fecha_venta: new Date("2020-03-03"),
        precio_compra_distribuidora: 120,
        cliente: "Gesimar",
        distribuidor: "Coolmod",
    },
    {
        _id: 27,
        articulo: "Fuente de Alimentación",
        fabricante: ["Nfortec"],
        modelo: "Sagitta RGB 650W 80 Plus Gold Full Modular",
        reacondicionado: false,
        precio_venta_publico: 90,
        unidades_vendidas: 70,
        unidades_restantes: 20,
        fecha_venta: new Date("2021-01-06"),
        precio_compra_distribuidora: 70,
        cliente: "Informática Limón",
        distribuidor: "Red Computer",
    },
    {
        _id: 28,
        articulo: "Fuente de Alimentación",
        fabricante: ["Corsair"],
        modelo: "SF750 750W SFX 80 Plus Platinum Full Modular",
        reacondicionado: false,
        precio_venta_publico: 169.99,
        unidades_vendidas: 10,
        unidades_restantes: 30,
        fecha_venta: new Date("2020-10-18"),
        precio_compra_distribuidora: 140,
        cliente: "Alba IBS",
        distribuidor: "Coolmod",
    },
    {
        _id: 29,
        articulo: "Fuente de Aplimentación",
        fabricante: ["Nox"],
        modelo: "Urano VX 650W 80 Bronze 120MM PWM",
        reacondicionado: false,
        precio_venta_publico: 89.99,
        unidades_vendidas: 60,
        unidades_restantes: 100,
        fecha_venta: new Date("2019-11-27"),
        precio_compra_distribuidora: 80,
        cliente: "SIBOX",
        distribuidor: "PCComponentes",
    },
    {
        _id: 30,
        articulo: "Almacenamiento",
        fabricante: ["Seagate"],
        modelo: "BarraCuda",
        reacondicionado: false,
        precio_venta_publico: 30,
        unidades_vendidas: 300,
        unidades_restantes: 200,
        fecha_venta: new Date("2019-01-01"),
        precio_compra_distribuidora: 15,
        cliente: "Gesimar",
        distribuidor: "PCComponentes",
    },
    {
        _id: 31,
        articulo: "Almacenamiento",
        fabricante: ["Kioxia"],
        modelo: "EXCERIA",
        reacondicionado: false,
        precio_venta_publico: 59.99,
        unidades_vendidas: 110,
        unidades_restantes: 90,
        fecha_venta: new Date("2020-08-20"),
        precio_compra_distribuidora: 40,
        cliente: "Hispalense",
        distribuidor: "Red Computer",
    },
    {
        _id: 32,
        articulo: "Almacenamiento",
        fabricante: ["Kingston"],
        modelo: "A400",
        reacondicionado: false,
        precio_venta_publico: 59.99,
        unidades_vendidas: 200,
        unidades_restantes: 70,
        fecha_venta: new Date("2020-09-05"),
        precio_compra_distribuidora: 45,
        cliente: "SIBOX",
        distribuidor: "Red Computer",
    },
    {
        _id: 33,
        articulo: "Almacenamiento",
        fabricante: ["Samsung"],
        modelo: "970 EVO Plus",
        reacondicionado: false,
        precio_venta_publico: 160,
        unidades_vendidas: 20,
        unidades_restantes: 10,
        fecha_venta: new Date("2019-11-27"),
        precio_compra_distribuidora: 110,
        cliente: "Informática Limón",
        distribuidor: "PCComponentes",
    },
    {
        _id: 34,
        articulo: "Almacenamiento",
        fabricante: ["Samsung"],
        modelo: "980 Pro",
        reacondicionado: false,
        precio_venta_publico: 200,
        unidades_vendidas: 20,
        unidades_restantes: 10,
        fecha_venta: new Date("2021-11-27"),
        precio_compra_distribuidora: 150,
        cliente: "MBR",
        distribuidor: "NeoByte",
    },
    {
        _id: 35,
        articulo: "Almacenamiento",
        fabricante: ["MSI"],
        modelo: "Spatium M390",
        reacondicionado: false,
        precio_venta_publico: 199.99,
        unidades_vendidas: 40,
        unidades_restantes: 45,
        fecha_venta: new Date("2021-06-12"),
        precio_compra_distribuidora: 160,
        cliente: "SIBOX",
        distribuidor: "Coolmod",
    },
    {
        _id: 36,
        articulo: "Almacenamiento",
        fabricante: ["Seagate"],
        modelo: "IronWolf NAS",
        reacondicionado: false,
        precio_venta_publico: 119.99,
        unidades_vendidas: 50,
        unidades_restantes: 30,
        fecha_venta: new Date("2020-04-14"),
        precio_compra_distribuidora: 80,
        cliente: "Alba IBS",
        distribuidor: "Red Computer",
    },
    {
        _id: 37,
        articulo: "Caja",
        fabricante: ["Tempest"],
        modelo: "Spectra RGB con Ventana",
        reacondicionado: true,
        precio_venta_publico: 35.99,
        unidades_vendidas: 60,
        unidades_restantes: 20,
        fecha_venta: new Date("2020-09-23"),
        precio_compra_distribuidora: 15,
        cliente: "Informática Limón",
        distribuidor: "PCComponentes",
    },
    {
        _id: 38,
        articulo: "Caja",
        fabricante: ["Nfortec"],
        modelo: "Lynx Cristal Templado RGB Blanco",
        reacondicionado: false,
        precio_venta_publico: 49.99,
        unidades_vendidas: 75,
        unidades_restantes: 5,
        fecha_venta: new Date("2021-02-28"),
        precio_compra_distribuidora: 30,
        cliente: "Hispalense",
        distribuidor: "Red Computer",
    },
    {
        _id: 39,
        articulo: "Caja",
        fabricante: ["Asus"],
        modelo: "GX601 Rog Strix Helios Cristal Templado",
        reacondicionado: false,
        precio_venta_publico: 250,
        unidades_vendidas: 10,
        unidades_restantes: 90,
        fecha_venta: new Date("2021-11-17"),
        precio_compra_distribuidora: 180,
        cliente: "MBR",
        distribuidor: "NeoByte",
    },
    {
        _id: 40,
        articulo: "Caja",
        fabricante: ["Tempest"],
        modelo: "Spook RGB",
        reacondicionado: true,
        precio_venta_publico: 30,
        unidades_vendidas: 80,
        unidades_restantes: 110,
        fecha_venta: new Date("2019-06-01"),
        precio_compra_distribuidora: 15,
        cliente: "Gesimar",
        distribuidor: "Coolmod",
    },

])