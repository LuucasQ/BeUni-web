import { useEffect, useState } from "react"
import { ListProducts } from "./api/services/ListProducts"
import { Container, ContentProducts, Products, SelectedProducts, ShowSelectedProducts, Title } from "./App.style"
import { Menu } from "./components/menu/Menu"
import { Product } from "./components/product/Product"
import './styles/global.css'
import { ProductType } from "./types/product"

function App() {
  const [ name, setName ] = useState('')
  const [ products, setProducts ] = useState<ProductType[]>([])
  const [ selectedProducts, setSelectedProducts ] = useState<ProductType[]>([])
  const [ expandedSelectedProducts, setExpandedSelectedProducts ] = useState(false)

  const fetchProducts = async () => {
    try {
      const { products } = await ListProducts({ name })

      setProducts(products)
    }catch (err){
      throw new Error('Ocorreu um problema, tente novamente.')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [name])

  const handleSelectProduct = (product: ProductType) => {
    const index = selectedProducts.findIndex((selectedProduct) => selectedProduct.id === product.id)

    if(index > -1){
      setSelectedProducts((prev) => {
        prev.splice(index, 1)
        return [...prev]
      })
    }else {
      setSelectedProducts((prev) => ([...prev, product]))
    }

    if(selectedProducts.length === 0){
      setExpandedSelectedProducts(false)
    }
  }

  console.log(selectedProducts && selectedProducts.length > 0);
  

  return (
    <Container>
      <Menu 
        onClick={(value) => {
          setName(value)
        }}
      />
      <ContentProducts>
        <Title>Conheça alguns de nossos produtos!</Title>
        <Products>
          {products.map((product) => (
            <Product 
              key={product.name}
              name={product.name}
              image={product.image[0].url}
              price={product.price}
              total_stock={product.total_stock}
              checkbox
              clickCheckbox={() => handleSelectProduct(product)}
            />
          ))}
        </Products>
        {selectedProducts && selectedProducts.length > 0 && (
          <ShowSelectedProducts
            onClick={() => setExpandedSelectedProducts(!expandedSelectedProducts)}
            expanded={expandedSelectedProducts}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <p>{selectedProducts.length}</p> <p>produto(s) selecionado(s).</p>
            </div>
            <SelectedProducts>
              {selectedProducts.map((product, index) => (
                <Product 
                  key={index}
                  name={product.name}
                  image={product.image[0].url}
                  price={product.price}
                  total_stock={product.total_stock}
                  boxShadow
                />
              ))}
            </SelectedProducts>
          </ShowSelectedProducts>
        )}
      </ContentProducts>
    </Container>
  )
}

export default App