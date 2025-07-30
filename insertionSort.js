function insertionSort () {
 const A = [3,1,5,2,8,6,4,9,7];
 const N = A.length; 
 let i = 1;
 while (i < N) { // 배열의 길이만큼 반복
    let current = A[i]; 
    let j = i - 1; 
    while (j >= 0 && A[j] > current) { // 비교값이 존재하고 이전 값이 현재 값보다 크다면 반복 => 오름차순이 될 때까지 반복
        A[j + 1] = A[j]; // 더 큰 값(A[j])을 뒤로 옮긴다
        j = j - 1; // current를 하나 더 이전 값과 비교하기 위해 j를 감소
    }
    A[j + 1] = current; // current 값이 앞 선 값보다 크기 때문에 while문이 종료되고 앞 선 비교값 바로 뒤에 current를 배치
    i = i + 1; // 오름차순으로 정렬되었기 때문에 다음 값을 비교하기 위해 i를 증가
 }
 return A;
}

console.log(insertionSort());