import Document from "document";
import Window from "window";

function option(opt, value) {
    return (
        `<button style="margin: 25px; background: #3f3f8f"
            width=150 height=50 value=${opt}
        >${value}</button>`
    );
}

function questionBox(question) {
    return (
        `<div>${question}</div>`
    );
}

function board(questions, optionList) {
    return (
        `<div>
            ${questionBox(questions)}
        </div>
        <div id="result"></div>
        <div>
            ${option("A", optionList[0])}
            ${option("B", optionList[1])}
            ${option("C", optionList[2])}
            ${option("D", optionList[3])}
        </div>
        <button value="quit" style="border-radius: 20px; background: #d11">quit</button>`
    );
}

function game() {
    Window.alert("To bhaiyo aur beheno Kaun Banega Karorpati mai apka Swagat hai\nMai Amitabh Bachan ...");
    let Questions = [
        "Who was the first president of India?",
        "What is the caMath.PItal of France?",
        "Which is the longest river on earth?",
        "Who was the first person to step on moon?",
        "Which company has taken the responsibility to animate Demon Slayer?",
        "What is the vahan of Lord Krishna?",
        "Which one of the following Programming Language does notuse 'this' in constructors?"
    ];
    let QuestionNo = [
        "Pahala","Dusra",
        "Tesra","Chautha",
        "Panchva","Chatta",
        "Satva"
    ];
    let Reward = [
        "2,000","5,000",
        "10,000","20,000",
        "40,000","80,000",
        "1,50,000"
        ];
    let Option = [
        ["A. Dr. Rajendra Prasad","B. Mr. Radha Krishna ","C. Dr. APJ Abdul Kalam","D. Mr. Jawahar Lal Nehru"],
        ["A. Ohio","B. London","C. Paris","D. New York"],
        ["A. Amazon","B. Nile","C. Brahmaputra","D. Sutlaj"],
        ["A. Laika","B. Kalpana Chawla","C. Buzz Aldrin","D. Neil Armstrong"],
        ["A. Ufotable","B. Mappa","C. Math.PIerrot","D. Madhouse"],
        ["A. Garuda","B. Mushaka","C. Peacock","D. Arawata"],
        ["A. Javascript","B. Java","C. C++","D. Python"]
    ];
    let correctOption = ["A","C","B","D","A","A","D"];
    let pass: string;
    let i=0;
    Document.getElementById("root").innerHTML = board(Questions, Option[i]);
    let result= Document.getElementById('result');
    for (i<7; i++;) {
        let currentIndex= i;
        Document.querySelectorAll("button").forEach((btn) => {
            btn.onclick= function () {
                if (btn.value == "quit") {
                    pass= "quit";
                }
                else if (btn.value== correctOption[currentIndex]) {
                    pass= "pass";
                }
                else {
                    pass= "wrong";
                }
            };
        });
        if (pass== "quit") {
            if (i== 0) {
                result.innerHTML= "Oh, it's first round and you have already quiting, You have not won any prize"
            }
            else {
                result.innerHTML= "Player wants to exit\nYou have won ₹"+ Reward[i-1] + " till now\nAnswer of present question is " + correctOption[i];
            }
            break;
        }
        else if (pass== "wrong") {
            if (i== 0) {
                result.innerHTML= "Oh, it's first round and you have already lost, You have not won any prize"
            }
            else {
                result.innerHTML= "Oh, you got it wrong\nGame terminates here, you have won ₹"+ Reward[i-1] + " till now";
            }
            break;
        }
        else {
            result.innerHTML= "You Option is correct\nYou won ₹"+ Reward[i];
        }
    }
}
game();