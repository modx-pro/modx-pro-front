"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: ["./src/views/index.pug", "./src/views/pages/*.pug"],
      dist: "./docs/",
      watch: ["./src/blocks/**/*.pug", "./src/views/**/*.pug"],
    },
    styles: {
      src: ["./src/styles/*.{scss,sass}"],
      dist: "./docs/styles/",
      watch: ["./src/blocks/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
    },
    scripts: {
      src: "./src/js/index.js",
      dist: "./docs/js/",
      watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
    },
    images: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      ],
      dist: "./docs/img/",
      watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}",
    },
    videos: {
      src: "./src/videos/*.mp4",
      dist: "./docs/videos/",
      watch: "./src/videos/*.mp4",
    },
    sprites: {
      src: "./src/img/svg/*.svg",
      dist: "./docs/img/sprites/",
      watch: "./src/img/svg/*.svg",
    },
    fonts: {
      src: "./src/fonts/**/*.{woff,woff2}",
      dist: "./docs/fonts/",
      watch: "./src/fonts/**/*.{woff,woff2}",
    },
    favicons: {
      src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      dist: "./docs/img/favicons/",
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./docs/",
    },
  };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "videos", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "videos", "sprites", "fonts", "favicons", "gzip"]));

export default development;