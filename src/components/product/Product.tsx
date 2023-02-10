import { useState } from "react"
import { Checkbox, Container, ContentSelect, Image, Name, Price, Stock } from "./Product.style"

export type ProductProps = {
  name: string
  image?: string
  price?: number
  total_stock?: number
  onClick?: () => void
  checkbox?: boolean
  clickCheckbox?: (checked: boolean) => void
  boxShadow?: boolean
}

export const Product = ({
  name,
  image,
  price,
  total_stock,
  onClick,
  checkbox,
  clickCheckbox,
  boxShadow
}: ProductProps) => {
  const [ checked, setChecked ] = useState(false)

  return (
    <Container onClick={onClick} boxShadow={boxShadow}>
      <Image src={image} alt="Product" />
      <Name>{name}</Name>
      <Price>R$ {price?.toFixed(2)}</Price>
      <ContentSelect>
        <Stock>Estoque: {total_stock}</Stock>
        {checkbox && (
          <Checkbox 
            readOnly
            type="checkbox"
            checked={checked}
            onClick={() => {
              setChecked(!checked)
              clickCheckbox && clickCheckbox(!checked)
            }}
          />
        )}
      </ContentSelect>
    </Container>
  )
}