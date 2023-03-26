const ButtonsWrapper = styled.div`
  position: absolute;
  left: 75px;
  top: 500px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    top: 590px;
  }
  z-index: 1; // 새로운 속성 추가
  `;