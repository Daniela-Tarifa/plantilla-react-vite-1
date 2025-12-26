/* ------------------------------------------------------------------------------------------ */
/*              Este código funciona con el json de repuesto y el mockapi                     */
/*   comenta este código y descomenta el de abajo y solo quieres q funcione con el mockapi    */
/* ------------------------------------------------------------------------------------------ */

const BASE_URL = import.meta.env.VITE_MOCKAPI_URL;

// Función auxiliar para no repetir código al buscar el JSON local
const getLocalData = async () => {
  const localRes = await fetch('/data/products.json');
  if (!localRes.ok) throw new Error("No se encontró el JSON local");
  return await localRes.json();
};

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    alert("Por favor lee el README.md: coloca la credencial de tu mockapi en .env para crear un producto");
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProducts = async (category) => {
  try {
    if (!BASE_URL) throw new Error("Sin API URL");
    const res = await fetch(category ? `${BASE_URL}?category=${category}` : BASE_URL);
    if (!res.ok) throw new Error("Error en MockAPI");
    return await res.json();
  } catch (error) {
    console.warn("Cargando lista desde public/data/products.json");
    const localData = await getLocalData();
    return category ? localData.filter(p => p.category === category) : localData;
  }
};

export const getProductById = async (id) => {
  try {
    if (!BASE_URL) throw new Error("Sin API URL");
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Error en MockAPI");
    return await res.json();
  } catch (error) {
    console.warn("Cargando detalle desde public/data/products.json");
    const localData = await getLocalData();
    // Buscamos por ID (usando == por si uno es string y otro number)
    const producto = localData.find(p => p.id == id);
    if (!producto) throw new Error("Producto no encontrado");
    return producto;
  }
};




/* ------------------------------------------------------------------------------------------ */
/*    Descomenta este codigo si quieres uno que no este vinculado con el json de repuesto     */
/*   y solo este vinculado con el mockapi con esto ya puedes borrar el json q esta en         */
/*      public>data>products.json solo queda colocar la credencia del immgbb en el .env       */
/* ------------------------------------------------------------------------------------------ */

/*
const BASE_URL = import.meta.env.VITE_MOCKAPI_URL;

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};

export const getProducts = async (category)=>{
  let url = BASE_URL;
  
  if (category) {
    url = `${BASE_URL}?category=${category}`
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al listar productos");
  }

  const results = await res.json();
  return results;
};

//traer uno por id
export const getProductById = async (id) =>{
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Error al obtener el producto");
  }
  return await res.json();
}
*/