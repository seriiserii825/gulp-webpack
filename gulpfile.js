"use strict";
const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require('gulp-sourcemaps');
const plumber = require("gulp-plumber");
const wait = require('gulp-wait'),
	notify = require("gulp-notify");
const browserSync = require("browser-sync");
const log = require("fancy-log");
let isDev = true;
let webpackConfig = {
	output: {
		filename: "webpack.js"
	},
	watch: false,
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							debug: true,
							corejs: 3,
							useBuiltIns: "usage"
						}]
					]
				}
			}
		}]
	},
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'eval-source-map' : 'none',
};
gulp.task('webpack', function () {
	return gulp.src('assets/js/src/main.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('assets/js/dist/'))
		.pipe(browserSync.stream());
});
gulp.task("scss", function () {
	return gulp.src('assets/scss/my.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(wait(500))
		.pipe(sass().on('error', notify.onError(function (error) {
			return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
		})))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('assets/css/'))
		.pipe(browserSync.stream());
});
gulp.task("watch", function () {
	browserSync.init({
		proxy: {
			target: 'http://wc-base-ecommerce.host1670806.hostland.pro/',
			ws: true
		},
		reloadDelay: 1500,
		notify: true
	});
	gulp.watch("**/*.html").on('change', browserSync.reload);
	gulp.watch("**/*.php").on('change', browserSync.reload);
	gulp.watch("**/*.css").on('change', browserSync.reload);
	gulp.watch("assets/js/dist/webpack.js").on('change', browserSync.reload);
	gulp.watch("assets/js/custom-jquery.js").on('change', browserSync.reload);
	gulp.watch('assets/scss/**/*.scss', gulp.series('scss'));
	gulp.watch('assets/js/src/**/*.js', gulp.series('webpack'));
});
gulp.task('default', gulp.series('webpack', 'scss', gulp.parallel('watch')));
