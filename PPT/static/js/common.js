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
