export const getProductByName = (name = "") => {

  name = name.toLocaleLowerCase();
  return products.filter( product.name.toLocaleLowerCase().includes( name));

}