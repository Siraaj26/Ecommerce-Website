import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "@/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 0px 0 30px;
`;
const Title = styled.p`
    color:#f5f5f4;
    margin:0;
    font-weight:500;
    font-size:2.5rem;
`;
const Desc = styled.p`
    color:#ccc;
    font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    padding: 0px 10px;
    gap: 30px;
    img{
        max-width: 100%;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap:10px;
    margin-top:35px
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
        addProduct(product._id); 
    }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <div>
                                <img width="400" height="60" src="https://alx-ecommerce.s3.amazonaws.com/1686941748644.png" />
                            </div>
                            <Title></Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={"/products/"+product._id} outline white >Read more</ButtonLink>
                                <Button white onClick={addFeaturedToCart}>
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img width="300" height="350" src="https://alx-ecommerce.s3.amazonaws.com/1686907447712.png" />
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}