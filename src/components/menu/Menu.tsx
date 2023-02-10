import { useState } from "react"
import { Button, Container, Input, Logo } from "./Menu.style"
import logo from '../../assets/beuni-menor.png'
import { ProductType } from "../../types/product"

type MenuProps = {
  onClick: (value: string) => void
}

export const Menu = ({ onClick }: MenuProps) => {
  const [ value, setValue ] = useState('')

  return (
    <Container>
      <Logo src={logo} />
      <Input onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => onClick(value)}>Pesquisar</Button>
    </Container>
  )
}