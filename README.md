# MemoApp

MemoApp is a simple and intuitive note-taking mobile application built with React Native and Expo.  
It allows users to quickly create, edit, and manage their personal memos — perfect for organizing daily thoughts and tasks on the go.

## Features

- Create, edit, and delete memos
- User authentication with Firebase
- Real-time data synchronization using Cloud Firestore
- Responsive and minimal UI
- Runs smoothly on both iOS and Android via Expo

## Tech Stack

- **Frameworks:** React, React Native  
- **Language:** TypeScript  
- **State & Logic:** React Hooks  
- **Navigation:** React Navigation  
- **Mobile Development:** Expo  
- **Backend Services:**  
  - Firebase Authentication  
  - Cloud Firestore

## Getting Started

### Prerequisites

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- Firebase project setup (Authentication & Firestore)

### Installation

```bash
git clone https://github.com/aotakataka/MemoApp.git
cd MemoApp
npm install
```

### Running the App

```bash
expo start
```



### 制作背景
私はスマホで日々のアイデアやタスクを書き留める習慣があるのですが、以前うっかりメモアプリを削除してしまい、**再インストール後にすべてのデータがすべて消えていた**という失敗を経験しました。
また、別の端末で同じアプリを使おうとした際に、**メモが端末ごとに保存されており、内容が引き継がれず、過去の大事なメモにアクセスできない**という不便さも感じました。
こうした体験から、**ユーザーごとにメモを安全に保存・同期できる仕組み**が必要だと考え、**ログイン機能つきのメモアプリ**を開発しました。ログインにより、どの端末からでも自分のメモにアクセスでき、アプリを削除・再インストールしてもデータが失われないように設計しています。

### 技術選定およびその意図

- **フレームワーク：React, React Native**
  
  学習コストと保守性のバランスに優れたReactをベースに採用しました。モバイル開発では、SwiftやKotlinによるネイティブ開発と比べて、React Nativeはクロスプラットフォーム対応により開発スピードに優れています。今回のような小規模なメモアプリではパフォーマンス差も問題になりにくく、最適な選択と判断しました。
  
- **言語：TypeScript**

  Reactとの相性が良いだけでなく、JavaScriptと比べて型の明示によってバグの発見が早く、複雑な状態管理や非同期処理に対しても安全性が高いため、選定しました。

- **状態管理：React Hooks**

  Reduxなどの外部の状態管理ライブラリも検討しましたが、今回開発したメモアプリでは比較的単純な状態を扱うため、`useState`や`useEffect`などのHooksで十分対応可能であると考えました。
  
- **画面遷移：React Navigation**

  React Nativeで標準的に使われているライブラリで、`react-router`や独自実装と比べて簡潔に記述でき、モバイルアプリ特有の戻る動作やアニメーションにも対応しているため、採用しました。

- **モバイル開発環境：Expo**

  React Native CLIより導入コストが低く、Android/iOS両方に対応しながら手軽に検証や配布が可能で、特に小規模アプリではビルド・デバッグ・デプロイが圧倒的に容易であるため、選定しました。

- **認証：Firebase Authentication**

  認証機能を自前で実装・運用するのはセキュリティやパスワード管理の観点からもハードルが高く、ユーザーが少なくてもリスクが大きい一方で、Firebase Authenticationは安全かつ短期間で認証機能を導入できるうえ、Auth0やSupabase Authと比較しても、Firestoreとの統合性に優れている点から採用しました。

- **データベース：Cloud Firestore**

  メモのような軽量かつ構造化されたデータをリアルタイムで保存・同期するのに適しており、REST APIやローカルDBを使う構成と比較しても、Firestoreはユーザーごとのアクセス制御が容易で、Firebase Authenticationと組み合わせることでユーザーごとのメモの分離やアクセス制御をシンプルに実現できるため、選定しました。


