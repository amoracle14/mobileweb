export function showList<T>(items: T[]): void {
  console.log("===== รายการข้อมูล =====");
  items.forEach(item => console.log(item));
}
