import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    list-style: none;
`;

const Li = styled.li`
    padding: 10px 40px;
    color: ${props => (props.active ? 'blue' : '#999')};
`;

const name = 'Bob';
const surname = 'Bill';

console.log(`sdvdfvdfdf ${name} sffddf ${surname}`);
console.log('sdvdfvdfdf ' + name + ' sffddf ' + surname);

export const Header = () => {
    return (
        <header>
            <nav>
                <List>
                    <Li>Home</Li>
                    <Li active>Products</Li>
                </List>
            </nav>
        </header>
    );
};
