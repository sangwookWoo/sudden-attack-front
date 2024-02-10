// 스터디 그룹 보여주는 전용 함수
async function showStudyGroups(tbody, el1, el2, el3, el4) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 text-center">
            ${el1}
        </th>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            ${el2}
        </td>
        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
            ${el3}
        </td>
        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
            ${el4}
        </td>
    `;
    tbody.appendChild(newRow);
}

const StudyGroups = [
    {
        studyName: '기습공격',
        description: '주니어 개발자가 모인 곳입니다',
        createDate: '2024-04-01',
        groupUserCount: 29,
    },
    {
        studyName: '이병호와 아이들',
        description: '프론트엔드 개발자 분들이 모였습니다',
        createDate: '2021-02-01',
        groupUserCount: 13,
    },
    {
        studyName: '우상욱과 아이들',
        description: '저 또한 그렇습니다',
        createDate: '2024-02-01',
        groupUserCount: 12,
    },
    {
        studyName: '윤규헌과 아이들',
        description: '너도 그렇습니까?',
        createDate: '2023-01-01',
        groupUserCount: 15,
    },
    {
        studyName: '노인 모임',
        description: '하하 반갑습니다',
        createDate: '2023-01-01',
        groupUserCount: 20,
    },
    {
        studyName: '기습공격',
        description: '주니어 개발자가 모인 곳입니다',
        createDate: '2024-04-01',
        groupUserCount: 29,
    },
    {
        studyName: '이병호와 아이들',
        description: '프론트엔드 개발자 분들이 모였습니다',
        createDate: '2021-02-01',
        groupUserCount: 13,
    },
    {
        studyName: '우상욱과 아이들',
        description: '저 또한 그렇습니다',
        createDate: '2024-02-01',
        groupUserCount: 12,
    },
    {
        studyName: '윤규헌과 아이들',
        description: '너도 그렇습니까?',
        createDate: '2023-01-01',
        groupUserCount: 15,
    },
    {
        studyName: '노인 모임',
        description: '하하 반갑습니다',
        createDate: '2023-01-01',
        groupUserCount: 20,
    },
    {
        studyName: '기습공격',
        description: '주니어 개발자가 모인 곳입니다',
        createDate: '2024-04-01',
        groupUserCount: 29,
    },
    {
        studyName: '이병호와 아이들',
        description: '프론트엔드 개발자 분들이 모였습니다',
        createDate: '2021-02-01',
        groupUserCount: 13,
    },
    {
        studyName: '우상욱과 아이들',
        description: '저 또한 그렇습니다',
        createDate: '2024-02-01',
        groupUserCount: 12,
    },
    {
        studyName: '윤규헌과 아이들',
        description: '너도 그렇습니까?',
        createDate: '2023-01-01',
        groupUserCount: 15,
    },
    {
        studyName: '노인 모임',
        description: '하하 반갑습니다',
        createDate: '2023-01-01',
        groupUserCount: 20,
    },
]


const itemsPerPage = 10; // 페이지당 아이템 수

// 데이터 표시 함수
function displayData(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataToDisplay = StudyGroups.slice(startIndex, endIndex);
    const tbody = document.getElementById("study-list-body");
    tbody.innerHTML = "";

    dataToDisplay.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 text-center">
                ${item.studyName}
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                ${item.description}
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                ${item.createDate}
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                ${item.groupUserCount}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// 페이지네이션 설정
$('#pagination').pagination({
    dataSource: StudyGroups,
    pageSize: itemsPerPage,
    className: 'paginationjs-small',
    callback: function(data, pagination) {
        displayData(pagination.pageNumber);
    },
});