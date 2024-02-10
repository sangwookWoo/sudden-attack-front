
// 스터디 그룹 보여주는 전용 함수
async function showStudyGroups(tbody, el1, el2, el3) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 text-center">
            ${el1}
        </th>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            ${el2}
        </td>
        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            ${el3}
        </td>
    `;
    tbody.appendChild(newRow);
}

// 최근 인기있는 스터디 그룹 TOP 5
const hotStudyGroups = [
    {
        studyName: '기습공격',
        description: '주니어 개발자 모임입니다',
        studyMemberCount: 19,
    },
    {
        studyName: '이병호와 아이들',
        description: '프론트엔드 개발자 모임입니다',
        studyMemberCount: 98,
    },
    {
        studyName: '우상욱과 아이들',
        description: '데이터엔지니어 모임입니다',
        studyMemberCount: 15,
    },
    {
        studyName: '윤규헌과 아이들',
        description: '백엔드 개발자 모임입니다',
        studyMemberCount: 26,
    },
    {
        studyName: '노인 모임',
        description: '틀딱이 모임입니다.',
        studyMemberCount: 33,
    },
]

const hotStudyTbody = document.getElementById('hot-study-body');
hotStudyGroups.forEach(hotStudyGroup => {
    const {studyName, description, studyMemberCount} = hotStudyGroup;
    showStudyGroups(hotStudyTbody, studyName, description, studyMemberCount)
})

// 최근 생성된 스터디 그룹 TOP 5
const recentStudyGroups = [
    {
        studyName: '기초공사',
        description: '기본부터 닦읍시다',
        studyMemberCount: 1,
    },
    {
        studyName: '구교환 좋아하는 모임',
        description: '나만이 아닐텐데?',
        studyMemberCount: 2,
    },
    {
        studyName: '토목공사',
        description: '기본부터 닦읍시다',
        studyMemberCount: 3,
    },
    {
        studyName: '김길동',
        description: '나만 공부할거임',
        studyMemberCount: 1,
    },
    {
        studyName: '오지마',
        description: '왜 오는거지?',
        studyMemberCount: 12,
    },
]
const recentStudyTbody = document.getElementById('recent-study-body');
recentStudyGroups.forEach(recentStudyGroup => {
    const {studyName, description, studyMemberCount} = recentStudyGroup;
    showStudyGroups(recentStudyTbody, studyName, description, studyMemberCount)
})

// 글자 수 제한 필요


// 유저 참여 스터디
const userStudyGroups = [
    {
        studyName: '기습공격',
        recentPromise: '2024-02-31 연초파티',
        recentUpdateBoard: '우상욱 - 오늘 너무 힘들었다.',
    },
    {
        studyName: '이병호와 아이들',
        recentPromise: '2024-03-02 프론트엔드 도서 읽기 모임',
        recentUpdateBoard: '이병호 - 스페인 개꿀ㅋㅋ',
    },
    {
        studyName: '우상욱과 아이들',
        recentPromise: '2024-03-08 방문 두들기기',
        recentUpdateBoard: '김길동 - 숨쉬기가 힘드네',
    },
    {
        studyName: '윤규헌과 아이들',
        recentPromise: '2024-12-01 연말파티',
        recentUpdateBoard: '윤규헌 - 잠을 안잤습니다',
    },
    {
        studyName: '노인 모임',
        recentPromise: '2024-07-01 양로원 고스톱',
        recentUpdateBoard: '김김동 - 오늘 김치찌개',
    },
]
const userStudyTbody = document.getElementById('user-study-body');
userStudyGroups.forEach(userStudyGroup => {
    const {studyName, recentPromise, recentUpdateBoard} = userStudyGroup;
    showStudyGroups(userStudyTbody, studyName, recentPromise, recentUpdateBoard)
})