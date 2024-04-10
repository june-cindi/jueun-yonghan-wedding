
  const copyButton = document.getElementById('p-location', 'location');
copyButton.addEventListener('click', (event) => {
    // getting the text content that we want to copy
   
    const content = document.getElementById('p-location', 'location').textContent;
    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
    
    alert(`복사 완료!`);
})


/* 사진 */
  
function toggleEnlarge(element) {
  // 이미지를 클릭하여 확대/축소하는 함수

  // 확대된 상태에서 이미지를 클릭하면 다시 그리드로 돌아가게끔 함
  if (element.classList.contains('enlarge')) {
      element.classList.remove('enlarge'); // 이미지의 확대 클래스를 제거
      return;
  }

  // 이미지를 클릭하여 확대하는 경우
  element.classList.add('enlarge'); // 이미지에 확대 클래스를 추가

  // 이미지를 화면 중앙에 위치시키기 위한 계산
  var elementRect = element.getBoundingClientRect(); // 이미지의 위치 정보
  var y = window.scrollY + elementRect.top - (window.innerHeight / 2) + (elementRect.height / 2); // 이미지가 화면 중앙에 위치하도록 하는 Y 좌표
  window.scrollTo({ top: y, behavior: 'smooth' }); // 스크롤 이동

  // Swipe 이벤트를 위한 설정
  var currentIndex = 0;
  var allPhotos = document.querySelectorAll('.item-photo');
  for (var i = 0; i < allPhotos.length; i++) {
      if (allPhotos[i] === element) {
          currentIndex = i;
          break;
      }
  }

  // Swipe 이벤트 핸들러 등록
  var mc = new Hammer.Manager(element);
  mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 }));

  mc.on('swipeleft', function() {
      // 다음 이미지로 이동하는 코드
      currentIndex = Math.min(currentIndex + 1, allPhotos.length - 1);
      allPhotos[currentIndex].click();
  });

  mc.on('swiperight', function() {
      // 이전 이미지로 이동하는 코드
      currentIndex = Math.max(currentIndex - 1, 0);
      allPhotos[currentIndex].click();
  });
}

// 모든 사진 요소에 클릭 이벤트 리스너 추가
var allPhotos = document.querySelectorAll('.item-photo');
allPhotos.forEach(function(photo) {
  photo.addEventListener('click', function() {
      toggleEnlarge(photo);
  });
});

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


