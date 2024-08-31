let arrNhapN = [];
document.getElementById("themSo").onclick = function(){
    let nhapN = document.getElementById("nhapN").value * 1;
    arrNhapN.push(nhapN);
    document.getElementById("ketQua").innerHTML = arrNhapN;
}
/**
 * Bài tập 1: tính tổng số dương trong mảng
 */
document.getElementById("tinhTong").onclick = function(){
    let tongDuong = 0;
    for(let index = 0; index < arrNhapN.length; index++){
        if(arrNhapN[index] >= 0){
            tongDuong += arrNhapN[index];
        }else{
            alert(`nhap sai`);
        }
    }

    document.getElementById("ketQua1").innerHTML = `Tổng số dương: ${tongDuong}`;
    
}
/**
 * Bài tập 2: Đếm số dương trong mảng
 */
document.getElementById("demSoDuong").onclick = function(){
    let demSoDuong = 0;
    for(let index = 0; index < arrNhapN.length; index++){
        if(arrNhapN[index] >= 0){
            demSoDuong++;
        }
    }
    document.getElementById("ketQua2").innerHTML = `Số dương: ${demSoDuong}`;
}
/**
 * Bài tập 3: Tìm số nhỏ nhất có trong mảng
 */
document.getElementById("timSoNhoNhat").onclick = function(){
    let min = arrNhapN[0];
    for(let index = 0; index < arrNhapN.length; index++){
        if(arrNhapN[index] < min){
            min = arrNhapN[index];
        }
    }
    document.getElementById("ketQua3").innerHTML = `Số nhỏ nhất: ${min}`;
}
/**
 * Bài tập 4: Tìm số dương nhỏ nhất trong mảng
 */
let arrSoDuong = [];
document.getElementById("timSoDuongNhoNhat").onclick = function(){
    let min = arrNhapN[0];
    for(let index = 0; index < arrNhapN.length; index++){
        if(arrNhapN[index] > 0){
            arrSoDuong.push(arrNhapN[index]);
            if(arrSoDuong[index] === 0 ){
                alert("Mảng rỗng") 
            }else if(arrSoDuong[index] < min) {
                min = arrSoDuong[index];
            }else{
                console.log("Không có số dương trong mảng");
            }
        }
    }
    document.getElementById("ketQua4").innerHTML = `Số nhỏ nhất: ${min}`;
}
/**
 * Bài tập 5:Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
 */
document.getElementById("timSoChanCuoiCung").onclick = function(){
    let soChanCuoiCung = arrNhapN[length -1];
    for(let index = 0; index < arrNhapN.length; index++){
        if(arrNhapN[index] % 2 == 0){
            soChanCuoiCung = arrNhapN[index];
        }else{
            soChanCuoiCung = -1;
        }
    }
    document.getElementById("ketQua5").innerHTML = `Số chẵn cuối cùng: ${soChanCuoiCung}`;
}
/**
 * Bài tập 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
 */

document.getElementById("doiCho").onclick = function(){
    let viTri1 = document.getElementById("nhapViTri1").value * 1;
    let viTri2 = document.getElementById("nhapViTri2").value * 1;
        if(viTri1 < arrNhapN.length && viTri2 < arrNhapN.length){
            let bienTam = arrNhapN[viTri1];
            arrNhapN[viTri1] = arrNhapN[viTri2];
            arrNhapN[viTri2] = bienTam;
        }else{
            document.getElementById("ketQua6").innerHTML = `Vị trí nhập vào không hợp lệ.`;
        }
    document.getElementById("ketQua6").innerHTML = `Mảng sau khi chuyển đổi: ${arrNhapN}`;
    
}
/**
 * Bài tập 7:Sắp xếp mảng theo thứ tự tăng dần.
 */
document.getElementById("sapXepTangDan").onclick = function(){
    arrNhapN.sort((a, b) => a - b)
    document.getElementById("ketQua7").innerHTML = `Mảng sau khi sắp xếp: ${arrNhapN}`;
}
/**
 * Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
 */
function kiemTraSoNguyenTo(nhapN){
        if (nhapN < 2)
           return false;
        for (let index= 0; index <= nhapN; index++){
           if (nhapN % index == 0){
            return false;
           }
        return true;
    }   
}
document.getElementById("timSoNguyenTo").onclick = function(){
    let nhapN = document.getElementById("nhapN").value * 1;
    arrNhapN.push(nhapN);
    for(let index = 0; index < arrNhapN.length;index++){
        if(kiemTraSoNguyenTo(arrNhapN[index])){
        document.getElementById("ketQua8").innerHTML = `Số nguyên tố đầu tiên là: ${arrNhapN[index]}`;
        break;
        }
        document.getElementById("ketQua8").innerHTML = `Số nguyên tố đầu tiên là: -1`;
    }
}

/**s
 * Bài tập 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 */
let arrNhapSoThuc = [];
document.getElementById("themSoThuc").onclick = function(){
    console.log("hi");
    let nhapSoThuc = document.getElementById("nhapSoThuc").value * 1;
    arrNhapSoThuc.push(nhapSoThuc);
    document.getElementById("showThemSoThuc").innerHTML = arrNhapSoThuc;
}
document.getElementById("demSoNguyen").onclick = function(){
    let count = 0;
    for(let index = 0; index < arrNhapSoThuc.length; index ++){
        if(Number.isInteger(arrNhapSoThuc[index])){
            count++;
        }
    }
    document.getElementById("ketQua9").innerHTML = `Số nguyên: ${count}`;
}
/**
 * Bài tập 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
 */
document.getElementById("soSanh").onclick = function(){
    let demSoDuong = 0;
    let demSoAm = 0;
    for(let index = 0; index < arrNhapN.length; index++){
        if(arrNhapN[index] > 0){
            demSoDuong++;
            // console.log(demSoDuong);
        }else{
            demSoAm++;
            // console.log(demSoAm);
        }
    }
    if(demSoDuong == demSoAm){
        document.getElementById("ketQua10").innerHTML = `Số dương = Số Âm`
    }else if(demSoDuong > demSoAm){
        document.getElementById("ketQua10").innerHTML = `Số dương > Số âm`
    }else{
        document.getElementById("ketQua10").innerHTML = `Số âm > Số dương`
    }
}