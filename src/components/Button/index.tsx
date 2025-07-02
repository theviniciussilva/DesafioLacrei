import { PropsWithChildren } from "react"
import { ButtonDefault } from "./style"

type Props = {
    title: string
    type: "submit" | "button" | "reset"
    children?: React.ReactNode
    onClick?: () => void 
}

const Button = ({title, type, children, onClick}: Props) => {

    return(
        <ButtonDefault onClick={onClick} type={type}>
            {title}
            {children}
        </ButtonDefault>
    )
}

export default Button