# TypeMotion Lab（字动实验室）

TypeMotion Lab 是一个面向设计师和前端开发者的可变字体实验网页。它解决反复修改 CSS 才能比较字体轴参数的问题：在同一页面实时调整字重、字宽、倾斜和字号，并直接复制对应 CSS。

## 主要功能

- 点击样张直接编辑英文展示文字。
- 实时控制 Science Gothic 的 `wght`、`wdth`、`slnt` 三个可变轴。
- 调整样张字号。
- 随机生成一组字体参数。
- 通过“呼吸动画”循环展示三个轴的变化范围。
- 自动生成并复制当前 `font-variation-settings` CSS。
- 响应式桌面/移动布局。

Science Gothic 的字形覆盖以拉丁字母和西里尔字母为主；中文界面文字会使用系统备用字体，实验样张建议输入英文。

## 安装方法

```bash
git clone https://github.com/rongtaocheng32-ctrl/typemotion-lab.git
cd typemotion-lab
python3 -m http.server 8000
```

打开 <http://localhost:8000>。页面需要联网从 Google Fonts 加载 Science Gothic。

## 使用方法

1. 点击中央样张，输入自己的英文标题。
2. 拖动 WEIGHT、WIDTH、SLANT 和 SIZE 滑杆。
3. 点击“开始呼吸动画”查看字体轴自动变化。
4. 停止动画后点击“复制 CSS”，将当前参数用于网页。

## 输入输出示例

输入：

```text
Text: FUTURE SIGNAL
Weight: 760
Width: 128
Slant: -4
Size: 110
```

输出 CSS：

```css
font-family: "Science Gothic", sans-serif;
font-size: 110px;
font-variation-settings: "wght" 760, "wdth" 128, "slnt" -4;
```

## 开源与字体授权

本网页代码使用 MIT License。Science Gothic 由其项目作者以 SIL Open Font License 1.1 发布，且上游声明没有 Reserved Font Name。本项目只通过 Google Fonts 加载字体，不修改或重新分发字体文件。详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
