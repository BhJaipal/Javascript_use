document.getElementById('run').onclick = function() {
    let mdCodes = document.querySelector("textarea#md").value;

    let output = document.querySelector("div#output");
    let mdCode = mdCodes.split("\n")

    let hash = (code: string, limit: number) => {
        let newCode = "";
        newCode = code.substring(limit, code.length);
        return newCode;
    }

    function link(code: string): string {
        let name = code.substring(code.indexOf("[")+1, code.indexOf("]"));
        let link = code.substring(code.indexOf("(")+1, code.indexOf(")"));
        return `<a href="${link}">${name}</a><br />`;
    }

    function pre(code: string): string {
        return `<pre style="color:blue">${code.substring(1, code.length)}</pre><br />`
    }

    function img(code: string): string {
        let name = "";
        let link = "";
        const openBracketIndex = code.indexOf("[");
        const closeBracketIndex = code.indexOf("]");
        const openParenIndex = code.indexOf("(");
        const closeParenIndex = code.indexOf(")");

        for (let i = openBracketIndex + 1; i < closeBracketIndex; i++) {
            name += code[i];
        }
        for (let j = openParenIndex + 1; j < closeParenIndex; j++) {
            link += code[j];
        }

        return `<img alt="${name}" width=auto height=40 src="${link}" /><br />`;
    }

    function MarkdownToHTML(md) {
        if (md[0] == "#") {
            if (md[1] == "#") {
                if (md[2] == "#") {
                    if (md[3] == "#") {
                        if (md[4] == "#") {
                            if (md[5] == "#") {
                                output.innerHTML += `<h6>${hash(md, 7)}</h6><br />`;
                            }
                            output.innerHTML += `<h5>${hash(md, 6)}</h5><br />`;
                        }
                        output.innerHTML += `<h4>${hash(md, 5)}</h4><br />`;
                    }
                    output.innerHTML += `<h3>${hash(md, 4)}</h3><br />`;
                }
                output.innerHTML += `<h2>${hash(md, 3)}</h2><br />`;
            }
            output.innerHTML += `<h1>${hash(md, 2)}</h1><br />`;
        } else if (md[0] == "[") {
            output.innerHTML += link(md);
        } else if (md[0] == "!") {
            output.innerHTML += img(md);
        } else if (md[0] == "`") {
            output.innerHTML += pre(md);
        } else {
            output.innerHTML += md;
        }
    }

    if (mdCodes.search("```" != -1)) {
        let cut = mdCodes.split("\n```");
        for (let i = 0; i < cut.length; i++) {
            if (i%2 != 0) {
                cut[i].split("\n").forEach((codePre) => {
                    output.innerHTML += `<pre>${codePre}</pre><br />`;
                });
            } else {
                cut[i].split["\n"].forEach((otherCode) => {
                    MarkdownToHTML(otherCode);
                });
            }
        }
    } else {
        mdCode.forEach((md) => {
            MarkdownToHTML(md);
        });
    }
};