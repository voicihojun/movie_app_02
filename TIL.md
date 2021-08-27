Today I learn with this app.

(2021.08.24)

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

(2021.08.26)

6. 아래 코드는 인풋에 내용이 입력되는 것을 onChange에서 바꾸는 것과 같은 코드인데, 변수에 할당하는 방법이 특이해서 아래 적어놓은 것이다.
   '''
   const [ email, setEmail ] = useState("")
   const updateEmail = e => {
   const {
   target: {value}
   } = e;
   setEmail(value)
   }
   '''

7. useState를 이용하여 전역변수로 설정한 것을 return 이후에 사용하기 위해서는, return 다음 줄에 {text} 이런 식으로 다시 한번 명시해줘야 한다.

8. Error: Objects are not valid as a React child (found: object with keys {id, year, title}). If you meant to render a collection of children, use an array instead.

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

   - npm i gh-pages 실행
   - package.json에 "homepage" : "https://voicihojun.github.io/movie_app_02" 를 추가한다.

   - npm run build를 실행한다. (아마도 이 과정은 생략가능)
   - build 폴더가 생성된 것을 확인한다(최소화된 파일들) (생략가능 : 왜냐하면 아래서 npm deploy 하는 순간 위의 부분이 실행되기 때문)

   - package.json의 script에 "deploy" : "gh-pages -d build" 추가(생성된 빌드 폴더를 deploy 한다는 뜻으로 build 폴더 이름이 다르다면 그것에 맞춰서 설정해야 함.)
   - package.json의 script에 "predeploy" : "npm run build"
   - 위의 과정을 설명하자면, npm run deploy를 실행시, predeploy의 npm run build가 실행되고 "react-scripts build"에 의해서 build 파일이 생성된다. 그리고 deploy의 명령어에 따라 gh-pages로 생성된 build 파일을 deploy한다.

10. How to fix a website with blocked mixed content?
    https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content

    9번 진행후 홈페이지 주소 들어갔을 때 search bar 잘 작동 안하고 에러메시지 mixed content 나옴. 찾아보니 http => https 로 바꾸어야 하는 문제였음.

(2021.08.27)

11. 문제 : find 라는 변수를 설정해서 영화를 못 찾았을 때 메세지를 띄우려고 했는데, 그 변수를 useState를 사용해서 작성했어야 함(그 전에는 그냥 변수로 만들어서 했더니 작동 안 함)

12. input 안에 이미지 넣기
    CSS 를 통해서 백그라운드 이미지 지정을 통해서 할 수 있음. 아래 중 제일 위에 세줄이 중요하다.

input {
background-image: url("search-solid.svg");
background-position: absolute;
background-repeat: no-repeat;
padding: 5px 25px;
background-size: 15px;
background-position-x: 5px;
background-position-y: 5px;
}

13. vanilla js code
    assignment 1 : https://codesandbox.io/s/day-three-solution-3n53e
    assignment 2 : https://codesandbox.io/s/empty-blueprint-forked-58hy0
