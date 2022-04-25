import React, { FC } from "react";

export enum CartVariant {
    outline = 'outlined',
    primary = 'primary'
}

interface CartProps {
    width?: string;
    height?: string;
    variable: CartVariant;
    children?: React.ReactChild | React.ReactNode;
    click: (num: Number) => void;
}

const Cart: FC<CartProps> = ({
    width,
    height,
    children,
    variable,
    click
}) => {

    const [numb, setNumb] = React.useState(0);

    return (
        <div onClick={() => click(numb)} style={{
            width, height,
            border: variable === CartVariant.outline ? '2px solid gray' : 'none',
            backgroundColor: variable === CartVariant.primary ? 'gray' : '',
            marginBottom:20
        }}>
            {children}
        </div>
    )
}

export default Cart;