import type { Post } from '../types/index';

// Laravel PostSeeder에서 가져온 안전 교육 영상 데이터 (총 226개)
export const posts: Post[] = [
  {
    id: 1,
    key_words: '가전제품',
    contents: '사용 후 전기코드 뽑고 정리하기',
    url: 'https://www.youtube.com/watch?v=mR5Es0KbMKE&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=9',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 2,
    key_words: '가정폭력',
    contents: '위험한 상황이면 112에 도움 요청하기',
    url: 'https://youtu.be/Xi3D47nF67g?si=63LEDL34KTOsDqnP',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 3,
    key_words: '가정환경',
    contents: '낯선 사람이 초인종 눌러도 문 열어주지 않기',
    url: 'https://www.youtube.com/watch?v=nFKp8ZI4oXY&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=52',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 4,
    key_words: '감염병',
    contents: '기침할 땐 팔꿈치로 입 가리기',
    url: 'https://youtu.be/jIk6x-sm8rE?si=Ov33eRE37WJNx4By',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 5,
    key_words: '강요',
    contents: '하기 싫은 일을 강요받으면 어른에게 알리기',
    url: 'https://www.youtube.com/watch?v=8t-myQCxiGA&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=4',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 3
  },
  {
    id: 6,
    key_words: '개인정보보호',
    contents: '인터넷에 내 개인정보를 함부로 올리지 않기',
    url: 'https://youtu.be/JVAZNVv68Mo?si=OhsfIhhWu23Jty7R',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 7,
    key_words: '게임중독',
    contents: '하루 1시간 이하로 게임하기',
    url: 'https://www.youtube.com/watch?v=Eu4936mQBWA&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=13',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 8,
    key_words: '게임중독',
    contents: '게임은 정해진 시간만큼만 하고 바깥 활동하기',
    url: 'https://www.youtube.com/watch?v=1obiLDZ-Tt0&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=8',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 4
  },
  {
    id: 9,
    key_words: '게임중독',
    contents: '게임보다 책 읽기나 운동하는 시간 늘리기',
    url: 'https://www.youtube.com/watch?v=gMoWDzkfMcg&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=5',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 9
  },
  {
    id: 10,
    key_words: '겨울방학',
    contents: '겨울방학 동안 실내에서도 규칙적인 운동하기',
    url: 'https://www.youtube.com/watch?v=X_PZmYxuUIg&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=26',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 6
  },
  {
    id: 11,
    key_words: '겨울스포츠',
    contents: '장갑과 보호장비를 착용하고 스키 타기',
    url: 'https://www.youtube.com/watch?v=Wd9rsTkoF2g',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 12,
    key_words: '겨울철',
    contents: '따뜻한 옷을 챙겨 입고 감기 예방하기',
    url: 'https://youtu.be/jg7dvcPhLPs?si=hHAIUT5vKVeJZr1_',
    youtube_id: '뽀로로',
    channel_name: '뽀로로',
    play_time: 11
  },
  {
    id: 13,
    key_words: '계곡얼음',
    contents: '겨울철 계곡 얼음 위에서 뛰거나 올라가지 않기',
    url: 'https://youtu.be/MFUPq7_G4g8?si=x0yIlhtaCYA7k_XW',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 18
  },
  {
    id: 14,
    key_words: '계단',
    contents: '난간을 잡고 한 계단씩 조심히 오르내리기',
    url: 'https://www.youtube.com/watch?v=c0C67rIs_88&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=40',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 15,
    key_words: '고층화재',
    contents: '고층 건물에서 화재 시 엘리베이터 사용하지 않기',
    url: 'https://www.youtube.com/watch?v=9vTuIS8csrs&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=22',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 6
  },
  {
    id: 16,
    key_words: '골절',
    contents: '다친 부위는 움직이지 않고 도움 요청하기',
    url: 'https://www.youtube.com/watch?v=VoTP-c5Sme8&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=6',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 14
  },
  {
    id: 17,
    key_words: '과학실',
    contents: '과학실에서는 실험 도구를 조심히 다루기',
    url: 'https://youtu.be/GLaZZR2EwBA?si=6ZlLOblrdK9fQRAc',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 18,
    key_words: '괴롭힘',
    contents: '친구를 놀리거나 따돌리지 않기',
    url: 'https://www.youtube.com/watch?v=ItelaScy9uU&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=9',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 3
  },
  {
    id: 19,
    key_words: '교실',
    contents: '교실에서 뛰지 않고 차분하게 생활하기',
    url: 'https://youtu.be/jioLYzCyPHE?si=DFAArhKAE1Tg-MoU',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 7
  },
  {
    id: 20,
    key_words: '교차로',
    contents: '신호등 색 확인 후 좌우 살피고 건너기',
    url: 'https://www.youtube.com/watch?v=05H5trbB9do&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=2',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 21,
    key_words: '교통',
    contents: '도로를 건널 때는 절대 뛰지 않기',
    url: 'https://www.youtube.com/watch?v=QWumhSnLcVU&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=14',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 6
  },
  {
    id: 22,
    key_words: '교통사고',
    contents: '길을 건널 땐 멈추고 좌우를 충분히 살피기',
    url: 'https://youtu.be/gr2n4M-87Mc?si=4luSxUD3BaiXT9bV',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 9
  },
  {
    id: 23,
    key_words: '교통사고',
    contents: '도로에서 공을 줍지 않고 보호자와 함께하기',
    url: 'https://youtu.be/qfkicH0qxho?si=U4kQAbV_OI62QN-a',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 4
  },
  {
    id: 24,
    key_words: '교통안전',
    contents: '길 건널 땐 스마트폰 보지 않기',
    url: 'https://www.youtube.com/watch?v=d3J2c7_uQw4&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=15',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 25,
    key_words: '교통안전',
    contents: '길을 건널 땐 반드시 좌우를 살피고 천천히 건너기',
    url: 'https://youtu.be/LZ98J7cl4Wk?si=3XsWJaMFX5nfST_K',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 4
  },
  {
    id: 26,
    key_words: '교통안전',
    contents: '횡단보도를 건널 때 좌우 확인 후 건너기',
    url: 'https://youtu.be/bg9u2f37vew?si=AiiS14N5r_l-dzKW',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 3
  },
  {
    id: 27,
    key_words: '금연',
    contents: '담배 연기가 나는 곳에서는 멀리 피하기',
    url: 'https://youtu.be/UpaKlL44KXw?si=varwLQQjnGR1qYv5',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 28,
    key_words: '금연',
    contents: '담배를 권유받으면 단호하게 거절하기',
    url: 'https://www.youtube.com/watch?v=jaJjHl5Qd18&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=10',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 6
  },
  {
    id: 29,
    key_words: '금품갈취',
    contents: '돈이나 물건을 빼앗기면 선생님께 알리기',
    url: 'https://www.youtube.com/watch?v=1DM3K1s_MRw&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=6',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 2
  },
  {
    id: 30,
    key_words: '기침',
    contents: '기침할 때는 손이 아닌 옷소매로 입 가리기',
    url: 'https://www.youtube.com/watch?v=AxZA4N6M9QQ',
    youtube_id: '뽀로로',
    channel_name: '뽀로로',
    play_time: 11
  },
  {
    id: 31,
    key_words: '기후위기',
    contents: '환경 보호를 위해 쓰레기 줄이고 전기 절약하기',
    url: 'https://www.youtube.com/watch?v=eS0iM63Yjqg&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=20',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 7
  },
  {
    id: 32,
    key_words: '끼임사고',
    contents: '문이나 계단 사이에 손 끼이지 않도록 조심하기',
    url: 'https://www.youtube.com/watch?v=JLopCv8P8DM&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=36',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 33,
    key_words: '놀이',
    contents: '놀이할 때는 차분히 질서를 지키기',
    url: 'https://www.youtube.com/watch?v=pFYFyBe0iro&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK&index=4',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 34,
    key_words: '놀이공원',
    contents: '놀이기구를 탈 땐 안전벨트를 꼭 착용하기',
    url: 'https://www.youtube.com/watch?v=A2kMQE1dfkQ&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=11',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 5
  },
  {
    id: 35,
    key_words: '놀이기구',
    contents: '놀이기구에서 허리띠나 안전바를 꼭 잠그기',
    url: 'https://youtu.be/B-aBBGzuKTI?si=eOHSR0iLducnN41-',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 9
  },
  {
    id: 36,
    key_words: '놀이터',
    contents: '미끄럼틀은 앉아서 천천히 내려가기',
    url: 'https://www.youtube.com/watch?v=c7MY5hkyB7A&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=8',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 37,
    key_words: '눈 오는 날',
    contents: '미끄러운 길에서는 천천히 걸어 넘어지지 않기',
    url: 'https://www.youtube.com/watch?v=NzTvglIyNt4&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=26',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 38,
    key_words: '당류 줄이기',
    contents: '단 음료 대신 물이나 우유 마시기',
    url: 'https://www.youtube.com/watch?v=fvo8gj07E7U&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK&index=8',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 39,
    key_words: '대피로',
    contents: '대피 안내표지판을 미리 확인해두기',
    url: 'https://www.youtube.com/watch?v=dgy-aOPgJs8&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=37',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 40,
    key_words: '도박',
    contents: '돈을 걸고 하는 게임은 절대 하지 않기',
    url: 'https://youtu.be/A57SB6yxK6s?si=IBIg0Lshjmn0CvSK',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 19
  },
  {
    id: 41,
    key_words: '도박',
    contents: '친구들과 돈을 걸고 하는 내기는 하지 않기',
    url: 'https://youtu.be/GkWvwdSC2nY?si=wAbrqlywI2Pp4B-n',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 42,
    key_words: '독감',
    contents: '독감 예방을 위해 손을 자주 씻고 마스크 쓰기',
    url: 'https://www.youtube.com/watch?v=VJCTrV-ySTo&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=21',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 6
  },
  {
    id: 43,
    key_words: '독사',
    contents: '산에서 뱀을 보면 가까이 가지 않고 조용히 피하기',
    url: 'https://youtu.be/6TlbT3jISD0?si=3TjG_ULLwM9O_qCp',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 17
  },
  {
    id: 44,
    key_words: '동물',
    contents: '낯선 동물 만지기 전에 보호자 허락받기',
    url: 'https://www.youtube.com/watch?v=REYrmpWJkTs&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=6',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 45,
    key_words: '동물안전',
    contents: '낯선 동물은 만지지 않고 조심하기',
    url: 'https://youtu.be/duHeGxoecHU?si=-f9OxKtZaLD2wU8W',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 46,
    key_words: '등하굣길',
    contents: '등하굣길에는 항상 길가에서 한쪽으로 걷기',
    url: 'https://youtu.be/UHqy7mcpAgU?si=5hxDTT-FzUF8lQsR',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 47,
    key_words: '등하굣길',
    contents: '등하굣길에 스마트폰 보면서 걷지 않기',
    url: 'https://youtu.be/C31t-nkEiRk?si=YeNe2vYxQUntMmeD',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 48,
    key_words: '등하원길',
    contents: '차도 가까이 걷지 말고 인도로 다니기',
    url: 'https://www.youtube.com/watch?v=ps2hfiBJp4g&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK&index=9',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 49,
    key_words: '따돌림',
    contents: '친구를 소외시키지 않고 함께 어울리기',
    url: 'https://www.youtube.com/watch?v=M4xS8BA2mTA&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=5',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 3
  },
  {
    id: 50,
    key_words: '또래괴롭힘',
    contents: '친구를 놀리거나 괴롭히지 않기',
    url: 'https://youtu.be/cR1OyQl1k20?si=xe4W2ffSPERAMkPB',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 51,
    key_words: '뜨거운 것',
    contents: '뜨거운 음식이나 물 조심해서 다루기',
    url: 'https://www.youtube.com/watch?v=6uCz5uSffnE&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK&index=5',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 52,
    key_words: '말범',
    contents: '낯선 개를 만졌을 땐 손을 깨끗이 씻기',
    url: 'https://youtu.be/1Bx95IPtD9Q?si=bBUTCspve3sGZrL6',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 8
  },
  {
    id: 53,
    key_words: '멀티탭',
    contents: '멀티탭에 많은 전자기기를 꽂아두지 않기',
    url: 'https://www.youtube.com/watch?v=Jad60RoW2Ys&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=12',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 4
  },
  {
    id: 54,
    key_words: '문 끼임',
    contents: '문을 닫을 때 손을 조심하기',
    url: 'https://www.youtube.com/watch?v=ijqUhyQjSbc',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 55,
    key_words: '물건 낙하',
    contents: '높은 곳에 물건을 두지 않기',
    url: 'https://youtu.be/a7NuaNGenVo?si=O6jj-IC8CCcDOnTc',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 17
  },
  {
    id: 56,
    key_words: '물놀이',
    contents: '구명조끼 착용 후 물놀이하기',
    url: 'https://www.youtube.com/watch?v=XZqpXMF4y_Y&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=57',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 57,
    key_words: '물놀이',
    contents: '물놀이할 땐 구명조끼 착용하고 깊은 곳에 가지 않기',
    url: 'https://youtu.be/0oZlNNFUFLM?si=pHkN6-qThkzUiTzq',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 58,
    key_words: '물놀이',
    contents: '급류 지역에서는 물놀이를 하지 않기',
    url: 'https://youtu.be/ttvKRnJmvqk?si=sZCws-FM-pNgXCiM',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 11
  },
  {
    id: 59,
    key_words: '미세먼지',
    contents: '미세먼지가 심한 날엔 외출을 줄이고 마스크 쓰기',
    url: 'https://www.youtube.com/watch?v=V4ngi4-8xcE',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 5
  },
  {
    id: 60,
    key_words: '미술도구',
    contents: '가위나 칼은 사용 후 꼭 제자리에 두기',
    url: 'https://www.youtube.com/watch?v=UEe92-VToLA&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=50',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 61,
    key_words: '미술실',
    contents: '실험이나 그림 그릴 때 보호안경 착용하기',
    url: 'https://www.youtube.com/watch?v=rm0JW72TbWY',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 62,
    key_words: '미아사고',
    contents: '부모님과 떨어지면 안전한 곳에서 기다리기',
    url: 'https://youtu.be/yiaKWisvBV0?si=TZGBe0-OS2Yn7zZH',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 63,
    key_words: '바다물놀이',
    contents: '해류가 강한 곳에서는 수영하지 않기',
    url: 'https://youtu.be/I1GT-3UvnUs?si=sUkseK_Cvam_hWoK',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 7
  },
  {
    id: 64,
    key_words: '바다수영',
    contents: '바다에서 수영할 땐 구명조끼 꼭 착용하기',
    url: 'https://youtu.be/4pMEgOTcBj0?si=jUvHJMXJBHNL7T2S',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 16
  },
  {
    id: 65,
    key_words: '반려동물',
    contents: '동물을 만지기 전에는 보호자에게 허락받기',
    url: 'https://www.youtube.com/watch?v=fEntZf8ND8s&list=PLawdY97HdndRbvRd1YWw_D8rWGbIl6tzQ&index=9',
    youtube_id: '뽀로로',
    channel_name: '뽀로로',
    play_time: 10
  },
  {
    id: 66,
    key_words: '방학',
    contents: '방학 동안 규칙적인 생활 습관 유지하기',
    url: 'https://www.youtube.com/watch?v=UPFZvGmd78M&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=25',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 4
  },
  {
    id: 67,
    key_words: '방화셔터',
    contents: '방화셔터 아래에서 장난치거나 머무르지 않기',
    url: 'https://www.youtube.com/watch?v=axWUBiiAjLs&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=9',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 5
  },
  {
    id: 68,
    key_words: '버스',
    contents: '버스 정류장에서 줄 서서 차례로 타기',
    url: 'https://www.youtube.com/watch?v=zFedo1llpVc&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=45',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 69,
    key_words: '버스탑승',
    contents: '버스가 완전히 멈춘 후 조심히 타고 내리기',
    url: 'https://youtu.be/sQdfXjVeb0s?si=6cWRwHIiR72iwiad',
    youtube_id: '뽀로로',
    channel_name: '뽀로로',
    play_time: 11
  },
  {
    id: 70,
    key_words: '벌쏘임',
    contents: '벌을 보면 흥분하지 말고 조용히 피하기',
    url: 'https://youtu.be/xEPlg4x4mJM?si=2gjh2Yq3Pt47iiyI',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 71,
    key_words: '보행',
    contents: '인도로 걸어가고 차도로 뛰어가지 않기',
    url: 'https://www.youtube.com/watch?v=HbU102WgF7Q&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=49',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 72,
    key_words: '보행안전',
    contents: '길을 걸을 때는 핸드폰 보지 않기',
    url: 'https://youtu.be/xR9PiheTZuY?si=JnL103ADW3dk5cCw',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 73,
    key_words: '봄철산행',
    contents: '봄철 등산할 때 벌이나 뱀을 조심하기',
    url: 'https://youtu.be/jk1-y5VdVV8?si=rsCWAtZNinvMhsrb',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 4
  },
  {
    id: 74,
    key_words: '불장난',
    contents: '성냥과 라이터를 가지고 놀지 않기',
    url: 'https://www.youtube.com/watch?v=_hiivnND-EA&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=5',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 5
  },
  {
    id: 75,
    key_words: '비 오는 날',
    contents: '우산 쓸 때 앞이 잘 보이도록 주의하기',
    url: 'https://www.youtube.com/watch?v=L9IATmWsirM&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=32',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 76,
    key_words: '비상구',
    contents: '비상구 위치를 미리 확인하고 기억하기',
    url: 'https://www.youtube.com/watch?v=2Bkgwm0FZkg&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK&index=7',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 77,
    key_words: '비행기사고',
    contents: '비행기에서 안내방송을 주의 깊게 듣기',
    url: 'https://youtu.be/5-_7UCgq2xA?si=25ubn8dnO_KbYzsd',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 21
  },
  {
    id: 78,
    key_words: '비행기안전',
    contents: '좌석벨트를 착용하고 기내 질서 지키기',
    url: 'https://youtu.be/JUl9mp-XQbw?si=K7r9eyPrpELbmUmr',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 79,
    key_words: '사이버폭력',
    contents: '온라인에서 나쁜 말을 하지 않고 예의 지키기',
    url: 'https://www.youtube.com/watch?v=L7j_apLd1P4&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=8',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 6
  },
  {
    id: 80,
    key_words: '사이버폭력',
    contents: '온라인에서도 친구에게 상처 주는 말 하지 않기',
    url: 'https://www.youtube.com/watch?v=TD--XVJNiRk&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=22',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 5
  },
  {
    id: 81,
    key_words: '생명존중',
    contents: '작은 생명도 소중히 여기고 보호하기',
    url: 'https://youtu.be/Y6XdXOBpIY8?si=pB3lduyDUSQJpTpD',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 82,
    key_words: '생존수영',
    contents: '물에 빠졌을 땐 당황하지 말고 누워서 떠 있기',
    url: 'https://www.youtube.com/watch?v=822ldObjg28&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=13',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 6
  },
  {
    id: 83,
    key_words: '생활안전',
    contents: '어두운 곳에서는 항상 조심하며 다니기',
    url: 'https://www.youtube.com/watch?v=NnqZL0CQLzw&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=11',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 84,
    key_words: '선박',
    contents: '배에서는 구명조끼를 꼭 착용하기',
    url: 'https://www.youtube.com/watch?v=X7Z6qvD6hAU',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 85,
    key_words: '성폭력',
    contents: '싫은 행동을 강요받으면 큰소리로 말하기',
    url: 'https://youtu.be/NWBXGU43FNg?si=68BaPz1p6NOumrOL',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 86,
    key_words: '성폭력',
    contents: '낯선 사람이 신체 접촉을 시도하면 큰 소리로 도움 요청하기',
    url: 'https://www.youtube.com/watch?v=xGKqRj7J98Y&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=7',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 2
  },
  {
    id: 87,
    key_words: '손가락 절단',
    contents: '문을 닫을 땐 손 조심하기',
    url: 'https://youtu.be/Jz4T3OfEDAM?si=ZAR2mpupXGse8iDF',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 25
  },
  {
    id: 88,
    key_words: '손씻기',
    contents: '비누로 손가락 사이까지 깨끗이 씻기',
    url: 'https://www.youtube.com/watch?v=5WUFwuTpqdA&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=17',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 89,
    key_words: '수영',
    contents: '수영 전 준비운동을 하고 몸을 충분히 적시기',
    url: 'https://youtu.be/Yklx09fZsoA?si=QNDaklxiHDGTnrSb',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 90,
    key_words: '스마트폰',
    contents: '어두운 곳에서 스마트폰 오래 보지 않기',
    url: 'https://www.youtube.com/watch?v=OwyWUvXZoUI',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 91,
    key_words: '스마트폰',
    contents: '스마트폰 사용 시간은 정해진 만큼만 지키기',
    url: 'https://www.youtube.com/watch?v=u3jGLNMGnQ0&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=3',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 9
  },
  {
    id: 92,
    key_words: '스케이트',
    contents: '스케이트 탈 때는 장갑과 무릎 보호대 착용하기',
    url: 'https://www.youtube.com/watch?v=uC1Zcy2rlkg&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=21',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 5
  },
  {
    id: 93,
    key_words: '스키',
    contents: '스키를 탈 땐 헬멧과 보호 장비를 꼭 착용하기',
    url: 'https://www.youtube.com/watch?v=zxekOTBVoas&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=20',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 5
  },
  {
    id: 94,
    key_words: '승강기',
    contents: '엘리베이터 안에서는 장난치지 않기',
    url: 'https://www.youtube.com/watch?v=cpX_s8qSzUw&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=48',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 95,
    key_words: '승강기',
    contents: '승강기 안에서 장난치지 않고 안전하게 이용하기',
    url: 'https://youtu.be/QlR0xf3TlRg?si=wLhdMhDG3sG6u9Vg',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 7
  },
  {
    id: 96,
    key_words: '식중독',
    contents: '음식 먹기 전 손 깨끗이 씻기',
    url: 'https://www.youtube.com/watch?v=TsT77hD-LIs&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=31',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 97,
    key_words: '식중독',
    contents: '손을 깨끗이 씻고 상한 음식은 먹지 않기',
    url: 'https://www.youtube.com/watch?v=_wGz8d8gaWE&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=6',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 7
  },
  {
    id: 98,
    key_words: '식품',
    contents: '유통기한 지난 음식은 먹지 않기',
    url: 'https://www.youtube.com/watch?v=_SaNmidt9LE',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 99,
    key_words: '신체폭력',
    contents: '친구를 때리거나 밀지 않기',
    url: 'https://www.youtube.com/watch?v=KCNbpS0GbW0&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=3',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 2
  },
  {
    id: 100,
    key_words: '실내동상',
    contents: '추운 날에는 장갑과 모자를 착용하고 보온 유지하기',
    url: 'https://www.youtube.com/watch?v=UoeS9Gb7kMQ&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=25',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 6
  },
  {
    id: 101,
    key_words: '실종예방',
    contents: '부모님과 떨어지면 큰소리로 도움 요청하기',
    url: 'https://www.youtube.com/watch?v=PsCQ7r5H8sI&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=4',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 102,
    key_words: '심정지',
    contents: '쓰러진 사람 발견하면 119에 신고하기',
    url: 'https://www.youtube.com/watch?v=RpviDceU-_s&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=2',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 16
  },
  {
    id: 103,
    key_words: '싱크홀',
    contents: '땅이 갑자기 꺼지는 곳에서는 빨리 대피하기',
    url: 'https://www.youtube.com/watch?v=voRcFn6QNyM&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=19',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 4
  },
  {
    id: 104,
    key_words: '썰매',
    contents: '앞을 잘 보고 주변에 사람 없는 곳에서 타기',
    url: 'https://www.youtube.com/watch?v=E4NpSVXp53I&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=43',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 105,
    key_words: '아동학대',
    contents: '친구가 힘들어하면 어른에게 이야기하기',
    url: 'https://youtu.be/pUnpaHBs6a4?si=_yI8jg2pOTWq7dHv',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 106,
    key_words: '아동학대',
    contents: '친구나 가족이 아프거나 힘들어하면 어른에게 알리기',
    url: 'https://www.youtube.com/watch?v=YcMqmsohh4s&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=13',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 5
  },
  {
    id: 107,
    key_words: '아파트복도',
    contents: '복도에서 뛰거나 큰 소리 내지 않기',
    url: 'https://youtu.be/l0eD2P70CWg?si=bgDaqrXeTU76hWFT',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 15
  },
  {
    id: 108,
    key_words: '안과질환',
    contents: '눈이 가렵거나 아플 때 손으로 비비지 않기',
    url: 'https://youtu.be/pr-WWj9sUS4?si=1dULzXbnaDMpbu9K',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 16
  },
  {
    id: 109,
    key_words: '안전운행습관',
    contents: '자전거 탈 때 신호와 속도 지키기',
    url: 'https://youtu.be/R5jhVMjg6qE?si=7Y6d--gKJXqQdcSN',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 110,
    key_words: '야외물놀이',
    contents: '깊은 곳에서는 보호자 없이 들어가지 않기',
    url: 'https://youtu.be/n_CeRl7FU_g?si=fvxUPhR6WebkXaf6',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 111,
    key_words: '야외식물',
    contents: '모르는 식물은 만지거나 먹지 않기',
    url: 'https://www.youtube.com/watch?v=IUBEmjIem9k&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=28',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 112,
    key_words: '야외활동',
    contents: '야외활동 후 손과 발을 깨끗이 씻기',
    url: 'https://youtu.be/xHCi-vmTcj0?si=NXwJm-6KLnja6-z0',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 113,
    key_words: '약',
    contents: '약은 보호자 허락 없이 먹지 않기',
    url: 'https://www.youtube.com/watch?v=KMHVwD8B_V8&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK&index=3',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 114,
    key_words: '약물',
    contents: '부모님 허락 없이 약 먹지 않기',
    url: 'https://www.youtube.com/watch?v=bDCh7e9MCW0&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=14',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 115,
    key_words: '언어폭력',
    contents: '친구에게 상처 주는 말 하지 않기',
    url: 'https://youtu.be/vhDARYK7CvU?si=kHJ7lX1iN4JLHBcK',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 116,
    key_words: '언어폭력',
    contents: '친구를 놀리는 말은 하지 않기',
    url: 'https://youtu.be/1aZJU8gsBjM?si=lATFxuvwmOIBhfzp',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 7
  },
  {
    id: 117,
    key_words: '언어폭력',
    contents: '상대방을 존중하는 말을 사용하기',
    url: 'https://www.youtube.com/watch?v=s75cmeHqfGs&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=2',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 3
  },
  {
    id: 118,
    key_words: '언어폭력',
    contents: '나쁜 말 대신 상대를 배려하는 말을 사용하기',
    url: 'https://www.youtube.com/watch?v=FlFtI4ELpkI',
    youtube_id: '위헬프_푸른나무재단',
    channel_name: '위헬프_푸른나무재단',
    play_time: 6
  },
  {
    id: 119,
    key_words: '에스컬레이터',
    contents: '손잡이를 잡고 한 줄로 서서 이용하기',
    url: 'https://www.youtube.com/watch?v=j7LFRHfxKfA&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=19',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 120,
    key_words: '에스컬레이터',
    contents: '에스컬레이터 손잡이를 잡고 장난치지 않기',
    url: 'https://youtu.be/Htaou5rtuxg?si=_Q1gwIC1B_8IzM-u',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 121,
    key_words: '에어컨',
    contents: '실내외 온도 차가 크지 않도록 적정 온도로 설정하기',
    url: 'https://www.youtube.com/watch?v=1Opl2yfCu6A&list=PLawdY97HdndRbvRd1YWw_D8rWGbIl6tzQ&index=7',
    youtube_id: '뽀로로',
    channel_name: '뽀로로',
    play_time: 10
  },
  {
    id: 122,
    key_words: '여름',
    contents: '더운 날엔 모자 쓰고 물 자주 마시기',
    url: 'https://www.youtube.com/watch?v=zOLQKlJjqLQ&list=PLawdY97HdndRbvRd1YWw_D8rWGbIl6tzQ&index=8',
    youtube_id: '뽀로로',
    channel_name: '뽀로로',
    play_time: 11
  },
  {
    id: 123,
    key_words: '온라인범죄',
    contents: '모르는 사람이 보낸 메시지나 링크 열지 않기',
    url: 'https://www.youtube.com/watch?v=ZcguVFDsoSw&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=16',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 7
  },
  {
    id: 124,
    key_words: '욕실',
    contents: '욕실 바닥이 미끄러우니 천천히 이동하기',
    url: 'https://www.youtube.com/watch?v=sO-mMU5E-DQ&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=30',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 125,
    key_words: '운동',
    contents: '운동 전에는 준비운동을 꼭 하고 시작하기',
    url: 'https://www.youtube.com/watch?v=sAdyWGXGzNg&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=7',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 3
  },
  {
    id: 126,
    key_words: '운동장',
    contents: '운동할 때 주변을 살피고 조심하기',
    url: 'https://www.youtube.com/watch?v=a6mSkjePFYQ&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=35',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 127,
    key_words: '워터파크',
    contents: '워터파크에서 미끄러지지 않도록 조심하기',
    url: 'https://youtu.be/D5RfLjarmAA?si=O0B6Gh25IXQMJgFa',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 7
  },
  {
    id: 128,
    key_words: '유괴',
    contents: '낯선 사람이 따라오라고 하면 절대 따라가지 않기',
    url: 'https://youtu.be/JeMZF0hh5Yw?si=qruzPEzYg1n9tvpw',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 129,
    key_words: '유괴',
    contents: '모르는 사람이 주는 선물이나 간식 받지 않기',
    url: 'https://www.youtube.com/watch?v=ATTJNq3BYKI&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=2',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 5
  },
  {
    id: 130,
    key_words: '유괴예방',
    contents: '모르는 사람이 따라오면 큰소리로 외치기',
    url: 'https://www.youtube.com/watch?v=BPhhAJMxR-c&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=7',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 131,
    key_words: '유리문',
    contents: '유리문이 있는 곳에서는 천천히 움직이기',
    url: 'https://youtu.be/v6o9i7Db0Go?si=WBVLYCWBhStfHW6x',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 16
  },
  {
    id: 132,
    key_words: '음식',
    contents: '상한 음식은 먹지 않고 버리기',
    url: 'https://www.youtube.com/watch?v=u79SWoj62mU&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 133,
    key_words: '음주운전',
    contents: '어른들이 음주운전을 하지 않도록 하기',
    url: 'https://youtu.be/-Ft_BXS9RaM?si=VaRbKT0dDDvnAkxq',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 134,
    key_words: '재난대피',
    contents: '재난 발생 시 안내 방송을 듣고 신속히 대피하기',
    url: 'https://youtu.be/xEdwEdhh5iQ?si=73DLGTjbMVuzNhGo',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 4
  },
  {
    id: 135,
    key_words: '전기',
    contents: '전선이 벗겨진 곳은 만지지 않기',
    url: 'https://www.youtube.com/watch?v=x8QenIeUbmQ',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 136,
    key_words: '전기',
    contents: '감전 위험이 있는 젖은 손으로 콘센트 만지지 않기',
    url: 'https://youtu.be/-cKhmBQHUqc?si=t5U5BDNKaVIIr2YF',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 2
  },
  {
    id: 137,
    key_words: '전기',
    contents: '전기코드를 젖은 손으로 만지지 않기',
    url: 'https://youtu.be/7579m5EAY4g?si=Ammvc2WIdJOL7t4M',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 138,
    key_words: '전기장판',
    contents: '전기장판 위에서 이불을 여러 겹 덮지 않기',
    url: 'https://youtu.be/vwx0xIwj9q8?si=W-cYifnalEKQsM84',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 17
  },
  {
    id: 139,
    key_words: '전기콘센트',
    contents: '젖은 손으로 콘센트 만지지 않기',
    url: 'https://www.youtube.com/watch?v=ePDOsBhRzdk&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=5',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 140,
    key_words: '주방',
    contents: '조리 중에는 불 근처에 가까이 가지 않기',
    url: 'https://www.youtube.com/watch?v=JDBLLWAWqZk&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=23',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 141,
    key_words: '주차장',
    contents: '주차장에서 뛰어다니지 않고 차량을 조심하기',
    url: 'https://youtu.be/pvwsxralNgo?si=16NDsWkxBMPqgrD_',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 142,
    key_words: '준비운동',
    contents: '운동 전에 충분한 준비운동 하기',
    url: 'https://www.youtube.com/watch?v=-CAycb2iYWk',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 143,
    key_words: '중독사고',
    contents: '세제나 약품은 절대 입에 대지 않기',
    url: 'https://www.youtube.com/watch?v=OF9rkzN6P5s&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=38',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 144,
    key_words: '지진',
    contents: '흔들림이 멈출 때까지 몸을 보호하기',
    url: 'https://youtu.be/rIxkqyviUSo?si=PbVkgglANRRJ8Uk2',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 145,
    key_words: '지진발생안전',
    contents: '탁자 밑으로 몸을 숨기고 머리 보호하기',
    url: 'https://www.youtube.com/watch?v=MYfF2SJ-4JE&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=29',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 146,
    key_words: '지하철',
    contents: '줄 서서 타고 내릴 때 조심하기',
    url: 'https://www.youtube.com/watch?v=YCAtmeC_v6I&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=41',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 147,
    key_words: '질식',
    contents: '먹을 땐 천천히 꼭꼭 씹어 삼키기',
    url: 'https://www.youtube.com/watch?v=jpJB-dFSN_g&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=18',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 148,
    key_words: '찜질방-각막',
    contents: '찜질방에서 눈을 뜨고 뜨거운 열기 바라보지 않기',
    url: 'https://youtu.be/DJTuQViY4qw?si=cF6Ci_vFzohx-olQ',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 18
  },
  {
    id: 149,
    key_words: '차량탑승',
    contents: '차에서는 안전벨트 꼭 착용하기',
    url: 'https://www.youtube.com/watch?v=HKtfFdwU_UY&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=24',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 150,
    key_words: '체육시간',
    contents: '체육 시간에는 준비운동을 꼭 하기',
    url: 'https://www.youtube.com/watch?v=8GwCv1SCxZk&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=15',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 4
  },
  {
    id: 151,
    key_words: '추락',
    contents: '난간이나 높은 곳에 올라가지 않기',
    url: 'https://www.youtube.com/watch?v=_vbVM7-oNjg&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=42',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 152,
    key_words: '출혈',
    contents: '피가 나면 깨끗한 천으로 눌러 지혈하기',
    url: 'https://www.youtube.com/watch?v=ilqf3RJVk0E&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=5',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 11
  },
  {
    id: 153,
    key_words: '치아건강',
    contents: '하루 두 번 이상 칫솔질 꼼꼼히 하기',
    url: 'https://www.youtube.com/watch?v=0oNncUrmxrc&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=34',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 154,
    key_words: '캠핑',
    contents: '불 가까이 가지 않고 부모님과 함께하기',
    url: 'https://youtu.be/c15BxH3IOkk?si=ga7jTXqBljsJZY79',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 155,
    key_words: '캠핑',
    contents: '캠핑장에서 불을 사용할 땐 보호자와 함께 하기',
    url: 'https://youtu.be/gBpmWgQvg74?si=Ee1m_8qWy4d-2aJJ',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 156,
    key_words: '킥보드',
    contents: '보호장비 착용 후 차도에서 타지 않기',
    url: 'https://youtu.be/ERtaScdPUnU?si=9FOBRLQsz8i1x5F8',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 157,
    key_words: '킥보드',
    contents: '킥보드는 보호 장비 착용 후 안전한 곳에서 타기',
    url: 'https://youtu.be/FDIMEZCMTEU?si=4-yIMUgtTf5savA0',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 4
  },
  {
    id: 158,
    key_words: '태풍',
    contents: '태풍 예보가 나오면 미리 안전한 곳에 머물기',
    url: 'https://youtu.be/97ZgY-J0wqg?si=VUwE9T46P-Dz-M-b',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 20
  },
  {
    id: 159,
    key_words: '태풍',
    contents: '태풍이 올 때는 창문을 꼭 닫고 실내에 있기',
    url: 'https://www.youtube.com/watch?v=d5em7esHKtE&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=18',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 6
  },
  {
    id: 160,
    key_words: '태풍',
    contents: '태풍이 심할 땐 외출을 삼가고 실내에 머물기',
    url: 'https://youtu.be/fPyKtIcezZ0?si=UuVJb-QpvFLBYCD-',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 9
  },
  {
    id: 161,
    key_words: '태풍',
    contents: '태풍이 올 땐 외출을 삼가고 실내에서 안전 지키기',
    url: 'https://youtu.be/lBjKZ2MScHI?si=zDHagxUCtRgRde1x',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 11
  },
  {
    id: 162,
    key_words: '태풍유리창',
    contents: '태풍이 올 때 유리창 근처에 가지 않기',
    url: 'https://youtu.be/tRlLyYeLNu8?si=7uUmmKlFU2Ss97sh',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 17
  },
  {
    id: 163,
    key_words: '폭염',
    contents: '폭염 시에는 시원한 곳에서 쉬고 물 자주 마시기',
    url: 'https://youtu.be/nScz_Ju-_XE?si=oP1zwkuPnnYBEYDs',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 7
  },
  {
    id: 164,
    key_words: '폭염',
    contents: '더운 날엔 냉방병 예방을 위해 적절한 온도 유지하기',
    url: 'https://youtu.be/WvYiFoiDyug?si=rWTAF-kPqfmFaRm1',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 165,
    key_words: '폭염',
    contents: '한낮에는 그늘에서 쉬며 무리한 운동하지 않기',
    url: 'https://youtu.be/0gu2fw06qdY?si=Q-rgHN5QNp-NwwZI',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 5
  },
  {
    id: 166,
    key_words: '피겨스케이트',
    contents: '넘어질 때 손으로 땅 짚지 않기',
    url: 'https://www.youtube.com/watch?v=jilFu4otJhQ&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=27',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 167,
    key_words: '하임리히법',
    contents: '음식이 목에 걸렸을 땐 즉시 도움 요청하기',
    url: 'https://youtu.be/R1prrAV1Yi4?si=FnxJXexDIL_oKh2q',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 2
  },
  {
    id: 168,
    key_words: '학교/공공안전',
    contents: '복도에서 뛰지 말고 천천히 걸어가기',
    url: 'https://www.youtube.com/watch?v=OpcaCuDdNts&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=22',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 169,
    key_words: '학교안전',
    contents: '교실에서는 뛰지 않고 조심히 행동하기',
    url: 'https://www.youtube.com/watch?v=0p4MSvKlmz8&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=9',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 17
  },
  {
    id: 170,
    key_words: '학교폭력',
    contents: '친구를 때리거나 괴롭히지 않기',
    url: 'https://www.youtube.com/watch?v=ABv8dK5YV_U&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=47',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 171,
    key_words: '학교폭력',
    contents: '친구에게 나쁜 말을 하지 않고 배려하기',
    url: 'https://www.youtube.com/watch?v=u7_wqbnETOQ&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 2
  },
  {
    id: 172,
    key_words: '학교폭력',
    contents: '친구에게 상처 주는 행동은 하지 않기',
    url: 'https://www.youtube.com/watch?v=fMSVPiGQEmU',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 9
  },
  {
    id: 173,
    key_words: '학교폭력',
    contents: '친구를 괴롭히지 않고 서로 존중하며 지내기',
    url: 'https://www.youtube.com/watch?v=fMSVPiGQEmU&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=26',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 9
  },
  {
    id: 174,
    key_words: '학교폭력',
    contents: '어려움을 겪으면 선생님이나 부모님께 바로 말하기',
    url: 'https://www.youtube.com/watch?v=UnQa9nTDeBU',
    youtube_id: 'KEDI TV<한국교육개발원>',
    channel_name: 'KEDI TV<한국교육개발원>',
    play_time: 6
  },
  {
    id: 175,
    key_words: '학교폭력',
    contents: '친구가 괴롭힘을 당하면 모른 척하지 않고 도와주기',
    url: 'https://www.youtube.com/watch?v=-IiZ2C7Eq3w',
    youtube_id: '충북영동TV',
    channel_name: '충북영동TV',
    play_time: 4
  },
  {
    id: 176,
    key_words: '학교폭력(신체)',
    contents: '친구와 장난칠 때 힘 조절하고 다치지 않게 하기',
    url: 'https://www.youtube.com/watch?v=kdNUiJYfbCY&list=PLMWDl1g2ix4S5o-pykFZOGFshyb1ibGuZ',
    youtube_id: 'teacher kim(드라마)',
    channel_name: 'teacher kim(드라마)',
    play_time: 3
  },
  {
    id: 177,
    key_words: '학폭신고',
    contents: '학교폭력을 목격하면 선생님이나 부모님께 알리기',
    url: 'https://www.youtube.com/watch?v=C3C3j4JqQ-Q&list=PLJoQWxBGOmBa0y76rhI1FE8osODr8gWSP&index=10',
    youtube_id: '초등백과(동물의숲)',
    channel_name: '초등백과(동물의숲)',
    play_time: 2
  },
  {
    id: 178,
    key_words: '한랭질환',
    contents: '추운 날씨에는 따뜻한 옷을 입고 체온 유지하기',
    url: 'https://www.youtube.com/watch?v=ObWYxq6T7e4',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 3
  },
  {
    id: 179,
    key_words: '한파',
    contents: '장갑과 모자 착용 후 따뜻하게 외출하기',
    url: 'https://youtu.be/QA8JBvMTSjQ?si=oVQCnvwDd9JtuZk5',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 180,
    key_words: '해빙기',
    contents: '녹기 시작한 얼음 위에서는 절대 걷지 않기',
    url: 'https://www.youtube.com/watch?v=j92MTXB9hek&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=4',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 4
  },
  {
    id: 181,
    key_words: '헬륨가스',
    contents: '헬륨가스를 직접 흡입하지 않기',
    url: 'https://www.youtube.com/watch?v=4lGVBhykdN0&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=24',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 4
  },
  {
    id: 182,
    key_words: '혀 잘림',
    contents: '얼음을 깨물어 먹지 않기',
    url: 'https://youtu.be/fAsEkui1SDY?si=rEkd68YaOgSMeBim',
    youtube_id: '위기탈출넘버원',
    channel_name: '위기탈출넘버원',
    play_time: 17
  },
  {
    id: 183,
    key_words: '현장학습',
    contents: '현장학습 중 선생님과 친구들에게서 떨어지지 않기',
    url: 'https://www.youtube.com/watch?v=FwJ_J4a07dU&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=10',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 5
  },
  {
    id: 184,
    key_words: '호우',
    contents: '폭우가 내릴 땐 계곡이나 하천 근처에 가지 않기',
    url: 'https://youtu.be/mwh7pxaV1Y8?si=UGZ5NPoQbWvqYBv7',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 7
  },
  {
    id: 185,
    key_words: '홍수태풍',
    contents: '강한 바람과 비가 올 땐 밖에 나가지 않기',
    url: 'https://youtu.be/MNheYh_6uAY?si=p32GuIJ36c3_3PmV',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 186,
    key_words: '화산폭발',
    contents: '화산재가 날릴 땐 실내에 머물고 마스크 착용하기',
    url: 'https://youtu.be/euUY6r82uyI?si=T5dHggNo25J2VLP6',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 4
  },
  {
    id: 187,
    key_words: '화상',
    contents: '뜨거운 물이나 불 가까이에 손 대지 않기',
    url: 'https://www.youtube.com/watch?v=NAAtxz50yd4&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=51',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 188,
    key_words: '화재',
    contents: '불을 보면 즉시 119에 신고하기',
    url: 'https://www.youtube.com/watch?v=IIDhhV-CeiI&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=33',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 189,
    key_words: '화재',
    contents: '불이 나면 몸을 낮추고 신속히 대피하기',
    url: 'https://www.youtube.com/watch?v=jou3Oz-T0W0&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=8',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 13
  },
  {
    id: 190,
    key_words: '화재',
    contents: '화재가 나면 낮은 자세로 신속히 대피하기',
    url: 'https://youtu.be/U3RpUPGQ5Qc?si=CrgKzCQ14iINEqdV',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 6
  },
  {
    id: 191,
    key_words: '화재',
    contents: '전기 제품을 사용 후 반드시 플러그 뽑기',
    url: 'https://youtu.be/YZlIuw45364?si=xj688VyaXzGi7_jj',
    youtube_id: '안전한TV',
    channel_name: '안전한TV',
    play_time: 3
  },
  {
    id: 192,
    key_words: '화재',
    contents: '불이 났을 때는 낮은 자세로 신속하게 대피하기',
    url: 'https://www.youtube.com/watch?v=yQ7KuQjnYtU&list=PLJoQWxBGOmBZj2_CkKoYVt3gAMGZJaDRY&index=24',
    youtube_id: '초등백과',
    channel_name: '초등백과',
    play_time: 5
  },
  {
    id: 193,
    key_words: '환경보호',
    contents: '나무를 보호하고 함부로 꺾지 않기',
    url: 'https://youtu.be/2Igi9Uq88b8?si=f6VwDAuz52zsijAW',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 194,
    key_words: '환경오염',
    contents: '쓰레기는 분리배출하고 함부로 버리지 않기',
    url: 'https://www.youtube.com/watch?v=gYN4gwDLlOA&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=46',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 195,
    key_words: '환절기기',
    contents: '환절기에는 옷을 적절히 입고 감기 조심하기',
    url: 'https://www.youtube.com/watch?v=cAaNg6RV_TU&list=PLJuUHedy_S4-JsPjH6X7Wielj-nqzaItn&index=7',
    youtube_id: '안전한TV(켈리)',
    channel_name: '안전한TV(켈리)',
    play_time: 7
  },
  {
    id: 196,
    key_words: '회전문',
    contents: '회전문 안에서 장난치지 않기',
    url: 'https://www.youtube.com/watch?v=9mpV6YnuXxc&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=39',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 197,
    key_words: '횡단보도',
    contents: '초록불일 때 손 들고 천천히 건너기',
    url: 'https://www.youtube.com/watch?v=hulDFHBkBBU&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=3',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 198,
    key_words: '횡단보도',
    contents: '초록불이 켜져도 좌우 살피고 천천히 건너기',
    url: 'https://www.youtube.com/watch?v=NYJWv2i7wcQ&list=PLawdY97HdndRbvRd1YWw_D8rWGbIl6tzQ&index=10',
    youtube_id: '뽀로로',
    channel_name: '뽀로로',
    play_time: 11
  },
  {
    id: 199,
    key_words: 'TV시청',
    contents: 'TV는 1시간 이상 보지 않고 쉬어가기',
    url: 'https://www.youtube.com/watch?v=IUqbF9Ij580&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=44',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 200,
    key_words: 'TV안전',
    contents: 'TV 주변에 올라가거나 기대지 않기',
    url: 'https://youtu.be/zmmr2ANtQZo?si=B6_yxgOv6sHNHzlz',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 201,
    key_words: '유괴예방',
    contents: '낯선 사람이 따라오라고 하면 바로 거절하기',
    url: 'https://www.youtube.com/watch?v=ieN8VSJW2t8&list=PLxg0W84g7GWavuSMx7Jr8P8cWoOOdBhD9&index=10',
    youtube_id: '아이쿠',
    channel_name: '아이쿠',
    play_time: 7
  },
  {
    id: 202,
    key_words: '놀이터',
    contents: '놀이기구를 사용할 때 차례를 지키고 조심하기',
    url: 'https://www.youtube.com/watch?v=kzhgytmovj0',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 203,
    key_words: '유괴예방',
    contents: '길을 잃었을 때는 경찰서나 편의점으로 가기',
    url: 'https://www.youtube.com/watch?v=auvh_Jwv-qY',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 204,
    key_words: '손씻기',
    contents: '외출 후, 화장실 사용 후에는 손을 깨끗이 씻기',
    url: 'https://www.youtube.com/watch?v=iC7WDV54w8c',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 205,
    key_words: '화재',
    contents: '불이 나면 숨지 말고 빠르게 밖으로 대피하기',
    url: 'https://www.youtube.com/watch?v=8uBnfyou30U',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 206,
    key_words: '준비운동',
    contents: '운동 전에는 꼭 스트레칭을 해서 몸 풀기',
    url: 'https://www.youtube.com/watch?v=tbvTEfgb-lY',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 207,
    key_words: '장난감',
    contents: '장난감은 던지거나 입에 넣지 않도록 주의하기',
    url: 'https://www.youtube.com/watch?v=_3_AqcvAtzY',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 208,
    key_words: '버스',
    contents: '버스를 탈 때 줄을 서고, 움직이는 버스 안에서 장난치지 않기',
    url: 'https://www.youtube.com/watch?v=3lbVKtksjU8',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 209,
    key_words: '인터넷',
    contents: '인터넷에서 모르는 사람과 개인 정보 공유하지 않기',
    url: 'https://www.youtube.com/watch?v=GvpKDlXF5is',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 210,
    key_words: '주방',
    contents: '주방에서 뜨거운 냄비나 칼에 손대지 않기',
    url: 'https://www.youtube.com/watch?v=jHO3OnocTsM',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 211,
    key_words: '약물',
    contents: '부모님 허락 없이 약을 먹거나 만지지 않기',
    url: 'https://www.youtube.com/watch?v=_DHhQVF1fPY',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 212,
    key_words: '식품',
    contents: '유통기한이 지난 음식은 먹지 않기',
    url: 'https://www.youtube.com/watch?v=iNJFaQqcq68',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 213,
    key_words: '물놀이',
    contents: '수영장은 수심을 확인하고 미끄러지지 않게 조심하기',
    url: 'https://www.youtube.com/watch?v=NHDJYTdp_iA',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 214,
    key_words: '지하철',
    contents: '지하철 승강장에서 선을 넘지 않고 질서 지키기',
    url: 'https://www.youtube.com/watch?v=fHY5xariPho',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 215,
    key_words: '욕실',
    contents: '욕실 바닥이 미끄러우니 천천히 걸어가기',
    url: 'https://www.youtube.com/watch?v=_TtqKLhNNJQ',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 216,
    key_words: '어린이권',
    contents: '친구의 몸과 마음을 소중히 대하고 존중하기',
    url: 'https://www.youtube.com/watch?v=CPjpwQbhtbc',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 217,
    key_words: '교실',
    contents: '교실에서는 뛰지 않고 차분히 행동하기',
    url: 'https://www.youtube.com/watch?v=MDymU7AzOO4',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 218,
    key_words: '식물',
    contents: '정원이나 산책길에서 낯선 식물은 만지지 않기',
    url: 'https://www.youtube.com/watch?v=BL4-ie5Y8BU',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 219,
    key_words: '자동차신호',
    contents: '신호등이 파란불이어도 차가 오는지 확인하기',
    url: 'https://youtu.be/yqf_fijzo-Q?si=31xzs1uIp51QGwgX',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 220,
    key_words: '식중독',
    contents: '여름철 음식은 냉장 보관하고 익혀서 먹기',
    url: 'https://youtu.be/LYFOuH6RHCI?si=GjqwWCfLTnQ_WeAK',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 221,
    key_words: '승강기',
    contents: '엘리베이터 문이 닫힐 때 뛰어들지 않기',
    url: 'https://youtu.be/-riHfs5AlTQ?si=k4-eQtdc8iv-PMps',
    youtube_id: '우당탕탕은하안전단',
    channel_name: '우당탕탕은하안전단',
    play_time: 11
  },
  {
    id: 222,
    key_words: '약',
    contents: '알약이나 가루약을 장난삼아 먹지 않기',
    url: 'https://www.youtube.com/watch?v=Oyaf04ySXFo&list=PLIJBEbr4lvUYmxi45pvNmR6zwaE8bObVK&index=6',
    youtube_id: '키드키즈넷',
    channel_name: '키드키즈넷',
    play_time: 5
  },
  {
    id: 223,
    key_words: '화재',
    contents: '불장난은 절대 하지 않고 성냥, 라이터 만지지 않기',
    url: 'https://www.youtube.com/watch?v=UNg2QyQ7fTY&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 13
  },
  {
    id: 224,
    key_words: '지진',
    contents: '지진이 나면 책상 아래로 들어가 몸 보호하기',
    url: 'https://www.youtube.com/watch?v=ZwH8O4y-YbI&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=3',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 9
  },
  {
    id: 225,
    key_words: '화상',
    contents: '뜨거운 물이나 음식을 조심하고 화상을 입으면 바로 식히기',
    url: 'https://www.youtube.com/watch?v=mu9g3CCBKhQ&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=4',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 10
  },
  {
    id: 226,
    key_words: '캠핑',
    contents: '캠핑장에서 불을 사용할 때는 어른과 함께하기',
    url: 'https://www.youtube.com/watch?v=mCSBPE0OVvk&list=PL_aDqVnBXelJXWaq3n7RMqsHEmM8Dafyf&index=11',
    youtube_id: '서울소방',
    channel_name: '서울소방',
    play_time: 15
  }
];
