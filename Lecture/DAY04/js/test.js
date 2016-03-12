/*! test.js © yamoo9.net, 2016 */
// 모듈 패턴
// 의존 라이브러리 dom-helper.js
(function(exports, $){
    'use strict';
    // [모듈] 전역과 구분되는 별도의 공간 형성

    // 의존 라이브러리가 잘 동작하는지 확인
    // console.dir( $ ); // $ === window.dom
    // <head>에서 호출했기 때문에
    // DOM이 준비가 완료되면 init() 함수 실행
    document.addEventListener('DOMContentLoaded', init);

    // 초기 수행되는 함수
    function init() {
        // 라이브러리를 사용해서 변수에 문서 객체대상을 참조
        var refEls = $.query('a');
        // 확인
        // console.log(refEls); // 노드리스트, HTML 콜렉션 (유사배열)
        // classList API를 사용해서 class 속성 설정
        // 복수 계층에 설정 (반복문 필요)
        $.each(refEls, loopAssignClass);
        // 반복 수행되는 함수
        function loopAssignClass(item, index) {
            item.classList.add('loop-assign-el-' + index);
            item.addEventListener('click', toggleLoopClass);
        }
        // 요소를 클릭하면 처리되는 콜백 함수
        function toggleLoopClass(evt) {
            var target = evt.target;
            // 브라우저의 기본 동작 차단
            evt.preventDefault();
            // 클릭한 대상의 class 속성 값을 출력
            console.log( target.getAttribute('class') );
        }
    }

})(window, window.dom);