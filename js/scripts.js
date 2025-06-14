if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

document.querySelectorAll('.scroll-top').forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

const projectDetails = {
  'cat_soup_ver1,2': {
    title: '1. cat_soup_ver1,2',
    description: `
    - 개발 기간: 2025.06.06 ~ 2025.06.09
    - 개발 인원: 1명
    - 개발 환경: C
    - 프로젝트 소개: 텍스트를 통해서 입출력 정보를 주고 받는 게임입니다.
    - 주요 기능: 
      * 입력 및 출력 시스템
      * 게임 자원 상태 관리
      * 게임 상점 시스템
      * 게임 로직 관리
    `
  },
  'avoid_arrow_cat': {
    title: '2. avoid_arrow_cat',
    description: `
    - 개발 기간: 2023.07.02 ~ 2023.07.24
    - 개발 인원: 1명
    - 개발 환경: Unity
    - 프로젝트 소개: 화살을 피하는 고양이 게임입니다.
    - 주요 기능:
      * 플레이어 조작
      * 화살 생성 및 패턴
      * 점수 시스템
      * 게임 오버 및 재시작 기능
      * UI 구성
    `
  },
  'project FTM': {
    title: '3. project FTM',
    description: `
    - 개발 기간: 2024.12.11 ~ 2024.01.21
    - 개발 인원: 2명
    - 개발 환경: Unity, C++
    - 프로젝트 소개: 3D 탱크 배틀 게임입니다.
    - 담당 파트:
      * 맵 및 오브젝트 생성
      * 탱크 조작 및 AI
      * 총알 발사 및 충돌 처리
      * 게임 로직 구현
    `
  },
  'project1 (예정)': {
    title: '4. project (예정)',
    description: `
    - 개발 기간: 2025.07 ~
    - 개발 인원: 1명
    - 개발 환경: Unity, C#
    - 프로젝트 소개: 2D x,y,z 좌표에서 캐릭터가 이동하고 점프하는 게임입니다.
    - 주요 기능:
      * 캐릭터 이동 및 점프
      * 자원 채취 밑 인벤토리 시스템
      * 레벨 디자인 및 진행 관리
    `
  },
  'project2 (예정)': {
    title: '5. project (예정)',
    description: `
    - 개발 기간: 2025.07 ~
    - 개발 인원: 1명
    - 개발 환경: Unity, C#
    - 프로젝트 소개: 2D x,y 좌표에서 캐릭터가 이동하고 점프하는 게임입니다.
    - 주요 기능:
      * 캐릭터 이동 및 점프
      * 자원 채취 밑 인벤토리 시스템
      * 레벨 디자인 및 진행 관리
      * UI 구성 및 상태 표시
      * 적 AI 및 상호작용
      * 모바일 최적화 적용
    `
  }
};

document.querySelectorAll('.project-btn').forEach(button => {
  button.addEventListener('click', function() {
    const projectItem = this.closest('.project-item');
    const projectTitle = projectItem.querySelector('h3').textContent.substring(3);
    const details = projectDetails[projectTitle];
    
    if (details) {
      document.querySelector('.modal-title').textContent = details.title;
      document.querySelector('.modal-text').innerHTML = details.description.replace(/\n/g, '<br>');
      document.getElementById('projectModal').style.display = 'block';
    }
  });
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('projectModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('projectModal')) {
    document.getElementById('projectModal').style.display = 'none';
  }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 
        else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.2, 
    rootMargin: '0px'  
});

document.querySelectorAll('section:not(#profile)').forEach(section => {
    section.classList.add('section-animate');
    observer.observe(section);
});