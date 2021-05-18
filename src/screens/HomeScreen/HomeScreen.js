import React, { useReducer, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputIcon } from '../../components/InputIcon';
import { Label } from '../../components/Label';
import { Table } from '../../components/Table';
import { Textarea } from '../../components/Textarea';
import { Typography } from '../../components/Typography';
import { IoCloseOutline, IoAddSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { StyledColumn, StyledContainer, StyledGrid, StyledForm, StyledFormGroup } from './HomeScreen.styles';
import { useForm } from '../../hooks/useForm';
import { productReducer } from '../../reducers/productReducer';
import { Alert } from '../../components/Alert/Alert';

const init = () => {
  return JSON.parse(localStorage.getItem('products')) || [];
};


export const HomeScreen = () => {

  const [ products, dispatch ] = useReducer(productReducer, [], init);

  const [searchProduct, setSearchProduct] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeProduct, setActiveProduct] = useState(products);
  const [newQuantity, setNewQuantity] = useState(products)

  const { actualIndex, actualName, actualPrice, actualQuantity, actualDescription, actualId } = activeProduct;


  useEffect( ()=> {
    localStorage.setItem('products', JSON.stringify( products ));

    const results = products.filter( product => product.name.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase()) );
    setSearchResults(results);

  }, [searchProduct, products, newQuantity, activeProduct]);
    
  const [{name, price, quantity, description}, handleInputChange, reset ] = useForm({
    name: '',
    price: '',
    quantity: '',
    description: '',
  });
    
  const handleAddProduct = (newProduct) => {
    dispatch({
      type: "add",
      payload: newProduct
    });
  };
  
  const handleDelete = (productId) => {
    const action = {
      type: 'delete',
      payload: productId
    }
    
    dispatch(action);
  };
    
  const handleSubmit = (e) => {
      
    e.preventDefault();
    
    const newProduct = {
      id: new Date().getTime(),
      name: name,
      price: price,
      quantity: quantity,
      description: description
    };
  
    handleAddProduct(newProduct);
  
    reset();
    
  };
  
  const handleFilter = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleActiveEvent = (index) => {

    const indexProduct = [...products];

    const actualProduct = {
      actualIndex: index,
      actualId: indexProduct[index].id,
      actualName: indexProduct[index].name,
      actualPrice: indexProduct[index].price,
      actualQuantity: parseFloat(indexProduct[index].quantity),
      actualDescription: indexProduct[index].description
    };
    setActiveProduct(actualProduct);
  };

  const handleQuantityIncrease = (index) => {
    
    const modifyActualQuantity = activeProduct;
    modifyActualQuantity.actualQuantity++;

    const modifyQuantity = [...newQuantity];
    modifyQuantity[index].quantity++;

    setNewQuantity(modifyQuantity);
    setActiveProduct(modifyActualQuantity);

  };

  const handleQuantityDecrease = (index) => {

    const modifyActualQuantity = activeProduct;
    modifyActualQuantity.actualQuantity--;

    const modifyQuantity = [...newQuantity];
    modifyQuantity[index].quantity--;
    
    setNewQuantity(modifyQuantity);
    setActiveProduct(modifyActualQuantity);
  };

  return (
    <StyledContainer>
      <Typography
        variant="h1"
      >
        Inventario App
      </Typography>
      
      <StyledColumn>
        <Typography
          variant="h2"
        >
          nuevo producto
        </Typography>

        <StyledForm onSubmit={handleSubmit}>
          <StyledGrid>
            <StyledFormGroup className="w-1/2 pr-2 mt-2">
              <Label value={`Nombre producto`}></Label>
              <Input
                type="text"
                name="name"
                placeholder="Ingresa el nombre del producto"
                value={name}
                onChange={handleInputChange}
              />
            </StyledFormGroup>
            <StyledFormGroup className="w-1/4 mt-2">
              <Label value={`Precio`}></Label>
              <Input
                type="text"
                name="price"
                placeholder="Precio"
                value={price}
                onChange={handleInputChange}
              />
            </StyledFormGroup>
            <StyledFormGroup className="w-1/4 mt-2 pl-2">
              <Label value={`Cantidad`}></Label>
              <Input
                type="text"
                name="quantity"
                placeholder="Cantidad"
                value={quantity}
                onChange={handleInputChange}
              />
            </StyledFormGroup>
            <StyledFormGroup className="w-3/4 pr-2 mt-2">
              <Label value={`Descripción`}></Label>
              <Textarea
                name="description"
                placeholder="Describa el producto"
                value={description}
                onChange={handleInputChange}
              />
            </StyledFormGroup>
            <StyledFormGroup className="w-1/4 pl-2 mt-2">
              <Button
                type="submit"
                label="Agregar"
                className="w-full"
              >
              </Button>
            </StyledFormGroup>
          </StyledGrid>
        </StyledForm>

      </StyledColumn>
      
      <StyledGrid>
        
        <StyledColumn>
          <Typography
            variant="h2"
          >
            listado de productos
          </Typography>
          <StyledGrid className="mt-4">
            <InputIcon
              placeholder="Filtrar..."
              value={searchProduct}
              onChange={handleFilter}
            />
          </StyledGrid>


          {
            (products.length === 0)
            ?
            <Alert label={"Ingresa productos al inventario"}>
            </Alert>
            :
            <Table className="mt-4">
              <Table.Head>
                <Table.TR>
                  <Table.TH>Nombre</Table.TH>
                  <Table.TH>Descripción</Table.TH>
                  <Table.TH>Precio</Table.TH>
                  <Table.TH>Cant.</Table.TH>
                  <Table.TH>Borrar</Table.TH>
                </Table.TR>
              </Table.Head>
                  {
                    <Table.Body>
                      {
                        searchResults.map ((product, index) => (
                          <Table.TR key={product.id} className="cursor-pointer" onClick={() => handleActiveEvent(index)}>
                            <Table.TD>{product.name}</Table.TD>
                            <Table.TD className="text-left truncate overflow-hidden max-w-0">{product.description}</Table.TD>
                            <Table.TD>${product.price}</Table.TD>
                            <Table.TD>{product.quantity}</Table.TD>
                            <Table.TD className="text-center">
                              <Button
                                label={<IoCloseOutline className="mx-auto"/>}
                                variant="danger"
                                className="w-6 text-center mx-auto"
                                onClick={ () => handleDelete(product.id)}
                              >
                              </Button>
                            </Table.TD>
                          </Table.TR>
                        ))
                      }
                    </Table.Body>
                  }
            </Table>
          }

        </StyledColumn>

        
        <StyledColumn>
          <Typography
            variant="h2"
          >
            detalle
          </Typography>
            {
              (actualId > 0)
              ?
              <StyledGrid>
              <StyledColumn className="w-1/2">
                <Typography
                  variant="h3"
                >
                  {actualName}
                </Typography>
                <Typography
                  variant="label"
                  className="mb-2"
                >
                  ${actualPrice}
                </Typography>
                <Typography
                >
                  {actualDescription}
                </Typography>

              </StyledColumn>
              <StyledColumn className="w-1/2">
                <Typography
                  variant="labelRound"
                >
                  {actualQuantity}
                </Typography>
                <StyledGrid className="justify-center mt-4">
                  <Button
                    label={<FiMinus className="mx-auto"/>}
                    variant="minus"
                    className="w-8"
                    onClick={() => handleQuantityDecrease(actualIndex)}
                  >
                  </Button>
                  <Button
                    label={<IoAddSharp className="mx-auto"/>}
                    variant="add"
                    className="w-8"
                    onClick={() => handleQuantityIncrease(actualIndex)}
                  >
                  </Button>
                </StyledGrid>
              </StyledColumn>
              </StyledGrid>
              :
              <Alert label={"Selecciona un producto de la lista"}>
              </Alert>
            }
        </StyledColumn>

      </StyledGrid>
    </StyledContainer>
  )
}
