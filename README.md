# 쇼핑몰 장바구니(Cart) 구현

[**Redux**](#redux란) 를 이용해 상품추가, 상품삭제 기능 구현

---

#### Header

- 장바구니 상품 총 수량 표시
  ![수량변화1](https://user-images.githubusercontent.com/106130501/206202830-e445a269-342c-4ff0-a40b-8fc952190d0b.PNG)
- 장바구니 아이콘 클릭시 [**장바구니 페이지**](#cart)로 이동
- **LOGO** 클릭시 [**홈**](#item)으로 이동

#### Item

- **장바구니 추가 +** 버튼을 누르면 장바구니에 상품추가, 클릭한 만큼 상품추가
  ![장바구니 추가](https://user-images.githubusercontent.com/106130501/206201705-0d727999-d844-448c-9209-c15b691e2996.PNG)

#### Cart

- 담은 상품의 갯수와 총 수량, 가격 표시
  ![카트 전체](https://user-images.githubusercontent.com/106130501/206203710-c3abdab4-1a4b-4230-ba17-7ae208dff77c.PNG)
- 삭제, 수량 조절 가능
  ![수량 직접 변경](https://user-images.githubusercontent.com/106130501/206203806-1e499642-f18c-4e4d-8800-3625bc946d69.PNG)

---

## Redux란?

- 리액트 상태관리라이브러리 중 하나
- state를 이용해 웹사이트, 어플리케이션의 상태관리를 해 줄 목적으로 사용

### store

- store로 전체 action, reducer관리
  - store = 변수를 담고 있는 저장소
  - view = 보고있는 화면
  - [**action**](#action) = store에 있는 값을 바꾸고 싶을 때 사용, javascript 객체 형식
  - [**reducer**](#reducer) = 이전의 상태와 바꾸려는 action을 합쳐 새로운 값을 생성
    - **store** -> view -> action -> reducer -> **store**
    - action은 **dispatch()** 에 전달됨 -> dispatch()를 통해 reducer 호출 -> reducer는 새로운 store 생성
  -

### reducer

- store.js > rootReducer.js > cartReducer.js
  - ##### store.js
    - store는 하나만 만들 수 있음
    - createStore()로 스토어 생성

```
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
```

- 인자()에 reducer를 넣고 reducer가 여러개라면 combineReducer
  - ##### rootReducer.js
    -
  - ##### cartReducer.js

### action

---

### How to Use?

- index.js에 store연결(Provider로 하위 컴포넌트를 감싸야함)

```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
```
