# Video Streaming

아프리카tv, 트위치 같은 서비스들의 일부 기능을 클론 코딩 하는 프로젝트입니다.

mac 브렌치는 맥북에서 작업한 버전이고
windows 브렌치는 윈도우 11에서 작업한 버전입니다.

운영체제 별로 얼마나 차이가 있는지 비교하기 위해 별도로의 브렌치로 작업하였습니다.

```
# .dev.env
# server config
SERVER_PORT=3000

# Oauth 2.0
KAKAO_API_KEY=''

# databases config
## postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=11223344
POSTGRES_DATABASE=streaming

## mongodb
MONGOOSE_URI='mongodb://root:1234@localhost:27017'
MONGOOSE_DB='streaming'

# cache config
## redis
REDIS_PORT=6379

# socket.io
# SOCKET_NEMA1=

# aws config
## S3

```
