---
title: "[Gradle] 빌드와 빌드 도구"
date: "2025-08-03"
description: "OS별 Node.js 설치 방법"
categories:
  - "Java"
tags:
  - "develop"
image: node-js.webp
---

## 빌드 (build)

> 컴퓨터 소프트웨어 분야에서 **소프트웨어 빌드(software build)**는 소스 코드 파일을 컴퓨터나 휴대폰에서 실행할 수 있는 독립(standalone) 소프트웨어 가공물로 변환하는 과정을 말하거나 그에 대한 결과물을 일컫는다.
>
> **위키백과 - 소프트웨어 빌드**

우리가 작성한 소스 코드는 빌드 과정을 거쳐 사용자가 사용할 수 있도록 변환된다  
이는 C언어나 Java 뿐만 아니라 Python과 같은 모든 언어가 공유하는 특성이지만, 빌드 과정에서의 차이가 존재한다

### Java에서의 빌드 과정 (간략히 표시)

```plain text
소스파일(.java) --> 자바 바이트코드(.class) --> JVM(Java Virtual Machine) 내부 실행
               ^
               |
          컴파일 (javac)
```

---

## 빌드 도구 (Gradle 이전)

Java 진영에서는 복잡한 빌드 과정을 쉽게 도와주는 **빌드 도구**를 주로 사용한다

### 1. Apache Ant

- **XML 기반**으로 빌드 스크립트 작성
- **의존성 수동 관리** (라이브러리를 직접 다운로드 받아 lib 폴더에 넣는 방식)
- 절차적 방식
- 프로젝트에 맞는 유연한 작성 가능 $\to$ **표준이 존재하지 않음**

> **Ant 빌드 파일 예시 (build.xml)**
>
> ```xml
> <?xml version="1.0"?>
> <project name="MyProject" default="compile">
>
>    <!-- 속성 정의 -->
>    <property name="src.dir" value="src"/>
>    <property name="build.dir" value="build"/>
>    <property name="lib.dir" value="lib"/>
>
>    <!-- 컴파일 태스크 -->
>    <target name="compile">
>        <mkdir dir="${build.dir}"/>
>        <javac srcdir="${src.dir}"
>               destdir="${build.dir}"
>               classpath="${lib.dir}/*"/>
>    </target>
>
>    <!-- JAR 생성 -->
>    <target name="jar" depends="compile">
>        <jar destfile="${build.dir}/myapp.jar"
>             basedir="${build.dir}"/>
>    </target>
>
> </project>
> ```

<br />

### 2. Apache Maven

- **CoC** (Convention over Configuration) - 정해진 규칙이 존재하여 설정 최소화
- **의존성 자동** 관리 (중앙 저장소([Maven Central](https://repo.maven.apache.org/maven2/))에서 라이브러리 자동 다운로드)
- **표준 디렉토리 구조**

```text
my-project/                   # === 구조 예시 ===
pom.xml                       # 빌드 설정 파일
src/
│   ├── main/
│   │   ├── java/             # 소스 코드
│   │   └── resources/        # 리소스 파일
│   └── test/
│       ├── java/             # 테스트 코드
│       └── resources/        # 테스트 리소스
└── target/                   # 빌드 결과물
```

- **Maven의 생명주기**

```text
validate → compile → test → package → verify → install → deploy
```

> **Maven 빌드 파일 예시 (pom.xml)**
>
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <project xmlns="http://maven.apache.org/POM/4.0.0"
>         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
>         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
>         http://maven.apache.org/xsd/maven-4.0.0.xsd">
>
>    <modelVersion>4.0.0</modelVersion>
>    <groupId>com.example</groupId>
>    <artifactId>my-app</artifactId>
>    <version>1.0.0</version>
>    <packaging>jar</packaging>
>
>    <properties>
>        <maven.compiler.source>17</maven.compiler.source>
>        <maven.compiler.target>17</maven.compiler.target>
>        <project.build.sourceEncoding>UTF-8<project.build.sourceEncoding>
>    </properties>
>
>    <dependencies>
>        <dependency>
>            <groupId>org.springframework.boot</groupId>
>            <artifactId>spring-boot-starter-web</artifactId>
>            <version>3.1.0</version>
>        </dependency>
>        <dependency>
>            <groupId>junit</groupId>
>            <artifactId>junit</artifactId>
>            <version>4.13.2</version>
>            <scope>test</scope>
>        </dependency>
>    </dependencies>
> </project>
> ```

  <br />

### 3. Gradle

- **Ant의 유연성**과 **Maven의 구조적 장점**을 모은 빌드 도구
- **groovy 언어** 기반 빌드 파일 작성
- **`Project(빌드할 대상)`** **`Task(실행할 작업)`** 구조
- **프로젝트 구조**

```text
my-project/
├── gradle/
│   └── wrapper/
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew          # Unix 실행 스크립트
├── gradlew.bat      # Windows 실행 스크립트
└── build.gradle
```

- **Gradle의 생명주기**  
   **Task 확인**

  ```bash
  gradle tasks --all # 모든 Task 보기
  ```

  **주요 Tasks**

  ```text
  | compileJava          # Java 소스 컴파일
  | processResources     # 리소스 파일 처리
  | classes              # 컴파일 + 리소스 처리
  | compileTestJava      # 테스트 코드 컴파일
  | processTestResources # 테스트 리소스 처리
  | testClasses          # 테스트 컴파일 + 리소스
  | test                 # 테스트 실행
  | jar                  # JAR 파일 생성
  | assemble             # 모든 아카이브 생성
  | check                # 모든 검증 작업
  | build                # assemble + check
  V	clean                # 빌드 결과물 삭제
  ```

> **Groovy 빌드 파일 예시 (build.gradle)**
>
> ```groovy
> // 미리 만들어진 Task들의 모음
> plugins {
>   id 'java'
>   id 'org.springframework.boot' version '3.1.0'
> }
>
> group = 'com.example'
> version = '1.0.0'
> sourceCompatibility = '17'
>
> // 저장소
> repositories {
>   mavenCentral()
> }
>
> // 의존성 관리
> dependencies {
>   implementation 'org.springframework.boot:spring-boot-starter-web'
>   testImplementation 'junit:junit:4.13.2'
> }
> ```

---

## Apache Maven과 Gradle 비교

### Maven

- xml 기반의 복잡한 빌드 파일
- 유연성 부족

### Gradle

- **증분 빌드** - 변경된 부분만 다시 빌드
- **병렬 실행** - 여러 모듈 동시 빌드
- **빌드 캐시** - 이전 빌드 결과 재사용
- **데몬 프로세스** - JVM 재시작 비용 절약
