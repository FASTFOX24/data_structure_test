function equalityConfirm(str1, str2) {
    if (str1.length !== str2.length) false; // 첫 번째 동등 조건 : 문자열의 길이가 같아야한다

    const str1Length = str1.length;
    let i = 0;
    while (i < str1Length && str1[i] === str2[i]) { // 두 문자열의 같은 인덱스의 문자가 같다면 문자열이 끝날 때까지 반복
        i = i + 1;
    }
     return i === str1Length && true;
}
