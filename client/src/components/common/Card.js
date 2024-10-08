import React from 'react';
import styled from 'styled-components';

export const Card = (props) => (
	<StyledCard {...props}>{props.children}</StyledCard>
);

const StyledCard = styled.div`
	padding: ${(props) => props.padding || 0};
	box-shadow: 2px 2px 5px #ddd;
	width: ${(props) => props.width || 'auto'};
	height: ${(props) => props.height || 'auto'};
	background-color: #FFF5E4;
	border-radius: 10px;
`;
