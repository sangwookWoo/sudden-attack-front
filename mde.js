// 초기값 설정
let preview = window.innerWidth > 1000 ? 'vertical' : 'tab';
let editor;
// TOAST UI Editor 초기화
window.addEventListener('DOMContentLoaded', () => {
    editor = new toastui.Editor({
        el: document.querySelector('#content'), // 에디터를 적용할 요소 
        minHeight: '450px',
        height: 'auto',                        // 에디터 영역의 높이 값 (OOOpx || auto)
        initialEditType: 'markdown',            // 최초로 보여줄 에디터 타입 (markdown || wysiwyg)
        placeholder: '내용을 입력해 주세요',
        previewStyle: preview,                  // 초기 preview 상태 설정
    });

    // resize 이벤트 핸들러 함수
    const handleResize = () => {
        preview = window.innerWidth > 1000 ? 'vertical' : 'tab';
        editor.changePreviewStyle(preview);
    };
    // resize 이벤트 구독
    window.addEventListener('resize', handleResize);
});

document.getElementById("submit-text").addEventListener("click", function (event) {
    // 각 입력 요소에서 값 가져오기
    const title = document.getElementById("title").value;
    const htmlContent = editor.getHTML();
    const mdContent = editor.getMarkdown();
    if (!title) {
        alert('제목을 입력해주세요')
        return
    }
    if (!mdContent) {
        alert('내용을 입력해주세요')
    }
    console.log(htmlContent)
    console.log(mdContent)
});
