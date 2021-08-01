function hien() {
    let condition = true;
    do {
        let x=1;
        const question = prompt("Ai Là Người Dz Nhất Thế Giới ???");
        if (question == 'Quang Hải') {
            alert('Bạn Trả Lời Sai Rồi,Theo Thuật Toán Của Máy Thì Đây Nhé^^');
             document.getElementById("mahoa").style.display = '';
            condition = false;
        } else {
            alert('Sai Rồi Bạn Ơi Trả Lời Lại Đi =))))');
        }
    } while (condition)
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function handleAjax() {
    let x = 1;
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: x,
        success: function (data) {
            let jData = JSON.parse(data);
                let aLoad=jData.load;
            $('#content').html(jData.anh);
        },
        error: function (e) {
            console.log(e.message);
        }
    });
};
function loading(){
    let aLoading= [
        'Dữ Liệu Đã Được Giải MÃ 10%',
        'Dữ Liệu Đã Được Giải MÃ 20%',
        'Dữ Liệu Đã Được Giải MÃ 30%',
        'Dữ Liệu Đã Được Giải MÃ 40%',
        'Dữ Liệu Đã Được Giải MÃ 50%',
        'Dữ Liệu Đã Được Giải MÃ 60%',
        'Dữ Liệu Đã Được Giải MÃ 70%',
        'Dữ Liệu Đã Được Giải MÃ 80%',
        'Dữ Liệu Đã Được Giải MÃ 90%',
        'Dữ Liệu Đã Được Giải MÃ 100%',
    ];
    let num = 0

    function pri() {
        document.getElementById('loading').innerText = aLoading[num++];
        if (num === 10) {
            clearInterval(asd);
            handleAjax();
            return 0
        }
    }

    asd = setInterval(pri, 1000);
}