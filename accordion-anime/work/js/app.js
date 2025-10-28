// console.log("main.js 読み込まれた！"); コンソールに反映されているか確認用

// ★アコーディオンメニュー（クリックすると開閉するリスト）★

// アコーディオンメニューの各項目を全て集める 
const accordions = document.querySelectorAll('.list-item'); 

// それぞれのリスト項目にクイックイベントを設定する
    accordions.forEach(accordion => { 

// クリックされるたびに中身を開閉させる
        accordion.addEventListener('click', () => { 

// クリックした項目の中の「中身の部分」を取得する
            const content = accordion.querySelector('.list-content');

// クリックするごとに開く・閉じるを切り替える
            content.classList.toggle('active'); 

// 空いている時は高さを設定し、閉じている時は高さを０にする
            if(content.classList.contains('active')) { 
                // 開く時に中身が全て見えるように高さをセットする
                content.style.height = content.scrollHeight + 'px'; 
                // 閉じている時は高さを０にする
            } else { content.style.height = '0px'; 

            } 
        }); 
    });
