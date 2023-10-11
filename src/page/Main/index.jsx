import styled from 'styled-components';
import Button from '../../components/button';
import Heart from '../../assets/svg/heart';

const Main = () => {
    return (  
        <Body>
            <Button onClick={()=>{}} text="Kill event" icon={<Heart />}/>
        </Body>
    );
}
 
export default Main;

const Body = styled.header`
    width: 100vw;
    height: 100vh;
    background-color: #0D2527;
`;