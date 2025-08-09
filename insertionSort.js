function insertionSort () {
 const A = [3,1,5,2,8,6,4,9,7];
 const N = A.length; 
 let i = 1;
 while (i < N) { // 배열의 길이만큼 반복
    let current = A[i]; 
    let j = i - 1; 
    while (j >= 0 && A[j] > current) { // 앞선 값(A[j])이 존재하고 앞선 값이 비교 값 보다 크면 반복 => 인덱스 i 전까지의 요소들이 오름차순이 될 때까지 반복
        A[j + 1] = A[j]; // 앞선 값(A[j])이 비교 값(current) 보다 크기 때문에 뒤로 옮긴다
        j = j - 1; // 비교 값과 새로운 앞선 값을 비교하기 위해 j를 감소
    }
    // 현재 비교 값이 가장 앞에 왔거나 앞선 커졌기 떄문에 반복문 종료 => 인덱스 i까지의 원소들이 오름차순 정렬이 되었다
    A[j + 1] = current; // A[j] 보다는 크거나 같고 A[j + 2] 보다는 작은 current를 A[j + 1]에 배치
    i = i + 1; // 새로운 비교 값으로 비교를 시작하기 위해서 그 다음 i를 설정
 }
 return A;
}

export { insertionSort };
