/*
    Necesitamos saber el valor de la compra las tarjetas graficas del cliente Gesimar
*/
db.ventas.aggregate([
    {$match: 
        {$and: [
            {articulo: /gr.fica/i},
            {cliente: /gesimar/i}
        ]
        }
    },
    {$group:
        {_id: "$articulo",
    total:
        {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}}}    
    }
 ])

 /*
 Cual es el valor total de cada articulo comprado por Informática Limón
 */
 db.ventas.aggregate([
    {$match:
        {cliente: {$regex: /lim.n/i}}
    },
    {$group: 
        {_id: "$articulo", total: {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}}}
    }  
])

/*
    Cuales han sido los beneficios que se ha generado a partir de 2020 en total
*/
db.ventas.aggregate([
    {$match:
        {$expr: {$eq: [{ $year: "$fecha_venta" }, 2020]}},
    },
    {$group:
        {_id: "Beneficio_2020", total: {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}}}
    }
])

/*
    Aqui podemos ver que el caso anterior equivale a la siguiente operacion del match
*/
db.ventas.aggregate([
    {$match:
        {$and: [
            {fecha_venta: {$gte: new Date("2020-01-01")}},
            {fecha_venta: {$lt: new Date("2021-01-01")}}
        ]}
    },
    {$group:
        {_id: "Beneficio_2020", total: {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}}}
    }
])

/*
    Un cliente quiere comprar un producto de cada tipo teniendo en cuenta que tenga stock.
*/
db.ventas.aggregate([
    {$match:
        {unidades_restantes: {$exists: true}}
    },
    {$group:
        {_id: null, total: {$sum: "$precio_venta_publico"}}
    }
])

/*
    Queremos saber cual es el valor de compra de MBR en 2020 para hacer una factura 
*/
db.ventas.aggregate([
    {$match:
        {$and: [
            {$expr: {$eq: [{ $year: "$fecha_venta" }, 2020]}},
            {cliente: /mbr/i},
        ]}},
    {$group:
        {_id: "Factura_2020", total: {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}}}
    }
])

/*
    El cliente mbr nos paga en efectivo con 30000€, ¿cuanto hay que devolverle?
*/
db.ventas.aggregate([
    {$match:
        {$and: [
            {$expr: {$eq: [{ $year: "$fecha_venta" }, 2020]}},
            {cliente: /mbr/i},
        ]}},
    {$group:
        {_id: "Factura_2020", total: {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}},
        }
    },
    {$project:
        {_id: "Dinero_a_devolver", resto: {$subtract:[30000, "$total"]}}
    }
])

/*
    El cliente Gesimar no tiene suficiente dinero para pagar a partir del año 2020 por lo que pide ayuda a otra empresa.
    Por lo que pagaran los años a partir de 2020 a medias con 2020 incluido.
*/
db.ventas.aggregate([
    {$match:
        {$and: [
        {$expr: {$gte: [{ $year: "$fecha_venta" }, 2020]}},
        {cliente: /gesimar/i},
        ]}},
    {$group:
        {_id: "Factura_2020", total: {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}}}
    },
    {$project:
        {_id: "Factura_2020_para_cada_empresa", mitad: {$divide: ["$total", 2]}}
    }
])

/*
    Un cliente necesita un disco de almacenamiento, por lo que le mostraremos el mas caro y el mas barato.
    Hay que tener en cuenta que tenga stock y que no sea reacondicionado.
*/
db.ventas.aggregate([
    {$match:
        {$and: [
        {articulo: /almacenamiento/i},
        {reacondicionado: false}
        ]}},
    {$group:
        {_id: "Precio_discos", minimo: {$min: "$precio_venta_publico"}, maximo: {$max: "$precio_venta_publico"}}
    },
])

/*
    Queremos saber el promedio de ventas de cada articulo del distribuidor PCComponentes.
*/
db.ventas.aggregate([
    {$match:
        {distribuidor: /pccomponentes/i},
    },
    {$group:
        {_id: "$articulo", promedio: {$avg: "$unidades_vendidas"}}
    },
])

/*
    Necesitamos saber el valor de los discos de almacenamiento de forma ascendente. Hay 
    que tener en cuenta que quede stock y que su año de venta fuera en 2020
*/
db.ventas.aggregate([
    {$match:
       {$and: [
            {articulo: {$regex: /almac/i}},
            {$expr: {$eq: [{ $year: "$fecha_venta" }, 2020]}},
            {unidades_restantes: {$exists: true}}
       ]}
    },
    {$project:
        {_id: 0, modelo: 1, precio_venta_publico: 1}
    },
    {$sort: {precio_venta_publico: 1}}
])

/*
    Necesitamos saber el valor de algunas placas base. Hay que tener en cuenta 
    que quede stock, no sea reacondicionada y que su año de venta fuera en 2021.
    Solo queremos que nos muestre los 2 modelos mas caros
*/
db.ventas.aggregate([
    {$match:
       {$and: [
            {articulo: {$regex: /placa/i}},
            {$expr: {$eq: [{ $year: "$fecha_venta" }, 2021]}},
            {unidades_restantes: {$exists: true}},
            {reacondicionado: false}
       ]}
    },
    {$project:
        {_id: 0, modelo: 1, precio_venta_publico: 1}
    },
    {$sort: {precio_venta_publico: -1}},
    {$limit: 2}
])

 /*
 Cual es el valor total de cada articulo comprado por Informática Limón.
 No queremos que nos muestre mas de 1 decimales, para hacerlo usaremos un redondeo.
 */
 db.ventas.aggregate([
    {$match:
        {cliente: {$regex: /lim.n/i}}
    },
    {$group: 
        {_id: "$articulo", total: {$sum: {$multiply: ["$precio_venta_publico","$unidades_vendidas"]}}}
    },  
    {$project: {total: {$round: ["$total", 1]}}}
])

/*
    Necesitamos saber cuales son los articulos que salieron en noviembre, del año 2021.
    Aparte su precio tiene que ser inferior o igual a 200
*/
db.ventas.aggregate([
    {$match:
       {$and: [
            {$and: [
                {$expr: {$eq: [{ $year: "$fecha_venta" }, 2021]}},
                {$expr: {$eq: [{ $month: "$fecha_venta" }, 11]}},
            ]},
            {precio_venta_publico: {$lte: 200}},
       ]}
    },
    {$project:
        {_id: 0, modelo: 1, precio_venta_publico: 1}
    },
])