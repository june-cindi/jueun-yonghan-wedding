
  const copyButton = document.getElementById('p-location', 'location');
copyButton.addEventListener('click', (event) => {
    // getting the text content that we want to copy
   
    const content = document.getElementById('p-location', 'location').textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
    
    alert(`복사 완료!`);
})


/* 사진 */


// 주소 복사
function copyTextToClipboard(event) {
  // 이벤트 전파(stopPropagation)를 방지하여 부모 요소로의 이벤트 전파를 막습니다.
  event.stopPropagation();
  
  // 클릭한 버튼의 텍스트를 가져와서 클립보드에 복사합니다.
  var textToCopy = event.currentTarget.textContent.trim();
  navigator.clipboard.writeText(textToCopy)
      .then(function() {
          alert('텍스트가 클립보드에 복사되었습니다.');
      })
      .catch(function(err) {
          console.error('텍스트 복사 실패:', err);
      });
}

// 모달 열기 함수
 function openModal() {
  document.getElementById('myModal').style.display = 'block';
}
// 모달 열기 함수
function openModal2() {
  document.getElementById('myModal2').style.display = 'block';
}
// 모달 닫기 함수
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
// 모달 닫기 함수
function closeModal2() {
  document.getElementById('myModal2').style.display = 'none';
}
// 복사 함수
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(function () {
            alert('텍스트가 클립보드에 복사되었습니다.');
        })
        .catch(function (err) {
            console.error('텍스트 복사 실패:', err);
        });
}
// 모달 열기
function openModal3() {
  document.getElementById('myModal3').style.display = 'block';
}

// 모달 닫기
function closeModal3() {
  document.getElementById('myModal3').style.display = 'none';
}


