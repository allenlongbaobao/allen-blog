<template>
  <div class="markDiv" v-html="mhtml">
  </div>
</template>

<script>
export default {
  props: {
    mhtml: String
  }
}
</script>

<style scoped>
.markDiv>>>h1,h2,h3,h4,h5,h6{
  font-family: "PT Sans","SF UI Display", ".PingFang SC","PingFang SC", "Neue Haas Grotesk Text Pro", "Arial Nova", "Segoe UI", "Microsoft YaHei", "Microsoft JhengHei", "Helvetica Neue", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "Hiragino Sans GB", sans-serif;
  text-rendering:optimizelegibility;margin-bottom:1em;font-weight:bold; line-height: 1.8rem;

}
.markDiv>>>h1,h2{position:relative;padding-top:1rem;padding-bottom:0.2rem;margin-bottom:1rem;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAABCAYAAACsXeyTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVQIHWNIS0sr/v//PwMMDzY+ADqMahlW4J91AAAAAElFTkSuQmCC') bottom left repeat-x;}
.markDiv>>>h2{padding-top:0.8rem;padding-bottom:0.2rem;}
.markDiv>>>h1{ font-size: 2.6rem;}
.markDiv>>>h2{ font-size: 2.4rem;}
.markDiv>>>h3{ font-size: 2.2rem;}
.markDiv>>>h4{ font-size: 2.0rem;}
.markDiv>>>h5{ font-size: 1.8rem;}
.markDiv>>>h6{ font-size: 1.6rem;}

.markDiv>>>p{ font-size: 1.8rem;line-height: 2.6rem;}
.markDiv>>>li{ font-size: 1.8rem; }

.markDiv>>>table{border-collapse:collapse;border-spacing:0;
  margin-top: 0.8rem;
  margin-bottom: 1.4rem;
}
.markDiv>>>tr{  background-color: #fff;
  border-top: 1px solid #ccc;}
.markDiv>>>th,td{padding: 5px 14px;
  border: 1px solid #ddd;}

.markDiv>>>blockquote{font-style:italic;font-size:1.3em;line-height:1.5em;padding-left:1em; border-left:4px solid #D5D5D5;    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1.5rem; }

.markDiv>>>a{color:#1863a1}

.markDiv>>>pre,code,p code,li code{font-family:Menlo,Monaco,"Andale Mono","lucida console","Courier New",monospace}

.markDiv>>>pre{-webkit-border-radius:0.4em;-moz-border-radius:0.4em;-ms-border-radius:0.4em;-o-border-radius:0.4em;border-radius:0.4em;border:1px solid #e7dec3;line-height:1.45em;font-size:1.5rem;margin-bottom:2.1em;padding:.8em 1em;color:#586e75;overflow:auto; background-color:#fdf6e3;}

.markDiv>>>p code,li code{display:inline-block;white-space:no-wrap;background:#fff;font-size:1.5rem;line-height:1.5em;color:#555;border:1px solid #ddd;-webkit-border-radius:0.4em;-moz-border-radius:0.4em;-ms-border-radius:0.4em;-o-border-radius:0.4em;border-radius:0.4em;padding:0 .3em;margin:-1px 4px;}
.markDiv>>>p pre code,li pre code{font-size:1.5em !important;background:none;border:none}

.markDiv>>>img{max-width:100%;-webkit-border-radius:0.3em;-moz-border-radius:0.3em;-ms-border-radius:0.3em;-o-border-radius:0.3em;border-radius:0.3em;-webkit-box-shadow:rgba(0,0,0,0.15) 0 1px 4px;-moz-box-shadow:rgba(0,0,0,0.15) 0 1px 4px;box-shadow:rgba(0,0,0,0.15) 0 1px 4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:#fff 0.5em solid}


.markDiv >>> hr {
  height: 0;
  margin: 15px 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #ddd;
}


/*

Orginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>

*/

.markDiv>>>.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #fdf6e3;
  color: #657b83;
  -webkit-text-size-adjust: none;
}

.markDiv>>>.hljs-comment,
.diff .hljs-header,
.hljs-doctype,
.hljs-pi,
.lisp .hljs-string {
  color: #93a1a1;
}

/* Solarized Green */
.markDiv>>>.hljs-keyword,
.hljs-winutils,
.method,
.hljs-addition,
.css .hljs-tag,
.hljs-request,
.hljs-status,
.nginx .hljs-title {
  color: #859900;
}

/* Solarized Cyan */
.markDiv>>>.hljs-number,
.hljs-command,
.hljs-string,
.hljs-tag .hljs-value,
.hljs-rule .hljs-value,
.hljs-doctag,
.tex .hljs-formula,
.hljs-regexp,
.hljs-hexcolor,
.hljs-link_url {
  color: #2aa198;
}

/* Solarized Blue */
.markDiv>>>.hljs-title,
.hljs-localvars,
.hljs-chunk,
.hljs-decorator,
.hljs-built_in,
.hljs-identifier,
.vhdl .hljs-literal,
.hljs-id,
.css .hljs-function,
.hljs-name {
  color: #268bd2;
}

/* Solarized Yellow */
.markDiv>>>.hljs-attribute,
.hljs-variable,
.lisp .hljs-body,
.smalltalk .hljs-number,
.hljs-constant,
.hljs-class .hljs-title,
.hljs-parent,
.hljs-type,
.hljs-link_reference {
  color: #b58900;
}

/* Solarized Orange */
.markDiv>>>.hljs-preprocessor,
.hljs-preprocessor .hljs-keyword,
.hljs-pragma,
.hljs-shebang,
.hljs-symbol,
.hljs-symbol .hljs-string,
.diff .hljs-change,
.hljs-special,
.hljs-attr_selector,
.hljs-subst,
.hljs-cdata,
.css .hljs-pseudo,
.hljs-header {
  color: #cb4b16;
}

/* Solarized Red */
.markDiv>>>.hljs-deletion,
.hljs-important {
  color: #dc322f;
}

/* Solarized Violet */
.markDiv>>>.hljs-link_label {
  color: #6c71c4;
}

.markDiv>>>.tex .hljs-formula {
  background: #eee8d5;
}
</style>
