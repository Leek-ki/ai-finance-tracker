# Contributing to AI Finance Tracker

AI Finance Tracker의 발전에 관심을 가져주셔서 감사합니다! 🙌
이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 기여 방법

### 1. 이슈 제출

- 버그를 발견하셨나요? 
  - 이슈 탭에서 버그 리포트 템플릿을 사용해 주세요.
  - 가능한 한 자세히 재현 방법을 설명해 주세요.
  - 스크린샷이나 에러 메시지가 있다면 첨부해 주세요.

- 새로운 기능을 제안하고 싶으신가요?
  - 이슈 탭에서 기능 제안 템플릿을 사용해 주세요.
  - 제안하시는 기능의 필요성과 활용 방안을 설명해 주세요.

### 2. 풀 리퀘스트 제출

1. 프로젝트를 포크합니다.
2. 새로운 브랜치를 생성합니다:
   ```bash
   git checkout -b feature/새로운-기능
   ```
3. 변경사항을 커밋합니다:
   ```bash
   git commit -m "feat: 새로운 기능 추가"
   ```
4. 포크한 저장소에 푸시합니다:
   ```bash
   git push origin feature/새로운-기능
   ```
5. Pull Request를 생성합니다.

## 커밋 메시지 규칙

다음 형식을 따라주세요:
```
type: 제목

본문

footer(optional)
```

### 커밋 타입
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락 등
- refactor: 코드 리팩토링
- test: 테스트 코드
- chore: 빌드 업무 수정, 패키지 매니저 수정 등

## 코드 스타일

- TypeScript 사용을 권장합니다.
- ESLint와 Prettier 설정을 따라주세요.
- 컴포넌트는 함수형 컴포넌트로 작성해 주세요.
- 적절한 주석을 달아주세요.

## 개발 환경 설정

1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/Leek-ki/ai-finance-tracker.git
   ```

2. 의존성을 설치합니다:
   ```bash
   cd ai-finance-tracker
   npm install
   ```

3. 개발 서버를 실행합니다:
   ```bash
   npm run dev
   ```

## 테스트

- 새로운 기능을 추가하실 때는 관련 테스트도 함께 작성해 주세요.
- 테스트 실행:
  ```bash
  npm test
  ```

## 문의하기

질문이나 도움이 필요하시다면:
- 이슈를 생성해 주세요.
- 디스커션 탭을 활용해 주세요.

## 라이선스

이 프로젝트에 기여하심으로써, 귀하의 기여물이 MIT 라이선스 하에 배포됨에 동의하시는 것으로 간주됩니다. 