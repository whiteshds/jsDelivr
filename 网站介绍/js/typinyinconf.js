window.onload = function() {
	var demo = new Typinyin();
	demo.attach('#typinyin_demo'); // 绑定元素
	demo.setOptions({
		sentences: [{
			ch: [{
				pause: 3000
			} /* 暂停3000毫秒 */ , "欢迎", "来到", "WHITESHDS♂小站"],
			py: ["", "huanying", "laidao", "ezhan", "♂"],
		}, {
			ch: ["ME", "Is一只", "不正经", "の单身汪"],
			py: ["bene", "shiyizhi", "zhengjing\b\b\b\b\b\b\b\b\bbuzhengjing", "dee"], // 用"\b" 来删除一个字符
		}, {
			ch: ["只", "喜欢", "萌&仙", "o(*￣▽￣*)ブ"],
			py: ["zhi", "xihuan", "moegirls", "o(*￣▽￣*)ブ"],
		}, {
			ch: ["让", "我们", "成为", "好朋友吧", "心", "\b", "❤"], // 用"\b" 来删除一个字符
			py: [
				["成为俺のRBQ吧#(滑稽)", {
					pause: 281
				}, {
					del: 14
				} /* 暂停281毫秒后删除十四个字符 */ , ""], "women", "chengwei", "haopengyou", "xin", "", "xin"
			],
		}, {
			ch: ["立即", "寻找Wo", "吧", "！"],
			py: ["liji", "xunzhaowoba", "ba", "！"]
		}], // 需要输入的句子
		startDelay: 1000, // 启动延时，以毫秒记
		typeSpeed: 100, // 打字速度，以毫秒记
		pause: 1000, // 每一句话打完后的停顿时间，以毫秒记
		backSpeed: 60, // 删除文字的速度，以毫秒记
		cursorChar: "|", // 光标字符
		loop: false, // 是否循环播放
	});
	demo.init(); // 初始化并开始打字
	var demo01 = new Typinyin();
	demo01.attach('#typinyin_demo01'); // 绑定元素
	demo01.setOptions({
		sentences: [{
			ch: [{
				pause: 4000
			}, "姓名:","网", "络", "杀", "手","\n","性别:","公","\n","WHITESHDS:","22"],
			py: ["","xingming:","W", "L", "SS", "♥","","xingbie:","gong","","eling:","22"]
		}], // 需要输入的句子
		startDelay: 1000, // 启动延时，以毫秒记
		typeSpeed: 100, // 打字速度，以毫秒记
		pause: 1000, // 每一句话打完后的停顿时间，以毫秒记
		backSpeed: 60, // 删除文字的速度，以毫秒记
		cursorChar: "|", // 光标字符
		loop: false, // 是否循环播放
	});
	demo01.init(); // 初始化并开始打字
	var demo02 = new Typinyin();
	demo02.attach('#typinyin_demo02'); // 绑定元素
	demo02.setOptions({
		sentences: [{
			ch: [{
				pause: 4000
			}, "现","想", "在家", "冬眠", "ing",],
			py: ["","xian","bene", "zaijia", "dongmian", "ing"]
		}], // 需要输入的句子
		startDelay: 1000, // 启动延时，以毫秒记
		typeSpeed: 100, // 打字速度，以毫秒记
		pause: 1000, // 每一句话打完后的停顿时间，以毫秒记
		backSpeed: 60, // 删除文字的速度，以毫秒记
		cursorChar: "|", // 光标字符
		loop: false, // 是否循环播放
	});
	demo02.init(); // 初始化并开始打字
	var demo03 = new Typinyin();
	demo03.attach('#typinyin_demo03'); // 绑定元素
	demo03.setOptions({
		sentences: [{
			ch: [{
				pause: 4000
			}, "爱好:", "萌&仙"],
			py: ["","aihao:", "nvzhuang\b\b\b\b\b\b\b\b\bmoegirls"]
		}], // 需要输入的句子
		startDelay: 1000, // 启动延时，以毫秒记
		typeSpeed: 100, // 打字速度，以毫秒记
		pause: 1000, // 每一句话打完后的停顿时间，以毫秒记
		backSpeed: 60, // 删除文字的速度，以毫秒记
		cursorChar: "|", // 光标字符
		loop: false, // 是否循环播放
	});
	demo03.init(); // 初始化并开始打字
}