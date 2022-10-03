# Redux

### 기본 세팅

1. redux 설치
   npm install @reduxjs/toolkit react-redux

2. store.js 파일 생성 / 코드 복붙
   import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
reducer: { }
})
store.js 는 redux를 사용해 state를 전부 보관하고,
그 state들을 export 해서 다른 파일에서 사용가능하도록 해줌

3. index.js 파일에서 App 컴포넌트를 Provider로 감싸주고 store.js를 import하기
   import store from './store.js'

4. store.js 상단에 코드 복붙
   import { configureStore, createSlice } from '@reduxjs/toolkit'

### store.js의 state 만들기

1. 변수선언 / items 변수에 createSlice()를 할당
   let items = createSlice({
   })

2. createSlice()안에 객체 할당 => 이름, 초기 state인 initialstate
   let items = createSlice({
   name: 'items',
   initialState : 0,
   })

3. initialState에 임의 정보 넣기
   let items = createSlice({
   name: 'items',
   initialState : [{
   id: 0,
   name: '나이키 에어포스',
   count: 1
   },
   {id: 1,
   name: '나이키 범고래',
   count: 1}],
   })

4. store.js 제일 아래에 해당 state 배출
   export default configureStore({
   reducer: {
   players : players.reducer
   }
   })

### store.js의 state 사용방법

1. 원하는 컴포넌트 페이지 상단에 import
   import {useSelector} from "react-redux"

2. 컴포넌트 안에어 변수로 선언(return 전에)
   let cart = useSelector(state => state)

3. 형식
<div>{cart.변수이름[0].name}</div>
변수에 있는 배열의 첫번째 항목

### store.js에 함수 선언

1.  변수 안에 임의로 넣었던 정보 빼고 시작
    let items = createSlice({
    name: 'items',
    initialState : [
    ],
    reducers : {
    }
    })
    reducers는 기존에 저장되어있는 initialState를 조작하는 함수를 만들어줌

2.  장바구니의 수량변경, 삭제기능을 reducers안에 함수로 구현
    addCount(state, action) {
    let num = state.findIndex((a) => a.id === action.payload);
    state[num].count++;
    },
    각 함수의 파라미터 중 state파라미터는 initialState인 빈 배열을 뜻함
    action파라미터, action.payload는 함수를 호출하는 곳에서 직접 받아온 값

3.  import하고 선언
    import { useDispatch, useSelector } from "react-redux";
    let dispatch = useDispatch();
    redux에서 함수를 받아와서 사용하려면 dispatch 를 써야함
