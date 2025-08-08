document.querySelectorAll('.social > div').forEach((e, i) => {
    if (i!=0) return;
    e.addEventListener('click', () => {
        const KAKAO_REST_API_KEY = 'e8af967f22a2e98d8aa94bcfc421bcfa';
        const KAKAO_REDIRECT_URI = 'http://13.125.248.146:8080/kakao/code';
        const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
        location.href = url;
    });
});