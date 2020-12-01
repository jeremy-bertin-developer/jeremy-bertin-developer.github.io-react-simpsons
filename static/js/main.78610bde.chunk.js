(this["webpackJsonpreact-profiles"] = this["webpackJsonpreact-profiles"] || []).push([
    [0],
    [
        ,
        function (e, t, a) {},
        function (e, t, a) {
            e.exports = a.p + "../media/title.05257f91.png";
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, a) {
            e.exports = a(16);
        },
        ,
        ,
        ,
        ,
        function (e, t, a) {},
        function (e, t, a) {
            "use strict";
            a.r(t);
            var r = a(0),
                n = a.n(r),
                c = a(4),
                s = a.n(c),
                i = (a(1), a(2)),
                m = a.n(i),
                l = function (e) {
                    return n.a.createElement(
                        "div",
                        null,
                        n.a.createElement("header", { className: "header" }, n.a.createElement("div", { className: "image-container text-center" }, n.a.createElement("img", { className: "title", src: m.a })))
                    );
                },
                o = function () {
                    return n.a.createElement(
                        "div",
                        { className: "sideBar col-3" },
                        n.a.createElement(
                            "div",
                            { className: "card m-2 border-0 shadow" },
                            n.a.createElement("img", { className: "card-img img-sidebar", src: "https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/the-simpsons_31/seriesDetail_s31.jpg?fit=inside%7C1920:1080" })
                        )
                    );
                },
                u = function (e) {
                    return n.a.createElement(
                        "div",
                        { className: "col-6" },
                        n.a.createElement(
                            "div",
                            { className: "card card-profiles border-0 m-2 shadow" },
                            n.a.createElement(
                                "div",
                                { className: "row" },
                                n.a.createElement("div", { className: "col-md-4" }, n.a.createElement("img", { src: e.src, className: "card-img", alt: "..." })),
                                n.a.createElement(
                                    "div",
                                    { className: "col-md-8" },
                                    n.a.createElement("div", { className: "card-body" }, n.a.createElement("h5", { className: "card-title card-name" }, e.name), n.a.createElement("p", { className: "card-text" }, e.birth))
                                )
                            )
                        )
                    );
                },
                h = {
                    homer: { src: "https://www.bento.de/images/00000000-0003-0004-0000-000000821052_w900_fpx50_fpy50.jpg", name: "Homer", birth: "May 12, 1955" },
                    marge: { src: "https://i.pinimg.com/474x/57/88/e0/5788e0be4de4ba68d9026bb350d52f36.jpg", name: "Marge", birth: "March 18, 1955" },
                    bart: { src: "https://img.discogs.com/tGTeV4wKMktK9JuW5L-TCJznDP0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-1010823-1335728016.png.jpg", name: "Bart", birth: "unknown" },
                    lisa: { src: "https://vignette.wikia.nocookie.net/thesimpsonsgermany/images/d/da/Lisa-simpson.jpg/revision/latest?cb=20100514111723&path-prefix=de", name: "Lisa", birth: "May 9, 1981" },
                },
                d = function () {
                    return n.a.createElement(
                        "div",
                        { className: "main col-9" },
                        n.a.createElement(
                            "div",
                            { className: "row" },
                            n.a.createElement(u, { src: h.homer.src, name: h.homer.name, birth: h.homer.birth }),
                            n.a.createElement(u, { src: h.marge.src, name: h.marge.name, birth: h.marge.birth }),
                            n.a.createElement(u, { src: h.bart.src, name: h.bart.name, birth: h.bart.birth }),
                            n.a.createElement(u, { src: h.lisa.src, name: h.lisa.name, birth: h.lisa.birth })
                        )
                    );
                },
                g = a(5),
                E = a(6),
                p = a(8),
                f = a(7),
                b = a(9),
                N = function (e) {
                    return n.a.createElement("button", { onClick: e.onClick, type: "button", className: "btn m-4" }, "Get a quote !");
                },
                v = function (e) {
                    return n.a.createElement("h4", { className: "quote" }, e.result);
                },
                w = function (e) {
                    return n.a.createElement("h5", { className: "author" }, e.character);
                },
                j = function (e) {
                    return n.a.createElement("img", { className: "image", src: e.src });
                },
                k = (function (e) {
                    function t(e) {
                        var a;
                        return (
                            Object(g.a)(this, t),
                            ((a = Object(p.a)(this, Object(f.a)(t).call(this, e))).fetchData = function () {
                                fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
                                    .then(function (e) {
                                        return e.json();
                                    })
                                    .then(function (e) {
                                        a.setState({ oneQuote: JSON.stringify(e[0].quote), character: e[0].character, image: e[0].image });
                                    }),
                                    console.log(a.state.image);
                            }),
                            (a.state = { oneQuote: "", character: "", image: "" }),
                            a
                        );
                    }
                    return (
                        Object(b.a)(t, e),
                        Object(E.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return n.a.createElement(
                                        "div",
                                        { className: "col-12 button-container" },
                                        n.a.createElement(N, { onClick: this.fetchData }),
                                        n.a.createElement(v, { result: this.state.oneQuote }),
                                        n.a.createElement(w, { character: this.state.character }),
                                        n.a.createElement(j, { src: this.state.image })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(n.a.Component),
                y = function (e) {
                    return n.a.createElement("div", { className: "container" }, n.a.createElement("div", { className: "row" }, n.a.createElement(o, null), n.a.createElement(d, null), n.a.createElement(k, null)));
                },
                x = function (e) {
                    return n.a.createElement(
                        "div",
                        null,
                        n.a.createElement("header", { className: "footer" }, n.a.createElement("div", { className: "image-container text-center" }, n.a.createElement("img", { className: "title", src: m.a })))
                    );
                },
                _ =
                    (a(15),
                    function () {
                        return n.a.createElement("div", null, n.a.createElement(l, null), n.a.createElement(y, null), n.a.createElement(x, null));
                    });
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            s.a.render(n.a.createElement(_, null), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function (e) {
                        e.unregister();
                    });
        },
    ],
    [[10, 1, 2]],
]);
//# sourceMappingURL=main.78610bde.chunk.js.map
