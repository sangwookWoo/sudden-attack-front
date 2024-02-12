document.getElementById("create-study").addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작(폼 제출) 방지

    // 각 입력 요소에서 값 가져오기
    const studyName = document.getElementById("study-name").value;
    if (!studyName) {
        alert('스터디명을 입력해주세요')
        return
    }
    const studyDescription = document.getElementById("study-description").value;
    if (!studyDescription) {
        alert('스터디 간단소개를 입력해주세요')
        return
    }
    const studyCategory = document.getElementById("study-category").value;
    if (!studyCategory){
        alert('스터디 카테고리를 선택해주세요')
        return
    }
    const studyDescriptionDetail = document.getElementById("study-description-detail").value;

    // 파일 입력 요소에서 파일 가져오기
    const studyProfileIcon = document.getElementById("study-profile-icon").files[0];
    const studyProfileIconName = studyProfileIcon ? studyProfileIcon.name : "파일 미선택";

    
    // 콘솔에 출력
    console.log("스터디명:", studyName);
    console.log("간단소개:", studyDescription);
    console.log("카테고리:", studyCategory);
    console.log("프로필 아이콘:", studyProfileIconName);
    console.log("상세소개:", studyDescriptionDetail);
});