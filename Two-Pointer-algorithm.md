**Kỹ thuật Two Pointer là gì?**

- Với Two Pointer chúng ta sẽ sử dụng hai con trỏ để di chuyển trên một danh sách/mảng/chuỗi để thực hiện các thao tác tìm kiếm trong một vòng lặp trên cấu trúc dữ liệu. Nó bao gồm hai biến thể:

- Opposite-Directional: mỗi con trỏ được đặt ở hai đầu của mảng và chúng di chuyển về phía nhau cho đến khi chúng gặp nhau hoặc thỏa mãn một số điều kiện.

- Equi-Directional: mỗi con trỏ đều bắt đầu ở đầu mảng, một con là con trỏ di chuyển chậm trong khi con còn lại là con trỏ nhanh hơn, di chuyển theo cùng một hướng cho đến khi thỏa một điều kiện nhất định nào đó.

**Tại sao sử dụng kỹ thuật Two Pointer?**

- Lý do quan trọng nhất đằng sau việc sử dụng kỹ thuật này là để giảm độ phức tạp về thời gian của một bài toán từ O(n3) hoặc O(n2) thành O(n) hoặc O(nlogn) tùy thuộc vào việc mảng có được sắp xếp hay không.