
// 스터디 그룹 보여주는 전용 함수
async function showStudyGroups(tbody, studyName, description, studyMemberCount) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 text-center">
            ${studyName}
        </th>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
            ${description}
        </td>
        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
            ${studyMemberCount}
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