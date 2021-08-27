1. 여러가지 input 상태 관리할 때

const [inputs, setInputs] = useState({
name:'',
nickname:''
});

const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출해야 한다.

const onChange = (e) => {
const {value, name} = e.target; // 이 부분 중요.
setInputs({
...inputs,
[name]: value
});
}

2. Hello.defaultProps = { name: '이름없음'}

3. Wrapper 로 다른 컴포넌트를 감싼 경우, Wrapper의 props.children을 렌더링 해주어야 그 내부의 다른 컴포넌트의 내용이 보여지게 된다.

4. props의 값을 넣지 않고 isSpecial 이라고만 입력한 경우, {true} 설정된다.

5. Hooks. useRef로는 특정 DOM을 선택할 수 있다. 예를 들어, 인풋과 버튼이 있을 때, 버튼을 클릭하면 포커스가 버튼에 그대로 남아있는데 useRef를 사용하여 input에 포커스가 잡히도록 할 수 있다.

const onReset = () => {
setInputs({
name: '',
nickname: ''
})
nameInput.current.focus();
};

<input name="name" onChange={onChange}...... ref={nameInput}>

6.  아래 코드는 인풋에 내용이 입력되는 것을 onChange에서 바꾸는 것과 같은 코드인데, 변수에 할당하는 방법이 특이해서 아래 적어놓은 것이다.
    '''
    const [ email, setEmail ] = useState("")
    const updateEmail = e => {
    const {
    target: {value}
    } = e;
    setEmail(value)
    }
    '''

7.  useState를 이용하여 전역변수로 설정한 것을 return 이후에 사용하기 위해서는, return 다음 줄에 {text} 이런 식으로 다시 한번 명시해줘야 한다.

8.  Error: Objects are not valid as a React child (found: object with keys {id, year, title}). If you meant to render a collection of children, use an array instead.

stack overflow :
https://stackoverflow.com/questions/33117449/invariant-violation-objects-are-not-valid-as-a-react-child

'''
I was having this error and it turned out to be that I was unintentionally including an Object in my JSX code that I had expected to be a string value:

return (
<BreadcrumbItem href={routeString}>
{breadcrumbElement}
</BreadcrumbItem>
)

breadcrumbElement used to be a string but due to a refactor had become an Object. Unfortunately, React's error message didn't do a good job in pointing me to the line where the problem existed. I had to follow my stack trace all the way back up until I recognized the "props" being passed into a component and then I found the offending code.

You'll need to either reference a property of the object that is a string value or convert the Object to a string representation that is desirable. One option might be JSON.stringify if you actually want to see the contents of the Object.
'''

9. git에 홈페이지처럼 올리는 법(deploy)
   npm i gh-pages 실행

10. vanilla js code
    assignment 1 : https://codesandbox.io/s/day-three-solution-3n53e
    assignment 2 : https://codesandbox.io/s/empty-blueprint-forked-58hy0
