export default interface IPerson {
    name: string // 필수속성
    age: number // 필수속성
}
// 여러 줄로 구현할 때 이용할 수 있는 구분자 3가지 - 쉼표(,), 세미콜론(;), 단순줄바꿈
// :object 라는 타입은 object이기만 하면 아무 object나 올 수 있으므로 특정 속성을 가진 object로 제한하기 위해 Interface 존재