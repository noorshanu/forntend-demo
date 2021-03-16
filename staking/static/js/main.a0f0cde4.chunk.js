(this["webpackJsonpyfdai-staking"] = this["webpackJsonpyfdai-staking"] || []).push([
    [0], {
        23: function (e, t, a) {
            e.exports = a(35)
        },
        35: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                r = a(13),
                i = a.n(r),
                s = a(14),
                c = a(5),
                o = a.n(c),
                m = a(6),
                d = a(7),
                u = a(8),
                h = a(9),
                p = a(11),
                b = a(2),
                f = a(10);
            var E = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                if (isNaN(Number(e))) return "...";
                var a = new Intl.NumberFormat,
                    n = Number(e).toFixed(t).split("."),
                    l = Object(f.a)(n, 2),
                    r = l[0],
                    i = l[1];
                return r = a.format(r), 0 === t ? r : r + "." + i
            };
            a(18), a(21);
            var g = window,
                v = g.yfdai,
                w = g.yfdai_staking,
                N = g.BigNumber,
                k = function (e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(d.a)(this, a), (n = t.call(this, e)).handleDeposit = function (e) {
                            e.preventDefault();
                            var t = n.state.depositAmount;
                            t = new N(t).times(1e18).toFixed(0), w.depositYfDAI(t)
                        }, n.handleWithdraw = function (e) {
                            e.preventDefault();
                            var t = n.state.withdrawAmount;
                            t = new N(t).times(1e18).toFixed(0), w.withdraw(t)
                        }, n.handleClaimDivs = function (e) {
                            e.preventDefault(), w.claimDivs()
                        }, n.handleSetMaxDeposit = function (e) {
                            e.preventDefault(), n.setState({
                                depositAmount: new N(n.state.yfdai_balance).div(1e18).toFixed(18)
                            })
                        }, n.handleSetMaxWithdraw = function (e) {
                            e.preventDefault(), n.setState({
                                withdrawAmount: new N(n.state.depositedTokens).div(1e18).toFixed(18)
                            })
                        }, n.refreshBalance = Object(m.a)(o.a.mark((function e() {
                            var t, a, l, r, i, s, c, m, d, u, h, p, b, E, g, N, k;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, window.getCoinbase();
                                    case 2:
                                        return t = e.sent, n.setState({
                                            coinbase: t
                                        }), e.prev = 4, a = v.balanceOf(t), l = w.getPendingDivs(t), r = w.cliffTime(), i = w.totalEarnedTokens(t), s = w.stakingTime(t), c = w.depositedTokens(t), m = w.lastClaimedTime(t), e.next = 14, Promise.all([a, l, r, i, s, c, m]);
                                    case 14:
                                        d = e.sent, u = Object(f.a)(d, 7), h = u[0], p = u[1], b = u[2], E = u[3], g = u[4], N = u[5], k = u[6], n.setState({
                                            yfdai_balance: h,
                                            pendingDivs: p,
                                            cliffTime: b,
                                            totalEarnedTokens: E,
                                            stakingTime: g,
                                            depositedTokens: N,
                                            lastClaimedTime: k
                                        }), e.next = 29;
                                        break;
                                    case 26:
                                        e.prev = 26, e.t0 = e.catch(4), console.error(e.t0);
                                    case 29:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 26]
                            ])
                        }))), n.state = {
                            yfdai_balance: "",
                            pendingDivs: "",
                            totalEarnedTokens: "",
                            cliffTime: "",
                            stakingTime: "",
                            depositedTokens: "",
                            lastClaimedTime: "",
                            depositAmount: "",
                            withdrawAmount: "",
                            coinbase: ""
                        }, n
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function () {
                            this.refreshBalance(), window.yfdai_refreshBalInterval = setInterval(this.refreshBalance, 3e3)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            clearInterval(window.yfdai_refreshBalInterval)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.state,
                                a = t.yfdai_balance,
                                n = t.pendingDivs,
                                r = t.totalEarnedTokens,
                                i = t.depositedTokens,
                                s = t.cliffTime,
                                c = t.stakingTime,
                                o = t.coinbase;
                            a = new N(a).div(1e18).toString(10), a = E(a, 6), n = new N(n).div(1e18).toString(10), n = E(n, 6), r = new N(r).div(1e18).toString(10), r = E(r, 6), i = new N(i).div(1e18).toString(10), i = E(i, 6), s *= 1e3, c *= 1e3;
                            var m = !0;
                            return isNaN(s) || isNaN(c) || Date.now() - c <= s && (m = !1), l.a.createElement("div", {
                                className: "yfdai-staking",
                                style:{
                                    maxWidth:'838px',
                                }
                            }, l.a.createElement("div", {
                                className: "table-responsive"
                            }, l.a.createElement("table", {
                                className: "table table-borderless"
                            }, l.a.createElement("tbody", { className: "tbody" }, l.a.createElement("tr", null, l.a.createElement("th", { style: { fontFamily: "Montserrat",fontSize:"18px",fontWeight:"700",SpaceCharacter:"-50%",color:"#FFFFFF"} }, "My Balance"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#FFFFFF" } }, a), " ", l.a.createElement("small", { style: { fontFamily: "Montserrat", fontSize: "14px", fontWeight: "700", SpaceCharacter: "-50%", color: "#bbb" } }, "LaVida"))), l.a.createElement("tr", null, l.a.createElement("th", { style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#FFFFFF" } }, "Staked"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#FFFFFF" } }, i), " ", l.a.createElement("small", { style: { fontFamily: "Montserrat", fontSize: "14px", fontWeight: "700", SpaceCharacter: "-50%", color: "#bbb" } }, "LaVida"))), l.a.createElement("tr", null, l.a.createElement("th", { style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#FFFFFF" } }, "Total Earned"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#FFFFFF" } }, r), " ", l.a.createElement("small", { style: { fontFamily: "Montserrat", fontSize: "14px", fontWeight: "700", SpaceCharacter: "-50%", color: "#bbb" } }, "LaVida"))), l.a.createElement("tr", null, l.a.createElement("th", { style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#FFFFFF" } }, "Pending"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#FFFFFF" } }, n), " ", l.a.createElement("small", { style: { fontFamily: "Montserrat", fontSize: "14px", fontWeight: "700", SpaceCharacter: "-50%", color: "#bbb" } }, "LaVida"))), l.a.createElement("tr", null, l.a.createElement("td", {
                                style: {
                                    fontSize: "1rem"
                                },
                                colSpan: "2",
                                className: "text-center"
                            }, l.a.createElement("a", {
                                style: { fontFamily: "Montserrat", fontSize: "15px", fontWeight: "700", SpaceCharacter: "-50%", color: "#a0800a", padding:'10px 20px', background:'#fff', borderRadius:'10px' },
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "".concat(window.config.etherscan_baseURL, "/address/").concat(window.config.yfdai_staking_address,)
                            }, "View Transaction History on Etherscan"), " \xa0 ", l.a.createElement("i", {
                                style: {
                                    fontSize: ".8rem",
                                    color: "#ffff00"
                                },
                                className: "fas fa-external-link-alt"
                            })))))), l.a.createElement("div", {
                                className: "row yfdai-staking-form"
                            }, l.a.createElement("div", {
                                className: "col-md-4"
                            }, l.a.createElement("div", { className: "card" }, l.a.createElement("form", {
                                onSubmit: this.handleDeposit
                            }, l.a.createElement("div", {
                                className: "form-group"
                            }, l.a.createElement("label", {
                                htmlFor: "deposit-amount",
                                className: "d-block text-center",
                                style: { fontFamily: "Montserrat", fontSize: "15px", spaceCharacter: "300%" }
                            }, "STAKE"), l.a.createElement("div", {
                                className: "input-group"
                            }, l.a.createElement("input", {
                                value: this.state.depositAmount,
                                onChange: function (t) {
                                    return e.setState({
                                        depositAmount: t.target.value
                                    })
                                },
                                className: "form-control",
                                placeholder: "0",
                                type: "text"
                            }), l.a.createElement("div", {
                                className: "input-group-append"
                            }, l.a.createElement("button", {
                                className: "btn btn-primary hoverable bg-white",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: this.handleSetMaxDeposit
                            }, l.a.createElement("a", {
                                className: "text-transparent main-gradient-bg text-bold",
                                href: "#"
                            }, "MAX"))))), l.a.createElement("button", {
                                className: "btn btn-block btn-primary hoverable bg-white",
                                type: "submit"
                            }, l.a.createElement("a", {
                                onClick: this.handleDeposit,
                                className: "text-transparent main-gradient-bg text-bold",
                                href: "#"
                            }, "STAKE")), l.a.createElement("p", {
                                className: "mt-1 text-center",
                                style: { fontFamily: "Montserrat", fontSize: "15px", fontWeight: "700", SpaceCharacter: "-50%", color: "#5A606C" }
                            }, "1.99 % fee for staking.")))),


                            l.a.createElement("div", {
                                className: "col-md-4"
                            },l.a.createElement("div", { className: "card" }, l.a.createElement("form", {
                                onSubmit: this.handleWithdraw
                            }, l.a.createElement("div", {
                                className: "form-group"
                            }, l.a.createElement("label", {
                                htmlFor: "deposit-amount",
                                className: "d-block text-center",
                                style: { fontFamily: "Montserrat", fontSize: "15px", spaceCharacter: "300%" }
                            }, "UNSTAKE"), l.a.createElement("div", {
                                className: "input-group"
                            }, l.a.createElement("input", {
                                value: this.state.withdrawAmount,
                                onChange: function (t) {
                                    return e.setState({
                                        withdrawAmount: t.target.value
                                    })
                                },
                                className: "form-control",
                                placeholder: "0",
                                type: "text"
                            }), l.a.createElement("div", {
                                className: "input-group-append"
                            }, l.a.createElement("button", {
                                className: "btn btn-primary hoverable bg-white",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: this.handleSetMaxWithdraw
                            }, l.a.createElement("a", {
                                className: "text-transparent main-gradient-bg text-bold",
                                href: "#"
                            }, "MAX"))))), l.a.createElement("button", {
                                title: m ? "" : "You recently staked, please wait before unstaking.",
                                disabled: !m,
                                className: "btn btn-primary btn-block hoverable bg-white",
                                type: "submit"
                            }, l.a.createElement("a", {
                                onClick: function (t) {
                                    return m && e.handleWithdraw(t)
                                },
                                className: "text-transparent main-gradient-bg text-bold",
                                href: "#"
                            }, "UNSTAKE")), l.a.createElement("p", {
                                className: "mt-1 text-center",
                                style: { fontFamily: "Montserrat", fontSize: "18px", fontWeight: "700", SpaceCharacter: "-50%", color: "#5A606C" }
                            }, "1.99 % fee for unstaking.")
                            ))),

                            l.a.createElement("div", {
                                className: "col-md-4"
                            }, l.a.createElement("div", { className: "card" },l.a.createElement("form", {
                                onSubmit: this.handleClaimDivs
                            }, l.a.createElement("div", {
                                className: "form-group"
                            }, l.a.createElement("label", {
                                htmlFor: "deposit-amount",
                                className: "text-center d-block",
                                style: { fontFamily: "Montserrat", fontSize: "15px", spaceCharacter: "300%" }
                            }, "PENDING"), l.a.createElement("p", {
                                className: "form-control text-right",
                                style: {
                                    border: "none",
                                    textAlign: "right",
                                    color: "#fff",
                                    background: "transparent"
                                }
                            }, l.a.createElement("strong", {
                                style: {
                                    fontSize: "1.2rem"
                                }
                            }, n), " ", l.a.createElement("small", null, "LaVida"))), l.a.createElement("button", {
                                className: "btn btn-primary btn-block hoverable bg-white",
                                type: "submit"
                            }, l.a.createElement("a", {
                                onClick: this.handleClaimDivs,
                                className: "text-transparent main-gradient-bg text-bold",
                                href: "#"
                            }, "CLAIM")),
                             l.a.createElement("p", {
                                 className: "mt-1 text-center",
                                 style: { fontFamily: "Montserrat", fontSize: "15px", fontWeight: "700", SpaceCharacter: "-50%", color: "#5A606C" }
                             }, "0% fee for claim.")
                            )))),
                          
                           l.a.createElement("h4", {
                               style: {
                                   //maxWidth: "300px",
                                   margin: "30px",
                                 

                               }
                           }, "The LaVida Staking APR"),
                                l.a.createElement("div", {
                                className: "row"
                                ,style: {
                                    //maxWidth: "300px",
                                    margin: "0px",
                                    backgroundColor: "#234aa0",
                                    borderRadius:'10px'
                                }
                                },
                                //l.a.createElement("div", {
                                //    className: "card", style: {
                                //    padding: "10px"
                                //}},
                               
                               
                                l.a.createElement("div", { className: "col-sm-6 col-lg-4" },
                                l.a.createElement("div", {className: "c-callout c-callout-success"},
                               l.a.createElement("span", { className: "text-muted" }, "Yearly APR: "), l.a.createElement("strong", null, "100%")
                                )),
                                 l.a.createElement("div", { className: "col-sm-6 col-lg-4" },
                                l.a.createElement("div", {className: "c-callout c-callout-success"},
                               l.a.createElement("span", { className: "text-muted" }, "Per Month: "), l.a.createElement("strong", null, "8.33%")
                                )),
                                 l.a.createElement("div", { className: "col-sm-6 col-lg-4" },
                                l.a.createElement("div", { className: "c-callout c-callout-success" },
                               l.a.createElement("span", { className: "text-muted" }, "Per Day: "), l.a.createElement("strong", null, "0.27%")
                                ))
                            //l.a.createElement("li", null, "Per Month: ", l.a.createElement("strong", null, "6%")),
                            //l.a.createElement("li", null, "Per Day: ", l.a.createElement("strong", null, "0.2%"))
                            )
                            )
                            
                        }
                    }]), a
                }(l.a.Component),
                x = (window.BigNumber, function (e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(d.a)(this, a), (n = t.call(this, e)).handleConnection = Object(m.a)(o.a.mark((function e() {
                            var t;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, window.connectWallet();
                                    case 3:
                                        return t = e.sent, e.t0 = n, e.t1 = t, e.next = 8, window.web3.eth.getCoinbase();
                                    case 8:
                                        e.t2 = e.sent, e.t3 = {
                                            is_wallet_connected: e.t1,
                                            coinbase: e.t2
                                        }, e.t0.setState.call(e.t0, e.t3), e.next = 16;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t4 = e.catch(0), window.alertify.error(String(e.t4));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 13]
                            ])
                        }))), n.state = {
                            is_unlocked: !1
                        }, n
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function () { }
                    }, {
                        key: "render",
                        value: function () {
                            return this.state.is_wallet_connected ? l.a.createElement("div", {
                                className: "App",
                                style: {
                                    background:'#ffc1b4'
                                }
                            }, l.a.createElement("div", {
                                className: "container",
                                style: {
                                    paddingBottom:'80px',
                                    textAlign:'-webkit-center'
                                }
                            }, l.a.createElement("h2", {
                                className: "mt-4 mb-4 logoDiv",
                                style: {
                                    textAlign: "left"
                                }
                            }, l.a.createElement("img", {
                                style: {
                                    position: "relative",
                                    top: "-5px"
                                },
                                alt: " YfDFI Staking DApp",
                                src: "logo.png",
                               
                                height: "60"
                            }),
                            
                            
                            
                            
                          
                            l.a.createElement("div", {
                                className: "main-menu",
                            },l.a.createElement("ul", {
                                className: "menubar",
                            },l.a.createElement("li", {
                                className: "menu-item",
                            },l.a.createElement("a", {
                                href:'#Presale'
                            },"  ")),
                            l.a.createElement("li", {
                                className: "menu-item",
                            },l.a.createElement("a", {
                                href:'https://vidiachange.finance/'
                            }," RETURN TO HOME ")),
                            l.a.createElement("li", {
                                className: "menu-item",
                            },l.a.createElement("a", {
                                href:'#ROADMAP'
                            },"  ")),
                            l.a.createElement("li", {
                                className: "menu-item",
                            },l.a.createElement("a", {
                                href:'#ABOUT'
                            },"  ")),
                            l.a.createElement("li", {
                                className: "menu-item",
                            },l.a.createElement("a", {
                                href:'#SOCIAL'
                            },"  ")),
                            l.a.createElement("li", {
                                className: "menu-item",
                            },l.a.createElement("a", {
                                href:'#UNLOCK'
                            },"  ")) 
                            
                         
                            )
                            ), ""), l.a.createElement(b.a, {
                                exact: !0,
                                to: "/",
                                render: function (e) {
                                    return l.a.createElement(k, e)
                                }
                            }))) : l.a.createElement("div", {
                                className: "App text-center"
                            }, l.a.createElement("div", {
                                className: "container",
                                style: {
                                }
                            }, l.a.createElement("h2", {
                                className: "mt-4 mb-4 logoDiv",
                                style: {
                                    textAlign: "left"
                                }
                            }, l.a.createElement("img", {
                                style: {
                                    position: "relative",
                                    top: "-5px"
                                },
                                alt: " YfDFI Staking DApp",
                                src: "logo.png",
                                height: "60"
                            }),
                            l.a.createElement("div", {
                                className: "main-menu",
                            },l.a.createElement("ul", {
                                className: "menubar",
                            },
                            
                            // l.a.createElement("li", {
                            //     className: "menu-item",
                            // },l.a.createElement("a", {
                            //     href:'#Presale'
                            // },"PRESALE")),
                            // l.a.createElement("li", {
                            //     className: "menu-item",
                            // },l.a.createElement("a", {
                            //     href:'#TOKENOMICS'
                            // },"TOKENOMICS")),
                            // l.a.createElement("li", {
                            //     className: "menu-item",
                            // },l.a.createElement("a", {
                            //     href:'#ROADMAP'
                            // },"ROADMAP")),
                            // l.a.createElement("li", {
                            //     className: "menu-item",
                            // },l.a.createElement("a", {
                            //     href:'#ABOUT'
                            // },"ABOUT")),
                            // l.a.createElement("li", {
                            //     className: "menu-item",
                            // },l.a.createElement("a", {
                            //     href:'#SOCIAL'
                            // },"SOCIAL")),
                            
                            
                            l.a.createElement("li", {
                                className: "menu-item",
                            },
                            
                            l.a.createElement("a", {
                                href:'#UNLOCK'
                            },""))
                            
                            )
                            ), " "), l.a.createElement("div", {
                                className: "mt-5",
                                style: {
                                    textAlign: "left",
                                    width: "30%",
                                    float:'left',
                                    paddingLeft:'50px',
                                    paddingTop:'10px'
                                }
                            }, l.a.createElement("img", {
                                style: {
                                    position: "absolute",
                                    top: "20%",
                                    right: "15%",
                                    width:'30%',
                                    height:'auto'
                                },
                                alt: " YfDFI Staking DApp",
                                src: "banner-graphic.png"
                            }), l.a.createElement("span", {
                                className: "lendFarmTxt",
                                style: {
                                }
                            }, "LEND FARM"), l.a.createElement("span", {
                                className: "comingSoon"
                            }, "COMING SOON"), l.a.createElement("h2", {
                                className: "mb-4",
                                style: {
                                    color:'#FFFFFF'
                                }
                            }, "Staking DApp"), l.a.createElement("h3", {
                                className: ""
                            }, "Please connect your wallet for staking"), l.a.createElement("p",
                             null, "This site is on Beta Version, please use it at your own risk."),
                              l.a.createElement("button", {
                                onClick: this.handleConnection,
                                className: "btn btn-primary hoverable bg-white"
                            }, l.a.createElement("a", {
                                className: "text-transparent text-bold"
                            }, "CONNECT WALLET"))), l.a.createElement("div", {
                                className: "mt-5",
                                style: {
                                    textAlign: "left",
                                    width: "100%",
                                    float:'left'
                                }
                            })))
                        }
                    }]), a
                }(l.a.Component));
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(s.a, null, l.a.createElement(x, null))), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                e.unregister()
            })).catch((function (e) {
                console.error(e.message)
            }))
        }
    },
    [
        [23, 1, 2]
    ]
]);
//# sourceMappingURL=main.a0f0cde4.chunk.js.map