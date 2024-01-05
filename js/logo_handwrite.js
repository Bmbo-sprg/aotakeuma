//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 70,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
});

$(window).on('load',function(){
    $("#splash").delay(2500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
	$("#splash_logo").delay(2500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
});