  // div 취득
  const location = document.getElementById("location");

  // button 클릭 이벤트
  document.getElementById("location").onclick = () => {
    // div의 내용(textContent)을 복사한다.
    window.navigator.clipboard.writeText(location.textContent).then(() => {
      // 복사가 완료되면 호출된다.
      alert("복사완료!");
    });
  };