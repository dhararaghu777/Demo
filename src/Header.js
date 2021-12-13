import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
           <Part>Logo</Part>
           <Part>Home</Part>
           <Dropdown>
                <Section>
                    <div>Content</div>
                    <ul>
                        <li>content 1</li>
                        <li>content 2</li>
                        <li>content 3</li>
                        <li>content 4</li>
                    </ul>
                </Section>
           </Dropdown>
           <Part>About</Part>
        </Container>
    )
}

export default Header;


const Container= styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #444;
    color: #fff;
    font-size: 1.6rem;
    justify-content: space-around;

`

const Part= styled.div`
    
`
const Dropdown= styled.div`

`
const Section= styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 5px;
    width: 100px;

    div {
        cursor: pointer;
    }

    ul{
        width: 100%;
        height: 200px;
        list-style: none;
        position: absolute;
        inset: 0;
        top: 5rem;
        visibility: hidden;
        background-color: blue;
        z-index: -1;
        opacity: 0;
        transition: all .3s linear;
        transition: visibility 0 linear .3s;
        transition:  z-index 0 linear .3s;
        transform: translateY(-100%);
    }

    &:focus-within ul,
    &:focus ul,
    &:hover ul {
            opacity: 1;
            visibility: visible;
            z-index: 1;
            transform: translateY(0);
            transition-delay: 0, 1s, 1s;
        }

   

    
`