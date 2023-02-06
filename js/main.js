// JavaScript Document

$("#error-alert").hide();
$("#copy-alert").hide();

var password = "shujuecn";  // 默认加盐值

String.prototype.replaceAll = function(s1, s2) {
    var reg = new RegExp(s1, "g");
    return this.replace(reg, s2);
};

function encrypt () {
    var msg = $("#text-decryped").val();
    var key = $("#text-key").val();

    if (msg.length < 1) {
        $("#error-alert").show();
        $("#copy-alert").hide();
        $("#error-alert").text(
            "医者需四诊合参，患者无言，纵医术如神，亦不可治。（请输入待加密的明文）"
        );
    } else {
        if (key.length < 1) {
            key = password;
        }

        $("#text-encryped").val(togod(msg, key));
        $("#error-alert").hide();
        $("#copy-alert").hide();
    }
}

function decrypt () {
    var msg = $("#text-decryped").val();
    var key = $("#text-key").val();

    if (msg.length < 1) {
        $("#error-alert").show();
        $("#copy-alert").hide();
        $("#error-alert").text(
            "此为无字神方，天机不可泄露！（请输入待解密的密文）"
        );
    } else {
        if (msg.substring(0, 3) != "处方：") {
            $("#error-alert").show();
            $("#copy-alert").hide();
            $("#error-alert").text(
                "小医不识得此方，还望另请高明...（请确定密文来源本网站并且密文以“处方：”开头）"
            );
        } else {
            if (key.length < 1) {
                key = password;
            }

            try {
                $("#error-alert").hide();
                var str = toman(msg, key);
            } catch (err) {
                $("#error-alert").show();
                $("#copy-alert").hide();
                $("#error-alert").text(
                    "小医不识得此方，还望另请高明...（处方有误，请确定密钥正确并未被篡改）"
                );
            } finally {
                $("#text-encryped").val(str);
            }
        }
    }
}

function copyUrl2 () {
    var Url2 = document.getElementById("text-encryped");
    Url2.select();
    document.execCommand("Copy");
    $("#copy-alert").show();
    $("#error-alert").hide();
}

function togod (msg, key) {
    var str = CryptoJS.AES.encrypt(msg, key).toString();

    str = str.substring(10);

    str = str.replaceAll("a", "当归、");
    str = str.replaceAll("A", "麦冬、");
    str = str.replaceAll("b", "黄芪、");
    str = str.replaceAll("B", "白术、");
    str = str.replaceAll("c", "荆芥、");
    str = str.replaceAll("C", "地黄、");
    str = str.replaceAll("d", "龙胆、");
    str = str.replaceAll("D", "紫菀、");
    str = str.replaceAll("e", "麻黄、");
    str = str.replaceAll("E", "桔梗、");
    str = str.replaceAll("f", "秦艽、");
    str = str.replaceAll("F", "景天、");
    str = str.replaceAll("g", "白芷、");
    str = str.replaceAll("G", "葛根、");
    str = str.replaceAll("h", "厚朴、");    //error
    str = str.replaceAll("H", "款冬、");
    str = str.replaceAll("i", "远志、");
    str = str.replaceAll("I", "党参、");
    str = str.replaceAll("j", "菖蒲、");
    str = str.replaceAll("J", "牛膝、");
    str = str.replaceAll("k", "茵陈、");
    str = str.replaceAll("K", "泽兰、");
    str = str.replaceAll("l", "枸杞、");
    str = str.replaceAll("L", "连翘、");
    str = str.replaceAll("m", "瓜蒌、");
    str = str.replaceAll("M", "天麻、");
    str = str.replaceAll("n", "薏苡、");
    str = str.replaceAll("N", "知母、");
    str = str.replaceAll("o", "川芎、");
    str = str.replaceAll("O", "玉竹、");
    str = str.replaceAll("p", "忍冬、");
    str = str.replaceAll("P", "荜茇、");
    str = str.replaceAll("q", "香薷、");
    str = str.replaceAll("Q", "浮萍、");
    str = str.replaceAll("r", "蒲黄、");
    str = str.replaceAll("R", "赭石、");
    str = str.replaceAll("s", "木香、");
    str = str.replaceAll("S", "黄连、");
    str = str.replaceAll("t", "茯苓、");
    str = str.replaceAll("T", "半夏、");
    str = str.replaceAll("u", "石斛、");
    str = str.replaceAll("U", "郁金、");
    str = str.replaceAll("v", "竹茹、");
    str = str.replaceAll("V", "寄生、");
    str = str.replaceAll("w", "重楼、");
    str = str.replaceAll("W", "芡实、");
    str = str.replaceAll("x", "紫苏、");
    str = str.replaceAll("X", "佩兰、");
    str = str.replaceAll("y", "豆蔻、");
    str = str.replaceAll("Y", "辛夷、");
    str = str.replaceAll("z", "百合、");
    str = str.replaceAll("Z", "薤白、");
    str = str.replaceAll("0", "白薇、");
    str = str.replaceAll("1", "藿香、");
    str = str.replaceAll("2", "赤芍、");
    str = str.replaceAll("3", "甘草、");
    str = str.replaceAll("4", "桂枝、");
    str = str.replaceAll("5", "泽泻、");
    str = str.replaceAll("6", "乌梅、");
    str = str.replaceAll("7", "续断、");
    str = str.replaceAll("8", "射干、");
    str = str.replaceAll("9", "芫花、");
    str = str.replaceAll("\\+", "羌活、");
    str = str.replaceAll("/", "柴胡、");
    str = str.replaceAll("=", "大枣、");

    return "处方：" + str.slice(0, -1) + "。上诸味，各一两，不煎不服。";
}

function toman (msg, key) {
    str = msg.substring(3);

    str = str.replaceAll("。上诸味，各一两，不煎不服。", "、");

    str = str.replaceAll("当归、", "a");
    str = str.replaceAll("麦冬、", "A");
    str = str.replaceAll("黄芪、", "b");
    str = str.replaceAll("白术、", "B");
    str = str.replaceAll("荆芥、", "c");
    str = str.replaceAll("地黄、", "C");
    str = str.replaceAll("龙胆、", "d");
    str = str.replaceAll("紫菀、", "D");
    str = str.replaceAll("麻黄、", "e");
    str = str.replaceAll("桔梗、", "E");
    str = str.replaceAll("秦艽、", "f");
    str = str.replaceAll("景天、", "F");
    str = str.replaceAll("白芷、", "g");
    str = str.replaceAll("葛根、", "G");
    str = str.replaceAll("厚朴、", "h");  //error
    str = str.replaceAll("款冬、", "H");
    str = str.replaceAll("远志、", "i");
    str = str.replaceAll("党参、", "I");
    str = str.replaceAll("菖蒲、", "j");
    str = str.replaceAll("牛膝、", "J");
    str = str.replaceAll("茵陈、", "k");
    str = str.replaceAll("泽兰、", "K");
    str = str.replaceAll("枸杞、", "l");
    str = str.replaceAll("连翘、", "L");
    str = str.replaceAll("瓜蒌、", "m");
    str = str.replaceAll("天麻、", "M");
    str = str.replaceAll("薏苡、", "n");
    str = str.replaceAll("知母、", "N");
    str = str.replaceAll("川芎、", "o");
    str = str.replaceAll("玉竹、", "O");
    str = str.replaceAll("忍冬、", "p");
    str = str.replaceAll("荜茇、", "P");
    str = str.replaceAll("香薷、", "q");
    str = str.replaceAll("浮萍、", "Q");
    str = str.replaceAll("蒲黄、", "r");
    str = str.replaceAll("赭石、", "R");
    str = str.replaceAll("木香、", "s");
    str = str.replaceAll("黄连、", "S");
    str = str.replaceAll("茯苓、", "t");
    str = str.replaceAll("半夏、", "T");
    str = str.replaceAll("石斛、", "u");
    str = str.replaceAll("郁金、", "U");
    str = str.replaceAll("竹茹、", "v");
    str = str.replaceAll("寄生、", "V");
    str = str.replaceAll("重楼、", "w");
    str = str.replaceAll("芡实、", "W");
    str = str.replaceAll("紫苏、", "x");    //error
    str = str.replaceAll("佩兰、", "X");
    str = str.replaceAll("豆蔻、", "y");
    str = str.replaceAll("辛夷、", "Y");
    str = str.replaceAll("百合、", "z");
    str = str.replaceAll("薤白、", "Z");
    str = str.replaceAll("白薇、", "0");
    str = str.replaceAll("藿香、", "1");
    str = str.replaceAll("赤芍、", "2");
    str = str.replaceAll("甘草、", "3");
    str = str.replaceAll("桂枝、", "4");
    str = str.replaceAll("泽泻、", "5");
    str = str.replaceAll("乌梅、", "6");
    str = str.replaceAll("续断、", "7");
    str = str.replaceAll("射干、", "8");
    str = str.replaceAll("芫花、", "9");
    str = str.replaceAll("羌活、", "+");
    str = str.replaceAll("柴胡、", "/");
    str = str.replaceAll("大枣、", "=");

    var st = CryptoJS.AES.decrypt("U2FsdGVkX1" + str, key).toString(CryptoJS.enc.Utf8);

    return st;
}
