# SDK for Client Developers

sdk를 사용하면 프론트엔드 개발자는 마치 일반적인 라이브러리 함수를 사용하는 것처럼 쉽고 type-safe하게 server와 api 통신을 할 수 있다.


```typescript
import { IConnection } from "@nestia/fetcher";
import { users } from "@project-name/sdk";

const connection: IConnection = {
  host: "https://--",
  headers: { Authorization: "bearer adfdasfds" }
};

 const userinfo = await users.getOne(connection,'user_id')

```