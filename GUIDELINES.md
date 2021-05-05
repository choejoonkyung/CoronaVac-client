## Running on your machine

이 프로젝트는 백신 데이터를 얻기 위하여 공공데이터 오픈 API를 사용합니다.

> 백신 접종 통계 정보 API: [이동](https://data.go.kr/data/15077756/openapi.do)  
> 백신 예방 접종센터 조회 API: [이동](https://data.go.kr/data/15077586/openapi.do)

### 환경변수 설정

루트 디렉토리에 .env을 생성합니다. 공공데이터에 있는 필요한 정보를 환경 변수로 설정 합니다. 아래와 같이 입력합니다.

```
  REACT_APP_GO_DATA_URL=[API의 엔드포인트]
  REACT_APP_GO_DATA_KEY=[본인의 API 일반 인증키]
```

### 빌드

루트 디렉토리에서 프로젝트를 시작합니다.

```
  npm install
  npm start
```
