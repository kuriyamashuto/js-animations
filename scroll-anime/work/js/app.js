// ★要素が画面内に表示されたかどうかを検出して、クラスの付け外し（ON/OFF）を行う★

// ページが準備され次第、監視開始！
document.addEventListener("DOMContentLoaded", function () {

// 画面内に要素が見えたかどうかを監視する仕組みを作る「インターセクション・オブザーバー：監視するためのオブジェクト」
    const observer = new IntersectionObserver((entries) => {
        // 監視対象それぞれについて見えているかどうかをチェックする
        entries.forEach((entry) => {
            // 要素が見えているかどうかを判定する
            if (entry.isIntersecting) {
                // 見えたらクラスをる追加してアニメーションなどを開始する（ON）
                entry.target.classList.add("displayed");
            } else {
                // 見えなくなったらクラスを削除して元に戻す（OFF）
                entry.target.classList.remove("displayed");
            }});
        },{
            threshold: 1,
        });

        // box要素を全部監視対象にする
        document.querySelectorAll(".box").forEach((box) => {
            observer.observe(box);
        });
    });
