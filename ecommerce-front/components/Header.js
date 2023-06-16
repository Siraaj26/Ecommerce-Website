import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const StyledHeader = styled.header`
    background-color: #222;
    
`;
const Logo = styled(Link)`
    color:#fff;
    text-decoration:none;
    padding: 10px 0;
`;
const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0px 0;
`;
const StyledNav = styled.nav`
    display: flex;
    gap: 25px;
    padding: 50px 0;
`;
const NavLink = styled(Link)`
    color:#ccc;
    text-decoration:none;
    font-weight: 500;
`;
const ColumnsWrapper = styled.div`
    display: flex;
    gap: 10px;
    
`;
const StyledText = styled.div`
    color:#222;
`;

export default function Header(){
    const {cartProducts} = useContext(CartContext);
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <ColumnsWrapper>
                        <StyledText className="mt-2">
                            <div className="text">Comic Con</div>
                            <img href={'/'} width="106" height="72" src="https://comicconafrica.co.za/wp-content/uploads/2023/01/CCCT-Black.png" />
                        </StyledText>
                        <Logo href={'/'}></Logo>
                    </ColumnsWrapper>
                    <StyledNav>
                        <NavLink href={'/'}>HOME</NavLink>
                        <NavLink href={'/products'}>ALL PRODUCTS</NavLink>
                        <NavLink href={'/categories'}>CATEGORIES</NavLink>
                        <NavLink href={'/account'}>ACCOUNT</NavLink>
                        <NavLink href={'/cart'}>CART ({cartProducts.length})</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}