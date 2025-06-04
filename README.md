# 명상 & 백색소음 앱

React Native로 개발된 명상과 백색소음을 제공하는 모바일 앱입니다.

## 주요 기능

- 명상 타이머 (5분, 10분, 15분, 20분, 30분)
- 다양한 백색소음 옵션 (빗소리, 파도소리, 숲소리, 모닥불, 밤의 소리, 카페)
- 직관적인 UI/UX
- 한글 지원

## 설치 방법

1. 저장소를 클론합니다:
```bash
git clone [repository-url]
cd meditation-app
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. iOS의 경우 추가 설치가 필요합니다:
```bash
cd ios
pod install
cd ..
```

4. 앱을 실행합니다:

Android:
```bash
npm run android
```

iOS:
```bash
npm run ios
```

## 개발 환경

- React Native 0.72.6
- TypeScript
- React Navigation
- React Native Vector Icons
- React Native Sound

## 프로젝트 구조

```
src/
  ├── screens/
  │   ├── HomeScreen.tsx
  │   ├── MeditationScreen.tsx
  │   └── WhiteNoiseScreen.tsx
  ├── assets/
  │   ├── meditation-bg.jpg
  │   └── white-noise-bg.jpg
  └── components/
```

## 라이선스

MIT License 