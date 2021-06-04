import React from "react";
import styled from "styled-components"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px 10px 10px;
    margin-bottom: 10px;
`;

const LineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 520px;

 p { 
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: center;
 }
`;

const CardImg = styled.img`
    width: 30px;
    margin-right: 10px;
`;

function CardPequeno (props) {
    return (
        <CardContainer>
            <LineContainer>
                <p>
                    {props.iconEmail}
                    {props.email} 
                </p>
                <p> 
                    {props.iconEndereco}
                    {props.endereco}
                </p>
            </LineContainer>
        </CardContainer>
    );
}

export default CardPequeno;
