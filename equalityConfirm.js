function equalityConfirm(str1, str2) {
    if (str1.length !== str2.length) return false; // 첫 번째 동등 조건 : 문자열의 길이가 같아야한다

    const str1Length = str1.length;
    let i = 0;
    while (i < str1Length && str1[i] === str2[i]) { // 두 문자열의 같은 인덱스의 문자가 같다면 문자열이 끝날 때까지 반복
        i = i + 1;
    }
     return i === str1Length && true; // 반복문 중간에 문자가 달라서 끊긴다면 i와 str1의 길이와 다르기 때문에 false가 반환, i가 문자열의 길이와 같다면 모든 문자를 비교했을 때 두 문자열이 같다는 뜻이기 때문에 true를 반환
}

export { equalityConfirm };
