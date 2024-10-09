import styled, {keyframes} from 'styled-components';

const Content = styled.div`
  padding: 20px 25px;
`;
const P = styled.p`
  font-size: 24px;
  color: red;
`;
const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }
  
  .info {
    font-size: 28px;
  }
`;
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;
const Link = ({className, ...props}) => {
  return <a className={className} {...props}></a>
};
const StyledLink = styled(Link)`
  color: blue; 
`;
const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red',
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color};
`;
const Password = styled(Input).attrs({
  type: 'password',
})``;
const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${animation} 2s linear infinite;
`;

function App() {
  return (
    <Content>
      <P>Hello</P>
      <Button>
        Send
        <p className='info'>Info</p>
      </Button>
      <Button primary>Send</Button>
      <Button className='secondary'>Send</Button>
      <BlockButton primary as='a' href='#'>Send</BlockButton>
      <BlockButton primary>Send</BlockButton>
      <Link>Link</Link>
      <StyledLink>StyledLink</StyledLink>
      <Input color='blue' />
      <Password />
      <br />
      <Rotate>I'm spinning</Rotate>
    </Content>
  );
}

export default App;
