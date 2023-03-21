$(window).on('load', function () {
  const $elements = $.find('*[data-include-html]');
  if ($elements.length) {
    htmlInclude(pageInit);
  } else {
    pageInit();
  }
});

function pageInit() {
  const _sec = $('.slides>section');
  const _secH = _sec.length - 1;
  const _secV = _sec.last().find('>section').length ? _sec.last().find('>section').length - 1 : 0;
  function RevealInit() {
    Reveal.initialize({
      // slideNumber: true,
      hash: true,
      // history: false,
      keyboard: true,
      plugins: [RevealHighlight]
    });
    Reveal.on('slidetransitionend', (event) => {
      if (event.indexh === _secH && event.indexv === _secV) {
        if (!$('#confettiCanvas').length) $('body').append('<canvas id="confettiCanvas" class="confetti-canvas"></canvas>');
        const canvas = document.getElementById('confettiCanvas');
        Conffeti.sideInit(30, canvas);
      }
    });
  }
  RevealInit();
  Splitting();
  checkDev();
}

function htmlInclude(fn) {
  const $elements = $.find('*[data-include-html]');
  // const $fileName = location.pathname.split('/').pop();
  if ($elements.length) {
    // const $url = location.href;
    //if ($url.indexOf('http') >= 0) {
    if (location.host) {
      $.each($elements, function (i) {
        const $this = $(this);
        $this.empty();
        const $html = $this.data('include-html');
        const $htmlAry = $html.split('/');
        const $htmlFile = $htmlAry[$htmlAry.length - 1];
        const $docTitle = document.title;
        let $title = null;
        if ($docTitle.indexOf(' | ') > -1) {
          $title = $docTitle.split(' | ')[0];
        }
        $this.load($html, function (res, sta, xhr) {
          if (sta == 'success') {
            if (!$this.attr('class') && !$this.attr('id')) $this.children().unwrap();
            else $this.removeAttr('data-include-html');
          }
          if (i === $elements.length - 1) {
            if (!!fn) fn();
          }
        });
      });
    } else {
      if (!!fn) fn();
    }
  }
}

function notCopy() {
  // 글자선택 막기
  function notSelection() {
    setTimeout(function () {
      window.getSelection().removeAllRanges();
    }, 1);
  }
  // document.addEventListener('mousedown', notSelection);
  document.addEventListener('selectstart', notSelection);

  // 우클릭 막기
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('우클릭 금지');
  });

  document.addEventListener('keydown', function (event) {
    // Ctrl+C, Ctrl+V, Shift+Insert 막기
    if ((event.ctrlKey && event.keyCode === 67) || (event.ctrlKey && event.keyCode === 86) || (event.shiftKey && event.keyCode === 45)) {
      event.preventDefault();
    }

    //개발자도구 막기
    if (event.keyCode === 123) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) {
      event.preventDefault();
    }
  });
}
function checkDev() {
  // document.addEventListener('keydown', function (event) {
  //   console.log(event.keyCode);
  // });
  if (location.host && location.hostname !== '127.0.0.1') notCopy();
}

function loadScript(url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

const $confettiUrl = '../static/js/confetti.browser.5.10.0.min.js';
const Conffeti = {
  colors: ['#00dcdc', '#78ff44', '#fd7e64', '#2ad6a8', '#fdff6a', '#a864fd'],
  sideInit: function (repeat, target) {
    const $repeat = !repeat ? 10 : repeat;
    const $isTarget = target === undefined ? false : true;
    let canvas;
    const $particleCount = 6;
    const $angle = 60;
    const $spread = 60;
    const $scalar = 1.1;
    const $x = 0;
    const $y = $isTarget ? 0.5 : 0.7;

    const $init = function () {
      let idx = 0;
      const $leftOpt = {
        particleCount: $particleCount,
        angle: $angle,
        spread: $spread,
        origin: {
          x: $x,
          y: $y
        },
        colors: Conffeti.colors,
        scalar: $scalar
      };
      const $rightOpt = {
        particleCount: $particleCount,
        angle: 180 - $angle,
        spread: $spread,
        origin: {
          x: 1 - $x,
          y: $y
        },
        colors: Conffeti.colors,
        scalar: $scalar
      };
      if ($isTarget) {
        canvas = target;
        canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });
      } else {
        $leftOpt.zIndex = -1;
        $rightOpt.zIndex = -1;
      }

      (function frame() {
        if ($isTarget) {
          canvas.confetti($leftOpt);
          canvas.confetti($rightOpt);
        } else {
          confetti($leftOpt);
          confetti($rightOpt);
        }

        if (idx < $repeat) {
          idx += 1;
          setTimeout(function () {
            frame();
          }, 100);
        }
      })();
    };
    if (typeof confetti === 'undefined') {
      loadScript($confettiUrl, $init);
    } else {
      $init();
    }
  },
  dropInit: function (repeat, target) {
    const $repeat = !repeat ? 10 : repeat;
    const $isTarget = target === undefined ? false : true;
    let canvas;
    const duration = $repeat * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;
    const $init = function () {
      let idx = 0;
      if ($isTarget) {
        canvas = target;
        canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });
      }
      const $shapes = ['circle', 'square'];
      (function frame() {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);
        const $color = Conffeti.colors[idx % 6];
        const $colorAry = [];
        $colorAry.push($color);
        const $shape = $shapes[randomNumber(0, 1, 0)];
        const $shapeAry = [];
        $shapeAry.push($shape);

        const $opt = {
          particleCount: 1,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: Math.random() * skew - 0.2
          },
          colors: $colorAry,
          shapes: $shapeAry,
          gravity: randomNumber(0.4, 0.8),
          scalar: randomNumber(0.6, 1.2),
          drift: randomNumber(-0.4, 0.4)
        };
        if (!$isTarget) {
          $leftOpt.zIndex = -1;
          $rightOpt.zIndex = -1;
        }

        if ($isTarget) {
          canvas.confetti($opt);
        } else {
          confetti($opt);
        }
        /*
        if (timeLeft > 0) {
          idx += 1;
          requestAnimationFrame(frame);
          console.log(idx);
        }
        */
        const $time = 30;
        if (idx < $repeat * $time) {
          idx += 1;
          setTimeout(function () {
            frame();
            // console.log(idx);
          }, duration / ($repeat * $time));
        }
      })();
    };

    if (typeof confetti === 'undefined') {
      loadScript($confettiUrl, $init);
    } else {
      $init();
    }
  },
  randomClick: function (clickTarget, container) {
    const $init = function () {
      const $opt = {
        particleCount: randomNumber(30, 50),
        angle: randomNumber(65, 115),
        spread: randomNumber(50, 70),
        startVelocity: 55,
        origin: {
          y: 0.9
        },
        colors: Conffeti.colors
      };
      if (!container) $opt.zIndex = -1;
      if (container) {
        const canvas = container;
        canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });
        canvas.confetti($opt);
      } else {
        confetti($opt);
      }
    };
    clickTarget.addEventListener('click', function () {
      if (typeof confetti === 'undefined') {
        loadScript($confettiUrl, $init);
      } else {
        $init();
      }
    });
  }
};
