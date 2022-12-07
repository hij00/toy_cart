# 쇼핑몰 장바구니(Cart) 구현

[__Redux__] (#redux란) 를 이용해 상품추가, 상품삭제 기능 구현

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

리액트 상태관리라이브러리 중 하나
store로 전체 action관리
