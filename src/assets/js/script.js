(function() {
    let e = document.querySelector("body"),
        t = document.querySelectorAll(".color-picker"),
        r = document.getElementById("color-picker-container1"),
        a = document.getElementById("color-picker-container2"),
        l = r ? r.firstElementChild : null,
        n = a ? a.firstElementChild : null,
        o = document.querySelector(".js-angle"),
        c = document.querySelectorAll(".js-gradient-code"),
        i = document.querySelectorAll(".js-rgb-code"),
        d = document.querySelector(".js-background-copy"),
        s = document.querySelector(".js-copy"),
        g = document.querySelectorAll(".code-editor-tab"),
        u = document.querySelector(".rgb-code"),
        v = document.querySelector(".gradient-code"),
        y = document.querySelector(".svg-random"),
        f = document.querySelector(".angle-picker-circle"),
        p = document.querySelector(".angle-picker-rectangle"),
        h = () => "linear-gradient(" + o.value + "deg, " + l.value + ", " + n.value + ")",
        _ = e => {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, r, a) {
                return t + t + r + r + a + a
            });
            let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        },
        $ = () => {
            t.forEach(e => e.parentElement.style.backgroundColor = e.value)
        },
        q = () => {
            e.style.background = h()
        },
        E = () => {
            c.forEach(e => e.innerHTML = h() + ";"), d.style.background = h()
        },
        m = () => {
            let e, t, r = (e = _(l.value), t = _(n.value), ["rgb(" + e.r + ", " + e.g + ", " + e.b + ");\n", "rgb(" + t.r + ", " + t.g + ", " + t.b + ");\n"]);
            for (let a = 0; a < i.length; a++) i[a].innerHTML = r[a]
        },
        L = () => {
            $(), q(), E(), m()
        };
    t.forEach(e => e.addEventListener("input", L)), y.addEventListener("click", () => {
        var t, r, a;
        let c, i, d, s, g, u = (c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"], d = (i = e => {
            for (let t = 0; t < 6; t++) e += c[Math.round(14 * Math.random())];
            return e
        })("#"), s = i("#"), {
            newColor1: d,
            newColor2: s,
            gradient: "linear-gradient(" + (g = Math.round(360 * Math.random())) + "deg, " + d + ", " + s + ")",
            angle: g
        });
        e.style.background = u.gradient, t = u.newColor1, r = u.newColor2, l.value = t, n.value = r, $(), a = u.angle, o.value = a;
        let v = k(u.angle);
        j(v), E(), m()
    }), o.addEventListener("input", e => (e => {
        if (e.target.value.match(/^[0-9]*$/)) {
            o.value = e.target.value;
            let t = k(e.target.value);
            j(t), q(), E()
        } else o.value = NaN
    })(e));
    let b = e => {
            var t, r;
            let a = e.target.getBoundingClientRect(),
                l = window.pageXOffset,
                n = window.pageYOffset,
                o = e.pageX,
                c = e.pageY,
                i = o - (a.left + l + a.width / 2),
                d = a.top + n + a.height / 2 - c,
                s = (t = i, r = d, 0 !== t || 0 !== r && 1 !== Math.sign(r) ? 0 === r && 1 === Math.sign(t) ? 90 : 0 === t && -1 === Math.sign(r) ? 180 : 0 === r && -1 === Math.sign(t) && 270 : 0);
            return !1 !== s ? s : {
                x: i,
                y: d
            }
        },
        S = e => {
            var t, r, a, l;
            let n = b(e);
            if (isNaN(n)) {
                let o, c = (t = n.x, r = n.y, 1 === Math.sign(t) && 1 === Math.sign(r) ? {
                    x: t,
                    y: r,
                    quarter: 1
                } : 1 === Math.sign(t) && -1 === Math.sign(r) ? {
                    x: t,
                    y: r,
                    quarter: 2
                } : -1 === Math.sign(t) && -1 === Math.sign(r) ? {
                    x: t,
                    y: r,
                    quarter: 3
                } : -1 === Math.sign(t) && 1 === Math.sign(r) ? {
                    x: t,
                    y: r,
                    quarter: 4
                } : void console.log("error: parameters of the function are not valid coordinates"));
                return o = (a = c.y, Math.round(180 * Math.atan2(c.x, a) / Math.PI)), 1 === c.quarter || 2 === c.quarter ? o : 360 + o
            }
            return n
        },
        k = e => 90 < e < 270 ? e - 90 : -e - 90,
        j = e => {
            let t = document.createElement("style");
            t.type = "text/css", t.innerHTML = ".rotate-rect { transform:rotate(" + e + "deg);}", document.getElementsByTagName("head")[0].appendChild(t), p.classList.add("rotate-rect")
        },
        x = e => {
            var t;
            let r = S(e);
            t = r, o.value = t, q(), E();
            let a = k(r);
            j(a)
        };
    f.addEventListener("click", e => x(e));
    let C = e => {
        var t;
        g.forEach(e => e.classList.remove("is-active")), e.classList.add("is-active"), e.classList.contains("rgb") ? (v.classList.remove("js-code-active"), u.classList.add("js-code-active")) : (u.classList.remove("js-code-active"), v.classList.add("js-code-active"))
    };
    g.forEach(e => e.addEventListener("click", e => C(e.target)));
    let w = e => {
        let t = [];
        if (e)
            for (let r = e.childNodes, a = r.length; a--;) {
                let l = r[a],
                    n = l.nodeType;
                3 === n ? t.push(l) : 1 !== n && 9 !== n && 11 !== n || (t = t.concat(w(l)))
            }
        return t
    };
    s.addEventListener("click", () => (e => {
        let t = document.createElement("textarea");
        t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
    })((() => {
        let e = w(document.querySelector(".js-code-active")),
            t = [],
            r = [];
        for (let a = 0; a < e.length; a++) 0 !== e[a].wholeText.trim().length && (t.push(e[a].wholeText.replace(/\s+/g, " ")), r = [].concat(t).reverse());
        return r.join("").replace(/;/g, ";\n")
    })())), window.addEventListener("DOMContentLoaded", () => setTimeout(() => {
        document.querySelectorAll(".color-picker-container").forEach(e => e.classList.add("js-translate-done")), document.querySelectorAll(".js-angle-picker").forEach(e => e.classList.add("js-translate-done")), document.querySelectorAll(".info-container").forEach(e => e.classList.add("info-container--showed"))
    }, 700))
})();