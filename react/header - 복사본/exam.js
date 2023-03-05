{/* <button onClick={() => {
        axios.get('http://13.124.28.152:8080/auth').then((결과) => {
          console.log(결과.data)
        })
          .catch(() => {
            console.log('실패함')
          })
      }}>
        버튼</button> */}

      {/* 회원가입 */}
      {/* <button onClick={() => {
        axios({
          url: 'http://13.124.28.152:8080/auth/signup',
          method: 'post',
          data: {
            user_id: "tjdgus",
            password: "@@1515asda12as13",
            user_name: "안성현",
            phone: "010-1234-5678",
            email: "ash5541@naver.com",
            birthday: "980716",
            gender: "남자"
          }
        })
          .then((결과) => {
            console.log(결과.data)
          })
          .catch((e) => {
            console.log(e.data)
          })
      }}>
        버튼</button> */}

      {/* 로그인 */}
      <button onClick={() => {
        axios({
          url: 'http://13.124.28.152:8080/auth/login',
          method: 'post',
          data: {
            user_id: "tjdgus",
            password: "@@1515asda12as13"
          }
        })
          .then((response) => {
            // 로그인이 성공하면, 응답에서 토큰을 추출하기.
            const token = response.data.token;

            // 추출한 토큰을 localStorage에 저장.
            localStorage.setItem('token', token);

            // 추출한 토큰을 axios 요청 객체의 헤더에 설정합니다.
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 이메일 보내기 API를 호출합니다.
            axios({
              url: 'http://13.124.28.152:8080/api/v1/email/send',
              method: 'post',
              data: {
               "receiver" : "tkfdkskarl56@naver.com"
              }
            })
              .then((response) => {
                console.log('이메일 보내기 성공');
              })
              .catch((error) => {
                console.error(error);
                console.log('이메일 보내기 오류');
              });
          })
          .catch((error) => {
            console.error(error);
            console.log('로그인 오류');
          });
      }}>버튼</button> 
      
      
      
      {/* <button onClick={() => {
        axios.get('http://13.124.28.152:8080/auth').then((결과) => {
          console.log(결과.data)
        })
          .catch(() => {
            console.log('실패함')
          })
      }}>
        버튼</button> */}

      {/* 회원가입 */}
      {/* <button onClick={() => {
        axios({
          url: 'http://13.124.28.152:8080/auth/signup',
          method: 'post',
          data: {
            user_id: "tjdgus",
            password: "@@1515asda12as13",
            user_name: "안성현",
            phone: "010-1234-5678",
            email: "ash5541@naver.com",
            birthday: "980716",
            gender: "남자"
          }
        })
          .then((결과) => {
            console.log(결과.data)
          })
          .catch((e) => {
            console.log(e.data)
          })
      }}>
        버튼</button> */}

      {/* 로그인
      <button onClick={() => {
        axios({
          url: 'http://13.124.28.152:8080/auth/login',
          method: 'post',
          data: {
            user_id: "tjdgus",
            password: "@@1515asda12as13"
          }
        })
          .then((response) => {
            // 로그인이 성공하면, 응답에서 토큰을 추출하기.
            const token = response.data.token;

            // 추출한 토큰을 localStorage에 저장.
            localStorage.setItem('token', token);

            // 추출한 토큰을 axios 요청 객체의 헤더에 설정합니다.
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 이메일 보내기 API를 호출합니다.
            axios({
              url: 'http://13.124.28.152:8080/api/v1/email/send',
              method: 'post',
              data: {
               "receiver" : "tkfdkskarl56@naver.com"
              }
            })
              .then((response) => {
                console.log('이메일 보내기 성공');
              })
              .catch((error) => {
                console.error(error);
                console.log('이메일 보내기 오류');
              });
          })
          .catch((error) => {
            console.error(error);
            console.log('로그인 오류');
          });
      }}>버튼</button>  */}
