import React from 'react';

const LayoutStyled = () => (
  <style jsx global>
    {
      `
        html {
          color: #000;
          background: #FFF; }
        body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
          margin: 0;
          padding: 0; }
        table {
          border-collapse: collapse;
          border-spacing: 0; }
        fieldset, img {
          border: 0; }
        address, caption, cite, code, dfn, em, strong, th, var {
          font-style: normal;
          font-weight: normal; }
        ol, ul {
          list-style: none; }
        caption, th {
          text-align: left; }
        h1, h2, h3, h4, h5, h6 {
          font-size: 100%;
          font-weight: normal; }
        q:before, q:after {
          content: ''; }
        abbr, acronym {
          border: 0;
          font-variant: normal; }
        sup {
          vertical-align: text-top; }
        sub {
          vertical-align: text-bottom; }
        input, textarea, select {
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          *font-size: 100%; }
        legend {
          color: #000; }
        @font-face {
          font-family: 'Noto Sans JP';
          font-style: normal;
          font-weight: 300;
          src: url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Light.woff2) format("woff2"), url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Light.woff) format("woff"), url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Light.otf) format("opentype"); }
        body {
          color: #1a1a1a;
          font-family: 'News Cycle', 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 300;
          letter-spacing: 0.04rem; }
        input[type="submit"],
        input[type="button"] {
          border-radius: 0;
          -webkit-box-sizing: content-box;
          -webkit-appearance: button;
          -moz-appearance: button;
               appearance: button;
          -webkit-box-sizing: border-box;
                  box-sizing: border-box; }
          input[type="submit"]::-webkit-search-decoration,
          input[type="button"]::-webkit-search-decoration {
            display: none; }
          input[type="submit"]:focus,
          input[type="button"]:focus {
            outline-offset: -2px; }
        input, textarea {
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          border-radius: 0;
          -webkit-appearance: none; }
      `
    }
  </style>
);

export default LayoutStyled;
