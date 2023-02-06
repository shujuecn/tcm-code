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

    str = str.replaceAll("e", "麻黄二钱、");
    str = str.replaceAll("E", "桔梗五分、");
    str = str.replaceAll("t", "茯苓三钱、");
    str = str.replaceAll("T", "半夏一钱、");
    str = str.replaceAll("a", "当归三钱、");
    str = str.replaceAll("A", "麦冬两钱、");
    str = str.replaceAll("o", "川芎五分、");
    str = str.replaceAll("O", "菟丝子四钱、");
    str = str.replaceAll("i", "远志七分、");
    str = str.replaceAll("I", "吴茱萸一钱、");
    str = str.replaceAll("n", "薏苡仁三钱、");
    str = str.replaceAll("N", "威灵仙一钱、");
    str = str.replaceAll("s", "旋复花二钱、");
    str = str.replaceAll("S", "徐长卿二钱、");
    str = str.replaceAll("h", "泽兰一钱、");
    str = str.replaceAll("H", "款冬花一钱半、");
    str = str.replaceAll("r", "蒲黄三钱、");
    str = str.replaceAll("R", "代赭石三钱、");
    str = str.replaceAll("d", "龙胆八分、");
    str = str.replaceAll("D", "紫菀一钱、");
    str = str.replaceAll("l", "决明子一钱半、");
    str = str.replaceAll("L", "连翘一钱半、");
    str = str.replaceAll("c", "荆芥三分、");
    str = str.replaceAll("C", "天南星八分、");
    str = str.replaceAll("u", "绞股蓝一钱、");
    str = str.replaceAll("U", "郁金八分、");
    str = str.replaceAll("m", "夏枯草三钱、");
    str = str.replaceAll("M", "蔓荆子二钱、");
    str = str.replaceAll("w", "重楼一钱、");
    str = str.replaceAll("W", "六月雪一钱半、");
    str = str.replaceAll("f", "秦艽一钱、");
    str = str.replaceAll("F", "景天二钱、");
    str = str.replaceAll("g", "白芷六分、");
    str = str.replaceAll("G", "延胡索一钱半、");
    str = str.replaceAll("y", "豆蔻六分、");
    str = str.replaceAll("Y", "辛夷八分、");
    str = str.replaceAll("p", "忍冬三钱、");
    str = str.replaceAll("P", "荜茇六分、");
    str = str.replaceAll("b", "墨旱莲一钱半、");
    str = str.replaceAll("B", "凌霄花一钱半、");
    str = str.replaceAll("v", "竹茹一钱、");
    str = str.replaceAll("V", "桑寄生三钱、");
    str = str.replaceAll("k", "茵陈三钱、");
    str = str.replaceAll("K", "泽兰一钱、");
    str = str.replaceAll("j", "菖蒲五分、");
    str = str.replaceAll("J", "葶苈子八分、");
    str = str.replaceAll("x", "紫苏梗八分、");
    str = str.replaceAll("X", "佩兰一钱、");
    str = str.replaceAll("q", "香薷六分、");
    str = str.replaceAll("Q", "浮萍八分、");
    str = str.replaceAll("z", "半枝莲八分、");
    str = str.replaceAll("Z", "紫花地丁二钱、");
    str = str.replaceAll("0", "白薇一钱、");
    str = str.replaceAll("1", "藿香五分、");
    str = str.replaceAll("2", "赤芍一钱、");
    str = str.replaceAll("3", "甘草三分、");
    str = str.replaceAll("4", "桂枝五分、");
    str = str.replaceAll("5", "泽泻二钱、");
    str = str.replaceAll("6", "女贞子三钱、");
    str = str.replaceAll("7", "续断一钱半、");
    str = str.replaceAll("8", "射干六分、");
    str = str.replaceAll("9", "芫花六分、");
    str = str.replaceAll("\\+", "五味子六分、");
    str = str.replaceAll("/", "柴胡八分、");
    str = str.replaceAll("=", "淫羊藿一钱半、");

    return "处方：" + str.slice(0, -1) + "。不煎，不服。";
}

function toman (msg, key) {
    str = msg.substring(3);

    str = str.replaceAll("。不煎，不服。", "、")
    str = str.replaceAll("麻黄二钱、", "e");
    str = str.replaceAll("桔梗五分、", "E");
    str = str.replaceAll("茯苓三钱、", "t");
    str = str.replaceAll("半夏一钱、", "T");
    str = str.replaceAll("当归三钱、", "a");
    str = str.replaceAll("麦冬两钱、", "A");
    str = str.replaceAll("川芎五分、", "o");
    str = str.replaceAll("菟丝子四钱、", "O");
    str = str.replaceAll("远志七分、", "i");
    str = str.replaceAll("吴茱萸一钱、", "I");
    str = str.replaceAll("薏苡仁三钱、", "n");
    str = str.replaceAll("威灵仙一钱、", "N");
    str = str.replaceAll("旋复花二钱、", "s");
    str = str.replaceAll("徐长卿二钱、", "S");
    str = str.replaceAll("泽兰一钱、", "h");
    str = str.replaceAll("款冬花一钱半、", "H");
    str = str.replaceAll("蒲黄三钱、", "r");
    str = str.replaceAll("代赭石三钱、", "R");
    str = str.replaceAll("龙胆八分、", "d");
    str = str.replaceAll("紫菀一钱、", "D");
    str = str.replaceAll("决明子一钱半、", "l");
    str = str.replaceAll("连翘一钱半、", "L");
    str = str.replaceAll("荆芥三分、", "c");
    str = str.replaceAll("天南星八分、", "C");
    str = str.replaceAll("绞股蓝一钱、", "u");
    str = str.replaceAll("郁金八分、", "U");
    str = str.replaceAll("夏枯草三钱、", "m");
    str = str.replaceAll("蔓荆子二钱、", "M");
    str = str.replaceAll("重楼一钱、", "w");
    str = str.replaceAll("六月雪一钱半、", "W");
    str = str.replaceAll("秦艽一钱、", "f");
    str = str.replaceAll("景天二钱、", "F");
    str = str.replaceAll("白芷六分、", "g");
    str = str.replaceAll("延胡索一钱半、", "G");
    str = str.replaceAll("豆蔻六分、", "y");
    str = str.replaceAll("辛夷八分、", "Y");
    str = str.replaceAll("忍冬三钱、", "p");
    str = str.replaceAll("荜茇六分、", "P");
    str = str.replaceAll("墨旱莲一钱半、", "b");
    str = str.replaceAll("凌霄花一钱半、", "B");
    str = str.replaceAll("竹茹一钱、", "v");
    str = str.replaceAll("桑寄生三钱、", "V");
    str = str.replaceAll("茵陈三钱、", "k");
    str = str.replaceAll("泽兰一钱、", "K");
    str = str.replaceAll("菖蒲五分、", "j");
    str = str.replaceAll("葶苈子八分、", "J");
    str = str.replaceAll("紫苏梗八分、", "x");
    str = str.replaceAll("佩兰一钱、", "X");
    str = str.replaceAll("香薷六分、", "q");
    str = str.replaceAll("浮萍八分、", "Q");
    str = str.replaceAll("半枝莲八分、", "z");
    str = str.replaceAll("紫花地丁二钱、", "Z");
    str = str.replaceAll("白薇一钱、", "0");
    str = str.replaceAll("藿香五分、", "1");
    str = str.replaceAll("赤芍一钱、", "2");
    str = str.replaceAll("甘草三分、", "3");
    str = str.replaceAll("桂枝五分、", "4");
    str = str.replaceAll("泽泻二钱、", "5");
    str = str.replaceAll("女贞子三钱、", "6");
    str = str.replaceAll("续断一钱半、", "7");
    str = str.replaceAll("射干六分、", "8");
    str = str.replaceAll("芫花六分、", "9");
    str = str.replaceAll("五味子六分、", "+");
    str = str.replaceAll("柴胡八分、", "/");
    str = str.replaceAll("淫羊藿一钱半、", "=");

    var st = CryptoJS.AES.decrypt("U2FsdGVkX1" + str, key).toString(
        CryptoJS.enc.Utf8
    );

    return st;
}
