// export로 내보내기
export function menu() {
  const headerToggle = document.getElementById("headerToggle");
  const headerNav = document.querySelector(".header_nav");

  // headerToggle 있을때 실행 되도록
  if (headerToggle) {
    // 웹표준 aria-expended 활용
    headerToggle.addEventListener("click", () => {
      headerNav.classList.toggle("show");
      headerToggle.getAttribute("aria-expended") === "true"
        ? headerToggle.setAttribute("aria-expended", "false")
        : headerToggle.setAttribute("aria-expended", "true");
    });
  }
}
