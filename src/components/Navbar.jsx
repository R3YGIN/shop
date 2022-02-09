import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60px;
	background-color: #000;
	${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mobile({ padding: "10px 0" })}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	color: #fff;
		${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	border-radius: 10px;
	`

const Input = styled.input`
	border: none;
	background-color: #000;
	color: #fff;
	${mobile({ width: "50px" })}
`

const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: bold;
	color: #fff;
	${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	color: #fff;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
	return <Container>
		<Wrapper>
			<Left>
				<Language>RU</Language>
				<SearchContainer>
					<Input placeholder='Поиск'/>
					<Search style={{color: "gray", fontSize: 16}}/>
				</SearchContainer>
			</Left>
			<Center>
				<Logo>STORE</Logo>
			</Center>
			<Right>
				<MenuItem>REGISTER</MenuItem>
				<MenuItem>SIGN IN</MenuItem>
				<MenuItem>
					<Badge badgeContent={4} color="primary">
						<ShoppingCartOutlined/>
					</Badge>
				</MenuItem>
			</Right>
		</Wrapper>
	</Container>;
};

export default Navbar;
