# 24.08.07

반응형 태블릿 버전 구현

# 24.08.06

footer 영역 html, css 작업 완료 및 pc버전 반응형 수정 및 이미지 이벤트 찾아봄

**문제점 및 해결**

```

01.

❌ PC 버전에서 반응형시 our 부분에서 bike 상품 영역의 크기가 줄어들어 글씨가 넘치는 현상 발생

⭕ 높이값과 너비값을 고정값을 주어 넘치지 않게 구현


02.

❌ PC 버전에서 반응형시 component 영역에 글씨가 아래로 내려가 3줄이 되어 따로 노는 것처럼 보임

⭕ 3줄로 내려가는 부분에서 width 값의 퍼센트를 더 높혀 2줄로 되도록 구현

```

# 24.08.02

footer 영역 밑에 부분빼고 html, css 작업 완료함

# 24.08.01

앞서 작업중이던 feeling 영역 grid 완성 및 email 영역 html css 작업

# 24.07.30

feeling 영역 grid를 활용한 작업 html, css 코딩

**문제점 및 해결**

```

01.

❌ gird 영역의 row 값을 12로 줬으나 높이값이 너무 길게 되는 현상

⭕ gird-templete-rows : repeat(6,1fr)로 수정함

```

# 24.07.29

hover시 일렁이는 효과는 못찾아서 위에서부터 안했던 JS 이벤트 작업

# 24.07.25

find 영역에서 이미지 hover시 일렁이는 효과 찾아봤으나 codepen에 있는 소스는 pug라는 것으로 만들어져서 pug에 대해 조금 공부

# 24.07.24

find 영역에서 이미지 hover시 일렁이는 효과 찾아봄


# 24.07.23

unleash 영역 HTML, CSS 코딩 완료 및 find 밑줄 길이 수정


# 24.07.19

find 영역 HTML,CSS 완료

**문제점 및 해결**

```

01.

❌ 밑에 사진 영역에서 line과 line 사이에 빈틈이 생기는 문제 발생

⭕ 그전 코드에는 border 값으로 사용하여 만들었으나 도형을 만들어 완성함

```

# 24.07.18

experience, components, highlights 영역 HTML, CSS 완료

**문제점 및 해결**

```

01.

❌ experience 영역에서 li영역에 border-left를 하게 되면 위에 빈공간이 나오는 현상이 발생

⭕ after를 이용해 block으로 만들어 height값으로 빈공간을 없앰

```

# 24.07.16

bestsellers 영역 HTML, CSS, JS 완료 - json, ajax를 사용한 상품리스트

**문제점 및 해결**

```

01.

❌ json을 활용한 리스트 형식이라 모든 버튼을 DB에 저장해야하는 것에 대한 어려움이 있었음

⭕ hover에 있는 버튼의 내용도 DB에 저장하여 display:none과 display:block을 활용하여 해결함

```

# 24.07.15

OUR PRODUCTS 영역 HTML, CSS, JS 작업 완료 및 bestsellers HTML 완료, Header 영역 스크롤 이벤트 JS 구현완료

**문제점 및 해결**

```

01.

❌ our products 영역에서 화살표 아이콘을 position으로 했는데 hover시 같이 이동이 됨

⭕ background로 했던 코드를 html에 img 태그를 사용하여 margin으로 해서 간격 조절하고 해결

```

# 24.07.12

Header 영역 HTML, CSS 작업 완료 및 main banner 영역 HTML, CSS 작업 완료

**문제점 및 해결**

```

01.

❌ Header에서 반응형시 SEARCH와 STORES의 위치가 너무 동떨어지는 문제가 발생함

⭕ 처음엔 display:flex를 줘서 margin에 고정값등으로 조절했으나 dispaly:grid로 수정하고 %로 수정함


02.

❌ Header SEARCH 영역에 hover시 위에서 아래로 되는 애니메이션 효과시 위에 검정선이 보임

⭕ gradiant의 값을 50%보다 적게 주어 검정선이 보이지 않도록 함

```

# 24.07.11

STENGER 페이지 퍼블리싱 시작, Header 영역 HTML, CSS 작업

**문제점**

```

❌ Header에서 반응형시 SERCH와 STORES의 위치가 너무 동떨어지는 문제가 발생함

```
