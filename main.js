(function () {
    const template = document.createElement('template');
    template.innerHTML = `
        <styte>
        </style>
        <div id="root" style="width: 100%; height: 100%;"> 
        Hello Custom Widget
        </div>
    `;

    class Main extends HTMLElement {
        constructor() {
            super();
            
            // Shadow DOM을 오픈 모드로 생성
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
            this._root = this._shadowRoot.getElementById("root");
        }

        // 위젯의 크기 조정 시 호출되는 메소드
        onCustomWidgetResize(width, height) {
            this.render();
        }

        // 위젯이 파괴될 때 호출되는 메소드
        onCustomWidgetDestroy() {
            // 필요한 정리 작업을 여기에 추가
        }

        // 렌더링 메소드
        render() {
            // 크기 조정 시 clientWidth와 clientHeight를 업데이트
            this._root.textContent = `Hello Custom Widget client ${this.clientWidth}, clientHeight${this.clientHeight}`;
        }
    }

    // 커스텀 엘리먼트 정의
    customElements.define('com-sap-sac-exercise-hayoon2-main', Main);
})();