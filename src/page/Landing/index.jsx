import Back from "../../assets/back.png"
import styled from 'styled-components';

const Landing = () => {
    return (  
        <Body>
            <img src={Back} alt="backgorund"></img>
        </Body>
    );
}
 
export default Landing;

const Body = styled.div`
    width: 100%;
    height: 100%;
    > img{
        width: 100%;
    }
`;